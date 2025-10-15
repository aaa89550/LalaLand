/**
 * PWA 健康檢查工具
 * 用於診斷 PWA 問題，特別是 Android 設備上的問題
 */

class PWAHealthChecker {
  constructor() {
    this.results = {}
    this.warnings = []
    this.errors = []
  }

  /**
   * 執行完整的健康檢查
   */
  async runFullCheck() {
    console.log('🔍 開始 PWA 健康檢查...')
    
    const checks = [
      'checkServiceWorker',
      'checkManifest',
      'checkCache',
      'checkNetwork',
      'checkLocalStorage',
      'checkFirebase',
      'checkAndroidSpecific'
    ]

    for (const checkName of checks) {
      try {
        await this[checkName]()
      } catch (error) {
        this.errors.push(`${checkName}: ${error.message}`)
      }
    }

    this.generateReport()
    return this.results
  }

  /**
   * 檢查 Service Worker
   */
  async checkServiceWorker() {
    const result = {
      supported: 'serviceWorker' in navigator,
      registered: false,
      active: false,
      version: null
    }

    if (result.supported) {
      try {
        const registration = await navigator.serviceWorker.getRegistration()
        result.registered = !!registration
        
        if (registration) {
          result.active = !!registration.active
          result.scope = registration.scope
          
          // 獲取版本資訊
          if (registration.active) {
            result.version = await this.getServiceWorkerVersion()
          }
        }
      } catch (error) {
        this.errors.push(`Service Worker 檢查失敗: ${error.message}`)
      }
    } else {
      this.warnings.push('Service Worker 不支援')
    }

    this.results.serviceWorker = result
  }

  /**
   * 獲取 Service Worker 版本
   */
  async getServiceWorkerVersion() {
    return new Promise((resolve) => {
      const messageChannel = new MessageChannel()
      
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data || 'unknown')
      }
      
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(
          { type: 'GET_VERSION' },
          [messageChannel.port2]
        )
      }
      
