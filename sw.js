// 簡化的 Service Worker - 僅用於 PWA 基本功能
const CACHE_NAME = 'lalaland-v8-android-fix'
const urlsToCache = [
  '/',
  '/index.html',
  '/icon-512.png',
  '/manifest.json'
]

// 安裝 Service Worker
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: 開始安裝')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: 快取基本檔案')
        // 只快取確實存在的檔案
        return cache.addAll([
          '/index.html',
          '/manifest.json'
        ].concat(
          // 圖示檔案單獨處理，避免 404 錯誤
          urlsToCache.includes('/icon-512.png') ? ['/icon-512.png'] : []
        ))
      })
      .catch(error => {
        console.error('❌ Service Worker: 快取失敗', error)
        // 即使快取失敗也繼續安裝
        return Promise.resolve()
      })
  )
  self.skipWaiting()
})

// 激活 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: 清除舊快取', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// 處理網路請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果在快取中找到，返回快取的版本
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})

// 簡單的訊息處理（用於未來擴展）
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

console.log('� Service Worker: 已載入 (簡化版本 - 無推播功能)')


