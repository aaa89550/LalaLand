/**
 * PWA 初始化工具 - 針對 Android 設備優化
 * 解決 Android PWA 啟動問題和穩定性問題
 */

class PWAInitializer {
  constructor() {
    this.initialized = false
    this.maxRetries = 3
    this.retryDelay = 1000
  }

  /**
   * 初始化 PWA
   */
  async initialize() {
    if (this.initialized) {
      console.log('✅ PWA 已初始化')
      return
    }

    console.log('🚀 開始初始化 PWA...')

    try {
      // 1. 檢查環境兼容性
      await this.checkCompatibility()

      // 2. 初始化 Service Worker
      await this.initServiceWorker()

      // 3. 處理 Android 特定問題
      await this.handleAndroidIssues()

      // 4. 設置錯誤監聽
      this.setupErrorHandlers()

      this.initialized = true
      console.log('✅ PWA 初始化完成')

    } catch (error) {
      console.error('❌ PWA 初始化失敗:', error)
      // 不拋出錯誤，讓應用程式繼續運行
    }
  }

  /**
   * 檢查環境兼容性
   */
  async checkCompatibility() {
    const checks = {
      serviceWorker: 'serviceWorker' in navigator,
      localStorage: this.checkLocalStorage(),
      sessionStorage: this.checkSessionStorage(),
      indexedDB: 'indexedDB' in window,
      fetch: 'fetch' in window,
      promises: 'Promise' in window
    }

    console.log('🔍 兼容性檢查:', checks)

    const failed = Object.entries(checks)
      .filter(([key, value]) => !value)
      .map(([key]) => key)

    if (failed.length > 0) {
      console.warn('⚠️ 以下功能不支援:', failed)
    }

    return checks
  }

  /**
   * 檢查 localStorage 可用性
   */
  checkLocalStorage() {
    try {
      const test = '__pwa_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * 檢查 sessionStorage 可用性
   */
  checkSessionStorage() {
    try {
      const test = '__pwa_test__'
      sessionStorage.setItem(test, test)
      sessionStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * 初始化 Service Worker
   */
  async initServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('⚠️ Service Worker 不支援')
      return
    }

    let retries = 0
    while (retries < this.maxRetries) {
      try {
        console.log(`🔄 註冊 Service Worker (第 ${retries + 1} 次嘗試)`)
        
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none' // 防止快取問題
        })

        console.log('✅ Service Worker 註冊成功:', registration.scope)

        // 監聽更新
        registration.addEventListener('updatefound', () => {
          console.log('📦 發現 Service Worker 更新')
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('🔄 Service Worker 已更新，建議重新載入')
              }
            })
          }
        })

        return registration

      } catch (error) {
        retries++
        console.warn(`❌ Service Worker 註冊失敗 (第 ${retries} 次):`, error)
        
        if (retries < this.maxRetries) {
          await this.delay(this.retryDelay * retries)
        } else {
          throw error
        }
      }
    }
  }

  /**
   * 處理 Android 特定問題
   */
  async handleAndroidIssues() {
    const isAndroid = /Android/i.test(navigator.userAgent)
    const isChrome = /Chrome/i.test(navigator.userAgent)
    
    if (isAndroid) {
      console.log('📱 檢測到 Android 設備，套用優化設置')

      // 防止觸摸延遲
      if (document.body) {
        document.body.style.touchAction = 'manipulation'
      }

      // 防止頁面縮放
      const viewport = document.querySelector('meta[name=viewport]')
      if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }

      // Android Chrome 特定優化
      if (isChrome) {
        // 啟用硬體加速
        document.documentElement.style.transform = 'translateZ(0)'
        
        // 優化滾動
        document.documentElement.style.overflowScrolling = 'touch'
      }

      // 處理 Android PWA 記憶體問題
      this.setupMemoryManagement()
    }
  }

  /**
   * 設置記憶體管理
   */
  setupMemoryManagement() {
    // 監聽記憶體壓力
    if ('memory' in performance) {
      const checkMemory = () => {
        const memInfo = performance.memory
        const usedPercent = (memInfo.usedJSHeapSize / memInfo.jsHeapSizeLimit) * 100
        
        if (usedPercent > 80) {
          console.warn('⚠️ 記憶體使用率過高:', `${usedPercent.toFixed(1)}%`)
          this.cleanupMemory()
        }
      }

      // 每30秒檢查一次記憶體
      setInterval(checkMemory, 30000)
    }

    // 頁面隱藏時清理
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.cleanupMemory()
      }
    })
  }

  /**
   * 清理記憶體
   */
  cleanupMemory() {
    console.log('🧹 執行記憶體清理...')
    
    // 清理無用的 console logs
    if (console.clear && !import.meta.env.DEV) {
      console.clear()
    }

    // 觸發垃圾回收（如果可用）
    if (window.gc) {
      window.gc()
    }
  }

  /**
   * 設置錯誤處理
   */
  setupErrorHandlers() {
    // PWA 安裝錯誤
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('📲 PWA 安裝提示準備就緒')
      // 可以在這裡自定義安裝流程
    })

    // PWA 安裝成功
    window.addEventListener('appinstalled', () => {
      console.log('✅ PWA 安裝成功')
    })

    // 網路狀態變化
    window.addEventListener('online', () => {
      console.log('🌐 網路已連接')
    })

    window.addEventListener('offline', () => {
      console.log('📴 網路已斷線')
    })
  }

  /**
   * 延遲工具
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * 獲取初始化狀態
   */
  isInitialized() {
    return this.initialized
  }
}

// 創建全域實例
const pwaInitializer = new PWAInitializer()

// 自動初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    pwaInitializer.initialize()
  })
} else {
  pwaInitializer.initialize()
}

export default pwaInitializer