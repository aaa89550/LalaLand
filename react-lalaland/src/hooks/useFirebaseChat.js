import { useEffect, useRef } from 'react'
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
import { notificationManager } from '../utils/notificationManager'

// 房間名稱映射
const getRoomDisplayName = (roomId) => {
  const roomNames = {
    'casual': '日常閒聊',
    'dating': '約會交友', 
    'hookup': '約砲專區',
    'confession': '匿名告白',
    'general': '一般討論',
    'random': '隨機聊天'
  }
  return roomNames[roomId] || `聊天室 ${roomId}`
}

export const useFirebaseChat = (roomId) => {
  const { user } = useAuthStore()
  const { setMessages, addMessage, clearMessages, currentRoom } = useChatStore()
  const lastMessageCountRef = useRef(0)

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
          
          // 檢查是否有新訊息 (用於通知)
          const currentMessageCount = messages.length
          const previousMessageCount = lastMessageCountRef.current
          
          // 如果有新訊息且不是首次載入
          if (currentMessageCount > previousMessageCount && previousMessageCount > 0) {
            const newMessages = messages.slice(previousMessageCount)
            
            // 檢查新訊息是否來自其他用戶
            newMessages.forEach(message => {
              const messageFrom = message.from || message.userId || message.uid
              if (messageFrom !== user.uid) {
                // 檢查用戶是否正在當前的群組房間
                const isCurrentlyInThisRoom = currentRoom === roomId
                
                const senderName = message.user || message.nickname || '匿名用戶'
                const roomName = getRoomDisplayName(roomId)
                
                console.log(`� 檢查群組通知條件:`, {
                  currentRoom,
                  roomId,
                  isCurrentlyInThisRoom,
                  messageFrom,
                  senderName
                })
                
                // 只有在用戶沒有正在當前房間時才顯示通知
                if (!isCurrentlyInThisRoom) {
                  console.log(`�🔔 收到來自 ${senderName} 的新群組訊息 (非當前房間 ${roomName}):`, message.text)
                  
                  // 顯示通知
                  notificationManager.showMessageNotification(
                    `${senderName} (${roomName})`,
                    message.text,
                    'group'
                  )
                  
                  // 播放提示音
                  notificationManager.playNotificationSound()
                  
                  // 顯示內部通知
                  if (window.showNotification) {
                    window.showNotification(`🏠 ${senderName} (${roomName}): ${message.text}`, 'info', 6000)
                  }
                  
                  // 播放通知音效 (群組訊息音效較輕)
                  if (Math.random() < 0.3) { // 只有 30% 機率播放音效，避免太頻繁
                    notificationManager.playNotificationSound()
                  }
                } else {
                  console.log(`🔇 不顯示通知 - 用戶正在 ${roomName} 房間`)
                }
              }
            })
          }
          
          lastMessageCountRef.current = currentMessageCount
          console.log(`✅ 房間 ${roomId} 載入了 ${messages.length} 條訊息`)
          setMessages(messages)
        } else {
          console.log(`📭 房間 ${roomId} 沒有訊息`)
          lastMessageCountRef.current = 0
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