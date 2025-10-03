import { isImageFile, isValidFileSize } from './fileUtils';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export const useImageUpload = (onUploadSuccess) => {
  const handleFileChange = (file) => {
    if (!isImageFile(file)) {
      alert('請選擇有效的圖片文件');
      return;
    }

    if (!isValidFileSize(file.size, MAX_FILE_SIZE)) {
      alert('文件大小超過限制，請選擇小於 5 MB 的文件');
      return;
    }

    // 進行上傳操作
    uploadImage(file).then(onUploadSuccess).catch((error) => {
      console.error('上傳失敗:', error);
    });
  };

  return { handleFileChange };
};

const uploadImage = async (file) => {
  // 上傳邏輯，這裡可以調用 API
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('上傳失敗');
  }

  return response.json();
};