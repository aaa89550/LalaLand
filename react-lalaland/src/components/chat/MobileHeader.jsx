import React from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useChatStore } from '../../store/chatStore'
import { useAuthStore } from '../../store/authStore'

const MobileHeader = () => {
  const { sidebarOpen, setSidebarOpen, darkMode, toggleDarkMode } = useChatStore()
  const { user } = useAuthStore()

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <img 
              src="/icon-512.png" 
              alt="LalaLand" 
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="font-semibold text-gray-800 dark:text-dark-text">LalaLand</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {user && (
            <img 
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.nickname}&background=2877b9&color=fff`}
              alt={user.nickname}
              className="w-8 h-8 rounded-full border-2 border-sea-blue"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileHeader