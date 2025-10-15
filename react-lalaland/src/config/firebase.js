import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",
  authDomain: "lalaland-24931.firebaseapp.com",
  databaseURL: "https://lalaland-24931-default-rtdb.firebaseio.com",
  projectId: "lalaland-24931",
  storageBucket: "lalaland-24931.firebasestorage.app",
  messagingSenderId: "45134876312",
  appId: "1:45134876312:web:9e33e46c54cb7c9bfc8aed",
  measurementId: "G-M04NRCY9FQ"
}

// Firebase 初始化狀態
let firebaseInitialized = false
let initializationError = null

// 安全初始化 Firebase
let app = null
export let auth = null
export let database = null
export let storage = null
export let messaging = null

const initializeFirebase = () => {
  try {
    console.log('🚀 正在初始化 Firebase...')
    
    // 初始化 Firebase App
    app = initializeApp(firebaseConfig)
    console.log('✅ Firebase App 初始化成功')

    // 初始化 Auth
    try {
      auth = getAuth(app)
      console.log('✅ Firebase Auth 初始化成功')
    } catch (error) {
      console.error('❌ Firebase Auth 初始化失敗:', error)
      throw error
    }

    // 初始化 Database
    try {
      database = getDatabase(app)
      console.log('✅ Firebase Database 初始化成功')
    } catch (error) {
      console.error('❌ Firebase Database 初始化失敗:', error)
      throw error
    }

    // 初始化 Storage
    try {
      storage = getStorage(app)
      console.log('✅ Firebase Storage 初始化成功')
    } catch (error) {
      console.error('❌ Firebase Storage 初始化失敗:', error)
      throw error
    }

    // 初始化 FCM Messaging (可選)
    try {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        messaging = getMessaging(app)
        console.log('✅ Firebase Messaging 初始化成功')
      } else {
        console.log('ℹ️ Firebase Messaging 不支援此環境')
      }
    } catch (error) {
      console.warn('⚠️ Firebase Messaging 初始化失敗:', error)
      // Messaging 失敗不應影響其他功能
    }

    firebaseInitialized = true
    console.log('🎉 Firebase 完全初始化成功')

  } catch (error) {
    console.error('💥 Firebase 初始化失敗:', error)
    initializationError = error
    
    // 創建模擬服務以防止應用程式崩潰
    createMockServices()
  }
}

// 創建模擬服務
const createMockServices = () => {
  console.warn('⚠️ 創建 Firebase 模擬服務，部分功能可能不可用')
  
  // 模擬 auth 服務
  if (!auth) {
    auth = {
      currentUser: null,
      onAuthStateChanged: (callback) => {
        console.warn('模擬 Auth: onAuthStateChanged 被調用')
        callback(null)
        return () => {} // 返回取消訂閱函數
      },
      signOut: () => Promise.reject(new Error('Firebase 未初始化')),
      signInWithEmailAndPassword: () => Promise.reject(new Error('Firebase 未初始化')),
      createUserWithEmailAndPassword: () => Promise.reject(new Error('Firebase 未初始化'))
    }
  }

  // 模擬 database 服務
  if (!database) {
    database = {
      ref: () => ({
        on: () => console.warn('模擬 Database: ref.on 被調用'),
        off: () => console.warn('模擬 Database: ref.off 被調用'),
        push: () => Promise.reject(new Error('Firebase 未初始化')),
        set: () => Promise.reject(new Error('Firebase 未初始化'))
      })
    }
  }

  // 模擬 storage 服務
  if (!storage) {
    storage = {
      ref: () => ({
        put: () => Promise.reject(new Error('Firebase 未初始化')),
        getDownloadURL: () => Promise.reject(new Error('Firebase 未初始化'))
      })
    }
  }
}

// 檢查 Firebase 是否已初始化
export const isFirebaseInitialized = () => firebaseInitialized

// 獲取初始化錯誤
export const getInitializationError = () => initializationError

// 重新初始化 Firebase
export const reinitializeFirebase = async () => {
  console.log('🔄 重新初始化 Firebase...')
  firebaseInitialized = false
  initializationError = null
  
  // 等待一段時間後重試
  await new Promise(resolve => setTimeout(resolve, 2000))
  initializeFirebase()
}

// 立即初始化
initializeFirebase()

export default app