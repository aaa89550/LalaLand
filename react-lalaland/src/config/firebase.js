import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

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

// 初始化 Firebase
const app = initializeApp(firebaseConfig)

// 導出服務
export const auth = getAuth(app)
export const database = getDatabase(app)
export const storage = getStorage(app)

export default app