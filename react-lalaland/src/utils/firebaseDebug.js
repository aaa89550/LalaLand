import { ref, get } from 'firebase/database'
import { database } from '../config/firebase'

export const debugFirebaseData = async (user) => {
  if (!user?.uid) {
    console.log('❌ 沒有用戶 UID')
    return
  }

  console.log('🔧 開始 Firebase 資料診斷...')
  
  try {
    // 1. 檢查用戶基本資料
    const userRef = ref(database, `users/${user.uid}`)
    const userSnapshot = await get(userRef)
    
    console.log('👤 用戶資料:', {
      path: `users/${user.uid}`,
      exists: userSnapshot.exists(),
      data: userSnapshot.val()
    })

    // 2. 檢查好友列表
    const friendsRef = ref(database, `users/${user.uid}/friends`)
    const friendsSnapshot = await get(friendsRef)
    
    console.log('👥 好友資料:', {
      path: `users/${user.uid}/friends`,
      exists: friendsSnapshot.exists(),
      data: friendsSnapshot.val()
    })

    // 3. 檢查所有用戶 (看看資料庫結構)
    const allUsersRef = ref(database, 'users')
    const allUsersSnapshot = await get(allUsersRef)
    const allUsers = allUsersSnapshot.val()
    
    if (allUsers) {
      const userIds = Object.keys(allUsers)
      console.log('🗂️ 資料庫中的所有用戶:', {
        count: userIds.length,
        userIds: userIds,
        currentUserExists: userIds.includes(user.uid)
      })

      // 顯示前幾個用戶的結構
      userIds.slice(0, 3).forEach(uid => {
        console.log(`📋 用戶 ${uid} 結構:`, {
          keys: Object.keys(allUsers[uid] || {}),
          hasFriends: !!(allUsers[uid]?.friends)
        })
      })
    }

    // 4. 檢查私聊資料結構
    const privateChatsRef = ref(database, 'privateChats')
    const privateChatsSnapshot = await get(privateChatsRef)
    const privateChats = privateChatsSnapshot.val()
    
    console.log('💌 私聊資料:', {
      path: 'privateChats',
      exists: privateChatsSnapshot.exists(),
      chatRooms: privateChats ? Object.keys(privateChats) : []
    })

    if (privateChats) {
      // 顯示包含當前用戶的私聊房間
      const userChats = Object.keys(privateChats).filter(chatId => 
        chatId.includes(user.uid)
      )
      console.log(`💬 包含用戶 ${user.uid} 的私聊房間:`, userChats)

      // 顯示第一個私聊房間的結構
      const firstChatId = Object.keys(privateChats)[0]
      if (firstChatId) {
        const firstChat = privateChats[firstChatId]
        console.log(`📝 私聊房間 ${firstChatId} 結構:`, {
          keys: Object.keys(firstChat || {}),
          messageCount: firstChat?.messages ? Object.keys(firstChat.messages).length : 0
        })
      }
    }

  } catch (error) {
    console.error('❌ Firebase 資料診斷失敗:', error)
    if (error.code === 'PERMISSION_DENIED') {
      console.error('🚫 權限被拒絕!')
    }
  }
}