import { useEffect } from 'react'
import { 
  ref, 
  onValue, 
  set, 
  onDisconnect,
  serverTimestamp
} from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'

export const useOnlineUsers = () => {
  const { user } = useAuthStore()
  const { setOnlineUsers } = useChatStore()

  useEffect(() => {
    if (!user || !user.uid) return

    console.log('🟢 設定用戶在線狀態:', user.nickname)
    
    // 設定當前用戶為在線狀態
    const userPresenceRef = ref(database, `users/${user.uid}`)
    const userOnlineRef = ref(database, `users/${user.uid}/online`)
    const lastSeenRef = ref(database, `users/${user.uid}/lastSeen`)
    
    // 設定用戶在線狀態
    const setOnlineStatus = async () => {
      try {
        await set(userOnlineRef, true)
        await set(lastSeenRef, serverTimestamp())
        
        // 設定離線時的狀態
        await onDisconnect(userOnlineRef).set(false)
        await onDisconnect(lastSeenRef).set(serverTimestamp())
        
        console.log('✅ 在線狀態設定完成')
      } catch (error) {
        console.error('❌ 設定在線狀態失敗:', error)
      }
    }
    
    setOnlineStatus()
    
    // 監聽所有在線用戶
    const allUsersRef = ref(database, 'users')
    const unsubscribe = onValue(allUsersRef, (snapshot) => {
      try {
        const usersData = snapshot.val()
        if (usersData) {
          const onlineUsers = {}
          
          Object.entries(usersData).forEach(([uid, userData]) => {
            // 只顯示在線用戶
            if (userData.online) {
              onlineUsers[uid] = {
                uid,
                nickname: userData.nickname || '匿名用戶',
                avatar: userData.avatar || null,
                isOnline: userData.online,
                lastSeen: userData.lastSeen
              }
            }
          })
          
          console.log(`👥 找到 ${Object.keys(onlineUsers).length} 個在線用戶`)
          setOnlineUsers(onlineUsers)
        } else {
          setOnlineUsers({})
        }
      } catch (error) {
        console.error('❌ 載入在線用戶失敗:', error)
        setOnlineUsers({})
      }
    }, (error) => {
      console.error('❌ Firebase onValue 錯誤 (在線用戶):', error)
    })

    return () => {
      console.log('🔄 清理在線用戶監聽器')
      unsubscribe()
      
      // 設定用戶為離線狀態
      set(userOnlineRef, false).catch(console.error)
      set(lastSeenRef, serverTimestamp()).catch(console.error)
    }
  }, [user, setOnlineUsers])
}