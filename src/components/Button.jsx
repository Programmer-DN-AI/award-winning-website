import React from 'react';

const Button = ({ children, className = '', onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
