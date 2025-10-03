// 簡化的通知工具類
class NotificationManager {
  constructor() {
    this.isSupported = 'Notification' in window
  }

  // 檢查是否有通知權限
  get hasPermission() {
    return this.isSupported && Notification.permission === 'granted'
  }

  // 請求通知權限
  async requestPermission() {
    if (!this.isSupported) {
      console.warn('🔔 此瀏覽器不支援桌面通知')
      return false
    }

    try {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    } catch (error) {
      console.error('🚨 請求通知權限時出錯:', error)
      return false
    }
  }

  // 顯示桌面通知
  showNotification(title, body = '', onClick = null) {
    if (!this.hasPermission) {
      // 如果沒有權限，使用內部通知系統
      if (window.showNotification) {
        window.showNotification(`${title}: ${body}`, 'info')
      }
      return null
    }

    const options = {
      body,
      icon: '/icon-512.png',
      tag: 'lalaland-message',
      requireInteraction: false,
      silent: false
    }

    try {
      const notification = new Notification(title, options)
      
      // 點擊通知時聚焦到窗口
      notification.onclick = () => {
        window.focus()
        if (onClick) onClick()
        notification.close()
      }

      // 自動關閉通知 (5秒後)
      setTimeout(() => {
        notification.close()
      }, 5000)

      return notification
    } catch (error) {
      console.error('🚨 顯示通知時出錯:', error)
      // 降級到內部通知
      if (window.showNotification) {
        window.showNotification(`${title}: ${body}`, 'info')
      }
      return null
    }
  }

  // 顯示訊息通知的簡化方法
  showMessageNotification(senderName, message, type = 'private') {
    const title = type === 'private' ? 
      `💬 ${senderName} 發送了私訊` : 
      `🏠 ${senderName} 發送了訊息`
    
    const body = message.length > 50 ? message.substring(0, 50) + '...' : message
    
    return this.showNotification(title, body, () => {
      // 點擊通知時聚焦到聊天
      window.focus()
    })
  }

  // 播放通知音效（簡化版）
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
}

// 創建全域通知管理器實例
export const notificationManager = new NotificationManager()

// 請求通知權限的輔助函數
export const requestNotificationPermission = async () => {
  return await notificationManager.requestPermission()
}

export default notificationManager