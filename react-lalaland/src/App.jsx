import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
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
    // 監聽 Firebase 認證狀態
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          nickname: firebaseUser.displayName || '匿名用戶',
          avatar: firebaseUser.photoURL || null,
          isAnonymous: firebaseUser.isAnonymous
        })
        
        console.log('✅ 用戶已登入:', firebaseUser.uid)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [setUser, setLoading])

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