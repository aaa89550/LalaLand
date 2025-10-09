import React, { useState } from 'react'
import { X, AlertTriangle } from 'lucide-react'

const AgeVerificationModal = ({ isOpen, onConfirm, onReject, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)

  if (!isOpen) return null

  const handleReject = () => {
    setIsClosing(true)
    setTimeout(() => {
      onReject()
      setIsClosing(false)
    }, 200)
  }

  const handleConfirm = () => {
    setIsClosing(true)
    setTimeout(() => {
      onConfirm()
      setIsClosing(false)
    }, 200)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* 彈跳視窗 */}
      <div 
        className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full transform transition-all duration-200 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* 關閉按鈕 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 警告圖示 */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-amber-600 dark:text-amber-400" />
          </div>
        </div>

        {/* 標題 */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          年齡驗證
        </h2>

        {/* 內容 */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            你即將進入約炮區，此區域包含成人內容。
          </p>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            請確認你是否已滿 18 歲？
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            未滿 18 歲的用戶將自動跳轉至閒聊區
          </p>
        </div>

        {/* 按鈕 */}
        <div className="flex gap-4">
          <button
            onClick={handleReject}
            className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-colors duration-200"
          >
            否，未滿 18 歲
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            是，已滿 18 歲
          </button>
        </div>

        {/* 底部提示 */}
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
          LalaLand 致力於為用戶提供安全的交流環境
        </p>
      </div>
    </div>
  )
}

export default AgeVerificationModal