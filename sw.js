// 簡化的 Service Worker - 僅用於 PWA 基本功能
const CACHE_NAME = 'lalaland-v7-logo-update'
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-BfHqRL13.css',
  '/assets/index-C4a3AT_8.js',
  '/icon-512.png',
  '/manifest.json',
  '/firebase-messaging-sw.js'
]

// 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: 快取基本檔案')
        return cache.addAll(urlsToCache.filter(url => url !== '/'))
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


