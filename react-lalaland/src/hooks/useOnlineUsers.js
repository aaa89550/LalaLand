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

    // 暫時禁用 presence 功能直到 Firebase 規則更新
    console.log('User logged in:', user.nickname)
    
    // 設定模擬在線用戶
    const mockOnlineUsers = {
      [user.uid]: {
        nickname: user.nickname || '匿名用戶',
        avatar: user.avatar || null,
        isOnline: true,
        lastSeen: Date.now()
      }
    }
    
    setOnlineUsers(mockOnlineUsers)

        // 暫時跳過 Firebase presence 操作
    return () => {
      console.log('Cleanup online users')
    }
  }, [user, setOnlineUsers])
}