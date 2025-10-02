import { useEffect, useState } from 'react'
import { ref, onValue, get } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'

export const usePrivateChatsList = () => {
  const { user } = useAuthStore()
  const [privateChatsList, setPrivateChatsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.uid) {
      console.log('⚠️ usePrivateChatsList: 沒有用戶 UID')
      setPrivateChatsList([])
      setLoading(false)
      return
    }

    console.log(`🚀 開始載入用戶 ${user.uid} 的私聊列表...`)
    
    const loadPrivateChats = async () => {
      try {
        setLoading(true)
        
        // 獲取所有私聊房間
        const privateChatsRef = ref(database, 'privateChats')
        const privateChatsSnapshot = await get(privateChatsRef)
        
        if (!privateChatsSnapshot.exists()) {
          console.log('📭 沒有找到任何私聊房間')
          setPrivateChatsList([])
          setLoading(false)
          return
        }
        
        const allPrivateChats = privateChatsSnapshot.val()
        const allChatIds = Object.keys(allPrivateChats)
        
        // 篩選包含當前用戶的私聊房間
        const userChatIds = allChatIds.filter(chatId => chatId.includes(user.uid))
        console.log(`💬 找到 ${userChatIds.length} 個包含用戶的私聊房間:`, userChatIds.slice(0, 5), '...')
        
        if (userChatIds.length === 0) {
          setPrivateChatsList([])
          setLoading(false)
          return
        }
        
        // 載入所有對話以顯示完整列表
        console.log(`🚀 開始處理全部 ${userChatIds.length} 個私聊房間...`)
        
        // 並行處理以提高性能
        const chatPromises = userChatIds.map(async (chatId) => {
          try {
            // 解析對方用戶 ID
            const userIds = chatId.split('_')
            const otherUserId = userIds.find(id => id !== user.uid)
            
            if (!otherUserId) {
              console.log(`⚠️ 無法解析私聊房間 ${chatId} 的對方用戶`)
              return null
            }
            
            // 並行獲取用戶信息和最後訊息
            const [otherUserSnapshot, messagesSnapshot] = await Promise.all([
              get(ref(database, `users/${otherUserId}`)),
              get(ref(database, `privateChats/${chatId}/messages`))
            ])
            
            if (!otherUserSnapshot.exists()) {
              console.log(`⚠️ 對方用戶 ${otherUserId} 不存在`)
              return null
            }
            
            const otherUserData = otherUserSnapshot.val()
            
            // 獲取最後一條訊息
            let lastMessage = '開始對話...'
            let lastMessageTime = null
            
            if (messagesSnapshot.exists()) {
              const messages = messagesSnapshot.val()
              const messageEntries = Object.entries(messages)
              if (messageEntries.length > 0) {
                // 按時間排序獲取最後一條訊息
                const sortedMessages = messageEntries.sort(([, a], [, b]) => (b.time || 0) - (a.time || 0))
                const [, lastMsg] = sortedMessages[0]
                lastMessage = lastMsg.text || '訊息'
                lastMessageTime = lastMsg.time
              }
            }
            
            return {
              id: chatId,
              recipientId: otherUserId,
              nickname: otherUserData.nickname || '匿名用戶',
              avatar: otherUserData.avatar,
              isOnline: otherUserData.online || false,
              lastMessage,
              lastMessageTime
            }
            
          } catch (error) {
            console.error(`❌ 處理私聊房間 ${chatId} 時出錯:`, error)
            return null
          }
        })
        
        // 等待所有Promise完成
        const results = await Promise.all(chatPromises)
        const validChats = results.filter(chat => chat !== null)
        
        // 按最後訊息時間排序
        validChats.sort((a, b) => (b.lastMessageTime || 0) - (a.lastMessageTime || 0))
        
        console.log(`✅ 成功載入 ${validChats.length} 個私聊對話`)
        setPrivateChatsList(validChats)
        
      } catch (error) {
        console.error(`❌ 載入私聊列表失敗:`, error)
        setPrivateChatsList([])
      } finally {
        setLoading(false)
      }
    }
    
    loadPrivateChats()
  }, [user?.uid])

  return { 
    privateChatsList, 
    loading, 
    refreshList: () => {
      if (user?.uid) {
        setLoading(true)
        // 重新觸發 useEffect
        setPrivateChatsList([])
      }
    }
  }
}