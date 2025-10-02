import { ref, get } from 'firebase/database'
import { database } from '../config/firebase'

// 偵錯工具：檢查 Firebase 資料庫內容
export const debugDatabase = async () => {
  console.log('🔍 開始偵錯 Firebase 資料庫...')
  
  try {
    // 檢查群組聊天
    console.log('📡 檢查群組聊天資料...')
    const groupChatsRef = ref(database, 'groupChats')
    const groupChatsSnapshot = await get(groupChatsRef)
    
    if (groupChatsSnapshot.exists()) {
      const groupChats = groupChatsSnapshot.val()
      console.log('✅ 群組聊天資料:', groupChats)
      
      // 檢查每個聊天室的訊息數量
      Object.keys(groupChats).forEach(roomId => {
        if (groupChats[roomId]?.messages) {
          const messageCount = Object.keys(groupChats[roomId].messages).length
          console.log(`📝 房間 ${roomId} 有 ${messageCount} 條訊息`)
        } else {
          console.log(`📝 房間 ${roomId} 沒有訊息`)
        }
      })
    } else {
      console.log('❌ 沒有找到群組聊天資料')
    }

    // 檢查用戶資料
    console.log('👥 檢查用戶資料...')
    const usersRef = ref(database, 'users')
    const usersSnapshot = await get(usersRef)
    
    if (usersSnapshot.exists()) {
      const users = usersSnapshot.val()
      console.log('✅ 用戶資料:', users)
      
      // 檢查每個用戶的好友數量
      Object.keys(users).forEach(uid => {
        if (users[uid]?.friends) {
          const friendCount = Object.keys(users[uid].friends).length
          console.log(`👨‍👩‍👧‍👦 用戶 ${uid} (${users[uid].nickname || '匿名'}) 有 ${friendCount} 個好友`)
        } else {
          console.log(`👨‍👩‍👧‍👦 用戶 ${uid} (${users[uid]?.nickname || '匿名'}) 沒有好友`)
        }
      })
    } else {
      console.log('❌ 沒有找到用戶資料')
    }

    // 檢查私人聊天
    console.log('💬 檢查私人聊天資料...')
    const privateChatsRef = ref(database, 'privateChats')
    const privateChatsSnapshot = await get(privateChatsRef)
    
    if (privateChatsSnapshot.exists()) {
      const privateChats = privateChatsSnapshot.val()
      console.log('✅ 私人聊天資料:', privateChats)
      
      Object.keys(privateChats).forEach(chatId => {
        if (privateChats[chatId]?.messages) {
          const messageCount = Object.keys(privateChats[chatId].messages).length
          console.log(`💌 私聊 ${chatId} 有 ${messageCount} 條訊息`)
        }
      })
    } else {
      console.log('❌ 沒有找到私人聊天資料')
    }

  } catch (error) {
    console.error('🚨 Firebase 偵錯失敗:', error)
    console.error('錯誤詳情:', error.message)
    
    if (error.code === 'PERMISSION_DENIED') {
      console.error('❌ 權限被拒絕 - 需要更新 Firebase 安全規則!')
      console.log('📋 請參考 FIREBASE_SETUP.md 文件更新規則')
    }
  }
}

// 特定房間的訊息偵錯
export const debugRoomMessages = async (roomId) => {
  console.log(`🔍 偵錯房間 ${roomId} 的訊息...`)
  
  try {
    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    const snapshot = await get(messagesRef)
    
    if (snapshot.exists()) {
      const messages = snapshot.val()
      console.log(`✅ 房間 ${roomId} 找到 ${Object.keys(messages).length} 條訊息:`, messages)
      return messages
    } else {
      console.log(`❌ 房間 ${roomId} 沒有訊息`)
      return null
    }
  } catch (error) {
    console.error(`🚨 無法讀取房間 ${roomId} 的訊息:`, error)
    return null
  }
}

// 特定用戶的好友偵錯
export const debugUserFriends = async (uid) => {
  console.log(`🔍 偵錯用戶 ${uid} 的好友...`)
  
  try {
    const friendsRef = ref(database, `users/${uid}/friends`)
    const snapshot = await get(friendsRef)
    
    if (snapshot.exists()) {
      const friends = snapshot.val()
      console.log(`✅ 用戶 ${uid} 找到 ${Object.keys(friends).length} 個好友:`, friends)
      return friends
    } else {
      console.log(`❌ 用戶 ${uid} 沒有好友`)
      return null
    }
  } catch (error) {
    console.error(`🚨 無法讀取用戶 ${uid} 的好友:`, error)
    return null
  }
}