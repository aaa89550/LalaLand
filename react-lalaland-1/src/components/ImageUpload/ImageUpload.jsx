import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import CropModal from './CropModal';
import './ImageUpload.css';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsCropModalOpen(true);
    }
  };

  const handleCropComplete = (croppedImageUrl) => {
    setCroppedImage(croppedImageUrl);
    setIsCropModalOpen(false);
  };

  const handleUpload = () => {
    // Implement the upload logic here
    console.log('Uploading image:', croppedImage);
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-upload-input"
      />
      {selectedImage && (
        <ImagePreview imageUrl={selectedImage} />
      )}
      {isCropModalOpen && (
        <CropModal
          imageUrl={selectedImage}
          onCropComplete={handleCropComplete}
          onClose={() => setIsCropModalOpen(false)}
        />
      )}
      {croppedImage && (
        <button onClick={handleUpload} className="upload-button">
          Upload Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;