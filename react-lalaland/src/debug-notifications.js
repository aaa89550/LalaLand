// 臨時測試檔案 - 用於除錯通知問題
// 請在瀏覽器控制台中執行這些函數來測試

// 測試 Firebase 連接
window.testFirebaseConnection = function() {
  console.log('🔥 測試 Firebase 連接...')
  
  // 導入 Firebase 相關模組
  import('./config/firebase.js').then(({ database }) => {
    import('firebase/database').then(({ ref, onValue }) => {
      console.log('✅ Firebase 模組載入成功')
      
      // 測試監聽 users 節點
      const usersRef = ref(database, 'users')
      console.log('👥 開始監聽 users 節點...')
      
      const unsubscribe = onValue(usersRef, (snapshot) => {
        const data = snapshot.val()
        console.log('📊 Users 資料:', Object.keys(data || {}).length, '位用戶')
      }, (error) => {
        console.error('❌ Firebase 監聽錯誤:', error)
      })
      
      // 3秒後停止監聽
      setTimeout(() => {
        unsubscribe()
        console.log('🛑 停止測試監聽')
      }, 3000)
    })
  })
}

// 測試通知系統
window.testNotificationSystem = function() {
  console.log('🔔 測試通知系統...')
  
  // 測試內部通知
  if (window.showNotification) {
    console.log('✅ 內部通知系統正常')
    window.showNotification('測試內部通知', 'info')
  } else {
    console.error('❌ window.showNotification 不存在')
  }
  
  // 測試桌面通知權限
  if ('Notification' in window) {
    console.log('🖥️ 桌面通知權限:', Notification.permission)
  } else {
    console.error('❌ 瀏覽器不支援桌面通知')
  }
}

// 測試私聊監聽器
window.testPrivateChatListener = function(userId1, userId2) {
  if (!userId1 || !userId2) {
    console.error('❌ 請提供兩個用戶 ID')
    return
  }
  
  console.log(`💬 測試私聊監聽器: ${userId1} <-> ${userId2}`)
  
  import('./config/firebase.js').then(({ database }) => {
    import('firebase/database').then(({ ref, onValue }) => {
      // 生成聊天室 ID
      const chatIds = [userId1, userId2].sort()
      const chatId = `${chatIds[0]}_${chatIds[1]}`
      const messagesRef = ref(database, `privateChats/${chatId}/messages`)
      
      console.log(`📡 監聽私聊路徑: privateChats/${chatId}/messages`)
      
      const unsubscribe = onValue(messagesRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          const messages = Object.entries(data)
          console.log(`📨 收到 ${messages.length} 條私聊訊息`)
        } else {
          console.log('📭 沒有私聊訊息')
        }
      }, (error) => {
        console.error('❌ 私聊監聽錯誤:', error)
      })
      
      // 10秒後停止監聽
      setTimeout(() => {
        unsubscribe()
        console.log('🛑 停止私聊測試監聽')
      }, 10000)
    })
  })
}

console.log(`
🧪 通知除錯工具已載入！

可用函數：
- testFirebaseConnection() - 測試 Firebase 連接
- testNotificationSystem() - 測試通知系統
- testPrivateChatListener(userId1, userId2) - 測試私聊監聽器

使用方法：
1. 在瀏覽器控制台執行 testFirebaseConnection()
2. 執行 testNotificationSystem()  
3. 使用您的用戶 ID 執行 testPrivateChatListener('yourId', 'friendId')
`)