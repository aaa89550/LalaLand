import React from 'react'
import { Settings, User, Camera, X } from 'lucide-react'

const WelcomeModal = ({ isOpen, onClose, onGoToSettings }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-card rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative animate-fade-in">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="關閉"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 歡迎內容 */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-sea-blue to-sea-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            歡迎加入 LalaLand！
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            恭喜您成功註冊！為了讓其他用戶更容易認識您，建議您完善個人資料。
          </p>
        </div>

        {/* 功能介紹 */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                設置個人暱稱
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                讓其他用戶更容易記住您
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                上傳個人頭像
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                展現您的個人風格
              </p>
            </div>
          </div>
        </div>

        {/* 行動按鈕 */}
        <div className="flex space-x-3">
          <button
            onClick={onGoToSettings}
            className="flex-1 bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>前往設定</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-medium"
          >
            稍後設定
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal