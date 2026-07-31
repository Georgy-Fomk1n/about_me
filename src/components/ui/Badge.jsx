// Badge.jsx
import React from 'react';

const Badge = ({ children, icon: Icon, className = '' }) => {
  return (
    <span className={`badge ${className}`}>
      {Icon && <Icon className="badge-icon" />}
      {children}
    </span>
  );
};

export default Badge;