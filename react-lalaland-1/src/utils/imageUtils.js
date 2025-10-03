import { useImageResize } from '../hooks/useImageResize';
import { useFileValidation } from '../hooks/useFileValidation';

// Function to resize an image file
export const resizeImage = async (file, maxWidth, maxHeight) => {
  const resizedImage = await useImageResize(file, maxWidth, maxHeight);
  return resizedImage;
};

// Function to validate an image file
export const validateImageFile = (file) => {
  const isValid = useFileValidation(file);
  return isValid;
};

// Function to convert a file to a base64 string
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Function to create an image URL from a file
export const createImageUrl = (file) => {
  return URL.createObjectURL(file);
};