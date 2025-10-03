import { useEffect, useRef } from 'react'
import { ref, onValue, push } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'
import { notificationManager } from '../utils/notificationManager'

export const usePrivateChat = (recipientId) => {
  const { user } = useAuthStore()
  const { setMessages, clearMessages } = useChatStore()
  const lastMessageCountRef = useRef(0)

  useEffect(() => {
    console.log('🔍 usePrivateChat 參數檢查:')
    console.log('  - hasUser:', !!user)
    console.log('  - userUid:', user?.uid)
    console.log('  - recipientId:', recipientId)
    console.log('  - recipientIdType:', typeof recipientId)
    console.log('  - recipientIdValue:', String(recipientId))
    
    if (!user || !recipientId) {
      console.log('⚠️ usePrivateChat: 缺少必要參數')
      console.log('  - user exists:', !!user)
      console.log('  - recipientId:', recipientId)
      return
    }

    // 生成聊天室 ID (按 UID 字母順序排列)
    const chatIds = [user.uid, recipientId].sort()
    const chatId = `${chatIds[0]}_${chatIds[1]}`
    const fullPath = `privateChats/${chatId}/messages`
    
    console.log(`🚀 開始監聽私聊:`, {
      userUid: user.uid,
      recipientId,
      chatId,
      fullPath,
      sortedIds: chatIds
    })

    // 清空現有訊息
    clearMessages()
    console.log('🧹 已清空現有訊息，準備載入私聊訊息')

    // 設定私人訊息監聽器
    const messagesRef = ref(database, `privateChats/${chatId}/messages`)
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      try {
        const data = snapshot.val()
        console.log(`💌 私聊 ${chatId} 收到資料:`, data)
        
        if (data) {
          const messages = Object.entries(data).map(([id, message]) => ({
            id,
            text: message.text,
            user: message.user,
            from: message.from,
            avatar: message.avatar,
            time: message.time,
            timestamp: message.time || message.timestamp || Date.now()
          }))
          
          // 按時間排序
          messages.sort((a, b) => (a.time || a.timestamp || 0) - (b.time || b.timestamp || 0))
          
          // 檢查是否有新訊息 (用於通知)
          const currentMessageCount = messages.length
          const previousMessageCount = lastMessageCountRef.current
          
          // 如果有新訊息且不是首次載入
          if (currentMessageCount > previousMessageCount && previousMessageCount > 0) {
            const newMessages = messages.slice(previousMessageCount)
            
            // 檢查新訊息是否來自其他用戶
            newMessages.forEach(message => {
              if (message.from !== user.uid) {
                // 顯示通知
                const senderName = message.user || '匿名用戶'
                console.log(`🔔 收到來自 ${senderName} 的新私訊:`, message.text)
                
                // 顯示通知
                notificationManager.showMessageNotification(
                  senderName,
                  message.text,
                  'private'
                )
                
                // 播放提示音
                notificationManager.playNotificationSound()
                
                // 顯示內部通知
                if (window.showNotification) {
                  window.showNotification(`💬 ${senderName}: ${message.text}`, 'info', 6000)
                }
                
                // 手機震動
                notificationManager.vibrate([200, 100, 200])
                
                // 播放通知音效
                notificationManager.playNotificationSound()
              }
            })
          }
          
          lastMessageCountRef.current = currentMessageCount
          console.log(`✅ 私聊 ${chatId} 載入了 ${messages.length} 條訊息`)
          setMessages(messages)
        } else {
          console.log(`📭 私聊 ${chatId} 沒有訊息`)
          lastMessageCountRef.current = 0
          setMessages([])
        }
      } catch (error) {
        console.error(`❌ 私聊 ${chatId} 載入訊息時出錯:`, error)
        setMessages([])
      }
    }, (error) => {
      console.error(`❌ Firebase onValue 錯誤 (私聊 ${chatId}):`, error)
      if (error.code === 'PERMISSION_DENIED') {
        console.error('🚫 權限被拒絕 - 請檢查 Firebase 安全規則!')
      }
    })

    return () => {
      try {
        console.log(`🛑 停止監聽私聊 ${chatId} 的訊息`)
        unsubscribe()
      } catch (error) {
        console.error('Firebase unsubscribe error:', error)
      }
    }
  }, [user, recipientId, setMessages, clearMessages])

  // 發送私人訊息函數
  const sendPrivateMessage = async (messageData) => {
    if (!user || !recipientId) return

    const chatIds = [user.uid, recipientId].sort()
    const chatId = `${chatIds[0]}_${chatIds[1]}`
    const messagesRef = ref(database, `privateChats/${chatId}/messages`)
    
    const message = {
      text: messageData.text || messageData.message,
      user: user.nickname || user.displayName || '匿名用戶',
      from: user.uid,
      avatar: user.avatar || null,
      time: Date.now()
    }

    try {
      console.log(`📤 發送私人訊息到 ${chatId}:`, message)
      await push(messagesRef, message)
    } catch (error) {
      console.error(`❌ 發送私人訊息失敗 (${chatId}):`, error)
      throw error
    }
  }

  return { sendPrivateMessage }
}