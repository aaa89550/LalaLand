import { ref, set, get, push } from 'firebase/database'
import { database } from '../config/firebase'

// 創建範例聊天資料
export const createSampleData = async (currentUser) => {
  if (!currentUser?.uid) return

  try {
    console.log('正在為用戶創建範例資料:', currentUser.nickname)
    
    // 暫時跳過範例資料創建，等待 Firebase 規則更新
    // 只更新當前用戶資料
    const userRef = ref(database, `users/${currentUser.uid}`)
    const userData = {
      nickname: currentUser.nickname || '匿名用戶',
      avatar: currentUser.avatar || null,
      email: currentUser.email || null,
      isAnonymous: currentUser.isAnonymous || false,
      lastSeen: Date.now(),
      isOnline: true,
      joinedAt: Date.now()
    }
    
    await set(userRef, userData)
    console.log('✅ 用戶資料已更新')
  } catch (error) {
    console.error('❌ 創建範例資料失敗:', error)
  }
}

// 添加好友功能
export const addFriend = async (currentUid, friendUid) => {
  try {
    // 檢查好友是否存在
    const friendSnapshot = await get(ref(database, `users/${friendUid}`))
    if (!friendSnapshot.exists()) {
      throw new Error('用戶不存在')
    }

    // 添加到雙方的好友列表
    await set(ref(database, `users/${currentUid}/friends/${friendUid}`), true)
    await set(ref(database, `users/${friendUid}/friends/${currentUid}`), true)

    console.log('✅ 好友添加成功')
  } catch (error) {
    console.error('❌ 添加好友失敗:', error)
    throw error
  }
}

// 移除好友功能
export const removeFriend = async (currentUid, friendUid) => {
  try {
    await set(ref(database, `users/${currentUid}/friends/${friendUid}`), null)
    await set(ref(database, `users/${friendUid}/friends/${currentUid}`), null)

    console.log('✅ 好友移除成功')
  } catch (error) {
    console.error('❌ 移除好友失敗:', error)
    throw error
  }
}