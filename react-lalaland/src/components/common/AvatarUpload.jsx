// AvatarUpload.jsx - 頭像上傳組件
import React, { useState, useRef } from 'react';
import { Camera, Upload, X, User } from 'lucide-react';
import { imageUploadUtils } from '../../utils/imageUploadUtils';

const AvatarUpload = ({ 
  currentAvatar = '', 
  onAvatarChange = () => {}, 
  size = 'large' // 'small', 'medium', 'large'
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentAvatar);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // 尺寸設定
  const sizeConfig = {
    small: { container: 'w-16 h-16', icon: 'w-4 h-4', button: 'w-5 h-5' },
    medium: { container: 'w-20 h-20', icon: 'w-5 h-5', button: 'w-6 h-6' },
    large: { container: 'w-24 h-24', icon: 'w-6 h-6', button: 'w-7 h-7' }
  };

  const config = sizeConfig[size];

  // 處理文件選擇
  const handleFileSelect = async (file) => {
    if (!file) return;

    setIsUploading(true);
    
    try {
      console.log('📸 處理頭像上傳:', file.name);
      
      const result = await imageUploadUtils.processImage(file);
      
      if (result.success) {
        const avatarPreview = await imageUploadUtils.createAvatarPreview(result.base64);
        setPreviewUrl(avatarPreview);
        onAvatarChange(result.base64, result.stats);
        
        console.log('✅ 頭像上傳成功');
      } else {
        throw new Error(result.error);
      }
      
    } catch (error) {
      console.error('❌ 頭像上傳失敗:', error);
      
      // 顯示錯誤訊息
      if (window.showNotification) {
        window.showNotification(`頭像上傳失敗: ${error.message}`, 'error', 5000);
      }
    } finally {
      setIsUploading(false);
      setShowUploadOptions(false);
    }
  };

  // 文件輸入變更
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleFileSelect(file);
    // 清空 input 以允許重複選擇相同文件
    event.target.value = '';
  };

  // 拖拽上傳
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // 移除頭像
  const handleRemoveAvatar = () => {
    setPreviewUrl('');
    onAvatarChange('');
    setShowUploadOptions(false);
  };

  return (
    <div className="relative">
      {/* 頭像顯示區域 */}
      <div 
        className={`${config.container} relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-pointer group border-2 border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-400 transition-colors`}
        onClick={() => setShowUploadOptions(!showUploadOptions)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* 頭像圖片或預設圖示 */}
        {previewUrl ? (
          <img 
            src={previewUrl} 
            alt="頭像" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <User className={config.icon} />
          </div>
        )}

        {/* 上傳指示器 */}
        {isUploading ? (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
            <Camera className={`${config.icon} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
          </div>
        )}
      </div>

      {/* 上傳選項彈出選單 */}
      {showUploadOptions && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-48">
          {/* 從相簿選擇 */}
          <button
            onClick={() => {
              fileInputRef.current?.click();
              setShowUploadOptions(false);
            }}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm"
          >
            <Upload className="w-4 h-4 text-gray-500" />
            <span>從相簿選擇</span>
          </button>

          {/* 拍照上傳（手機支援） */}
          <button
            onClick={() => {
              cameraInputRef.current?.click();
              setShowUploadOptions(false);
            }}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm md:hidden"
          >
            <Camera className="w-4 h-4 text-gray-500" />
            <span>拍照上傳</span>
          </button>

          {/* 移除頭像 */}
          {previewUrl && (
            <button
              onClick={handleRemoveAvatar}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm text-red-600 border-t border-gray-200 dark:border-gray-700"
            >
              <X className="w-4 h-4" />
              <span>移除頭像</span>
            </button>
          )}
        </div>
      )}

      {/* 隱藏的文件輸入 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* 隱藏的相機輸入（手機專用） */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* 點擊遮罩關閉選單 */}
      {showUploadOptions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUploadOptions(false)}
        />
      )}
    </div>
  );
};

export default AvatarUpload;