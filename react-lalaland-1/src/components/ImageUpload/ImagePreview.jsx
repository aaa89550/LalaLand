import React from 'react';

const ImagePreview = ({ imageSrc, onRemove }) => {
  return (
    <div className="image-preview">
      {imageSrc ? (
        <div className="relative">
          <img src={imageSrc} alt="Preview" className="w-full h-auto rounded-lg" />
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
          >
            &times;
          </button>
        </div>
      ) : (
        <p className="text-gray-500">No image selected</p>
      )}
    </div>
  );
};

export default ImagePreview;