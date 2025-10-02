import { 
  ref, 
  get, 
  set, 
  push, 
  update,
  remove,
  onValue,
  off
} from 'firebase/database'
import { database } from '../config/firebase'

export class ChatService {
  // 獲取群組聊天訊息
  static async getGroupMessages(roomId, limit = 100) {
    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    const snapshot = await get(messagesRef)
    
    if (snapshot.exists()) {
      const data = snapshot.val()
      const messages = Object.entries(data).map(([id, message]) => ({
        id,
        ...message
      }))
      return messages.sort((a, b) => a.timestamp - b.timestamp).slice(-limit)
    }
    return []
  }

  // 發送群組訊息
  static async sendGroupMessage(roomId, messageData) {
    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    const messageRef = push(messagesRef)
    await set(messageRef, {
      ...messageData,
      timestamp: Date.now()
    })
    return messageRef.key
  }

  // 監聽群組訊息
  static subscribeToGroupMessages(roomId, callback) {
    const messagesRef = ref(database, `groupChats/${roomId}/messages`)
    onValue(messagesRef, callback)
    return () => off(messagesRef, 'value', callback)
  }

  // 獲取私訊訊息
  static async getPrivateMessages(roomId, limit = 100) {
    const messagesRef = ref(database, `privateChats/${roomId}/messages`)
    const snapshot = await get(messagesRef)
    
    if (snapshot.exists()) {
      const data = snapshot.val()
      const messages = Object.entries(data).map(([id, message]) => ({
        id,
        ...message
      }))
      return messages.sort((a, b) => a.timestamp - b.timestamp).slice(-limit)
    }
    return []
  }

  // 發送私訊
  static async sendPrivateMessage(roomId, messageData) {
    const messagesRef = ref(database, `privateChats/${roomId}/messages`)
    const messageRef = push(messagesRef)
    await set(messageRef, {
      ...messageData,
      timestamp: Date.now()
    })
    
    // 更新私訊列表
    const [uid1, uid2] = roomId.split('_')
    await this.updatePrivateChatsList(uid1, uid2, messageData)
    
    return messageRef.key
  }

  // 更新私訊列表
  static async updatePrivateChatsList(uid1, uid2, lastMessage) {
    const updates = {}
    updates[`users/${uid1}/privateChats/${uid2}`] = {
      lastMessage: lastMessage.content || '圖片',
      lastMessageTime: Date.now(),
      unread: uid1 !== lastMessage.sender.uid
    }
    updates[`users/${uid2}/privateChats/${uid1}`] = {
      lastMessage: lastMessage.content || '圖片', 
      lastMessageTime: Date.now(),
      unread: uid2 !== lastMessage.sender.uid
    }
    
    await update(ref(database), updates)
  }

  // 投票相關功能
  static async vote(roomId, messageId, optionIndex, userUid) {
    const voteRef = ref(database, `groupChats/${roomId}/messages/${messageId}/content/votes/${optionIndex}`)
    const voterRef = ref(database, `groupChats/${roomId}/messages/${messageId}/content/voters/${userUid}`)
    
    // 獲取當前票數
    const voteSnapshot = await get(voteRef)
    const currentVotes = voteSnapshot.val() || 0
    
    // 檢查用戶是否已經投票
    const voterSnapshot = await get(voterRef)
    if (voterSnapshot.exists()) {
      throw new Error('您已經投過票了')
    }
    
    // 更新票數和投票者記錄
    const updates = {}
    updates[`groupChats/${roomId}/messages/${messageId}/content/votes/${optionIndex}`] = currentVotes + 1
    updates[`groupChats/${roomId}/messages/${messageId}/content/voters/${userUid}`] = optionIndex
    
    await update(ref(database), updates)
  }
}

export class UserService {
  // 獲取用戶資料
  static async getUserData(uid) {
    const userRef = ref(database, `users/${uid}`)
    const snapshot = await get(userRef)
    return snapshot.exists() ? snapshot.val() : null
  }

  // 更新用戶資料
  static async updateUserData(uid, userData) {
    const userRef = ref(database, `users/${uid}`)
    await update(userRef, userData)
  }

  // 加為好友
  static async addFriend(currentUid, friendUid) {
    const updates = {}
    updates[`users/${currentUid}/friends/${friendUid}`] = true
    updates[`users/${friendUid}/friends/${currentUid}`] = true
    
    await update(ref(database), updates)
  }

  // 移除好友
  static async removeFriend(currentUid, friendUid) {
    const updates = {}
    updates[`users/${currentUid}/friends/${friendUid}`] = null
    updates[`users/${friendUid}/friends/${currentUid}`] = null
    
    await update(ref(database), updates)
  }

  // 獲取好友列表
  static async getFriends(uid) {
    const friendsRef = ref(database, `users/${uid}/friends`)
    const snapshot = await get(friendsRef)
    
    if (snapshot.exists()) {
      const friendUids = Object.keys(snapshot.val())
      const friends = []
      
      for (const friendUid of friendUids) {
        const userData = await this.getUserData(friendUid)
        if (userData) {
          friends.push({
            uid: friendUid,
            ...userData
          })
        }
      }
      
      return friends
    }
    return []
  }
}