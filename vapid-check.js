// VAPID 金鑰驗證工具
// 使用方法：在瀏覽器控制台中執行 window.checkVAPIDKey()

window.checkVAPIDKey = function() {
  console.log('🔍 VAPID 金鑰檢查開始...')
  
  const expectedConfig = {
    projectId: "lalaland-24931",
    messagingSenderId: "45134876312",
    vapidKey: "6VcIS3LHfhdZSsTZc_dy9gJVdNOZaUnRMFOv7Ys0G0I",
    publicKey: "BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw"
  }
  
  console.log('📋 預期設定:', expectedConfig)
  
  // 檢查 Firebase 設定
  if (window.firebase) {
    try {
      const app = window.firebase.app()
      const actualConfig = app.options
      console.log('🔧 實際 Firebase 設定:', {
        projectId: actualConfig.projectId,
        messagingSenderId: actualConfig.messagingSenderId,
        authDomain: actualConfig.authDomain
      })
      
      // 比對關鍵設定
      if (actualConfig.projectId !== expectedConfig.projectId) {
        console.error('❌ Project ID 不匹配!')
        console.log('   預期:', expectedConfig.projectId)
        console.log('   實際:', actualConfig.projectId)
      }
      
      if (actualConfig.messagingSenderId !== expectedConfig.messagingSenderId) {
        console.error('❌ Messaging Sender ID 不匹配!')
        console.log('   預期:', expectedConfig.messagingSenderId)  
        console.log('   實際:', actualConfig.messagingSenderId)
      }
      
    } catch (error) {
      console.error('❌ 無法取得 Firebase 設定:', error)
    }
  }
  
  // 檢查通知權限
  if ('Notification' in window) {
    console.log('🔔 通知權限狀態:', Notification.permission)
    
    if (Notification.permission === 'denied') {
      console.warn('⚠️ 通知權限被拒絕，需要在瀏覽器設定中重新啟用')
      console.log('💡 解決方案:')
      console.log('   1. 點擊網址列左側的鎖頭圖示')
      console.log('   2. 將通知設為「允許」')
      console.log('   3. 重新載入頁面')
    }
  }
  
  // 檢查 Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        console.log('📱 Service Worker 已註冊:', registration.scope)
        console.log('📱 SW 狀態:', registration.active ? '活躍' : '非活躍')
      } else {
        console.warn('⚠️ Service Worker 未註冊')
      }
    })
  }
  
  // 檢查環境
  console.log('🌐 環境檢查:', {
    protocol: location.protocol,
    hostname: location.hostname,
    isSecure: location.protocol === 'https:' || location.hostname === 'localhost',
    userAgent: navigator.userAgent.substring(0, 100) + '...'
  })
  
  console.log('✅ VAPID 金鑰檢查完成，請查看上述結果')
}