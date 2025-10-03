import React from 'react';

const Button = ({ onClick, children, className, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-primary-700 transition-colors ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;