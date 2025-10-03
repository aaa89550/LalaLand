import React, { useState, useEffect } from 'react';
import { notificationManager } from '../utils/notificationManager';
import { Bell, BellOff } from 'lucide-react';

const NotificationSystem = () => {
  const [notificationStatus, setNotificationStatus] = useState({
    supported: false,
    permission: 'default',
    enabled: false,
    canNotify: false
  });
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    // 訂閱通知狀態變化
    const unsubscribe = notificationManager.addListener((status) => {
      setNotificationStatus(status);
    });

    return unsubscribe;
  }, []);

  const handleToggleNotifications = async () => {
    setIsToggling(true);
    try {
      const success = await notificationManager.toggleEnabled();
      if (!success && notificationStatus.permission === 'denied') {
        alert('通知權限被拒絕。請在瀏覽器設定中手動開啟通知權限。');
      }
    } catch (error) {
      console.error('切換通知設定時發生錯誤:', error);
    } finally {
      setIsToggling(false);
    }
  };



  if (!notificationStatus.supported) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          ⚠️ 您的瀏覽器不支援桌面通知功能
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {notificationStatus.enabled ? (
            <Bell className="h-5 w-5 text-green-600" />
          ) : (
            <BellOff className="h-5 w-5 text-gray-400" />
          )}
          <span className="font-medium text-gray-900">
            桌面通知
          </span>
        </div>
        
        <button
          onClick={handleToggleNotifications}
          disabled={isToggling}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${notificationStatus.enabled
              ? 'bg-red-100 text-red-700 hover:bg-red-200'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
            }
            ${isToggling ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {isToggling ? '處理中...' : (
            notificationStatus.enabled ? '關閉通知' : '開啟通知'
          )}
        </button>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">權限狀態:</span>{' '}
          <span className={`
            ${notificationStatus.permission === 'granted' ? 'text-green-600' : 
              notificationStatus.permission === 'denied' ? 'text-red-600' : 'text-yellow-600'}
          `}>
            {notificationStatus.permission === 'granted' ? '已授權' :
             notificationStatus.permission === 'denied' ? '已拒絕' : '未設定'}
          </span>
        </p>
        <p>
          <span className="font-medium">通知狀態:</span>{' '}
          <span className={notificationStatus.canNotify ? 'text-green-600' : 'text-gray-600'}>
            {notificationStatus.canNotify ? '可正常接收通知' : '無法接收通知'}
          </span>
        </p>
      </div>

      {notificationStatus.permission === 'denied' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-red-800 text-sm">
            ❌ 通知權限被拒絕。請在瀏覽器設定中手動開啟本網站的通知權限。
          </p>
        </div>
      )}


    </div>
  );
};

export default NotificationSystem;
