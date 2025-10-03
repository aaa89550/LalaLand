import axios from 'axios';

const API_URL = '/api/images'; // Adjust this to your actual API endpoint

// Function to upload an image
export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Return the response data (e.g., image URL)
  } catch (error) {
    console.error('Image upload failed:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Function to delete an image
export const deleteImage = async (imageId) => {
  try {
    const response = await axios.delete(`${API_URL}/${imageId}`);
    return response.data; // Return the response data (e.g., success message)
  } catch (error) {
    console.error('Image deletion failed:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Function to fetch images
export const fetchImages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the list of images
  } catch (error) {
    console.error('Fetching images failed:', error);
    throw error; // Rethrow the error for handling in the component
  }
};