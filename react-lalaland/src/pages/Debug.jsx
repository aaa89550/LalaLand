import React, { useState } from 'react'
import { debugDatabase, debugRoomMessages } from '../utils/debugFirebase'
import { useAuthStore } from '../store/authStore'

const DebugPage = () => {
  const { user } = useAuthStore()
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)

  const runFullDebug = async () => {
    setLoading(true)
    setResults('')
    
    try {
      console.log('🔍 開始完整偵錯...')
      await debugDatabase()
      setResults('偵錯完成，請檢查瀏覽器控制台查看詳細結果')
    } catch (error) {
      setResults(`偵錯失敗: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const debugSpecificRoom = async () => {
    const roomId = prompt('請輸入房間 ID (如: casual, dating, hookup):')
    if (!roomId) return

    setLoading(true)
    try {
      const messages = await debugRoomMessages(roomId)
      if (messages) {
        setResults(`房間 ${roomId} 找到 ${Object.keys(messages).length} 條訊息`)
      } else {
        setResults(`房間 ${roomId} 沒有訊息`)
      }
    } catch (error) {
      setResults(`偵錯房間失敗: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Firebase 偵錯工具
        </h1>

        {user && (
          <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              當前用戶
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              UID: {user.uid}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              暱稱: {user.nickname}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={runFullDebug}
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? '偵錯中...' : '完整偵錯 (檢查控制台)'}
          </button>

          <button
            onClick={debugSpecificRoom}
            disabled={loading}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            偵錯特定房間
          </button>


        </div>

        {results && (
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              偵錯結果
            </h3>
            <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {results}
            </pre>
          </div>
        )}

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            說明
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。
            參考專案中的 FIREBASE_SETUP.md 文件。
          </p>
        </div>
      </div>
    </div>
  )
}

export default DebugPage