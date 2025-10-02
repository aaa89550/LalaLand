import { ref, get } from 'firebase/database'
import { database } from '../config/firebase'

export const testFriendsData = async (userId) => {
  if (!userId) {
    console.log('❌ 沒有提供用戶 ID')
    return
  }

  console.log(`🧪 測試用戶 ${userId} 的好友數據...`)

  try {
    // 測試 1: 檢查用戶基本資料
    const userRef = ref(database, `users/${userId}`)
    const userSnapshot = await get(userRef)
    console.log('👤 用戶資料存在:', userSnapshot.exists())
    if (userSnapshot.exists()) {
      const userData = userSnapshot.val()
      console.log('📋 用戶資料:', userData)
      console.log('👥 好友欄位:', userData.friends)
    }

    // 測試 2: 直接檢查好友路徑
    const friendsRef = ref(database, `users/${userId}/friends`)
    const friendsSnapshot = await get(friendsRef)
    console.log('👥 好友路徑存在:', friendsSnapshot.exists())
    if (friendsSnapshot.exists()) {
      const friendsData = friendsSnapshot.val()
      console.log('📋 好友原始資料:', friendsData)
      console.log('📋 好友 keys:', Object.keys(friendsData || {}))
    } else {
      console.log('📭 好友路徑不存在')
    }

    // 測試 3: 檢查是否有已知的好友用戶存在
    const testFriendIds = ['ykw8Q4X6sMNFKNhCeXw5SwUORwd2', 'sample_user_1', 'sample_user_2']
    
    for (const testId of testFriendIds) {
      const testUserRef = ref(database, `users/${testId}`)
      const testUserSnapshot = await get(testUserRef)
      console.log(`🔍 測試用戶 ${testId} 存在:`, testUserSnapshot.exists())
      if (testUserSnapshot.exists()) {
        console.log(`📋 測試用戶 ${testId} 資料:`, testUserSnapshot.val())
      }
    }

  } catch (error) {
    console.error('❌ 測試好友數據失敗:', error)
  }
}