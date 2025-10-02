import { useEffect } from 'react'
import { 
  ref, 
  onValue, 
  set, 
  get,
  onDisconnect,
  serverTimestamp
} from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'
import { cleanupStaleUsers, startPeriodicCleanup } from '../utils/cleanupUsers'

export const useOnlineUsers = () => {
  const { user } = useAuthStore()
  const { setOnlineUsers } = useChatStore()

  useEffect(() => {
    const initializeOnlineUsers = async () => {
      if (!user) {
        console.log('❌ 沒有登入用戶，無法設定在線狀態')
        return
      }

      console.log('👤 開始為用戶設定在線狀態:', user.uid, user.email || '匿名用戶')

      // 設定用戶在線狀態和基本資料
      const setOnlineStatus = async () => {
        try {
          const userRef = ref(database, `users/${user.uid}`)
          const userOnlineRef = ref(database, `users/${user.uid}/isOnline`)
          const lastSeenRef = ref(database, `users/${user.uid}/lastSeen`)
          
          // 先讀取現有用戶資料
          console.log('📖 讀取用戶現有資料...')
          const userSnapshot = await get(userRef)
          const existingData = userSnapshot.val() || {}
          
          console.log('📝 現有用戶資料:', existingData)
          console.log('📝 當前登入用戶資料:', {
            uid: user.uid,
            email: user.email,
            nickname: user.nickname || user.displayName,
            isAnonymous: user.isAnonymous
          })
          
          // 設定完整的用戶資料包括在線狀態
          await set(userRef, {
            ...existingData, // 保留現有資料
            isOnline: true,
            lastSeen: serverTimestamp(),
            email: user.email || existingData.email || '',
            nickname: user.nickname || user.displayName || existingData.nickname || '匿名用戶',
            uid: user.uid,
            isAnonymous: user.isAnonymous || false
          })
          
          console.log('✅ 用戶在線狀態已設定')
          
          // 設定離線時的狀態 - 匿名用戶離線時完全刪除資料
          if (user.isAnonymous) {
            console.log('🔒 匿名用戶 - 離線時將自動刪除所有資料')
            await onDisconnect(userRef).remove()
          } else {
            console.log('👤 註冊用戶 - 離線時保留資料但設為離線')
            await onDisconnect(userOnlineRef).set(false)
            await onDisconnect(lastSeenRef).set(serverTimestamp())
          }
          
        } catch (error) {
          console.error('❌ 設定在線狀態失敗:', error)
        }
      }
      
      // 設定在線狀態
      await setOnlineStatus()
      
      // 清理過期的在線用戶
      await cleanupStaleUsers()
      
      // 啟動定期清理服務
      const stopPeriodicCleanup = startPeriodicCleanup()
      
      // 監聽所有在線用戶
      const allUsersRef = ref(database, 'users')
      const unsubscribe = onValue(allUsersRef, (snapshot) => {
        try {
          const usersData = snapshot.val()
          if (usersData) {
            const onlineUsers = {}
            
            const now = Date.now()
            const ACTIVE_TIME = 2 * 60 * 1000 // 2分鐘內活動才視為在線
            
            Object.entries(usersData).forEach(([uid, userData]) => {
              if (userData && userData.isOnline) {
                // 檢查用戶是否真的在線（最近有活動）
                const isRecentlyActive = userData.lastSeen && (now - userData.lastSeen < ACTIVE_TIME)
                
                if (isRecentlyActive) {
                  console.log(`👥 發現活躍在線用戶: ${uid} - ${userData.nickname || userData.email || '匿名'}`)
                  onlineUsers[uid] = {
                    uid,
                    nickname: userData.nickname || userData.email || '匿名用戶',
                    email: userData.email || '',
                    isOnline: userData.isOnline,
                    lastSeen: userData.lastSeen,
                    isAnonymous: userData.isAnonymous || false
                  }
                } else {
                  console.log(`⏰ 用戶 ${uid} 標示在線但非活躍狀態，跳過顯示`)
                }
              }
            })
            
            console.log('📊 所有在線用戶:', Object.keys(onlineUsers))
            setOnlineUsers(onlineUsers)
          } else {
            console.log('📭 沒有找到任何用戶資料')
            setOnlineUsers({})
          }
        } catch (error) {
          console.error('❌ 處理在線用戶資料失敗:', error)
        }
      })

      // 清理函數
      return () => {
        console.log('🧹 清理在線用戶監聽器和定期清理服務')
        unsubscribe()
        stopPeriodicCleanup()
      }
    }

    let cleanup = null
    
    initializeOnlineUsers().then((cleanupFn) => {
      cleanup = cleanupFn
    })
    
    // 返回清理函數
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [user?.uid, setOnlineUsers])
}