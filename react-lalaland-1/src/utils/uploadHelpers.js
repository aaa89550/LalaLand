import axios from 'axios';

// Helper function to upload an image
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Assuming the API returns the uploaded image data
  } catch (error) {
    console.error('Image upload failed:', error);
    throw error;
  }
};

// Helper function to delete an image
export const deleteImage = async (imageId) => {
  try {
    const response = await axios.delete(`/api/upload/${imageId}`);
    return response.data; // Assuming the API returns a success message
  } catch (error) {
    console.error('Image deletion failed:', error);
    throw error;
  }
};

// Helper function to fetch uploaded images
export const fetchUploadedImages = async () => {
  try {
    const response = await axios.get('/api/upload');
    return response.data; // Assuming the API returns an array of uploaded images
  } catch (error) {
    console.error('Failed to fetch uploaded images:', error);
    throw error;
  }
};