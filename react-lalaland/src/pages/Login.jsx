import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { ref, set } from 'firebase/database'

import { auth, database } from '../config/firebase'
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login') // 'login', 'register'
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('🔄 開始登入流程...', { 
        email: formData.email,
        authInstance: !!auth 
      })
      
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      
      console.log('✅ Firebase 登入成功:', {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        isAnonymous: userCredential.user.isAnonymous
      })
      
      // 等待一小段時間確保認證狀態更新
      await new Promise(resolve => setTimeout(resolve, 300))
      
      console.log('🎉 準備顯示登入成功通知...')
      toast.success('登入成功！')
      console.log('✅ 登入流程完成，準備導航到聊天室')
      
      // 使用 replace 而不是 push，避免用戶回到登入頁面
      navigate('/chat', { replace: true })
    } catch (error) {
      console.error('❌ 登入過程發生錯誤:', error)
      console.error('錯誤代碼:', error.code)
      console.error('錯誤訊息:', error.message)
      
      let errorMessage = '登入失敗，請檢查帳號密碼'
      
      // 根據錯誤類型提供更具體的錯誤訊息
      if (error.code === 'auth/user-not-found') {
        errorMessage = '找不到此帳號，請確認電子郵件是否正確'
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = '密碼錯誤，請重新輸入'
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = '電子郵件格式不正確'
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = '登入嘗試次數過多，請稍後再試'
      }
      
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (formData.password !== formData.confirmPassword) {
      toast.error('密碼確認不一致')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      toast.error('密碼至少需要6個字元')
      setLoading(false)
      return
    }

    try {
      console.log('🔄 開始註冊流程...', { 
        email: formData.email
      })
      
      // 步驟1: 創建 Firebase 帳號
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      )
      
      console.log('✅ Firebase 帳號創建成功:', userCredential.user.uid)
      
      try {
        // 步驟2: 更新用戶資料（使用預設暱稱）
        await updateProfile(userCredential.user, {
          displayName: '新用戶'
        })
        
        console.log('✅ 用戶 Profile 更新成功')
      } catch (profileError) {
        console.warn('⚠️ Profile 更新失敗，但註冊流程繼續:', profileError)
      }

      try {
        // 步驟3: 儲存到 Firebase Realtime Database（使用預設暱稱）
        await set(ref(database, `users/${userCredential.user.uid}`), {
          nickname: '新用戶',
          email: formData.email,
          avatar: null,
          joinedAt: Date.now(),
          isOnline: true,
          isFirstLogin: true // 標記為首次登入，用於顯示歡迎視窗
        })
        
        console.log('✅ 用戶資料儲存到資料庫成功')
      } catch (dbError) {
        console.warn('⚠️ 資料庫儲存失敗，但註冊流程繼續:', dbError)
      }

      // 等待一小段時間確保所有非同步操作完成
      await new Promise(resolve => setTimeout(resolve, 500))
      
      console.log('🎉 準備顯示成功通知...')
      toast.success('註冊成功！歡迎加入 LalaLand！請至設定更新頭貼與暱稱。')
      console.log('✅ 註冊流程完成，準備導航到聊天室')
      
      // 使用 replace 而不是 push，避免用戶回到註冊頁面
      navigate('/chat', { replace: true })
    } catch (error) {
      console.error('❌ 註冊過程發生錯誤:', error)
      console.error('錯誤代碼:', error.code)
      console.error('錯誤訊息:', error.message)
      
      let errorMessage = '註冊失敗，請稍後再試'
      
      // 根據錯誤類型提供更具體的錯誤訊息
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = '此電子郵件已被註冊'
      } else if (error.code === 'auth/weak-password') {
        errorMessage = '密碼強度不足'
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = '電子郵件格式不正確'
      }
      
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* 返回按鈕 */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首頁
        </button>

        {/* 登入/註冊卡片 */}
        <div className="card">
          <div className="text-center mb-8">
            <img 
              src="/icon-512.png" 
              alt="LalaLand" 
              className="w-16 h-16 mx-auto mb-4"
            />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {mode === 'login' && '歡迎回來'}
              {mode === 'register' && '建立帳號'}
            </h2>
          </div>

          {/* 模式切換 */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'login' 
                  ? 'bg-white text-sea-blue shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setMode('login')}
            >
              登入
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'register' 
                  ? 'bg-white text-sea-blue shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setMode('register')}
            >
              註冊
            </button>
          </div>

          {/* 表單 */}
          <form onSubmit={mode === 'login' ? handleLogin : handleRegister}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電子郵件
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="輸入你的電子郵件"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密碼
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field pl-10 pr-10"
                    placeholder="輸入密碼"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {mode === 'register' && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    確認密碼
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="再次輸入密碼"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '處理中...' : mode === 'login' ? '登入' : '註冊'}
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login