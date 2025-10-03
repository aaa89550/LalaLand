import React, { useState } from 'react';
import { useImageUpload } from '../../hooks/useImageUpload';
import ImagePreview from '../ImageUpload/ImagePreview';
import Modal from '../common/Modal';
import LoadingSpinner from '../common/LoadingSpinner';

const AvatarUpload = () => {
  const { uploadImage, isLoading, error } = useImageUpload();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsModalOpen(true);
    }
  };

  const handleUpload = async (croppedImage) => {
    await uploadImage(croppedImage);
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="avatar-upload">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="avatar-upload-input"
      />
      <label htmlFor="avatar-upload-input" className="cursor-pointer">
        <div className="avatar-placeholder">
          {selectedImage ? (
            <ImagePreview imageSrc={selectedImage} />
          ) : (
            <span>上傳您的頭像</span>
          )}
        </div>
      </label>

      {isLoading && <LoadingSpinner />}
      {error && <p className="error-message">{error}</p>}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>裁剪您的頭像</h2>
          {/* CropModal component can be integrated here */}
          <button onClick={() => handleUpload(selectedImage)}>確認上傳</button>
        </Modal>
      )}
    </div>
  );
};

export default AvatarUpload;