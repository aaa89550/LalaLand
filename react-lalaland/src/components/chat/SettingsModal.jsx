import React, { useState, useEffect } from 'react'
import { X, Bell, BellOff, User, Camera } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { notificationManager, requestNotificationPermission } from '../../utils/notificationManager'
import toast from 'react-hot-toast'

const SettingsModal = ({ isOpen, onClose }) => {
  const { user, setUser } = useAuthStore()
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [nickname, setNickname] = useState(user?.nickname || '')
  const [avatar, setAvatar] = useState(user?.avatar || '')
  const [tempNickname, setTempNickname] = useState(nickname)

  useEffect(() => {
    const checkNotificationStatus = async () => {
      if (!isOpen) return;
      
      // 檢查瀏覽器通知權限
      const permission = 'Notification' in window ? Notification.permission : 'default';
      
      if (permission === 'granted' && 'serviceWorker' in navigator) {
        try {
          const reg = await navigator.serviceWorker.ready;
          const sub = await reg.pushManager.getSubscription();
          setNotificationsEnabled(!!sub);
        } catch (error) {
          console.warn('檢查推播訂閱失敗:', error);
          setNotificationsEnabled(false);
        }
      } else {
        setNotificationsEnabled(false);
      }
    };
    
    checkNotificationStatus();
  }, [isOpen])

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

  const toggleNotifications = async () => {
    try {
      if (!notificationsEnabled) {
        // 啟用推播通知
        if (!('Notification' in window)) {
          toast.error('❌ 此瀏覽器不支援通知');
          return;
        }
        
        if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
          toast.error('❌ 通知/推播需要 HTTPS');
          return;
        }

        // 請求權限
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          toast.error('❌ 通知權限被拒絕');
          return;
        }

        // 訂閱推播
        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.ready;
          
          // 檢查是否已有訂閱
          const existingSub = await reg.pushManager.getSubscription();
          if (!existingSub) {
            // 暫時跳過 VAPID 訂閱，因為需要真實的公鑰
            console.log('通知權限已授予，但跳過推播訂閱（需要 VAPID 配置）');
          }
        }
        
        setNotificationsEnabled(true);
        toast.success('🔔 通知已啟用！');
      } else {
        // 停用推播通知
        if ('serviceWorker' in navigator) {
          try {
            const reg = await navigator.serviceWorker.ready;
            const sub = await reg.pushManager.getSubscription();
            if (sub) {
              await sub.unsubscribe();
            }
          } catch (error) {
            console.warn('取消推播訂閱失敗:', error);
          }
        }
        
        setNotificationsEnabled(false);
        toast.success('🔕 通知已關閉');
      }
    } catch (error) {
      console.error('切換通知設定失敗:', error);
      toast.error('❌ 通知設定失敗');
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
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {notificationsEnabled ? (
                  <Bell className="w-5 h-5 text-green-500" />
                ) : (
                  <BellOff className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">推送通知</p>
                  <p className="text-sm text-gray-500">接收新訊息通知</p>
                </div>
              </div>
              <button
                onClick={toggleNotifications}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationsEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
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