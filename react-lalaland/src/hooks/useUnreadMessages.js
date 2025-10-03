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

    // 監聽用戶的未讀訊息數據
    const unreadRef = ref(database, `userUnreadCounts/${user.uid}`)
    
    const unsubscribe = onValue(unreadRef, (snapshot) => {
      if (!snapshot.exists()) {
        setUnreadCounts({})
        setTotalUnread(0)
        return
      }

      const unreadData = snapshot.val()
      const counts = {}
      let total = 0

      Object.entries(unreadData).forEach(([chatPartnerId, unreadCount]) => {
        const count = parseInt(unreadCount) || 0
        counts[chatPartnerId] = count
        total += count
      })

      console.log('📊 未讀訊息更新:', { counts, total })
      setUnreadCounts(counts)
      setTotalUnread(total)
    })

    return () => {
      off(unreadRef)
    }
  }, [user?.uid])

  // 標記訊息為已讀
  const markAsRead = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) return

    try {
      console.log(`🔄 標記與 ${chatPartnerId} 的對話為已讀`)
      const unreadRef = ref(database, `userUnreadCounts/${user.uid}/${chatPartnerId}`)
      await update(unreadRef, { '.sv': 'delete' }) // 刪除未讀記錄
      
      // 也更新最後讀取時間
      const lastReadRef = ref(database, `userLastRead/${user.uid}/${chatPartnerId}`)
      await update(lastReadRef, { timestamp: Date.now() })
    } catch (error) {
      console.error('標記已讀失敗:', error)
    }
  }

  // 增加未讀數量（當收到新訊息時）
  const incrementUnread = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) return

    try {
      console.log(`📈 增加與 ${chatPartnerId} 的未讀數量`)
      const unreadRef = ref(database, `userUnreadCounts/${user.uid}/${chatPartnerId}`)
      
      await runTransaction(unreadRef, (currentCount) => {
        const newCount = (currentCount || 0) + 1
        console.log(`  舊數量: ${currentCount}, 新數量: ${newCount}`)
        return newCount
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