      // 超時處理
      setTimeout(() => resolve('timeout'), 2000)
    })
  }

  /**
   * 檢查 Manifest
   */
  async checkManifest() {
    const result = {
      exists: false,
      valid: false,
      installable: false
    }

    try {
      const manifestResponse = await fetch('/manifest.json')
      result.exists = manifestResponse.ok
      
      if (result.exists) {
        const manifest = await manifestResponse.json()
        result.valid = this.validateManifest(manifest)
        result.data = manifest
      }
      
      // 檢查是否可安裝
      result.installable = await this.checkInstallability()
      
    } catch (error) {
      this.errors.push(`Manifest 檢查失敗: ${error.message}`)
    }

    this.results.manifest = result
  }

  /**
   * 驗證 Manifest
   */
  validateManifest(manifest) {
    const required = ['name', 'start_url', 'display', 'icons']
    const missing = required.filter(field => !manifest[field])
    
    if (missing.length > 0) {
      this.warnings.push(`Manifest 缺少必需字段: ${missing.join(', ')}`)
      return false
    }
    
    return true
  }

  /**
   * 檢查是否可安裝
   */
  async checkInstallability() {
    return new Promise((resolve) => {
      let canInstall = false
      
      window.addEventListener('beforeinstallprompt', () => {
        canInstall = true
      })
      
      // 檢查是否已安裝
      if (window.matchMedia('(display-mode: standalone)').matches) {
        resolve('already-installed')
      } else {
        setTimeout(() => resolve(canInstall ? 'installable' : 'not-installable'), 1000)
      }
    })
  }

  /**
   * 檢查緩存
   */
  async checkCache() {
    const result = {
      supported: 'caches' in window,
      available: [],
      totalSize: 0
    }

    if (result.supported) {
      try {
        const cacheNames = await caches.keys()
        result.available = cacheNames
        
        for (const name of cacheNames) {
          const cache = await caches.open(name)
          const keys = await cache.keys()
          result.totalSize += keys.length
        }
      } catch (error) {
        this.errors.push(`Cache 檢查失敗: ${error.message}`)
      }
    }

    this.results.cache = result
  }

  /**
   * 檢查網路狀態
   */
  async checkNetwork() {
    const result = {
      online: navigator.onLine,
      connection: null,
      speed: 'unknown'
    }

    // 檢查連接資訊
    if ('connection' in navigator) {
      result.connection = {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      }
    }

    // 簡單的速度測試
    try {
      const start = Date.now()
      await fetch('/manifest.json')
      const duration = Date.now() - start
      
      if (duration < 100) result.speed = 'fast'
      else if (duration < 500) result.speed = 'medium'
      else result.speed = 'slow'
      
    } catch (error) {
      result.speed = 'offline'
    }

    this.results.network = result
  }

  /**
   * 檢查本地存儲
   */
  async checkLocalStorage() {
    const result = {
      localStorage: this.testStorage('localStorage'),
      sessionStorage: this.testStorage('sessionStorage'),
      indexedDB: await this.testIndexedDB()
    }

    this.results.storage = result
  }

  /**
   * 測試存儲
   */
  testStorage(type) {
    try {
      const storage = window[type]
      const test = '__pwa_test__'
      storage.setItem(test, test)
      storage.removeItem(test)
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 測試 IndexedDB
   */
  async testIndexedDB() {
    return new Promise((resolve) => {
      if (!('indexedDB' in window)) {
        resolve(false)
        return
      }

      try {
        const request = indexedDB.open('__pwa_test__', 1)
        
        request.onsuccess = () => {
          request.result.close()
          indexedDB.deleteDatabase('__pwa_test__')
          resolve(true)
        }
        
        request.onerror = () => resolve(false)
        
      } catch (error) {
        resolve(false)
      }
    })
  }

  /**
   * 檢查 Firebase
   */
  async checkFirebase() {
    const result = {
      available: false,
      initialized: false,
      services: {}
    }

    try {
      // 動態導入 Firebase 配置
      const { isFirebaseInitialized, auth, database, storage } = await import('../config/firebase.js')
      
      result.available = true
      result.initialized = isFirebaseInitialized()
      
      result.services = {
        auth: !!auth,
        database: !!database,
        storage: !!storage
      }
      
    } catch (error) {
      this.warnings.push(`Firebase 檢查失敗: ${error.message}`)
    }

    this.results.firebase = result
  }

  /**
   * Android 特定檢查
   */
  async checkAndroidSpecific() {
    const result = {
      isAndroid: /Android/i.test(navigator.userAgent),
      isChrome: /Chrome/i.test(navigator.userAgent),
      viewport: this.checkViewport(),
      touchAction: this.checkTouchAction(),
      memoryInfo: this.getMemoryInfo()
    }

    if (result.isAndroid) {
      // Android 特定檢查
      result.androidVersion = this.getAndroidVersion()
      result.chromeVersion = this.getChromeVersion()
      
      // 檢查 PWA 模式
      result.displayMode = window.matchMedia('(display-mode: standalone)').matches 
        ? 'standalone' 
        : 'browser'
    }

    this.results.android = result
  }

  /**
   * 檢查 Viewport 設置
   */
  checkViewport() {
    const viewport = document.querySelector('meta[name=viewport]')
    return {
      exists: !!viewport,
      content: viewport?.content || null
    }
  }

  /**
   * 檢查 Touch Action
   */
  checkTouchAction() {
    const body = document.body
    const computedStyle = window.getComputedStyle(body)
    return computedStyle.touchAction
  }

  /**
   * 獲取記憶體資訊
   */
  getMemoryInfo() {
    if ('memory' in performance) {
      return {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
        usagePercent: ((performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100).toFixed(1)
      }
    }
    return null
  }

  /**
   * 獲取 Android 版本
   */
  getAndroidVersion() {
    const match = navigator.userAgent.match(/Android\s([0-9\.]*)/)
    return match ? match[1] : null
  }

  /**
   * 獲取 Chrome 版本
   */
  getChromeVersion() {
    const match = navigator.userAgent.match(/Chrome\/([0-9\.]*)/)
    return match ? match[1] : null
  }

  /**
   * 生成報告
   */
  generateReport() {
    console.group('📊 PWA 健康檢查報告')
    
    console.log('✅ 檢查結果:', this.results)
    
    if (this.warnings.length > 0) {
      console.warn('⚠️ 警告:', this.warnings)
    }
    
    if (this.errors.length > 0) {
      console.error('❌ 錯誤:', this.errors)
    }
    
    this.generateRecommendations()
    
    console.groupEnd()
  }

  /**
   * 生成建議
   */
  generateRecommendations() {
    const recommendations = []
    
    if (!this.results.serviceWorker?.registered) {
      recommendations.push('註冊 Service Worker 以啟用離線功能')
    }
    
    if (!this.results.manifest?.valid) {
      recommendations.push('修復 Manifest 檔案以確保 PWA 安裝')
    }
    
    if (this.results.android?.memoryInfo?.usagePercent > 80) {
      recommendations.push('記憶體使用率過高，考慮優化或清理')
    }
    
    if (!this.results.network?.online) {
      recommendations.push('目前離線，某些功能可能不可用')
    }
    
    if (recommendations.length > 0) {
      console.log('💡 建議:', recommendations)
    } else {
      console.log('🎉 所有檢查通過！')
    }
  }
}

// 創建全域實例
const pwaHealthChecker = new PWAHealthChecker()

// 開發環境下自動執行檢查
if (import.meta.env.DEV) {
  setTimeout(() => {
    pwaHealthChecker.runFullCheck()
  }, 3000)
}

// 添加全域方法
window.checkPWAHealth = () => pwaHealthChecker.runFullCheck()

export default pwaHealthChecker