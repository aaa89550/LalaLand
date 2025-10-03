import { useState } from 'react';

const useFileValidation = (acceptedFileTypes, maxSize) => {
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    setError(null);

    if (!file) {
      setError('請選擇一個文件。');
      return false;
    }

    const fileType = file.type;
    const fileSize = file.size;

    if (!acceptedFileTypes.includes(fileType)) {
      setError(`不支持的文件類型。請選擇以下類型之一: ${acceptedFileTypes.join(', ')}`);
      return false;
    }

    if (fileSize > maxSize) {
      setError(`文件大小超過限制。最大允許大小為 ${maxSize / 1024 / 1024} MB`);
      return false;
    }

    return true;
  };

  return { validateFile, error };
};

export default useFileValidation;