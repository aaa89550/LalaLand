import React, { useState } from 'react'
import { 
  MessageCircle, 
  Heart, 
  Users, 
  UserPlus, 
  Settings, 
  LogOut,
  Moon,
  Sun
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth, database } from '../../config/firebase'
import { ref, remove } from 'firebase/database'
import { useAuthStore } from '../../store/authStore'
import SettingsModal from './SettingsModal'
import AgeVerificationModal from '../common/AgeVerificationModal'
import { useChatStore } from '../../store/chatStore'
import { cleanupStaleUsers } from '../../utils/cleanupUsers'
import { useUnreadMessages } from '../../hooks/useUnreadMessages'
import UnreadBadge from '../UnreadBadge'
import toast from 'react-hot-toast'

const Sidebar = () => {
  const { user, isAnonymousUser } = useAuthStore()
  const { 
    currentRoom, 
    setCurrentRoom, 
    sidebarOpen, 
    setSidebarOpen, 
    darkMode, 
    toggleDarkMode,
    onlineUsers 
  } = useChatStore()
  const navigate = useNavigate()
  const isAnonymous = isAnonymousUser()
  
  const [showSettings, setShowSettings] = useState(false)
  const [showAgeVerification, setShowAgeVerification] = useState(false)
  const { totalUnread } = useUnreadMessages()

  const handleLogout = async () => {
    try {
      // 如果是匿名用戶，在登出前先刪除資料
      if (user && user.isAnonymous) {
        console.log('🗑️ 匿名用戶登出 - 清理所有資料')
        const userRef = ref(database, `users/${user.uid}`)
        await remove(userRef)
        console.log('✅ 匿名用戶資料已刪除')
      }
      
      await signOut(auth)
      toast.success('已登出')
    } catch (error) {
      console.error('登出失敗:', error)
      toast.error('登出失敗')
    }
  }

  const handleCleanupUsers = async () => {
    try {
      toast.loading('正在清理過期用戶...', { id: 'cleanup' })
      const cleanedCount = await cleanupStaleUsers()
      toast.success(`已清理 ${cleanedCount} 個過期用戶`, { id: 'cleanup' })
    } catch (error) {
      toast.error('清理失敗', { id: 'cleanup' })
    }
  }

  const handleRoomClick = (roomId) => {
    if (roomId === 'sex') {
      // 檢查年齡驗證
      const ageVerified = sessionStorage.getItem('ageVerified')
      if (!ageVerified) {
        setShowAgeVerification(true)
        return
      }
    }
    
    setCurrentRoom(roomId)
    setSidebarOpen(false)
  }

  const handleAgeVerified = () => {
    sessionStorage.setItem('ageVerified', 'true')
    setShowAgeVerification(false)
    setCurrentRoom('sex')
    setSidebarOpen(false)
    toast.success('歡迎進入約炮區！請遵守社區守則。')
  }

  const handleAgeRejected = () => {
    setShowAgeVerification(false)
    setCurrentRoom('chat')
    setSidebarOpen(false)
    toast.error('未滿18歲無法進入約炮區，已自動跳轉至閒聊區。')
  }

  const handleAgeModalClosed = () => {
    setShowAgeVerification(false)
    setCurrentRoom('chat')
    setSidebarOpen(false)
    toast.info('已跳轉至閒聊區。')
  }

  const chatRooms = [
    { id: 'chat', name: '閒聊區', icon: MessageCircle, tip: '歡迎隨意聊聊、發問、抒發生活大小事' },
    { id: 'love', name: '找伴區', icon: Heart, tip: '你正在找伴專區，請多用心互動，彼此尊重' },
    { id: 'sex', name: '約炮區', icon: Users, tip: '匿名聊性、約炮自由，但請勿冒犯他人' }
  ]

  const sidebarClasses = `
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `

  return (
    <>
      {/* 手機版遮罩 */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 側邊欄 */}
      <div className={sidebarClasses}>
        <div className="flex flex-col h-full">
          {/* 用戶資訊區 */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.nickname}&background=2877b9&color=fff`}
                alt={user?.nickname}
                className="w-12 h-12 rounded-full border-2 border-sea-blue"
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-dark-text">
                  {user?.nickname || '用戶'}
                </h3>
                <p className="text-sm text-gray-500">
                  {user?.isAnonymous ? '匿名用戶' : '已註冊用戶'}
                </p>
              </div>
            </div>

            {/* 在線人數 */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              在線成員: {Object.keys(onlineUsers).length} 人
            </div>

            {/* 匿名用戶註冊提示 */}
            {isAnonymous && (
              <div className="mt-4 p-4 bg-gradient-to-r from-sea-light to-accent-orange rounded-lg border border-sea-blue/20">
                <div className="flex items-center gap-2 mb-2">
                  <UserPlus className="w-5 h-5 text-sea-blue" />
                  <span className="font-medium text-sea-dark">升級你的體驗</span>
                </div>
                <p className="text-xs text-sea-dark/80 mb-3">
                  註冊帳號解鎖完整功能：發送訊息、私訊、上傳圖片等
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="w-full px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white text-sm font-medium rounded-lg transition-colors"
                >
                  立即註冊/登入
                </button>
              </div>
            )}
          </div>

          {/* 聊天室列表 */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">聊天室</h4>
              <div className="space-y-1">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => handleRoomClick(room.id)}
                    className={`sidebar-item w-full ${currentRoom === room.id ? 'active' : ''}`}
                  >
                    <room.icon className="w-5 h-5" />
                    <span className="font-medium">{room.name}</span>
                  </button>
                ))}
                
                <button
                  onClick={() => {
                    setCurrentRoom('private')
                    setSidebarOpen(false)
                  }}
                  className={`sidebar-item w-full ${currentRoom === 'private' ? 'active' : ''} relative`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">私人訊息</span>
                  <UnreadBadge count={totalUnread} />
                </button>
              </div>
            </div>

            {/* 在線用戶列表 */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">在線成員</h4>
                <button
                  onClick={handleCleanupUsers}
                  className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400"
                  title="清理過期用戶"
                >
                  🧹
                </button>
              </div>
              <div className="space-y-2">
                {Object.entries(onlineUsers).map(([uid, userData]) => (
                  <div key={uid} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img 
                      src={userData.avatar || `https://ui-avatars.com/api/?name=${userData.nickname}&background=56c596&color=fff`}
                      alt={userData.nickname}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {userData.nickname}
                      </p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                        <span className="text-xs text-gray-500">在線</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 底部設定區 */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <button 
                onClick={toggleDarkMode}
                className="sidebar-item w-full"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{darkMode ? '淺色模式' : '深色模式'}</span>
              </button>

              <button 
                onClick={() => setShowSettings(true)}
                className="sidebar-item w-full transition-all duration-300"
                data-settings-button
              >
                <Settings className="w-5 h-5" />
                <span>設定</span>
              </button>

              <button 
                onClick={handleLogout}
                className="sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <LogOut className="w-5 h-5" />
                <span>登出</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 設定彈窗 */}
      <SettingsModal 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
      
      {/* 年齡驗證彈窗 */}
      <AgeVerificationModal
        isOpen={showAgeVerification}
        onConfirm={handleAgeVerified}
        onReject={handleAgeRejected}
        onClose={handleAgeModalClosed}
      />
    </>
  )
}

export default Sidebar