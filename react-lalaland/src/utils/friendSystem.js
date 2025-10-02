import { ref, set } from 'firebase/database'
import { database } from '../config/firebase'

// 發送好友請求
export const sendFriendRequest = async (currentUserId, targetUserId) => {
  if (!currentUserId || !targetUserId) {
    throw new Error('用戶ID不能為空')
  }
  
  if (currentUserId === targetUserId) {
    throw new Error('不能加自己為好友')
  }

  try {
    console.log(`發送好友請求: ${currentUserId} -> ${targetUserId}`)
    await set(ref(database, `users/${targetUserId}/friendRequests/${currentUserId}`), true)
    console.log('✅ 好友請求已發送')
  } catch (error) {
    console.error('❌ 發送好友請求失敗:', error)
    throw error
  }
}

// 接受好友請求
export const acceptFriendRequest = async (currentUserId, friendUserId) => {
  if (!currentUserId || !friendUserId) {
    throw new Error('用戶ID不能為空')
  }

  try {
    console.log(`接受好友請求: ${currentUserId} <-> ${friendUserId}`)
    
    // 雙方互加好友
    await set(ref(database, `users/${currentUserId}/friends/${friendUserId}`), true)
    await set(ref(database, `users/${friendUserId}/friends/${currentUserId}`), true)
    
    // 移除好友請求
    await set(ref(database, `users/${currentUserId}/friendRequests/${friendUserId}`), null)
    await set(ref(database, `users/${friendUserId}/friendRequests/${currentUserId}`), null)
    
    console.log('✅ 好友關係建立成功')
  } catch (error) {
    console.error('❌ 接受好友請求失敗:', error)
    throw error
  }
}

// 拒絕好友請求
export const rejectFriendRequest = async (currentUserId, friendUserId) => {
  if (!currentUserId || !friendUserId) {
    throw new Error('用戶ID不能為空')
  }

  try {
    console.log(`拒絕好友請求: ${currentUserId} <- ${friendUserId}`)
    await set(ref(database, `users/${currentUserId}/friendRequests/${friendUserId}`), null)
    console.log('✅ 好友請求已拒絕')
  } catch (error) {
    console.error('❌ 拒絕好友請求失敗:', error)
    throw error
  }
}