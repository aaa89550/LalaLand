// 通知工具類
class NotificationManager {
  constructor() {
    this.permission = null
    this.isSupported = 'Notification' in window
    this.isEnabled = false
  }

  // 初始化通知系統
  async init() {
    if (!this.isSupported) {
      console.warn('🔔 此瀏覽器不支援桌面通知')
      return false
    }

    // 檢查當前權限狀態
    this.permission = Notification.permission

    if (this.permission === 'granted') {
      this.isEnabled = true
      console.log('✅ 通知權限已獲得')
      return true
    }

    if (this.permission === 'denied') {
      console.warn('❌ 通知權限被拒絕')
      return false
    }

    // 權限狀態為 'default'，延遲到用戶登入後再請求
    console.log('⏳ 通知權限狀態為 default，等待用戶交互後請求權限')
    return false
  }

  // 請求通知權限
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission()
      this.permission = permission
      
      if (permission === 'granted') {
        this.isEnabled = true
        console.log('✅ 用戶授予了通知權限')
        return true
      } else {
        console.log('❌ 用戶拒絕了通知權限')
        return false
      }
    } catch (error) {
      console.error('🚨 請求通知權限時出錯:', error)
      return false
    }
  }

  // 顯示桌面通知
  showNotification(title, options = {}) {
    if (!this.isEnabled || !this.isSupported) {
      console.log('🔕 通知未啟用或不支援')
      return null
    }

    const defaultOptions = {
      icon: '/icon-512.png',
      badge: '/icon-512.png',
      tag: 'lalaland-message',
      renotify: true,
      requireInteraction: false,
      silent: false,
      ...options
    }

    try {
      const notification = new Notification(title, defaultOptions)
      
      // 點擊通知時聚焦到窗口
      notification.onclick = () => {
        window.focus()
        if (options.onClick) {
          options.onClick()
        }
        notification.close()
      }

      // 自動關閉通知 (5秒後)
      setTimeout(() => {
        notification.close()
      }, 5000)

      return notification
    } catch (error) {
      console.error('🚨 顯示通知時出錯:', error)
      return null
    }
  }

  // 顯示私訊通知
  showPrivateMessageNotification(senderName, message, onClick) {
    // 防護：確保參數存在
    if (!senderName) {
      console.warn('🚨 showPrivateMessageNotification: 缺少發送者名稱', { senderName, message })
      return null
    }

    // 安全處理訊息內容
    const messageText = message || '[無內容]'
    const safeMessage = typeof messageText === 'string' ? messageText : String(messageText)
    
    const title = `💬 ${senderName} 發送了私訊`
    const options = {
      body: safeMessage.length > 50 ? safeMessage.substring(0, 50) + '...' : safeMessage,
      icon: '/icon-512.png',
      tag: 'private-message',
      onClick
    }

    return this.showNotification(title, options)
  }

  // 顯示群組訊息通知  
  showGroupMessageNotification(senderName, roomName, message, onClick) {
    // 防護：確保參數存在
    if (!senderName || !roomName) {
      console.warn('🚨 showGroupMessageNotification: 缺少必要參數', { senderName, roomName, message })
      return null
    }

    // 安全處理訊息內容
    const messageText = message || '[無內容]'
    const safeMessage = typeof messageText === 'string' ? messageText : String(messageText)
    
    const title = `🏠 ${roomName} - ${senderName}`
    const options = {
      body: safeMessage.length > 50 ? safeMessage.substring(0, 50) + '...' : safeMessage,
      icon: '/icon-512.png',
      tag: 'group-message',
      onClick
    }

    return this.showNotification(title, options)
  }

  // 手機震動通知 (如果支援)
  vibrate(pattern = [200, 100, 200]) {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern)
    }
  }

  // 播放通知音效
  playNotificationSound() {
    try {
      // 創建簡單的音效
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)
    } catch (error) {
      console.log('🔇 無法播放通知音效:', error)
    }
  }

  // 獲取權限狀態
  getPermissionStatus() {
    return {
      supported: this.isSupported,
      permission: this.permission,
      enabled: this.isEnabled
    }
  }
}

// 創建全域通知管理器實例
export const notificationManager = new NotificationManager()

// 初始化通知系統的輔助函數
export const initNotifications = async () => {
  return await notificationManager.init()
}

// 請求通知權限的輔助函數
export const requestNotificationPermission = async () => {
  return await notificationManager.requestPermission()
}

// 在用戶登入後請求通知權限
export const setupNotificationsAfterLogin = async () => {
  console.log('🔔 設定登入後的通知權限...')
  
  if (!notificationManager.isSupported) {
    console.warn('🔔 此瀏覽器不支援桌面通知')
    return false
  }

  if (notificationManager.permission === 'granted') {
    console.log('✅ 通知權限已存在')
    return true
  }

  if (notificationManager.permission === 'denied') {
    console.warn('❌ 通知權限已被拒絕，無法啟用桌面通知')
    return false
  }

  // 延遲1秒後請求權限，讓用戶先完成登入流程
  setTimeout(async () => {
    console.log('🔔 即將請求桌面通知權限...')
    try {
      const granted = await notificationManager.requestPermission()
      if (granted) {
        console.log('🎉 桌面通知已啟用！')
        // 顯示一個測試通知
        notificationManager.showNotification('拉拉樂園', {
          body: '桌面通知已成功啟用！🎉',
          tag: 'welcome-notification'
        })
      }
    } catch (error) {
      console.error('🚨 請求通知權限失敗:', error)
    }
  }, 1000)
}

export default notificationManager