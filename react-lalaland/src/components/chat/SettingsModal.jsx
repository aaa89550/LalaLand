import React, { useState, useEffect } from 'react'
import { X, Bell, BellOff, User, Camera, Volume2, VolumeX, Smartphone } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { fcmManager } from '../../utils/fcmManager'
import toast from 'react-hot-toast'

const SettingsModal = ({ isOpen, onClose }) => {
  const { user, setUser } = useAuthStore()
  const [nickname, setNickname] = useState(user?.nickname || '')
  const [avatar, setAvatar] = useState(user?.avatar || '')
  const [tempNickname, setTempNickname] = useState(nickname)
  
  // 內部通知設定
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem('notificationSound') !== 'false'
  )
  const [desktopNotificationEnabled, setDesktopNotificationEnabled] = useState(
    localStorage.getItem('desktopNotification') !== 'false'
  )
  const [fcmEnabled, setFCMEnabled] = useState(false)

  // 檢查 FCM 狀態
  useEffect(() => {
    if (isOpen) {
      setFCMEnabled(fcmManager.isEnabled())
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setTempNickname(user?.nickname || '')
      setAvatar(user?.avatar || '')
    }
  }, [isOpen, user])

  if (!isOpen) return null

  const handleSave = async () => {
    try {
      // 更新用戶資料
      const updatedUser = {
        ...user,
        nickname: tempNickname || '匿名用戶',
        avatar: avatar
      }
      
      setUser(updatedUser)
      
      // TODO: 這裡可以添加更新 Firebase 用戶資料的邏輯
      console.log('💾 保存設定:', {
        nickname: tempNickname,
        avatar,
        notifications: notificationsEnabled
      })
      
      onClose()
    } catch (error) {
      console.error('保存設定失敗:', error)
    }
  }

  // 切換聲音通知
  const toggleSoundNotification = () => {
    const newSoundEnabled = !soundEnabled
    setSoundEnabled(newSoundEnabled)
    localStorage.setItem('notificationSound', newSoundEnabled.toString())
    toast.success(newSoundEnabled ? '🔊 提示音已開啟' : '🔇 提示音已關閉')
  }

  // 切換桌面通知
  const toggleDesktopNotification = async () => {
    try {
      if (!desktopNotificationEnabled) {
        // 啟用桌面通知，需要請求權限
        if (!('Notification' in window)) {
          toast.error('❌ 此瀏覽器不支援通知')
          return
        }

        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
          toast.error('❌ 通知權限被拒絕')
          return
        }

        setDesktopNotificationEnabled(true)
        localStorage.setItem('desktopNotification', 'true')
        toast.success('🔔 桌面通知已啟用')
        
        // 顯示測試通知
        if (window.showNotification) {
          window.showNotification('桌面通知已啟用！', 'success')
        }
      } else {
        setDesktopNotificationEnabled(false)
        localStorage.setItem('desktopNotification', 'false')
        toast.success('🔕 桌面通知已關閉')
      }
    } catch (error) {
      console.error('切換桌面通知設定失敗:', error)
      toast.error('❌ 桌面通知設定失敗')
    }
  }

  // 切換 FCM 推播通知
  const toggleFCMNotification = async () => {
    try {
      if (!fcmEnabled) {
        // 啟用 FCM 推播通知
        if (!fcmManager.isSupported) {
          toast.error('❌ 此瀏覽器不支援推播通知')
          return
        }

        if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
          toast.error('❌ 推播通知需要 HTTPS 環境')
          return
        }

        const token = await fcmManager.requestPermission(user?.uid)
        if (token) {
          setFCMEnabled(true)
          toast.success('🚀 推播通知已啟用！')
          
          // 顯示測試通知
          if (window.showNotification) {
            window.showNotification('🚀 FCM 推播通知已啟用！現在即使關閉瀏覽器也能收到通知。', 'success', 8000)
          }
        } else {
          toast.error('❌ 推播通知權限被拒絕')
        }
      } else {
        // 停用 FCM 推播通知
        await fcmManager.disable()
        setFCMEnabled(false)
        toast.success('🔕 推播通知已關閉')
      }
    } catch (error) {
      console.error('切換 FCM 推播設定失敗:', error)
      toast.error('❌ 推播通知設定失敗')
    }
  }

  const generateRandomAvatar = () => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(tempNickname || '匿名')}&background=56c596&color=fff&size=128`
    setAvatar(avatarUrl)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* 標題列 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">設定</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* 內容 */}
        <div className="p-6 space-y-6">
          {/* 個人資料 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">個人資料</h3>
            
            {/* 頭像 */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(tempNickname || '匿名')}&background=56c596&color=fff&size=64`}
                alt="頭像"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <button
                  onClick={generateRandomAvatar}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                  更換頭像
                </button>
                <p className="text-xs text-gray-500 mt-1">點擊生成新的頭像</p>
              </div>
            </div>

            {/* 暱稱 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                暱稱
              </label>
              <input
                type="text"
                value={tempNickname}
                onChange={(e) => setTempNickname(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="輸入你的暱稱"
                maxLength={20}
              />
            </div>
          </div>

          {/* 通知設定 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">通知設定</h3>
            
            {/* 提示音設定 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-green-500" />
                ) : (
                  <VolumeX className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">提示音</p>
                  <p className="text-sm text-gray-500">收到新訊息時播放提示音</p>
                </div>
              </div>
              <button
                onClick={toggleSoundNotification}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  soundEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    soundEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* 桌面通知設定 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {desktopNotificationEnabled ? (
                  <Bell className="w-5 h-5 text-green-500" />
                ) : (
                  <BellOff className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">桌面通知</p>
                  <p className="text-sm text-gray-500">在瀏覽器中顯示通知泡泡</p>
                </div>
              </div>
              <button
                onClick={toggleDesktopNotification}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  desktopNotificationEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    desktopNotificationEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* FCM 推播通知設定 */}
            <div className="flex items-center justify-between mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                {fcmEnabled ? (
                  <Smartphone className="w-5 h-5 text-blue-500" />
                ) : (
                  <Smartphone className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">推播通知 (FCM)</p>
                  <p className="text-sm text-gray-500">即使關閉瀏覽器也能收到通知</p>
                </div>
              </div>
              <button
                onClick={toggleFCMNotification}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  fcmEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    fcmEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* 其他設定 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">其他</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• 版本: 1.0.0</p>
              <p>• React 聊天室</p>
              <p>• 支援即時通訊和檔案分享</p>
            </div>
          </div>
        </div>

        {/* 按鈕區 */}
        <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal