import { ref, set, get } from 'firebase/database'
import { database } from '../config/firebase'

export const addFriendForTesting = async (currentUserId, friendUserId) => {
  try {
    console.log(`🤝 嘗試為用戶 ${currentUserId} 添加好友 ${friendUserId}`)
    
    // 檢查目標好友是否存在
    const friendRef = ref(database, `users/${friendUserId}`)
    const friendSnapshot = await get(friendRef)
    
    if (!friendSnapshot.exists()) {
      console.error(`❌ 好友用戶 ${friendUserId} 不存在`)
      return false
    }
    
    const friendData = friendSnapshot.val()
    console.log(`✅ 找到好友資料:`, friendData.nickname || friendUserId)
    
    // 為當前用戶添加好友
    const currentUserFriendRef = ref(database, `users/${currentUserId}/friends/${friendUserId}`)
    await set(currentUserFriendRef, true)
    
    // 為好友添加當前用戶（互相添加）
    const friendUserFriendRef = ref(database, `users/${friendUserId}/friends/${currentUserId}`)
    await set(friendUserFriendRef, true)
    
    console.log(`🎉 成功添加好友關係: ${currentUserId} ↔ ${friendUserId}`)
    return true
    
  } catch (error) {
    console.error(`❌ 添加好友失敗:`, error)
    return false
  }
}