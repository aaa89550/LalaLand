import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInAnonymously,
  updateProfile
} from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { auth, database } from '../config/firebase'
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login') // 'login', 'register', 'anonymous'
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: ''
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
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      toast.success('登入成功！')
      navigate('/chat')
    } catch (error) {
      toast.error('登入失敗：' + (error.message || '請檢查帳號密碼'))
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
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      )
      
      // 更新用戶資料
      await updateProfile(userCredential.user, {
        displayName: formData.nickname || '新用戶'
      })

      // 儲存到 Firebase Realtime Database
      await set(ref(database, `users/${userCredential.user.uid}`), {
        nickname: formData.nickname || '新用戶',
        email: formData.email,
        avatar: null,
        joinedAt: Date.now(),
        isOnline: true
      })

      toast.success('註冊成功！歡迎加入 LalaLand！')
      navigate('/chat')
    } catch (error) {
      toast.error('註冊失敗：' + (error.message || '請稍後再試'))
    } finally {
      setLoading(false)
    }
  }

  const handleAnonymousLogin = async () => {
    setLoading(true)

    try {
      const userCredential = await signInAnonymously(auth)
      
      const anonymousNickname = formData.nickname || `訪客_${Math.floor(Math.random() * 1000)}`
      
      // 更新匿名用戶資料
      await updateProfile(userCredential.user, {
        displayName: anonymousNickname
      })

      // 儲存到 Firebase Realtime Database
      await set(ref(database, `users/${userCredential.user.uid}`), {
        nickname: anonymousNickname,
        email: null,
        avatar: null,
        joinedAt: Date.now(),
        isOnline: true,
        isAnonymous: true
      })

      toast.success('匿名登入成功！')
      navigate('/chat')
    } catch (error) {
      toast.error('匿名登入失敗：' + (error.message || '請稍後再試'))
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
            <h2 className="text-2xl font-bold text-gray-800">
              {mode === 'login' && '登入 LalaLand'}
              {mode === 'register' && '註冊 LalaLand'}
              {mode === 'anonymous' && '匿名體驗'}
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
            <button
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'anonymous' 
                  ? 'bg-white text-sea-blue shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setMode('anonymous')}
            >
              匿名
            </button>
          </div>

          {/* 表單 */}
          {mode !== 'anonymous' ? (
            <form onSubmit={mode === 'login' ? handleLogin : handleRegister}>
              {mode === 'register' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    暱稱
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="輸入你的暱稱"
                      required
                    />
                  </div>
                </div>
              )}

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
          ) : (
            // 匿名模式
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  暱稱（選填）
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="輸入暱稱或留空使用隨機名稱"
                  />
                </div>
              </div>

              <button
                onClick={handleAnonymousLogin}
                disabled={loading}
                className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '處理中...' : '匿名進入聊天室'}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                匿名模式不需要註冊，但資料不會被保存
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login