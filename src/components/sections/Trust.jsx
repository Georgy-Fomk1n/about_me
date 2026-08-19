import React from 'react';
import trust from '@data/trust.json';

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="section-header fade-in">
        <h2>Мне доверяют и со мной сотрудничают</h2>
      </div>
      <div className="trust-logos fade-in fade-in-delay-1">
        {trust.trustLogos.map((partner, index) => (
          <a 
            key={index} 
            href={partner.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="trust-logo"
          >
            <div className="trust-logo-image">
              <img src={partner.logo} alt={partner.name} />
            </div>
            <div className="trust-logo-name">{partner.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Trust;
