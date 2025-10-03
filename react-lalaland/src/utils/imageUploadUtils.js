// imageUploadUtils.js - 圖片上傳和處理工具
export class ImageUploadUtils {
  constructor() {
    this.maxFileSize = 5 * 1024 * 1024; // 5MB
    this.allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    this.maxWidth = 400;
    this.maxHeight = 400;
  }

  // 檢查文件是否有效
  validateFile(file) {
    const errors = [];

    if (!file) {
      errors.push('請選擇一個文件');
      return { valid: false, errors };
    }

    if (!this.allowedTypes.includes(file.type)) {
      errors.push('只支援 JPG、PNG、GIF、WebP 格式的圖片');
    }

    if (file.size > this.maxFileSize) {
      const maxSizeMB = this.maxFileSize / (1024 * 1024);
      errors.push(`文件大小不能超過 ${maxSizeMB}MB`);
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  // 壓縮圖片
  async compressImage(file, maxWidth = this.maxWidth, maxHeight = this.maxHeight, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // 計算新的尺寸
        let { width, height } = this.calculateDimensions(
          img.width, 
          img.height, 
          maxWidth, 
          maxHeight
        );

        canvas.width = width;
        canvas.height = height;

        // 繪製壓縮後的圖片
        ctx.drawImage(img, 0, 0, width, height);

        // 轉換為 blob
        canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          file.type,
          quality
        );
      };

      img.onerror = () => {
        reject(new Error('圖片載入失敗'));
      };

      img.src = URL.createObjectURL(file);
    });
  }

  // 計算壓縮後的尺寸
  calculateDimensions(width, height, maxWidth, maxHeight) {
    if (width <= maxWidth && height <= maxHeight) {
      return { width, height };
    }

    const aspectRatio = width / height;

    if (width > height) {
      width = maxWidth;
      height = width / aspectRatio;
    } else {
      height = maxHeight;
      width = height * aspectRatio;
    }

    return { 
      width: Math.round(width), 
      height: Math.round(height) 
    };
  }

  // 轉換為 Base64
  async fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result);
      };
      
      reader.onerror = () => {
        reject(new Error('文件讀取失敗'));
      };
      
      reader.readAsDataURL(file);
    });
  }

  // 完整的圖片處理流程
  async processImage(file) {
    try {
      console.log('🖼️ 開始處理圖片:', file.name);

      // 1. 驗證文件
      const validation = this.validateFile(file);
      if (!validation.valid) {
        throw new Error(validation.errors.join(', '));
      }

      // 2. 壓縮圖片
      console.log('📐 壓縮圖片...');
      const compressedBlob = await this.compressImage(file);
      
      // 3. 轉換為 Base64
      console.log('🔤 轉換為 Base64...');
      const base64 = await this.fileToBase64(compressedBlob);

      console.log('✅ 圖片處理完成', {
        originalSize: (file.size / 1024).toFixed(1) + 'KB',
        compressedSize: (compressedBlob.size / 1024).toFixed(1) + 'KB',
        reduction: ((1 - compressedBlob.size / file.size) * 100).toFixed(1) + '%'
      });

      return {
        success: true,
        base64,
        blob: compressedBlob,
        originalFile: file,
        stats: {
          originalSize: file.size,
          compressedSize: compressedBlob.size,
          reduction: ((1 - compressedBlob.size / file.size) * 100).toFixed(1)
        }
      };

    } catch (error) {
      console.error('❌ 圖片處理失敗:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 創建圓形頭像預覽
  createAvatarPreview(base64, size = 80) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    return new Promise((resolve) => {
      img.onload = () => {
        canvas.width = size;
        canvas.height = size;

        // 創建圓形裁切路徑
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // 繪製圓形頭像
        ctx.drawImage(img, 0, 0, size, size);

        resolve(canvas.toDataURL());
      };

      img.src = base64;
    });
  }
}

// 創建全域實例
export const imageUploadUtils = new ImageUploadUtils();

export default imageUploadUtils;