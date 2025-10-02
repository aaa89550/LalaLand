import { ref, get } from 'firebase/database'
import { database } from '../config/firebase'

export const checkAllUsersFriends = async () => {
  try {
    console.log('🔍 檢查所有用戶的好友數據...')
    
    const allUsersRef = ref(database, 'users')
    const allUsersSnapshot = await get(allUsersRef)
    
    if (!allUsersSnapshot.exists()) {
      console.log('❌ 沒有找到任何用戶')
      return
    }
    
    const allUsers = allUsersSnapshot.val()
    const userIds = Object.keys(allUsers)
    console.log(`📊 總共有 ${userIds.length} 個用戶`)
    
    let usersWithFriends = []
    let usersWithoutFriends = []
    
    for (const userId of userIds) {
      const userData = allUsers[userId]
      if (userData.friends && Object.keys(userData.friends).length > 0) {
        usersWithFriends.push({
          userId,
          nickname: userData.nickname || '匿名',
          friendCount: Object.keys(userData.friends).length,
          friends: userData.friends
        })
        console.log(`✅ 用戶 ${userData.nickname || userId} 有 ${Object.keys(userData.friends).length} 個好友:`, userData.friends)
      } else {
        usersWithoutFriends.push({
          userId,
          nickname: userData.nickname || '匿名'
        })
      }
    }
    
    console.log(`📈 統計結果:`)
    console.log(`- 有好友的用戶: ${usersWithFriends.length}`)
    console.log(`- 沒有好友的用戶: ${usersWithoutFriends.length}`)
    
    if (usersWithFriends.length > 0) {
      console.log('👥 有好友的用戶列表:', usersWithFriends)
    }
    
    return {
      usersWithFriends,
      usersWithoutFriends,
      totalUsers: userIds.length
    }
    
  } catch (error) {
    console.error('❌ 檢查用戶好友數據時出錯:', error)
  }
}