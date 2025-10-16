import React, { useState, useEffect } from 'react'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 組件掛載後立即淡入
    setIsVisible(true)
  }, [])

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <img 
            src="/icon-512.png?v=2" 
            alt="LalaLand" 
            className="w-32 h-32 mx-auto mb-6 animate-float"
            style={{
              animation: 'float 3s ease-in-out infinite',
              willChange: 'transform'
            }}
          />
          {/* 添加光暈效果增強視覺 */}
          <div 
            className="absolute inset-0 w-32 h-32 mx-auto mb-6 rounded-full opacity-20 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(40, 119, 185, 0.3) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        <h1 className="text-3xl font-bold text-sea-dark mb-2 animate-fade-in">LalaLand</h1>
        <p className="text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>載入中...</p>
        
        {/* 載入動畫 */}
        <div className="mt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-sea-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* 確保動畫定義存在的後備方案 */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default SplashScreen