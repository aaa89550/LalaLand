import { ref, get } from 'firebase/database'
import { database } from '../config/firebase'
import { useAuthStore } from '../store/authStore'

export const useFirebaseDebug = () => {
  const { user } = useAuthStore()

  const testFirebaseConnection = async () => {
    if (!user) {
      console.log('❌ 沒有登入用戶')
      return
    }

    console.log('🧪 開始 Firebase 連接測試...')
    console.log('👤 當前用戶:', user.uid)

    try {
      // 測試 1: 檢查用戶資料
      console.log('🧪 測試 1: 檢查用戶基本資料')
      const userRef = ref(database, `users/${user.uid}`)
      const userSnapshot = await get(userRef)
      console.log('📊 用戶資料存在:', userSnapshot.exists())
      if (userSnapshot.exists()) {
        console.log('📋 用戶資料:', userSnapshot.val())
      }

      // 測試 2: 檢查好友資料
      console.log('🧪 測試 2: 檢查好友資料')
      const friendsRef = ref(database, `users/${user.uid}/friends`)
      const friendsSnapshot = await get(friendsRef)
      console.log('👥 好友資料存在:', friendsSnapshot.exists())
      if (friendsSnapshot.exists()) {
        console.log('📋 好友資料:', friendsSnapshot.val())
      }

      // 測試 3: 列出所有用戶 (檢查是否有其他用戶)
      console.log('🧪 測試 3: 檢查所有用戶')
      const allUsersRef = ref(database, 'users')
      const allUsersSnapshot = await get(allUsersRef)
      if (allUsersSnapshot.exists()) {
        const allUsers = allUsersSnapshot.val()
        console.log('👥 所有用戶列表:', Object.keys(allUsers))
        
        // 檢查示例用戶是否存在
        const testUserId = 'ykw8Q4X6sMNFKNhCeXw5SwUORwd2'
        if (allUsers[testUserId]) {
          console.log('✅ 找到示例用戶:', allUsers[testUserId])
        }
      }

      // 測試 4: 檢查私聊資料
      console.log('🧪 測試 4: 檢查私聊資料')
      const privateChatRef = ref(database, 'privateChats')
      const privateChatSnapshot = await get(privateChatRef)
      if (privateChatSnapshot.exists()) {
        const privateChats = privateChatSnapshot.val()
        console.log('💬 所有私聊房間:', Object.keys(privateChats))
        
        // 檢查是否有包含當前用戶的私聊
        const userPrivateChats = Object.keys(privateChats).filter(roomId => 
          roomId.includes(user.uid)
        )
        console.log('💬 包含當前用戶的私聊:', userPrivateChats)
        
        // 檢查示例私聊房間
        const testRoomId = Object.keys(privateChats).find(roomId => 
          roomId.includes('ykw8Q4X6sMNFKNhCeXw5SwUORwd2')
        )
        if (testRoomId) {
          console.log('💬 找到示例私聊房間:', testRoomId)
          const testRoomData = privateChats[testRoomId]
          if (testRoomData.messages) {
            console.log('📝 示例房間訊息數量:', Object.keys(testRoomData.messages).length)
          }
        }
      }

    } catch (error) {
      console.error('❌ Firebase 測試失敗:', error)
      if (error.code === 'PERMISSION_DENIED') {
        console.error('🚫 權限被拒絕 - 用戶可能沒有正確認證')
      }
    }
  }

  return { testFirebaseConnection }
}