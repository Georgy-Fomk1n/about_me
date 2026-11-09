import React from 'react';
import life from '@data/life.json';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const PhotoStrip = () => (
  <section className="photo-strip">
    <div className="section-header fade-in">
      <h2>{life.title}</h2>
      <p>{life.lead}</p>
    </div>
    <div className="photo-strip-grid">
      {life.photos.map((photo, index) => (
        <figure key={photo.src} className={`photo-strip-item fade-in fade-in-delay-${(index % 4) + 1}`}>
          <img src={assetUrl(photo.src)} alt={photo.caption} loading="lazy" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default PhotoStrip;
