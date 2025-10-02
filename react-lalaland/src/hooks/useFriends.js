import { useEffect, useState } from 'react'
import { ref, onValue, get } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'

export const useFriends = () => {
  const { user } = useAuthStore()
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.uid) {
      console.log('⚠️ useFriends: 沒有用戶 UID')
      setFriends([])
      setLoading(false)
      return
    }

    console.log(`🚀 開始載入用戶 ${user.uid} 的好友列表...`)
    console.log(`🔍 好友資料路徑: users/${user.uid}/friends`)
    
    const friendsRef = ref(database, `users/${user.uid}/friends`)
    
    const unsubscribe = onValue(friendsRef, async (snapshot) => {
      try {
        setLoading(true)
        const friendsData = snapshot.val() || {}
        console.log(`👥 用戶 ${user.uid} 的好友資料:`, friendsData)
        console.log(`👥 Snapshot exists: ${snapshot.exists()}, friendsData keys:`, Object.keys(friendsData))
        
        if (Object.keys(friendsData).length > 0) {
          const friendIds = Object.keys(friendsData)
          console.log(`📋 找到 ${friendIds.length} 個好友 ID:`, friendIds)
          const friendsList = []
          
          for (const friendId of friendIds) {
            const friendSnapshot = await get(ref(database, `users/${friendId}`))
            if (friendSnapshot.exists()) {
              const friendData = friendSnapshot.val()
              console.log(`✅ 載入好友 ${friendId} 的資料:`, friendData)
              friendsList.push({
                uid: friendId,
                nickname: friendData.nickname || '匿名用戶',
                avatar: friendData.avatar,
                online: friendData.online || false,
                lastActive: friendData.lastActive
              })
            } else {
              console.log(`⚠️ 好友 ${friendId} 的資料不存在`)
            }
          }
          
          console.log(`✅ 成功載入 ${friendsList.length} 個好友`)
          setFriends(friendsList)
        } else {
          console.log(`📭 用戶 ${user.uid} 沒有好友欄位`)
          setFriends([])
        }
      } catch (error) {
        console.error(`❌ 載入好友列表失敗:`, error)
        console.error('🔍 錯誤詳細資訊:', {
          code: error.code,
          message: error.message,
          stack: error.stack
        })
        if (error.code === 'PERMISSION_DENIED') {
          console.error('🚫 權限被拒絕 - 請檢查 Firebase 安全規則!')
        }
        setFriends([])
      } finally {
        setLoading(false)
      }
    }, (error) => {
      console.error(`❌ Firebase onValue 錯誤 (好友列表):`, error)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user?.uid])

  return { friends, loading }
}