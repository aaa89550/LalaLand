import { useEffect } from 'react'
import { 
  ref, 
  onValue, 
  push, 
  set, 
  onDisconnect,
  serverTimestamp,
  query,
  orderByChild,
  limitToLast
} from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'

export const useFirebaseChat = (roomId) => {
  const { user } = useAuthStore()
  const { setMessages, addMessage, clearMessages } = useChatStore()

  useEffect(() => {
    if (!user || !roomId) {
      console.log('⚠️ useFirebaseChat: 缺少必要參數', { user: !!user, roomId })
      return
    }

    console.log(`🚀 開始監聽房間 ${roomId} 的訊息...`)

    // 清空現有訊息
    clearMessages()

    // 設定訊息監聽器
    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      try {
        const data = snapshot.val()
        console.log(`📝 房間 ${roomId} 收到資料:`, data)
        
        if (data) {
          const messages = Object.entries(data).map(([id, message]) => {
            // 調試時間戳數據
            if (Math.random() < 0.1) { // 只顯示 10% 的訊息調試資訊
              console.log(`⏰ 訊息 ${id} 時間戳:`, {
                timestamp: message.timestamp,
                time: message.time,
                rawMessage: message
              })
            }
            
            return {
              id,
              ...message,
              // 保留原始的時間戳，不要覆蓋
              timestamp: message.timestamp || message.time || Date.now()
            }
          })
          // 按時間排序，使用多個時間欄位
          messages.sort((a, b) => {
            const timeA = a.timestamp || a.time || 0
            const timeB = b.timestamp || b.time || 0
            return timeA - timeB
          })
          console.log(`✅ 房間 ${roomId} 載入了 ${messages.length} 條訊息`)
          setMessages(messages)
        } else {
          console.log(`📭 房間 ${roomId} 沒有訊息`)
          setMessages([])
        }
      } catch (error) {
        console.error(`❌ 房間 ${roomId} 載入訊息時出錯:`, error)
        setMessages([])
      }
    }, (error) => {
      console.error(`❌ Firebase onValue 錯誤 (房間 ${roomId}):`, error)
      if (error.code === 'PERMISSION_DENIED') {
        console.error('🚫 權限被拒絕 - 請檢查 Firebase 安全規則!')
      }
    })

    return () => {
      try {
        console.log(`🛑 停止監聽房間 ${roomId} 的訊息`)
        unsubscribe()
      } catch (error) {
        console.error('Firebase unsubscribe error:', error)
      }
    }
  }, [user, roomId, setMessages, clearMessages])

  // 發送訊息函數
  const sendMessage = async (messageData) => {
    if (!user || !roomId) return

    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    
    const message = {
      ...messageData,
      sender: {
        uid: user.uid,
        nickname: user.nickname || '匿名用戶',
        avatar: user.avatar || null
      },
      timestamp: Date.now(), // 使用 Date.now() 而不是 serverTimestamp()
      room: roomId
    }

    try {
      await push(messagesRef, message)
    } catch (error) {
      console.error('發送訊息失敗:', error)
      throw error
    }
  }

  return { sendMessage }
}