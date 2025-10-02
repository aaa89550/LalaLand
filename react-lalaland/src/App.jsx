import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { auth, database } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, get, remove, onValue } from 'firebase/database'
import { initNotifications, setupNotificationsAfterLogin } from './utils/notificationManager'
import { debugDatabase } from './utils/debugFirebase'

// 頁面組件
import Landing from './pages/Landing'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Debug from './pages/Debug'
import SplashScreen from './components/SplashScreen'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const { user, setUser, loading, setLoading } = useAuthStore()

  useEffect(() => {
    // 初始化通知系統
    initNotifications()
    
    // 監聽 Firebase 認證狀態
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let nickname = firebaseUser.displayName || '匿名用戶'
        let avatar = firebaseUser.photoURL || null
        
                // 嘗試從 Database 獲取用戶資料
        try {
          const userDataRef = ref(database, `users/${firebaseUser.uid}`)
          const userDataSnapshot = await get(userDataRef)
          if (userDataSnapshot.exists()) {
            const userData = userDataSnapshot.val()
            nickname = userData.nickname || nickname
            avatar = userData.avatar || avatar
            console.log('📖 從 Database 讀取到用戶資料:', { nickname, avatar, isAnonymous: firebaseUser.isAnonymous })
          } else if (firebaseUser.isAnonymous) {
            // 匿名用戶但 Database 中沒有資料，使用 displayName
            console.log('👻 匿名用戶，使用 displayName:', firebaseUser.displayName)
            nickname = firebaseUser.displayName || nickname
          }
        } catch (error) {
          console.warn('無法讀取用戶資料:', error)
          // 如果讀取失敗且是匿名用戶，使用 displayName
          if (firebaseUser.isAnonymous) {
            nickname = firebaseUser.displayName || nickname
          }
        }
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          nickname: nickname,
          avatar: avatar,
          isAnonymous: firebaseUser.isAnonymous
        })
        
        console.log('✅ 用戶已登入:', firebaseUser.uid, '暱稱:', nickname)
        
        // 用戶登入後設定通知權限
        setupNotificationsAfterLogin()
        
        // 如果是匿名用戶，監聽 Database 中的用戶資料變化
        if (firebaseUser.isAnonymous) {
          console.log('👻 設定匿名用戶資料監聽器...')
          const userDataRef = ref(database, `users/${firebaseUser.uid}`)
          const unsubscribeUserData = onValue(userDataRef, (snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val()
              const updatedNickname = userData.nickname || firebaseUser.displayName || '匿名用戶'
              console.log('📡 匿名用戶資料已更新:', { nickname: updatedNickname })
              
              // 更新用戶狀態
              setUser(prevUser => ({
                ...prevUser,
                nickname: updatedNickname,
                avatar: userData.avatar || prevUser?.avatar
              }))
            }
          })
          
          // 儲存清理函數到 window 以便後續清理
          if (!window.userDataUnsubscribers) window.userDataUnsubscribers = {}
          window.userDataUnsubscribers[firebaseUser.uid] = unsubscribeUserData
        }
      } else {
        // 清理用戶資料監聽器
        if (window.userDataUnsubscribers) {
          Object.values(window.userDataUnsubscribers).forEach(unsubscribe => {
            if (typeof unsubscribe === 'function') {
              unsubscribe()
            }
          })
          window.userDataUnsubscribers = {}
        }
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
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App