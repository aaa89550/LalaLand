// useUnreadMessages.js - 追蹤未讀訊息的 Hook
import { useState, useEffect } from 'react'
import { ref, onValue, off, update, runTransaction, remove, set } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'

export const useUnreadMessages = () => {
  const { user } = useAuthStore()
  const [unreadCounts, setUnreadCounts] = useState({})
  const [totalUnread, setTotalUnread] = useState(0)
  
    // 重新計算本地未讀總數
    const recalcTotalUnread = (countsObj) => {
      return Object.values(countsObj).reduce((sum, v) => sum + (parseInt(v) || 0), 0)
    }

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
        // firebase回調只在本地狀態異常時才強制同步
        setTotalUnread(prev => {
          const localTotal = recalcTotalUnread(counts)
          // 若本地已經是0，優先本地
          if (prev === 0 && localTotal === 0) return 0
          // 若本地有值，且firebase回傳0，優先本地
          if (prev > 0 && localTotal === 0) return prev
          // 其他情況以本地計算為主
          return localTotal
        })
      
      // 驗證狀態一致性
      setTimeout(() => {
        const calculatedTotal = Object.values(counts).reduce((sum, count) => sum + (parseInt(count) || 0), 0)
        if (calculatedTotal !== total) {
          console.warn('⚠️ Firebase監聽器數據不一致，重新同步')
          setTotalUnread(calculatedTotal)
        }
      }, 100)
    })

    return () => {
      off(unreadRef)
    }
  }, [user?.uid])

  // 標記訊息為已讀
  const markAsRead = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) {
      console.warn('❌ markAsRead: 缺少必要參數', { userUid: user?.uid, chatPartnerId })
      return
    }

    // 記錄當前未讀數以便回滾
    const currentCount = unreadCounts[chatPartnerId] || 0
    console.log(`🔄 開始標記 ${chatPartnerId} 為已讀:`, {
      currentCount,
      unreadCountsKeys: Object.keys(unreadCounts),
      totalUnread
    })
    
    if (currentCount === 0) {
      console.log(`⏭️ ${chatPartnerId} 已經沒有未讀訊息，跳過處理`)
      return
    }

    try {
      
      // 先更新資料庫，成功後再更新本地狀態
      const unreadRef = ref(database, `userUnreadCounts/${user.uid}/${chatPartnerId}`)
      await remove(unreadRef)
      
      // 更新最後讀取時間
      const lastReadRef = ref(database, `userLastRead/${user.uid}/${chatPartnerId}`)
      await set(lastReadRef, { timestamp: Date.now() })
      
      // 資料庫更新成功後，立即更新本地狀態（防止延遲）
      setUnreadCounts(prevCounts => {
        console.log(`📝 更新本地狀態 - 刪除 ${chatPartnerId}:`, {
          beforeDelete: prevCounts,
          targetKey: chatPartnerId,
          targetCount: prevCounts[chatPartnerId]
        })
        
        const newCounts = { ...prevCounts }
        delete newCounts[chatPartnerId]
        
        const newTotal = recalcTotalUnread(newCounts)
        console.log(`🔢 重新計算總數:`, {
          oldCounts: prevCounts,
          newCounts,
          oldTotal: totalUnread,
          newTotal
        })
        
        setTotalUnread(newTotal)
        return newCounts
      })
      
      console.log(`✅ 已讀標記完成: ${chatPartnerId}`)
    } catch (error) {
      console.error(`❌ 標記已讀失敗 (${chatPartnerId}):`, error)
      if (error.code) {
        console.error('錯誤代碼:', error.code)
      }
    }
  }

  // 增加未讀數量（當收到新訊息時）
  const incrementUnread = async (chatPartnerId) => {
    if (!user?.uid || !chatPartnerId) return

    try {
      console.log(`📈 增加與 ${chatPartnerId} 的未讀數量`)
      const unreadRef = ref(database, `userUnreadCounts/${user.uid}/${chatPartnerId}`)
      
      let newCount = 0
      await runTransaction(unreadRef, (currentCount) => {
        newCount = (currentCount || 0) + 1
        console.log(`  舊數量: ${currentCount}, 新數量: ${newCount}`)
        return newCount
      })
      
      // 立即更新本地狀態以提供即時反饋
      setUnreadCounts(prevCounts => {
        const newCounts = { ...prevCounts, [chatPartnerId]: newCount }
        const newTotal = recalcTotalUnread(newCounts)
        console.log(`� 更新未讀計數: ${chatPartnerId} -> ${newCount}, 總數: ${newTotal}`)
        setTotalUnread(newTotal)
        return newCounts
      })
      
    } catch (error) {
      console.error('增加未讀數量失敗:', error)
      if (error?.code === 'PERMISSION_DENIED') {
        console.warn('⚠️ Firebase 規則拒絕寫入 userUnreadCounts，請確認規則允許: /userUnreadCounts/${user.uid}/${chatPartnerId}')
      }
    }
  }

  // 重新計算總未讀數的輔助函數
  const recalculateTotal = () => {
    const total = Object.values(unreadCounts).reduce((sum, count) => sum + (parseInt(count) || 0), 0)
    console.log('🔄 重新計算總未讀數:', { unreadCounts, calculatedTotal: total, currentTotal: totalUnread })
    if (total !== totalUnread) {
      console.log(`⚠️ 總未讀數不一致，修正: ${totalUnread} -> ${total}`)
      setTotalUnread(total)
    }
    return total
  }

  // 暴露調試函數到全域
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.recalculateTotal = recalculateTotal
      window.debugUnreadCounts = () => {
        const detailed = {
          unreadCounts,
          unreadCountsEntries: Object.entries(unreadCounts),
          totalUnread,
          calculatedTotal: recalcTotalUnread(unreadCounts)
        }
        console.log('🔍 未讀計數調試:', detailed)
        console.table(unreadCounts)
        return detailed
      }
      
      // 添加強制清空所有未讀的函數
      window.clearAllUnread = () => {
        console.log('🧹 強制清空所有未讀計數')
        setUnreadCounts({})
        setTotalUnread(0)
        return { success: true, message: '已清空所有未讀計數' }
      }
      
      // 添加針對特定用戶清除未讀的函數
      window.clearSpecificUnread = (chatPartnerId) => {
        console.log(`🎯 清除特定用戶 ${chatPartnerId} 的未讀計數`)
        setUnreadCounts(prevCounts => {
          const newCounts = { ...prevCounts }
          delete newCounts[chatPartnerId]
          const newTotal = recalcTotalUnread(newCounts)
          setTotalUnread(newTotal)
          console.log(`清除後狀態:`, { newCounts, newTotal })
          return newCounts
        })
        return { success: true, message: `已清除 ${chatPartnerId} 的未讀計數` }
      }
      
      console.log('✅ 調試函數已設置到 window 物件:', {
        recalculateTotal: typeof window.recalculateTotal,
        debugUnreadCounts: typeof window.debugUnreadCounts
      })
      
      // 清理函數
      return () => {
        delete window.recalculateTotal
        delete window.debugUnreadCounts
      }
    }
  }, [unreadCounts, totalUnread, recalculateTotal])

  return {
    unreadCounts,
    totalUnread,
    markAsRead,
    incrementUnread,
    getUnreadCount: (chatPartnerId) => unreadCounts[chatPartnerId] || 0,
    recalculateTotal
  }
}