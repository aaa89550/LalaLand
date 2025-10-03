// 測試圖片壓縮功能
import { ImageUploadUtils } from './imageUploadUtils'

export const testImageCompression = () => {
  console.log('🧪 開始測試圖片壓縮功能...')
  
  // 創建一個測試用的 canvas 圖片
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  // 創建一個相對較大的測試圖片 (1200x800)
  canvas.width = 1200
  canvas.height = 800
  
  // 繪製漸變背景
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, '#ff6b6b')
  gradient.addColorStop(0.5, '#4ecdc4')
  gradient.addColorStop(1, '#45b7d1')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // 繪製一些文字
  ctx.fillStyle = 'white'
  ctx.font = '48px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('圖片壓縮測試', canvas.width / 2, canvas.height / 2)
  ctx.font = '24px Arial'
  ctx.fillText('LalaLand Chat App', canvas.width / 2, canvas.height / 2 + 60)
  
  // 轉換為 Blob
  canvas.toBlob(async (blob) => {
    if (!blob) {
      console.error('❌ 無法創建測試圖片')
      return
    }
    
    console.log('📊 原始測試圖片:', {
      大小: (blob.size / 1024).toFixed(1) + 'KB',
      尺寸: `${canvas.width}x${canvas.height}`,
      類型: blob.type
    })
    
    try {
      // 測試壓縮功能
      const imageUploadUtils = new ImageUploadUtils()
      const result = await imageUploadUtils.processImage(blob)
      
      if (result.success) {
        console.log('✅ 壓縮測試成功:', {
          原始大小: (blob.size / 1024).toFixed(1) + 'KB',
          壓縮後: (result.blob.size / 1024).toFixed(1) + 'KB',
          壓縮率: result.stats.reduction + '%',
          處理時間: result.stats.processingTime + 'ms'
        })
        
        // 手機環境額外測試
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        if (isMobile && result.blob.size > 200 * 1024) {
          console.log('📱 測試手機環境額外壓縮...')
          const mobileBlob = await imageUploadUtils.compressImage(blob, 300, 300, 0.6)
          console.log('📱 手機壓縮結果:', {
            額外壓縮後: (mobileBlob.size / 1024).toFixed(1) + 'KB',
            總壓縮率: (((blob.size - mobileBlob.size) / blob.size) * 100).toFixed(1) + '%'
          })
        }
        
        return result
      } else {
        console.error('❌ 壓縮測試失敗:', result.error)
      }
    } catch (error) {
      console.error('❌ 壓縮測試出現錯誤:', error)
    }
  }, 'image/png', 0.8)
}

// 測試不同格式和大小的圖片
export const testMultipleImageFormats = async () => {
  console.log('🔬 開始多格式圖片壓縮測試...')
  
  const imageUploadUtils = new ImageUploadUtils()
  
  // 測試不同的圖片尺寸
  const testCases = [
    { width: 4000, height: 3000, name: '超高解析度' },
    { width: 1920, height: 1080, name: 'Full HD' },
    { width: 800, height: 600, name: '中等尺寸' },
    { width: 400, height: 300, name: '小尺寸' }
  ]
  
  for (const testCase of testCases) {
    console.log(`\n🖼️  測試 ${testCase.name} (${testCase.width}x${testCase.height})`)
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = testCase.width
    canvas.height = testCase.height
    
    // 創建複雜的圖片內容
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2
    )
    gradient.addColorStop(0, '#ff9a9e')
    gradient.addColorStop(0.5, '#fad0c4')
    gradient.addColorStop(1, '#a8edea')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // 添加一些細節
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 100 + 10,
        Math.random() * 100 + 10
      )
    }
    
    canvas.toBlob(async (blob) => {
      if (!blob) return
      
      const originalSize = blob.size
      console.log(`   原始大小: ${(originalSize / 1024).toFixed(1)}KB`)
      
      try {
        const result = await imageUploadUtils.processImage(blob)
        if (result.success) {
          console.log(`   ✅ 壓縮成功: ${(result.blob.size / 1024).toFixed(1)}KB (減少 ${result.stats.reduction}%)`)
        }
      } catch (error) {
        console.log(`   ❌ 壓縮失敗: ${error.message}`)
      }
    }, 'image/png', 0.9)
  }
}

// 暴露到全域以便在 DevTools 中測試
if (typeof window !== 'undefined') {
  window.testImageCompression = testImageCompression
  window.testMultipleImageFormats = testMultipleImageFormats
}