import { useEffect, useRef, useState, useCallback } from 'react'
import { ref, onValue, push, query, orderByChild, limitToLast, endBefore, get } from 'firebase/database'
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
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const allMessagesRef = useRef([])
  const oldestTimestampRef = useRef(null)
  
  const MESSAGES_PER_PAGE = 20

  // 判斷是否為桌面裝置
  const isDesktop = () => {
    if (typeof window === 'undefined') return true
    const ua = window.navigator.userAgent
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua))
  }

  // 載入初始訊息
  const loadInitialMessages = useCallback(async () => {
    console.log('🔍 usePrivateChat 參數檢查:')
    console.log('  - hasUser:', !!user)
    console.log('  - userUid:', user?.uid)
    console.log('  - recipientId:', recipientId)
    
    if (!user || !recipientId) {
      console.log('⚠️ usePrivateChat: 缺少必要參數')
      return
    }

    // 生成聊天室 ID (按 UID 字母順序排列)
    const chatIds = [user.uid, recipientId].sort()
    const chatId = `${chatIds[0]}_${chatIds[1]}`
    
    console.log(`🚀 開始載入私聊 ${chatId} 的最新訊息...`)
    
    // 清空現有狀態
    clearMessages()
    allMessagesRef.current = []
    oldestTimestampRef.current = null
    setHasMore(true)
    setLoading(true)
    hasLoadedOnceRef.current = false

    try {
      // 載入最近20條訊息
      const messagesRef = query(
        ref(database, `privateChats/${chatId}/messages`),
        orderByChild('time'),
        limitToLast(MESSAGES_PER_PAGE)
      )
      
      const snapshot = await get(messagesRef)
      const data = snapshot.val()
      
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
        
        allMessagesRef.current = messages
        oldestTimestampRef.current = messages.length > 0 ? messages[0].time : null
        
        console.log(`✅ 載入了 ${messages.length} 條初始私訊`)
        setMessages(messages)
        
        // 如果載入的訊息少於每頁數量，表示沒有更多了
        if (messages.length < MESSAGES_PER_PAGE) {
          setHasMore(false)
        }
      } else {
        console.log(`📭 私聊 ${chatId} 沒有訊息`)
        setHasMore(false)
      }
    } catch (error) {
      console.error(`❌ 載入初始私訊失敗:`, error)
    } finally {
      setLoading(false)
      hasLoadedOnceRef.current = true
    }
  }, [user, recipientId, clearMessages, setMessages])

  useEffect(() => {
    loadInitialMessages()
  }, [loadInitialMessages])

  // 設定新訊息監聽器
  useEffect(() => {
    if (!user || !recipientId) return

    const chatIds = [user.uid, recipientId].sort()
    const chatId = `${chatIds[0]}_${chatIds[1]}`
    
    console.log(`🔄 設定私聊 ${chatId} 的即時監聽器`)
    
    // 監聽所有訊息變化，但只處理新增的
    const messagesRef = ref(database, `privateChats/${chatId}/messages`)
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      if (!data) return

      const allMessages = Object.entries(data).map(([id, message]) => ({
        id,
        text: message.text,
        user: message.user,
        from: message.from,
        avatar: message.avatar,
        time: message.time,
        timestamp: message.time || message.timestamp || Date.now()
      }))
      
      // 按時間排序
      allMessages.sort((a, b) => (a.time || a.timestamp || 0) - (b.time || b.timestamp || 0))
      
      // 檢查是否有新訊息（比當前最新的還要新）
      const currentMessages = allMessagesRef.current
      if (currentMessages.length > 0 && hasLoadedOnceRef.current) {
        const latestCurrentTime = currentMessages[currentMessages.length - 1].time
        const newMessages = allMessages.filter(msg => msg.time > latestCurrentTime)
        
        if (newMessages.length > 0) {
          console.log(`📨 收到 ${newMessages.length} 條新私訊`)
          const updatedMessages = [...currentMessages, ...newMessages]
          allMessagesRef.current = updatedMessages
          setMessages(updatedMessages)
          
          // 處理通知邏輯
          newMessages.forEach((message) => {
            if (message.from !== user.uid) {
              const isCurrentlyChattingWithSender = 
                currentRoom === 'private' && 
                currentPrivateChat && 
                currentPrivateChat.recipientId === message.from
              
              if (!isCurrentlyChattingWithSender) {
                console.log(`📈 增加未讀數量 - 收到來自 ${message.user} 的新私訊`)
                try {
                  incrementUnread(message.from)
                } catch (error) {
                  console.error(`❌ incrementUnread 調用失敗:`, error)
                }
              }
            }
          })
        }
      }
    }, (error) => {
      console.error(`❌ Firebase onValue 錯誤 (私聊 ${chatId}):`, error)
    })

    return () => {
      console.log(`🛑 停止監聽私聊 ${chatId}`)
      unsubscribe()
    }
  }, [user, recipientId, currentRoom, currentPrivateChat, setMessages, incrementUnread])

  // 載入更多歷史訊息
  const loadMoreMessages = useCallback(async () => {
    if (!user || !recipientId || loading || !hasMore || !oldestTimestampRef.current) {
      console.log('⚠️ 無法載入更多私訊:', { loading, hasMore, oldestTime: oldestTimestampRef.current })
      return
    }

    const chatIds = [user.uid, recipientId].sort()
    const chatId = `${chatIds[0]}_${chatIds[1]}`
    
    console.log(`📜 載入更多私聊歷史訊息...`)
    setLoading(true)

    try {
      // 載入比最舊訊息更早的訊息
      const olderMessagesRef = query(
        ref(database, `privateChats/${chatId}/messages`),
        orderByChild('time'),
        endBefore(oldestTimestampRef.current),
        limitToLast(MESSAGES_PER_PAGE)
      )
      
      const snapshot = await get(olderMessagesRef)
      const data = snapshot.val()
      
      if (data) {
        const olderMessages = Object.entries(data).map(([id, message]) => ({
          id,
          text: message.text,
          user: message.user,
          from: message.from,
          avatar: message.avatar,
          time: message.time,
          timestamp: message.time || message.timestamp || Date.now()
        }))
        
        // 按時間排序
        olderMessages.sort((a, b) => (a.time || a.timestamp || 0) - (b.time || b.timestamp || 0))
        
        if (olderMessages.length > 0) {
          // 合併到現有訊息前面
          const updatedMessages = [...olderMessages, ...allMessagesRef.current]
          allMessagesRef.current = updatedMessages
          oldestTimestampRef.current = olderMessages[0].time
          
          console.log(`✅ 載入了 ${olderMessages.length} 條歷史私訊`)
          setMessages(updatedMessages)
          
          // 如果載入的訊息少於每頁數量，表示沒有更多了
          if (olderMessages.length < MESSAGES_PER_PAGE) {
            setHasMore(false)
          }
        } else {
          setHasMore(false)
        }
      } else {
        console.log(`📭 沒有更多私聊歷史訊息`)
        setHasMore(false)
      }
    } catch (error) {
      console.error(`❌ 載入私聊歷史訊息失敗:`, error)
    } finally {
      setLoading(false)
    }
  }, [user, recipientId, loading, hasMore, setMessages])

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

    // 如果有回覆，添加回覆資訊
    if (messageData.replyTo) {
      message.replyTo = messageData.replyTo
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

  return { 
    sendPrivateMessage, 
    loadMoreMessages, 
    loading, 
    hasMore 
  }
}