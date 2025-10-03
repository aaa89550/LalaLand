import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../config/firebase'
import { imageUploadUtils } from './imageUploadUtils'

export const uploadImage = async (file) => {
  if (!file) throw new Error('沒有選擇檔案')

  console.log('📸 開始處理聊天圖片:', file.name, (file.size / 1024).toFixed(1) + 'KB')

  try {
    // 使用智能壓縮處理圖片
    const processed = await imageUploadUtils.processImage(file)
    
    if (!processed.success) {
      throw new Error(processed.error)
    }

    console.log('📐 圖片壓縮完成:', {
      原始大小: (file.size / 1024).toFixed(1) + 'KB',
      壓縮後: (processed.blob.size / 1024).toFixed(1) + 'KB', 
      壓縮率: processed.stats.reduction + '%'
    })

    // 檢測是否為手機環境
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // 手機環境使用更激進的壓縮
    let finalBlob = processed.blob
    if (isMobile && processed.blob.size > 200 * 1024) { // 如果手機上仍然大於 200KB
      console.log('📱 手機環境，進行額外壓縮')
      finalBlob = await imageUploadUtils.compressImage(processed.originalFile, 300, 300, 0.6) // 更小尺寸，更低品質
      console.log('📱 手機壓縮後大小:', (finalBlob.size / 1024).toFixed(1) + 'KB')
    }

    // 生成檔案名稱
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substr(2, 9)
    const filename = `chatImages/${timestamp}_${randomId}_compressed.jpg`

    // 上傳壓縮後的檔案
    const fileRef = ref(storage, filename)
    const snapshot = await uploadBytes(fileRef, finalBlob)
    
    // 取得下載 URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    console.log('✅ 圖片上傳成功:', downloadURL)
    
    // 顯示壓縮統計
    if (window.showNotification) {
      const reduction = ((1 - finalBlob.size / file.size) * 100).toFixed(1)
      window.showNotification(
        `圖片已壓縮 ${reduction}% 並上傳成功`, 
        'success', 
        3000
      )
    }
    
    return downloadURL
  } catch (error) {
    console.error('❌ 上傳圖片失敗:', error)
    throw new Error(error.message || '上傳失敗，請稍後再試')
  }
}

export const createImagePreview = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}