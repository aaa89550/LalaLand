import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../config/firebase'

export const uploadImage = async (file) => {
  if (!file) throw new Error('沒有選擇檔案')

  // 檢查檔案大小 (最大 5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('圖片檔案不能超過 5MB')
  }

  // 檢查檔案類型
  if (!file.type.startsWith('image/')) {
    throw new Error('請選擇圖片檔案')
  }

  // 生成檔案名稱
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substr(2, 9)
  const filename = `chatImages/${timestamp}_${randomId}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

  try {
    // 上傳檔案
    const fileRef = ref(storage, filename)
    const snapshot = await uploadBytes(fileRef, file)
    
    // 取得下載 URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    return downloadURL
  } catch (error) {
    console.error('上傳圖片失敗:', error)
    throw new Error('上傳失敗，請稍後再試')
  }
}

export const createImagePreview = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}