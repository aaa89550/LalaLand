// fcmManager.js - Firebase Cloud Messaging 管理器
import { getToken, onMessage } from 'firebase/messaging'
import { messaging } from '../config/firebase'
import { ref, set, push } from 'firebase/database'
import { database } from '../config/firebase'

// VAPID 金鑰
const VAPID_KEY = '6VcIS3LHfhdZSsTZc_dy9gJVdNOZaUnRMFOv7Ys0G0I'

class FCMManager {
  constructor() {
    this.fcmToken = null
    this.isSupported = this.checkFCMSupport()
    this.isInitialized = false
  }

  // 檢查 FCM 支援
  checkFCMSupport() {
    return !!(
      messaging && 
      'serviceWorker' in navigator && 
      'PushManager' in window &&
      'Notification' in window
    )
  }

  // 初始化 FCM
  async initialize() {
    if (!this.isSupported) {
      console.warn('🚫 FCM 不支援此瀏覽器')
      return false
    }

    try {
      // 註冊 Service Worker
      await this.registerServiceWorker()
      
      // 設置前景訊息監聽器
      this.setupForegroundListener()
      
      this.isInitialized = true
      console.log('✅ FCM 初始化成功')
      return true
    } catch (error) {
      console.error('❌ FCM 初始化失敗:', error)
      return false
    }
  }

  // 註冊 Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
        console.log('✅ FCM Service Worker 註冊成功:', registration)
        return registration
      } catch (error) {
        console.error('❌ FCM Service Worker 註冊失敗:', error)
        throw error
      }
    }
  }

  // 檢查和診斷 FCM 環境
  async diagnoseEnvironment() {
    const diagnosis = {
      https: location.protocol === 'https:' || location.hostname === 'localhost',
      serviceWorker: 'serviceWorker' in navigator,
      pushManager: 'PushManager' in window,
      notification: 'Notification' in window,
      messaging: !!messaging,
      permission: Notification.permission,
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    console.log('🔍 FCM 環境診斷:', diagnosis)
    return diagnosis
  }

  // 請求通知權限並取得 FCM Token
  async requestPermission(userId = null) {
    // 先診斷環境
    const diagnosis = await this.diagnoseEnvironment()
    
    if (!this.isSupported) {
      const missingFeatures = []
      if (!diagnosis.serviceWorker) missingFeatures.push('Service Worker')
      if (!diagnosis.pushManager) missingFeatures.push('Push Manager')
      if (!diagnosis.notification) missingFeatures.push('Notification API')
      if (!diagnosis.messaging) missingFeatures.push('Firebase Messaging')
      
      console.error('🚫 FCM 不支援，缺少功能:', missingFeatures.join(', '))
      throw new Error(`瀏覽器不支援推播通知，缺少: ${missingFeatures.join(', ')}`)
    }

    if (!this.isInitialized) {
      console.warn('🚫 FCM 未初始化，嘗試重新初始化...')
      const initSuccess = await this.initialize()
      if (!initSuccess) {
        throw new Error('FCM 初始化失敗')
      }
    }

    // 檢查 HTTPS 環境
    if (!diagnosis.https) {
      throw new Error('推播通知需要 HTTPS 環境或 localhost')
    }

    try {
      // 檢查當前權限狀態
      console.log('📋 當前通知權限狀態:', Notification.permission)

      // 如果權限已被拒絕，提供重設指引
      if (Notification.permission === 'denied') {
        throw new Error('通知權限已被拒絕。請在瀏覽器設定中重新允許通知權限。')
      }

      // 請求通知權限
      console.log('🔔 請求通知權限...')
      const permission = await Notification.requestPermission()
      console.log('📋 權限請求結果:', permission)

      if (permission !== 'granted') {
        if (permission === 'denied') {
          throw new Error('通知權限被拒絕。請檢查瀏覽器設定並重新允許通知。')
        } else {
          throw new Error('通知權限未獲得授予。')
        }
      }

      // 取得 FCM Token
      console.log('🎫 取得 FCM Token...')
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY
      })

      if (token) {
        console.log('✅ FCM Token 取得成功:', token)
        this.fcmToken = token
        
        // 如果有用戶 ID，將 token 存到資料庫
        if (userId) {
          await this.saveFCMToken(userId, token)
        }
        
        return token
      } else {
        console.warn('❌ 無法取得 FCM Token')
        return null
      }
    } catch (error) {
      console.error('❌ FCM 權限請求失敗:', error)
      return null
    }
  }

  // 儲存 FCM Token 到資料庫
  async saveFCMToken(userId, token) {
    try {
      const tokenRef = ref(database, `fcmTokens/${userId}`)
      await set(tokenRef, {
        token,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      })
      console.log('✅ FCM Token 已儲存到資料庫')
    } catch (error) {
      console.error('❌ 儲存 FCM Token 失敗:', error)
    }
  }

  // 設置前景訊息監聽器
  setupForegroundListener() {
    if (!messaging) return

    onMessage(messaging, (payload) => {
      console.log('🔔 FCM 前景訊息:', payload)

      const { title, body } = payload.notification || {}
      
      // 顯示內部通知
      if (window.showNotification) {
        window.showNotification(
          title ? `${title}: ${body}` : body || '新訊息',
          'info',
          6000
        )
      }

      // 播放提示音
      this.playNotificationSound()

      // 如果頁面不在前景，顯示桌面通知
      if (document.hidden || document.visibilityState === 'hidden') {
        this.showDesktopNotification(title || '新訊息', body || '您有新的訊息')
      }
    })
  }

  // 顯示桌面通知
  showDesktopNotification(title, body) {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body,
        icon: '/icon-512.png',
        badge: '/icon-512.png',
        tag: 'lalaland-fcm'
      })

      notification.onclick = () => {
        window.focus()
        notification.close()
      }

      // 5秒後自動關閉
      setTimeout(() => {
        notification.close()
      }, 5000)
    }
  }

  // 播放提示音
  playNotificationSound() {
    const soundEnabled = localStorage.getItem('notificationSound') !== 'false'
    if (!soundEnabled) return

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 800
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.log('🔇 無法播放通知音效:', error)
    }
  }

  // 取得當前 Token
  getCurrentToken() {
    return this.fcmToken
  }

  // 檢查是否已啟用
  isEnabled() {
    return !!(this.fcmToken && Notification.permission === 'granted')
  }

  // 停用 FCM
  async disable() {
    try {
      if (messaging && this.fcmToken) {
        // 可以在這裡刪除伺服器端的 token
        console.log('🔕 FCM 已停用')
      }
      this.fcmToken = null
    } catch (error) {
      console.error('❌ 停用 FCM 失敗:', error)
    }
  }
}

// 創建全域 FCM 管理器實例
export const fcmManager = new FCMManager()

export default fcmManager