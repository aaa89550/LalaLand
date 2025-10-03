// 通知工具類
class NotificationManager {
  constructor() {
    this.permission = null
    this.isSupported = 'Notification' in window
    this.isEnabled = false
    this.listeners = new Set() // 狀態變化監聽器
    this.storageKey = 'lalaland_notification_settings'
    this.serviceWorkerRegistration = null
    this.pushSubscription = null
    
    // 從 localStorage 恢復設定
    this.loadSettings()
    
    // 註冊 Service Worker
    this.registerServiceWorker()
  }

  // 載入已保存的設定
  loadSettings() {
    try {
      const saved = localStorage.getItem(this.storageKey)
      if (saved) {
        const settings = JSON.parse(saved)
        this.isEnabled = settings.isEnabled === true // 明確檢查 true
        console.log('🔔 載入已保存的通知設定:', this.isEnabled)
      } else {
        this.isEnabled = true // 預設啟用
        console.log('🔔 使用預設通知設定: 啟用')
      }
    } catch (error) {
      console.warn('🔔 載入通知設定失敗，使用預設值:', error)
      this.isEnabled = true
    }
  }

  // 保存設定到 localStorage
  saveSettings() {
    try {
      const settings = {
        isEnabled: this.isEnabled,
        timestamp: Date.now()
      }
      localStorage.setItem(this.storageKey, JSON.stringify(settings))
    } catch (error) {
      console.warn('🔔 保存通知設定失敗:', error)
    }
  }

  // 添加狀態變化監聽器
  addListener(callback) {
    this.listeners.add(callback)
    // 立即回調當前狀態
    callback(this.getStatus())
    
    return () => {
      this.listeners.delete(callback)
    }
  }

  // 通知所有監聽器狀態變化
  notifyListeners() {
    const status = this.getStatus()
    this.listeners.forEach(callback => {
      try {
        callback(status)
      } catch (error) {
        console.error('🔔 通知監聽器回調錯誤:', error)
      }
    })
  }

  // 註冊 Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        this.serviceWorkerRegistration = registration
        console.log('✅ Service Worker 註冊成功')
        
