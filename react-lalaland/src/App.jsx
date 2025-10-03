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

    // Service Worker 註冊（簡化版）
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('📱 Service Worker 註冊成功'))
        .catch(error => console.log('📱 Service Worker 註冊失敗:', error))
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
            <Route path="/login" element={user ? <Chat /> : <Login />} />
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
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App