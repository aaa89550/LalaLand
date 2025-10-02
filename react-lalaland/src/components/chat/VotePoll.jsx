import React, { useState } from 'react'
import { X, Plus } from 'lucide-react'

const VotePoll = ({ onSubmit, onClose }) => {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', ''])

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, ''])
    }
  }

  const updateOption = (index, value) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const removeOption = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index)
      setOptions(newOptions)
    }
  }

  const handleSubmit = () => {
    const validOptions = options.filter(option => option.trim())
    
    if (!question.trim()) {
      alert('請輸入投票問題')
      return
    }
    
    if (validOptions.length < 2) {
      alert('至少需要兩個選項')
      return
    }

    onSubmit({
      question: question.trim(),
      options: validOptions,
      votes: new Array(validOptions.length).fill(0),
      voters: {}
    })
  }

  return (
    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">建立投票</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 投票問題 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          投票問題
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="輸入你的問題..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none"
        />
      </div>

      {/* 選項列表 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          選項
        </label>
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder={`選項 ${index + 1}`}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none"
              />
              {options.length > 2 && (
                <button
                  onClick={() => removeOption(index)}
                  className="px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 新增選項按鈕 */}
        {options.length < 6 && (
          <button
            onClick={addOption}
            className="mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            新增選項
          </button>
        )}
      </div>

      {/* 操作按鈕 */}
      <div className="flex gap-2 justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          取消
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium"
        >
          建立投票
        </button>
      </div>
    </div>
  )
}

export default VotePoll