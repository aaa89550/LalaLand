// pwaManager.js - PWA 功能管理
class PWAManager {
  constructor() {
    this.isInstalled = false;
    this.isStandalone = false;
    this.deferredPrompt = null;
    
    this.init();
  }

  init() {
    // 檢測 PWA 狀態
    this.detectPWAStatus();
    
    // 監聽安裝事件
    this.setupEventListeners();
    
    // 檢查更新
    this.checkForUpdates();
  }

  // 檢測 PWA 狀態
  detectPWAStatus() {
    // 檢查是否在獨立模式運行
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone === true;
    
    this.isInstalled = this.isStandalone;
    
    console.log('📱 PWA 狀態檢測:', {
      isInstalled: this.isInstalled,
      isStandalone: this.isStandalone,
      displayMode: this.getDisplayMode(),
      userAgent: navigator.userAgent
    });
  }

  // 獲取顯示模式
  getDisplayMode() {
    const displayModes = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];
    
    for (const mode of displayModes) {
      if (window.matchMedia(`(display-mode: ${mode})`).matches) {
        return mode;
      }
    }
    
    return 'browser';
  }

  // 設置事件監聽器
  setupEventListeners() {
    // PWA 安裝提示事件
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('💻 PWA 安裝提示事件');
      e.preventDefault();
      this.deferredPrompt = e;
    });

    // PWA 安裝完成事件
    window.addEventListener('appinstalled', () => {
      console.log('✅ PWA 安裝完成');
      this.isInstalled = true;
      this.deferredPrompt = null;
    });

    // 顯示模式變更監聽
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
      console.log('🔄 顯示模式變更:', e.matches ? 'standalone' : 'browser');
      this.isStandalone = e.matches;
    });
  }

  // 檢查 Service Worker 更新
  async checkForUpdates() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        
        if (registration) {
          // 檢查更新
          await registration.update();
          
          // 監聽新版本
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('🔄 發現 Service Worker 更新');
            
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('📦 新版本可用，建議重新載入');
                this.showUpdatePrompt();
              }
            });
          });
        }
      } catch (error) {
        console.error('❌ Service Worker 更新檢查失敗:', error);
      }
    }
  }

  // 顯示更新提示
  showUpdatePrompt() {
    if (window.showNotification) {
      window.showNotification('🔄 發現新版本，建議重新載入以獲得最新功能', 'info', 10000);
    }
  }

  // 觸發安裝
  async promptInstall() {
    if (!this.deferredPrompt) {
      console.warn('⚠️ 無法觸發安裝：沒有 beforeinstallprompt 事件');
      return false;
    }

    try {
      console.log('🚀 觸發 PWA 安裝');
      const result = await this.deferredPrompt.prompt();
      console.log('📱 用戶選擇:', result.outcome);
      
      this.deferredPrompt = null;
      return result.outcome === 'accepted';
    } catch (error) {
      console.error('❌ PWA 安裝失敗:', error);
      return false;
    }
  }

  // 獲取安裝指南
  getInstallInstructions() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/ipad|iphone|ipod/.test(userAgent)) {
      return {
        platform: 'iOS',
        browser: 'Safari',
        steps: [
          '點擊瀏覽器底部的分享按鈕 📤',
          '在彈出選單中選擇「加入主畫面」',
          '確認應用程式名稱並點擊「新增」',
          '在主畫面找到 LalaLand 圖示並點擊開啟'
        ]
      };
    } else if (/android/.test(userAgent)) {
      if (/chrome/.test(userAgent)) {
        return {
          platform: 'Android',
          browser: 'Chrome',
          steps: [
            '點擊瀏覽器右上角的選單按鈕 ⋮',
            '選擇「安裝應用程式」或「加入主畫面」',
            '確認安裝並等待完成',
            '在主畫面或應用程式清單中找到 LalaLand'
          ]
        };
      } else {
        return {
          platform: 'Android',
          browser: '其他瀏覽器',
          steps: [
            '建議使用 Chrome 瀏覽器獲得最佳體驗',
            '或檢查瀏覽器選單中的「加入主畫面」選項'
          ]
        };
      }
    } else {
      return {
        platform: '桌面',
        browser: '瀏覽器',
        steps: [
          '點擊網址列右側的安裝圖示 💻',
          '或檢查瀏覽器選單中的安裝選項',
          '確認安裝並等待完成'
        ]
      };
    }
  }

  // PWA 功能檢測
  checkPWAFeatures() {
    const features = {
      serviceWorker: 'serviceWorker' in navigator,
      notifications: 'Notification' in window,
      pushManager: 'PushManager' in window,
      backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      webShare: 'share' in navigator,
      installPrompt: !!this.deferredPrompt,
      standalone: this.isStandalone
    };

    console.log('🔍 PWA 功能支援:', features);
    return features;
  }

  // 獲取 PWA 統計資訊
  getPWAStats() {
    return {
      isInstalled: this.isInstalled,
      isStandalone: this.isStandalone,
      displayMode: this.getDisplayMode(),
      canInstall: !!this.deferredPrompt,
      features: this.checkPWAFeatures(),
      installInstructions: this.getInstallInstructions()
    };
  }
}

// 創建全域 PWA 管理器
export const pwaManager = new PWAManager();

// 暴露到全域供 console 使用
if (typeof window !== 'undefined') {
  window.pwaManager = pwaManager;
}

export default pwaManager;