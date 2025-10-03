import { uploadImageToServer, getImageFromStorage } from '../utils/uploadHelpers';

const storageService = {
  uploadImage: async (file) => {
    try {
      const response = await uploadImageToServer(file);
      return response.data; // Assuming the response contains the image URL or relevant data
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  getImage: async (imageId) => {
    try {
      const image = await getImageFromStorage(imageId);
      return image; // Return the retrieved image
    } catch (error) {
      console.error('Failed to retrieve image:', error);
      throw error; // Rethrow the error for further handling
    }
  }
};

export default storageService;