        // 嘗試訂閱推播通知
        await this.subscribeToPush()
      } catch (error) {
        console.warn('⚠️ Service Worker 註冊失敗:', error)
      }
    }
  }

  // 訂閱推播通知
  async subscribeToPush() {
    if (!this.serviceWorkerRegistration || !('PushManager' in window)) {
      console.warn('⚠️ 不支援推播通知')
      return false
    }

    try {
      // 檢查是否已有訂閱
      let subscription = await this.serviceWorkerRegistration.pushManager.getSubscription()
      
      if (!subscription) {
        // 創建新的訂閱 (這裡需要 VAPID 公鑰，實際部署時需要配置)
        const publicVapidKey = 'YOUR_VAPID_PUBLIC_KEY' // 實際部署時需要替換
        
        subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(publicVapidKey)
        })
      }

      this.pushSubscription = subscription
      console.log('✅ 推播通知訂閱成功')
      return true
    } catch (error) {
      console.warn('⚠️ 推播通知訂閱失敗:', error)
      return false
    }
  }

  // 將 VAPID 公鑰轉換為 Uint8Array
  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  // 初始化通知系統
  async init() {
    if (!this.isSupported) {
      console.warn('🔔 此瀏覽器不支援桌面通知')
      return false
    }

    // 檢查當前權限狀態
    this.permission = Notification.permission
    console.log('🔔 初始化通知系統，權限狀態:', this.permission, 'isEnabled:', this.isEnabled);

    if (this.permission === 'granted') {
      console.log('✅ 通知權限已獲得')
      // 如果權限已授予但通知被關閉，保持用戶的選擇
      // 如果用戶之前沒有明確關閉，則預設啟用
      if (this.isEnabled !== false) {
        this.isEnabled = true
        this.saveSettings()
      }
      // 嘗試訂閱推播通知
      await this.subscribeToPush()
      this.notifyListeners()
      return true
    }

    if (this.permission === 'denied') {
      console.warn('❌ 通知權限被拒絕')
      this.isEnabled = false
      this.saveSettings()
      this.notifyListeners()
      return false
    }

    // 權限狀態為 'default'，需要請求權限
    console.log('⏳ 權限狀態為 default，等待用戶操作')
    this.notifyListeners()
    return false
  }

  // 請求通知權限
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission()
      this.permission = permission
      
      if (permission === 'granted') {
        console.log('✅ 用戶授予了通知權限')
        // 嘗試訂閱推播通知
        await this.subscribeToPush()
        this.saveSettings()
        this.notifyListeners()
        return true
      } else {
        console.log('❌ 用戶拒絕了通知權限')
        this.isEnabled = false
        this.saveSettings()
        this.notifyListeners()
        return false
      }
    } catch (error) {
      console.error('🚨 請求通知權限時出錯:', error)
      this.notifyListeners()
      return false
    }
  }

  // 切換通知開關
  async toggleEnabled() {
    if (!this.isSupported) {
      console.warn('🔔 此瀏覽器不支援桌面通知')
      return false
    }

    if (this.isEnabled) {
      // 關閉通知
      this.isEnabled = false
      this.saveSettings()
      this.notifyListeners()
      return true
    } else {
      // 開啟通知 - 需要檢查權限
      if (this.permission === 'granted') {
        this.isEnabled = true
        this.saveSettings()
        this.notifyListeners()
        return true
      } else {
        // 需要請求權限
        const granted = await this.requestPermission()
        if (granted) {
          this.isEnabled = true
        }
        return granted
      }
    }
  }

  // 設定通知開關狀態
  setEnabled(enabled) {
    if (!this.isSupported) {
      console.warn('🔔 此瀏覽器不支援桌面通知')
      return false
    }

    const oldEnabled = this.isEnabled
    this.isEnabled = enabled

    if (oldEnabled !== enabled) {
      this.saveSettings()
      this.notifyListeners()
    }

    return true
  }

  // 顯示桌面通知
  showNotification(title, options = {}) {
    console.log('🔔 showNotification 被調用:', { 
      title, 
      isEnabled: this.isEnabled, 
      isSupported: this.isSupported,
      permission: this.permission 
    });

    if (!this.isSupported) {
      console.warn('🔕 瀏覽器不支援通知')
      return null
    }

    if (!this.isEnabled) {
      console.warn('🔕 通知未啟用')
      return null
    }

    if (this.permission !== 'granted') {
      console.warn('🔕 通知權限未授予，當前狀態:', this.permission)
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
      console.log('✅ 嘗試創建通知:', title, defaultOptions);
      const notification = new Notification(title, defaultOptions)
      console.log('📬 通知創建成功:', notification);
      
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
    const title = `💬 ${senderName} 發送了私訊`
    const options = {
      body: message.length > 50 ? message.substring(0, 50) + '...' : message,
      icon: '/icon-512.png',
      tag: 'private-message',
      onClick
    }

    return this.showNotification(title, options)
  }

  // 顯示群組訊息通知  
  showGroupMessageNotification(senderName, roomName, message, onClick) {
    const title = `🏠 ${roomName} - ${senderName}`
    const options = {
      body: message.length > 50 ? message.substring(0, 50) + '...' : message,
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

  // 獲取完整狀態
  getStatus() {
    return {
      supported: this.isSupported,
      permission: this.permission,
      enabled: this.isEnabled,
      canNotify: this.isSupported && this.permission === 'granted' && this.isEnabled,
      serviceWorkerReady: !!this.serviceWorkerRegistration,
      pushSupported: 'PushManager' in window,
      pushSubscribed: !!this.pushSubscription
    }
  }

  // 獲取權限狀態 (向後相容)
  getPermissionStatus() {
    return this.getStatus()
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

export default notificationManager