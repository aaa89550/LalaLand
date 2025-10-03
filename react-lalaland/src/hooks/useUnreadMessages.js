// useUnreadMessages.js - 追蹤未讀訊息的 Hook
import { useState, useEffect } from 'react'
import { ref, onValue, off, update, runTransaction } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'

export const useUnreadMessages = () => {
  const { user } = useAuthStore()
  const [unreadCounts, setUnreadCounts] = useState({})
  const [totalUnread, setTotalUnread] = useState(0)

  useEffect(() => {
    if (!user?.uid) {
      setUnreadCounts({})
      setTotalUnread(0)
      return
    }

    // 監聽用戶的私聊列表
    const privateChatRef = ref(database, `privateChats/${user.uid}`)
    
    const unsubscribe = onValue(privateChatRef, (snapshot) => {
      if (!snapshot.exists()) {
        setUnreadCounts({})
        setTotalUnread(0)
        return
      }

      const privateChats = snapshot.val()
      const counts = {}
      let total = 0

      Object.entries(privateChats).forEach(([chatPartnerId, chatData]) => {
        const unreadCount = chatData.unreadCount || 0
        counts[chatPartnerId] = unreadCount
        total += unreadCount
      })

      setUnreadCounts(counts)
      setTotalUnread(total)
    })

    return () => {
      off(privateChatRef)
    }
  }, [user?.uid])

  // 標記訊息為已讀
  const markAsRead = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) return

    try {
      const chatRef = ref(database, `privateChats/${user.uid}/${chatPartnerId}`)
      await update(chatRef, {
        unreadCount: 0,
        lastRead: Date.now()
      })
    } catch (error) {
      console.error('標記已讀失敗:', error)
    }
  }

  // 增加未讀數量（當收到新訊息時）
  const incrementUnread = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) return

    try {
      const chatRef = ref(database, `privateChats/${user.uid}/${chatPartnerId}/unreadCount`)
      
      await runTransaction(chatRef, (currentCount) => {
        return (currentCount || 0) + 1
      })
    } catch (error) {
      console.error('增加未讀數量失敗:', error)
    }
  }

  return {
    unreadCounts,
    totalUnread,
    markAsRead,
    incrementUnread,
    getUnreadCount: (chatPartnerId) => unreadCounts[chatPartnerId] || 0
  }
}