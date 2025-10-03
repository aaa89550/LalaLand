import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useImageResize } from '../../hooks/useImageResize';

const CropModal = ({ isOpen, onClose, image, onCrop }) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const { resizeImage } = useImageResize();

  const handleCrop = () => {
    if (croppedImage) {
      onCrop(croppedImage);
      onClose();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const resized = resizeImage(img);
          setCroppedImage(resized);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="crop-modal">
        <h2 className="text-lg font-semibold">Crop Image</h2>
        {image && (
          <div className="image-preview">
            <img src={image} alt="Preview" />
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div className="crop-controls">
          <button onClick={handleCrop} className="btn-confirm">Confirm Crop</button>
          <button onClick={onClose} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default CropModal;