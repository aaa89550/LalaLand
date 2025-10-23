import { useEffect, useRef } from 'react'
import { ref, onValue, push } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'
import { notificationManager } from '../utils/notificationManager'
import { useUnreadMessages } from './useUnreadMessages'

export const usePrivateChat = (recipientId) => {
  const { user } = useAuthStore()
  const { setMessages, clearMessages, currentRoom, currentPrivateChat } = useChatStore()
  const { incrementUnread } = useUnreadMessages()
  const lastMessageCountRef = useRef(0)
  const hasLoadedOnceRef = useRef(false)

  // 判斷是否為桌面裝置
  const isDesktop = () => {
    if (typeof window === 'undefined') return true
    const ua = window.navigator.userAgent
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua))
  }

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
    
    // 重置狀態
    lastMessageCountRef.current = 0
    hasLoadedOnceRef.current = false

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
          const isFirstLoad = !hasLoadedOnceRef.current
          
          console.log(`📊 訊息計數檢查:`, {
            currentMessageCount,
            previousMessageCount,
            isFirstLoad,
            hasLoadedOnce: hasLoadedOnceRef.current,
            shouldCheckForNewMessages: currentMessageCount > previousMessageCount && hasLoadedOnceRef.current
          })
          
          // 只有在不是首次載入且有新訊息時才觸發通知
          if (currentMessageCount > previousMessageCount && hasLoadedOnceRef.current) {
            const newMessages = messages.slice(previousMessageCount)
            
            // 檢查新訊息是否來自其他用戶
            console.log(`🆕 檢查 ${newMessages.length} 條新訊息:`)
            newMessages.forEach((message, index) => {
              console.log(`  訊息 ${index + 1}:`, {
                from: message.from,
                user: message.user,
                text: message.text?.substring(0, 50) + '...',
                currentUserUid: user.uid,
                isFromOtherUser: message.from !== user.uid
              })
              
              if (message.from !== user.uid) {
                // 檢查用戶是否正在與這個發送者進行私人聊天
                const isCurrentlyChattingWithSender = 
                  currentRoom === 'private' && 
                  currentPrivateChat && 
                  currentPrivateChat.recipientId === message.from
                
                const senderName = message.user || '匿名用戶'
                console.log(`🔍 檢查通知條件:`, {
                  currentRoom,
                  currentPrivateChat,
                  currentPrivateChatRecipientId: currentPrivateChat?.recipientId,
                  recipientId,
                  messageFrom: message.from,
                  isCurrentlyChattingWithSender,
                  shouldShowNotification: !isCurrentlyChattingWithSender
                })
                
                // 只有在用戶沒有正在與發送者聊天時才增加未讀數量
                // 通知由 usePrivateChatNotifications 統一處理，避免重複
                if (!isCurrentlyChattingWithSender) {
                  console.log(`� usePrivateChat: 增加未讀數量 - 收到來自 ${senderName} 的新私訊`)
                  
                  // 增加未讀數量（通知由全域 hook 處理）
                  console.log(`📈 準備調用 incrementUnread(${message.from})`)
                  try {
                    incrementUnread(message.from)
                    console.log(`✅ incrementUnread 調用成功`)
                  } catch (error) {
                    console.error(`❌ incrementUnread 調用失敗:`, error)
                  }
                  
                  console.log(`📢 通知將由 usePrivateChatNotifications 統一處理`)
                } else {
                  console.log(`🔇 ❌ 不顯示通知 - 用戶正在與 ${senderName} 聊天`, {
                    reason: 'isCurrentlyChattingWithSender = true',
                    currentRoom,
                    currentPrivateChat: currentPrivateChat?.nickname,
                    messageFromUser: senderName
                  })
                }
              } else {
                console.log(`⏭️ 跳過自己的訊息: ${message.text?.substring(0, 30)}...`)
              }
            })
          }
          
          // 更新計數和標記
          lastMessageCountRef.current = currentMessageCount
          hasLoadedOnceRef.current = true
          console.log(`✅ 私聊 ${chatId} 載入了 ${messages.length} 條訊息`)
          setMessages(messages)
        } else {
          console.log(`📭 私聊 ${chatId} 沒有訊息`)
          lastMessageCountRef.current = 0
          hasLoadedOnceRef.current = true
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
      time: Date.now(),
      type: messageData.type || 'text'
    }

    // 如果有圖片，添加圖片 URL
    if (messageData.image) {
      message.image = messageData.image
      console.log(`📷 私訊包含圖片: ${messageData.image}`)
    }

    try {
      // Remove undefined fields (Firebase Realtime DB doesn't accept undefined inside objects)
      const cleanMessage = JSON.parse(JSON.stringify(message))
      if (JSON.stringify(message) !== JSON.stringify(cleanMessage)) {
        console.debug('usePrivateChat: removed undefined fields from message before push', {
          original: message,
          cleaned: cleanMessage
        })
      }

      console.log(`📤 發送私人訊息到 ${chatId}:`, cleanMessage)
      await push(messagesRef, cleanMessage)
    } catch (error) {
      console.error(`❌ 發送私人訊息失敗 (${chatId}):`, error)
      console.error('私訊內容詳情:', {
        chatId,
        recipientId,
        messageDataInput: messageData,
        finalMessage: message,
        userUid: user?.uid,
        errorCode: error.code,
        errorMessage: error.message
      })
      throw error
    }
  }

  return { sendPrivateMessage }
}