import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'btn-primary';
  const styles = {
    primary: baseStyles,
    secondary: 'btn-secondary'
  };

  return (
    <button
      className={`${styles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
