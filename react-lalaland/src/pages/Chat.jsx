import React, { useEffect, useState } from 'react'
import { useChatStore } from '../store/chatStore'
import { useAuthStore } from '../store/authStore'
import { createSampleData } from '../utils/sampleData'
import Sidebar from '../components/chat/Sidebar'
import ChatArea from '../components/chat/ChatArea'
import MobileHeader from '../components/chat/MobileHeader'
import WelcomeModal from '../components/WelcomeModal'
import { usePrivateChatNotifications } from '../hooks/usePrivateChatNotifications'
import { ref, get, update } from 'firebase/database'
import { database } from '../config/firebase'

const Chat = () => {
  const { darkMode, setCurrentRoom } = useChatStore()
  const { user } = useAuthStore()
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)

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
    // 為新用戶創建範例資料和檢查是否需要顯示歡迎視窗
    const initializeUser = async () => {
      if (user) {
        createSampleData(user)
        
        // 檢查是否為首次登入
        try {
          const userRef = ref(database, `users/${user.uid}`)
          const userSnapshot = await get(userRef)
          
          if (userSnapshot.exists()) {
            const userData = userSnapshot.val()
            
            // 如果是首次登入，顯示歡迎視窗
            if (userData.isFirstLogin) {
              console.log('🎉 首次登入用戶，顯示歡迎視窗')
              setShowWelcomeModal(true)
              
              // 更新資料庫，標記已不是首次登入
              await update(userRef, {
                isFirstLogin: false
              })
            }
          }
        } catch (error) {
          console.error('❌ 檢查首次登入狀態失敗:', error)
        }
      }
    }
    
    initializeUser()
  }, [user])

  // 處理前往設定的動作
  const handleGoToSettings = () => {
    setShowWelcomeModal(false)
    
    // 延遲一下，然後突出顯示設定按鈕
    setTimeout(() => {
      const settingsButton = document.querySelector('[data-settings-button]')
      if (settingsButton) {
        // 添加突出效果
        settingsButton.classList.add('animate-pulse', 'ring-4', 'ring-sea-blue/50')
        
        // 3秒後移除效果
        setTimeout(() => {
          settingsButton.classList.remove('animate-pulse', 'ring-4', 'ring-sea-blue/50')
        }, 3000)
        
        // 滾動到設定按鈕位置
        settingsButton.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      }
    }, 300)
    
    console.log('🔧 用戶選擇前往設定，突出顯示設定按鈕')
  }

  // 關閉歡迎視窗
  const handleCloseWelcome = () => {
    setShowWelcomeModal(false)
  }

  return (
    <div className="h-screen flex bg-earth-beige dark:bg-dark-bg">
      {/* 手機版頂部導航 */}
      <MobileHeader />
      
      {/* 側邊欄 */}
      <Sidebar />
      
      {/* 主聊天區域 */}
      <ChatArea />
      
      {/* 新用戶歡迎視窗 */}
      <WelcomeModal 
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcome}
        onGoToSettings={handleGoToSettings}
      />
    </div>
  )
}

export default Chat