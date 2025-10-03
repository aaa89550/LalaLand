// NotificationSystem.jsx - 簡化的內部通知系統
import React, { useState, useEffect, useCallback } from 'react';

let notificationId = 0;

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem('notificationSound') !== 'false'
  );

  // 新增通知的方法
  const addNotification = useCallback((message, type = 'info', duration = 5000) => {
    const id = ++notificationId;
    const notification = {
      id,
      message,
      type, // 'info', 'success', 'warning', 'error'
      timestamp: Date.now()
    };

    setNotifications(prev => [...prev, notification]);

    // 播放提示音
    if (soundEnabled && type !== 'info') {
      playNotificationSound();
    }

    // 自動移除通知
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, [soundEnabled]);

  // 移除通知
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // 播放提示音
  const playNotificationSound = () => {
    try {
      // 創建簡單的提示音
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('無法播放提示音:', error);
    }
  };

  // 切換聲音設定
  const toggleSound = () => {
    const newSoundEnabled = !soundEnabled;
    setSoundEnabled(newSoundEnabled);
    localStorage.setItem('notificationSound', newSoundEnabled.toString());
  };

  // 將 addNotification 方法掛載到全域，供其他元件使用
  useEffect(() => {
    window.showNotification = addNotification;
    return () => {
      delete window.showNotification;
    };
  }, [addNotification]);

  const getNotificationStyle = (type) => {
    const baseStyle = "mb-2 p-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out";
    const typeStyles = {
      info: "bg-blue-500 text-white",
      success: "bg-green-500 text-white", 
      warning: "bg-yellow-500 text-black",
      error: "bg-red-500 text-white"
    };
    return `${baseStyle} ${typeStyles[type] || typeStyles.info}`;
  };

  return (
    <>
      {/* 通知氣泡容器 - 固定在右上角 */}
      <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={getNotificationStyle(notification.type)}
            onClick={() => removeNotification(notification.id)}
          >
            <div className="flex justify-between items-start">
              <p className="flex-1 text-sm font-medium">
                {notification.message}
              </p>
              <button
                className="ml-2 text-lg leading-none opacity-70 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  removeNotification(notification.id);
                }}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 聲音設定控制 - 可以在設定選單中使用 */}
      <div className="notification-settings" style={{ display: 'none' }}>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={toggleSound}
          />
          <span>啟用通知提示音</span>
        </label>
      </div>
    </>
  );
}
