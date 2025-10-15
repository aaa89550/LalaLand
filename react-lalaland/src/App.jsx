import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { auth, database } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, get, remove } from 'firebase/database'
import { notificationManager } from './utils/notificationManager'
import { fcmManager } from './utils/fcmManager'
import { debugDatabase } from './utils/debugFirebase'

// 頁面組件
import Landing from './pages/Landing'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Debug from './pages/Debug'
import SplashScreen from './components/SplashScreen'
import ErrorBoundary from './components/ErrorBoundary'
import NotificationSystem from './components/NotificationSystem'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import VoiceCallNotifications from './components/notifications/VoiceCallNotifications'
import { pwaManager } from './utils/pwaManager'

// 全域錯誤處理
window.addEventListener('error', (event) => {
  console.error('🚨 全域錯誤:', event.error)
  // 防止錯誤導致應用程式完全崩潰
  event.preventDefault()
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 未處理的 Promise 拒絕:', event.reason)
  // 防止未處理的 Promise 拒絕導致崩潰
  event.preventDefault()
})

// 開發環境下載入除錯工具
if (import.meta.env.DEV) {
  import('./debug-notifications.js').catch(error => {
    console.warn('除錯工具載入失敗:', error)
  })
  
  // 圖片壓縮測試工具
  import('./utils/testImageCompression.js').then(module => {
    console.log('🧪 圖片壓縮測試工具已載入')
    console.log('🔧 測試指令: window.testImageCompression() 或 window.testMultipleImageFormats()')
  }).catch(error => {
    console.warn('測試工具載入失敗:', error)
  })
  
  // PWA 健康檢查工具
  import('./utils/pwaHealthChecker.js').then(() => {
    console.log('🔍 PWA 健康檢查工具已載入')
    console.log('🔧 檢查指令: window.checkPWAHealth()')
  }).catch(error => {
    console.warn('PWA 健康檢查工具載入失敗:', error)
  })
}

function App() {
  const { user, setUser, loading, setLoading } = useAuthStore()

  useEffect(() => {
    // 初始化 FCM
    const initializeFCM = async () => {
      try {
        await fcmManager.initialize()
        console.log('✅ FCM 系統已初始化')
      } catch (error) {
        console.error('❌ FCM 初始化失敗:', error)
      }
    }

    initializeFCM()

    // Service Worker 註冊（防崩潰版）
    if ('serviceWorker' in navigator) {
      // 使用 setTimeout 延遲註冊，避免阻塞主線程
      setTimeout(() => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('📱 Service Worker 註冊成功:', registration.scope)
            
            // 檢查是否有更新
            registration.addEventListener('updatefound', () => {
              console.log('🔄 Service Worker 更新中...')
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed') {
                    console.log('✅ Service Worker 更新完成')
                  }
                })
              }
            })
          })
          .catch(error => {
            console.error('📱 Service Worker 註冊失敗:', error)
            // 即使 SW 註冊失敗，應用程式仍應該能正常運行
            // 不拋出錯誤，避免影響應用程式啟動
          })
      }, 1000) // 延遲 1 秒註冊
    } else {
      console.warn('📱 此瀏覽器不支援 Service Worker')
    }
    
    // 監聽 Firebase 認證狀態
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let nickname = firebaseUser.displayName || '匿名用戶'
        let avatar = firebaseUser.photoURL || null
        
        // 從 Database 讀取用戶資料（特別是匿名用戶的暱稱）
        try {
          const userRef = ref(database, `users/${firebaseUser.uid}`)
          const userSnapshot = await get(userRef)
          
          if (userSnapshot.exists()) {
            const userData = userSnapshot.val()
            nickname = userData.nickname || nickname
            avatar = userData.avatar || avatar
          }
        } catch (error) {
          console.warn('無法讀取用戶資料:', error)
        }
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          nickname: nickname,
          avatar: avatar,
          isAnonymous: firebaseUser.isAnonymous
        })
        
        console.log('✅ 用戶已登入:', firebaseUser.uid, '暱稱:', nickname)
        
        // 自動請求通知權限
        setTimeout(async () => {
          console.log('🔔 自動請求通知權限...')
          const token = await fcmManager.requestPermissionSilently(firebaseUser.uid)
          if (token) {
            console.log('✅ 通知權限已獲得，FCM Token:', token.substring(0, 20) + '...')
          } else {
            console.log('ℹ️ 通知權限未獲得或瀏覽器不支援 FCM')
          }
        }, 2000) // 延遲2秒後請求，讓用戶先適應頁面
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [setUser, setLoading])

  // 處理匿名用戶關閉頁面時的資料清理
  useEffect(() => {
    const handleBeforeUnload = async (event) => {
      if (user && user.isAnonymous) {
        console.log('🗑️ 匿名用戶關閉頁面 - 嘗試清理資料')
        try {
          const userRef = ref(database, `users/${user.uid}`)
          await remove(userRef)
          console.log('✅ 匿名用戶資料已清理')
        } catch (error) {
          console.error('❌ 清理匿名用戶資料失敗:', error)
        }
      }
    }

    // 添加頁面卸載事件監聽器
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [user])

  // 載入中顯示 Splash Screen
  if (loading) {
    return <SplashScreen />
  }

  return (
    <ErrorBoundary>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={user ? <Chat /> : <Landing />} />
            <Route path="/login" element={(user && !user.isAnonymous) ? <Chat /> : <Login />} />
            <Route path="/chat" element={user ? <Chat /> : <Login />} />
            <Route path="/debug" element={<Debug />} />
          </Routes>
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#2877b9',
                color: '#fff',
                borderRadius: '12px'
              }
            }}
          />
          <NotificationSystem />
          <PWAInstallPrompt user={user} />
          {/* 暫時隱藏語音通話通知功能 */}
          {/* <VoiceCallNotifications /> */}
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App