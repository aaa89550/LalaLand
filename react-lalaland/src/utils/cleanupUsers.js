// 清理過期在線用戶的工具函數
import { ref, get, remove, update } from 'firebase/database'
import { database } from '../config/firebase'

export const cleanupStaleUsers = async () => {
  console.log('🧹 開始清理過期的在線用戶...')
  
  try {
    const usersRef = ref(database, 'users')
    const snapshot = await get(usersRef)
    
    if (!snapshot.exists()) {
      console.log('📭 沒有找到任何用戶資料')
      return
    }
    
    const users = snapshot.val()
    const now = Date.now()
    const STALE_TIME = 5 * 60 * 1000 // 5分鐘沒活動就視為過期
    
    let cleanedCount = 0
    
    for (const [uid, userData] of Object.entries(users)) {
      if (!userData) continue
      
      // 檢查是否為過期用戶
      const isStale = !userData.lastSeen || (now - userData.lastSeen > STALE_TIME)
      
      if (userData.isOnline && isStale) {
        console.log(`🗑️ 清理過期用戶: ${uid} (${userData.nickname || '未知'})`)
        
        if (userData.isAnonymous) {
          // 匿名用戶完全刪除
          await remove(ref(database, `users/${uid}`))
          console.log(`✅ 已刪除匿名用戶: ${uid}`)
        } else {
          // 註冊用戶只設為離線
          await update(ref(database, `users/${uid}`), {
            isOnline: false,
            lastSeen: now
          })
          console.log(`✅ 已將註冊用戶設為離線: ${uid}`)
        }
        cleanedCount++
      }
    }
    
    console.log(`🎉 清理完成！共清理了 ${cleanedCount} 個過期用戶`)
    return cleanedCount
    
  } catch (error) {
    console.error('❌ 清理過期用戶失敗:', error)
    throw error
  }
}

// 定期清理函數
export const startPeriodicCleanup = () => {
  console.log('⏰ 啟動定期清理服務...')
  
  // 立即執行一次清理
  cleanupStaleUsers()
  
  // 每5分鐘清理一次
  const intervalId = setInterval(cleanupStaleUsers, 5 * 60 * 1000)
  
  return () => {
    console.log('🛑 停止定期清理服務')
    clearInterval(intervalId)
  }
}