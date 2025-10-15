import React from 'react'

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50">
      <div className="text-center">
        <img 
          src="/icon-512.png?v=2" 
          alt="LalaLand" 
          className="w-32 h-32 mx-auto mb-6 animate-float"
        />
        <h1 className="text-3xl font-bold text-sea-dark mb-2">LalaLand</h1>
        <p className="text-gray-600">載入中...</p>
        
        {/* 載入動畫 */}
        <div className="mt-6">
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen