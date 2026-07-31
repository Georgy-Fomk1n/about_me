import React from 'react';
import trust from '@data/trust.json';

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="section-header fade-in">
        <h2>Мне доверяют и со мной сотрудничают</h2>
      </div>
      <div className="trust-logos fade-in fade-in-delay-1">
        {trust.trustLogos.map((logo, index) => (
          <div key={index} className="trust-logo">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
