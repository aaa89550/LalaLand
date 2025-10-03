import { useState } from 'react';

const useImageResize = (maxWidth, maxHeight) => {
  const [resizedImage, setResizedImage] = useState(null);

  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (event) => {
        img.src = event.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;

        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
          if (blob) {
            setResizedImage(blob);
            resolve(blob);
          } else {
            reject(new Error('Image resizing failed.'));
          }
        }, file.type);
      };

      img.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return { resizedImage, resizeImage };
};

export default useImageResize;