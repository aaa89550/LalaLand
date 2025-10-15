import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 導入 PWA 初始化工具
import './utils/pwaInit.js'

// 防禦性渲染 - 防止崩潰
const renderApp = () => {
  try {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    console.log('✅ 應用程式渲染成功')
  } catch (error) {
    console.error('❌ 應用程式渲染失敗:', error)
    
    // 顯示錯誤頁面
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center; 
          height: 100vh; 
          font-family: system-ui, -apple-system, sans-serif;
          background: #f7f1e1;
          color: #333;
          text-align: center;
          padding: 20px;
        ">
          <div style="
            background: white; 
            padding: 2rem; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 400px;
          ">
            <h1 style="color: #dc2626; margin-bottom: 1rem;">應用程式啟動失敗</h1>
            <p style="margin-bottom: 1.5rem; color: #666;">
              很抱歉，應用程式無法正常啟動。請嘗試以下解決方案：
            </p>
            <button 
              onclick="window.location.reload()" 
              style="
                background: #2563eb; 
                color: white; 
                border: none; 
                padding: 12px 24px; 
                border-radius: 6px; 
                cursor: pointer; 
                font-size: 16px;
                margin: 0 8px;
              "
            >
              重新載入
            </button>
            <button 
              onclick="
                localStorage.clear(); 
                sessionStorage.clear(); 
                window.location.reload();
              " 
              style="
                background: #dc2626; 
                color: white; 
                border: none; 
                padding: 12px 24px; 
                border-radius: 6px; 
                cursor: pointer; 
                font-size: 16px;
                margin: 0 8px;
              "
            >
              清除資料並重新載入
            </button>
          </div>
        </div>
      `
    }
  }
}

renderApp()