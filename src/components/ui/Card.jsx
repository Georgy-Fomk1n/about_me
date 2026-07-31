import React from 'react';

const Card = ({ icon, title, description, className = '', children }) => {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
