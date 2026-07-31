import React from 'react';

const Card = ({ icon: Icon, title, description, className = '', children }) => {
  return (
    <div className={`card ${className}`}>
      {Icon && (
        <div className="card-icon">
          <Icon size={32} strokeWidth={1.8} />
        </div>
      )}

      {title && <h3>{title}</h3>}

      {description && <p>{description}</p>}

      {children}
    </div>
  );
};

export default Card;