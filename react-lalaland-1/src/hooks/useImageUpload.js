import { useState } from 'react';
import { validateFile } from '../hooks/useFileValidation';
import { resizeImage } from '../hooks/useImageResize';
import { uploadImage } from '../services/imageService';

const useImageUpload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (file) => {
    setError(null);
    setLoading(true);

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const resizedImage = await resizeImage(file);
      setImage(resizedImage);
      await uploadImage(resizedImage);
    } catch (err) {
      setError('Image upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return {
    image,
    error,
    loading,
    handleImageChange,
    clearImage,
  };
};

export default useImageUpload;