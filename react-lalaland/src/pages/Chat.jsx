import React, { useEffect } from 'react'
import { useChatStore } from '../store/chatStore'
import { useAuthStore } from '../store/authStore'
import { createSampleData } from '../utils/sampleData'
import Sidebar from '../components/chat/Sidebar'
import ChatArea from '../components/chat/ChatArea'
import MobileHeader from '../components/chat/MobileHeader'
import { usePrivateChatNotifications } from '../hooks/usePrivateChatNotifications'

const Chat = () => {
  const { darkMode } = useChatStore()
  const { user } = useAuthStore()

  // 啟用全域私訊通知監聽
  usePrivateChatNotifications()

  useEffect(() => {
    // 初始化夜間模式
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    // 為新用戶創建範例資料
    if (user) {
      createSampleData(user)
    }
  }, [user])

  return (
    <div className="h-screen flex bg-earth-beige dark:bg-dark-bg">
      {/* 手機版頂部導航 */}
      <MobileHeader />
      
      {/* 側邊欄 */}
      <Sidebar />
      
      {/* 主聊天區域 */}
      <ChatArea />
    </div>
  )
}

export default Chat