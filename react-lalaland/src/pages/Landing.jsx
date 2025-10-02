import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Heart, Users, Lock } from 'lucide-react'

const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '即時聊天',
      description: '與志同道合的朋友即時對話交流'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '安全友善',
      description: '專為女性LGBTQ+社群設計的安全空間'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '多元社群',
      description: '閒聊、找伴、交友，滿足不同需求'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: '隱私保護',
      description: '匿名模式與隱私設定保護你的安全'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/icon-512.png" 
              alt="LalaLand" 
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold text-sea-dark">LalaLand</h1>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="btn-primary"
          >
            登入 / 註冊
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <img 
            src="/icon-512.png" 
            alt="LalaLand Logo" 
            className="w-32 h-32 mx-auto mb-8 animate-float"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            歡迎來到 
            <span className="text-sea-blue"> LalaLand</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            專為女同性戀者設計的安全聊天平台<br />
            在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => navigate('/login')}
              className="btn-primary text-lg px-8 py-4"
            >
              開始聊天
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="btn-secondary text-lg px-8 py-4"
            >
              匿名體驗
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card text-center hover:shadow-medium transition-shadow"
              >
                <div className="text-sea-blue mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing