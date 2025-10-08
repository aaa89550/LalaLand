// PWAInstallPrompt.jsx - PWA 安裝提示組件
import React, { useState, useEffect } from 'react';

const PWAInstallPrompt = ({ user = null }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

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
      // 不要立即顯示，等用戶登入後再顯示
    };

    // 監聽 PWA 安裝完成事件
    const handleAppInstalled = () => {
      console.log('✅ PWA 已安裝');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    detectDevice();
    
    console.log('🔍 PWA 安裝提示初始化:', {
      isIOSDevice: /ipad|iphone|ipod/.test(window.navigator.userAgent.toLowerCase()),
      isStandaloneMode: window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches,
      hostname: window.location.hostname
    });

    // 登入後顯示安裝提示
    const showPromptTimer = setTimeout(() => {
      if (!isInstalled && !isStandalone) {
        console.log('💡 顯示 PWA 安裝提示（登入後推薦）');
        setShowInstallPrompt(true);
      } else {
        console.log('ℹ️ PWA 已安裝或在獨立模式，不顯示安裝提示');
      }
    }, 3000); // 3秒後顯示，給用戶適應時間

    // 添加事件監聽器
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(showPromptTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled, isStandalone]);

  // 監聽用戶登入狀態變化
  useEffect(() => {
    console.log('🔍 PWA 安裝提示狀態檢查:', {
      user: !!user,
      userName: user?.displayName || user?.email || '未知',
      isInstalled,
      isStandalone,
      showInstallPrompt,
      deferredPrompt: !!deferredPrompt
    });

    if (user && !isInstalled && !isStandalone) {
      console.log('👤 用戶登入，準備觸發 PWA 安裝提示');
      
      // 用戶登入後立即檢查是否可以顯示安裝提示
      const loginPromptTimer = setTimeout(() => {
        // 檢查是否已經顯示過或安裝過
        const dismissed = localStorage.getItem('pwa-install-dismissed');
        console.log('💾 檢查本地存儲:', { dismissed, timestamp: dismissed ? new Date(parseInt(dismissed)).toLocaleString() : '無' });
        
        if (dismissed) {
          const dismissedTime = parseInt(dismissed);
          const hoursSinceLastDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60);
          console.log('⏰ 距離上次關閉:', hoursSinceLastDismiss.toFixed(1), '小時');
          
          if (hoursSinceLastDismiss < 1) { // 1小時內不重複顯示
            console.log('⏰ 最近已顯示過安裝提示，暫不重複顯示');
            return;
          }
        }
        
        console.log('💡 用戶登入後顯示 PWA 安裝提示');
        setShowInstallPrompt(true);
      }, 2000); // 改為 2 秒，更快顯示

      return () => clearTimeout(loginPromptTimer);
    }
  }, [user, isInstalled, isStandalone, deferredPrompt]);

  // 處理安裝點擊
  const handleInstallClick = async () => {
    console.log('🖱️ 安裝按鈕被點擊', {
      isIOS,
      deferredPrompt: !!deferredPrompt,
      isInstalled,
      isStandalone
    });

    if (isIOS) {
      // iOS 設備顯示安裝說明
      console.log('📱 iOS 設備，顯示安裝說明');
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) {
      console.log('⚠️ 無法觸發安裝提示，可能原因:');
      console.log('1. 瀏覽器不支援 PWA 安裝');
      console.log('2. 應用程式已經安裝');
      console.log('3. beforeinstallprompt 事件未觸發');
      console.log('4. 在開發環境中（localhost）可能不會觸發');
      
      // 在開發環境提供替代方案
      if (window.location.hostname === 'localhost') {
        console.log('🛠️ 開發環境：提供手動安裝說明');
        alert('開發環境提示：\n\n在生產環境中，此按鈕會觸發瀏覽器原生的 PWA 安裝提示。\n\n手動安裝方式：\n1. 在 Chrome 中：點擊網址列右側的安裝圖示\n2. 在 Edge 中：點擊選單 > 應用程式 > 將此網站安裝為應用程式');
      }
      return;
    }

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
    // 30分鐘後重新顯示（方便測試）
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    console.log('📱 PWA 安裝提示已關閉，30分鐘後可重新顯示');
  };

  // 測試功能：強制顯示提示
  const forceShowPrompt = () => {
    console.log('🧪 強制顯示 PWA 安裝提示');
    localStorage.removeItem('pwa-install-dismissed');
    setShowInstallPrompt(true);
  };

  // 暴露到全域供測試使用
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.forcePWAPrompt = forceShowPrompt;
      window.pwaPromptStatus = {
        user: !!user,
        isInstalled,
        isStandalone,
        showInstallPrompt,
        deferredPrompt: !!deferredPrompt,
        isIOS
      };
    }
  }, [user, isInstalled, isStandalone, showInstallPrompt, deferredPrompt, isIOS]);

  // 檢查是否應該顯示提示
  const shouldShowPrompt = () => {
    console.log('🔍 shouldShowPrompt 檢查:', {
      isInstalled,
      isStandalone,
      showInstallPrompt,
      isIOS,
      user: !!user
    });

    if (isInstalled || isStandalone) {
      console.log('❌ 已安裝或已在獨立模式');
      return false;
    }
    
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const hoursSinceLastDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      console.log('⏰ 距離上次關閉:', hoursSinceLastDismiss.toFixed(1), '小時');
      if (hoursSinceLastDismiss < 0.5) { // 改為 30 分鐘，方便測試
        console.log('❌ 太早重複顯示');
        return false;
      }
    }
    
    const result = showInstallPrompt || (isIOS && user);
    console.log('✅ shouldShowPrompt 結果:', result);
    return result;
  };

  const shouldShow = shouldShowPrompt();
  console.log('🎯 最終顯示決定:', shouldShow);

  if (!shouldShow) return null;

  return (
    <>
      {/* PWA 安裝提示 */}
      <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm">
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up">
          <div className="flex items-start gap-3">
            {/* 圖示 */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-sea-blue to-sea-blue-dark rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* 內容 */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {user ? `歡迎 ${user.displayName || user.nickname || '朋友'}！` : '安裝 LalaLand 應用程式'}
              </h3>
              
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                {isIOS ? 
                  '安裝到主畫面以獲得更好的聊天體驗和通知功能' : 
                  '將 LalaLand 安裝為應用程式，享受更流暢的聊天體驗'
                }
              </p>

              {/* 按鈕 */}
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="flex-1 bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white text-xs font-medium py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
                  disabled={!deferredPrompt && !isIOS}
                >
                  {isIOS ? '查看安裝步驟' : '立即安裝'}
                </button>
                
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

      {/* iOS 安裝說明模態框 */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-dark-card rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl relative">
            {/* 關閉按鈕 */}
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 內容 */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sea-blue to-sea-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                在 iPhone/iPad 上安裝
              </h2>
            </div>

            {/* 安裝步驟 */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  點擊瀏覽器底部的 <strong>分享按鈕</strong> (
                  <svg className="w-4 h-4 inline mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                  </svg>
                  )
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  選擇 <strong>「加入主畫面」</strong>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  點擊 <strong>「加入」</strong> 完成安裝
                </div>
              </div>
            </div>

            {/* 關閉按鈕 */}
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallPrompt;