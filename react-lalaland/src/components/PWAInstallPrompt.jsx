// PWAInstallPrompt.jsx - PWA 安裝提示組件
import React, { useState, useEffect } from 'react';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 檢測設備類型
    const detectDevice = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = /ipad|iphone|ipod/.test(userAgent);
      const isStandaloneMode = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
      
      setIsIOS(isIOSDevice);
      setIsStandalone(isStandaloneMode);
      setIsInstalled(isStandaloneMode);
    };

    // 監聽 PWA 安裝提示事件
    const handleBeforeInstallPrompt = (e) => {
      console.log('💻 PWA 安裝提示事件觸發');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // 監聽 PWA 安裝完成事件
    const handleAppInstalled = () => {
      console.log('✅ PWA 已安裝');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    detectDevice();

    // 延遲顯示安裝提示（避免干擾用戶體驗）
    const showPromptTimer = setTimeout(() => {
      if (!isInstalled && !isStandalone) {
        console.log('💡 顯示 PWA 安裝提示');
      }
    }, 10000); // 10秒後顯示

    // 添加事件監聽器
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(showPromptTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled, isStandalone]);

  // 處理安裝點擊
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      console.log('🚀 開始 PWA 安裝流程');
      const result = await deferredPrompt.prompt();
      console.log('📱 用戶選擇:', result.outcome);
      
      if (result.outcome === 'accepted') {
        console.log('✅ 用戶接受 PWA 安裝');
      } else {
        console.log('❌ 用戶拒絕 PWA 安裝');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error('❌ PWA 安裝失敗:', error);
    }
  };

  // 關閉提示
  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // 24小時後重新顯示
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // 檢查是否應該顯示提示
  const shouldShowPrompt = () => {
    if (isInstalled || isStandalone) return false;
    
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const hoursSinceLastDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      if (hoursSinceLastDismiss < 24) return false;
    }
    
    return showInstallPrompt || isIOS;
  };

  if (!shouldShowPrompt()) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm">
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up">
        <div className="flex items-start gap-3">
          {/* 圖示 */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* 內容 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              安裝 LalaLand 應用程式
            </h3>
            
            {isIOS ? (
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                在 Safari 中點選 <span className="font-semibold">分享按鈕</span>，然後選擇 
                <span className="font-semibold">「加入主畫面」</span> 以獲得更好的通知體驗
              </p>
            ) : (
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                安裝為應用程式，享受更快的載入速度和更可靠的通知功能
              </p>
            )}

            {/* 按鈕 */}
            <div className="flex gap-2">
              {!isIOS && (
                <button
                  onClick={handleInstallClick}
                  className="flex-1 bg-primary-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-primary-700 transition-colors"
                  disabled={!deferredPrompt}
                >
                  立即安裝
                </button>
              )}
              
              <button
                onClick={handleDismiss}
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                稍後再說
              </button>
            </div>
          </div>

          {/* 關閉按鈕 */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;