import { useEffect, useRef } from 'react'
import { ref, onValue, off } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'
import { useChatStore } from '../store/chatStore'
import { notificationManager } from '../utils/notificationManager'
import { useUnreadMessages } from './useUnreadMessages'

// 全域私訊通知監聽：監聽所有涉及目前使用者的私訊對話
export const usePrivateChatNotifications = () => {
  const { user } = useAuthStore()
  const { currentPrivateChat, currentRoom } = useChatStore()
  const { incrementUnread } = useUnreadMessages()
  const listenersRef = useRef({})
  const lastMessageTimestampsRef = useRef({})

  useEffect(() => {
    if (!user?.uid) return

    // 監聽 privateChats 根節點以發現所有相關對話
    const rootRef = ref(database, 'privateChats')
    console.log('🛰️ 啟動全域私訊通知監聽...')

    const unsubscribeRoot = onValue(rootRef, (snapshot) => {
      const data = snapshot.val() || {}
      const userId = user.uid

      // 找出所有包含 userId 的聊天 (chatId 形式: a_b)
      const relevantChatIds = Object.keys(data).filter(chatId => chatId.split('_').includes(userId))
      // console.log('🔎 發現相關私聊: ', relevantChatIds)

      // 清理不再相關的監聽器
      const currentChatIds = Object.keys(listenersRef.current)
      currentChatIds.forEach(chatId => {
        if (!relevantChatIds.includes(chatId)) {
          console.log('🧹 清理不相關監聽器:', chatId)
          try { listenersRef.current[chatId]() } catch {}
          delete listenersRef.current[chatId]
          delete lastMessageTimestampsRef.current[chatId]
        }
      })

      // 為每個 chatId 設定或保留監聽
      relevantChatIds.forEach(chatId => {
        if (listenersRef.current[chatId]) return // 已有監聽

        const messagesRef = ref(database, `privateChats/${chatId}/messages`)
        console.log('👂 設定私聊監聽:', chatId)
        
        const unsubscribe = onValue(messagesRef, (msgSnap) => {
          const messagesData = msgSnap.val()
          if (!messagesData) {
            // 無訊息時初始化 timestamp
            if (!lastMessageTimestampsRef.current[chatId]) {
              lastMessageTimestampsRef.current[chatId] = Date.now()
            }
            return
          }

          // 轉為陣列並排序
          const messages = Object.entries(messagesData).map(([id, m]) => ({
            id,
            ...m,
            timestamp: m.time || m.timestamp || 0
          })).sort((a,b) => a.timestamp - b.timestamp)

          if (messages.length === 0) return
          const lastMsg = messages[messages.length - 1]

          // 初次監聽時：記錄最後訊息時間但不觸發通知
          const prevTs = lastMessageTimestampsRef.current[chatId]
          const isFirstLoad = !prevTs
          
          if (isFirstLoad) {
            // 初次載入：記錄 timestamp 但不通知
            lastMessageTimestampsRef.current[chatId] = lastMsg.timestamp || Date.now()
            console.log(`🔄 初次載入私聊 ${chatId}，記錄最後訊息時間: ${lastMsg.timestamp}`)
            return // 不觸發歷史訊息通知
          }
          
          // 非初次：檢查是否為新訊息
          if (lastMsg.timestamp && lastMsg.timestamp <= prevTs) {
            return // 沒有新訊息
          }
          
          // 更新 timestamp
          lastMessageTimestampsRef.current[chatId] = lastMsg.timestamp || Date.now()

          // 忽略自己發送的訊息
          if (lastMsg.from === userId) return

          // 判斷是否為當前正在查看的私聊
          const activePartnerId = currentPrivateChat?.recipientId
          const partnerId = chatId.split('_').find(id => id !== userId)
          const isActive = 
            currentRoom === 'private' && 
            activePartnerId && 
            partnerId === activePartnerId

          console.log('🔍 檢查是否正在查看私聊:', {
            chatId,
            currentRoom,
            activePartnerId,
            partnerId,
            isActive,
            messageFrom: lastMsg.from,
            messageSender: lastMsg.user
          })

          if (isActive) {
            console.log('🟢 正在查看此私聊，跳過通知和未讀計數', { chatId, partnerId })
            return
          }

          const senderName = lastMsg.user || '匿名用戶'
          const preview = lastMsg.text?.slice(0, 80) || ''

          console.log('🔔 觸發全域私訊通知:', {
            chatId,
            from: lastMsg.from,
            senderName,
            preview,
            isActive
          })

          // 顯示通知（桌面 + 內部）
          notificationManager.showMessageNotification(senderName, preview, 'private')
          if (window.showNotification) {
            window.showNotification(`💬 ${senderName}: ${preview}`, 'info', 6000)
          }

          // 增加未讀
          incrementUnread(lastMsg.from)
        })

        listenersRef.current[chatId] = unsubscribe
      })
    })

    return () => {
      console.log('🛑 停止全域私訊通知監聽')
      Object.values(listenersRef.current).forEach(unsub => {
        try { unsub() } catch {}
      })
      listenersRef.current = {}
      off(rootRef)
    }
  }, [user?.uid, currentPrivateChat?.recipientId, currentRoom])
}
