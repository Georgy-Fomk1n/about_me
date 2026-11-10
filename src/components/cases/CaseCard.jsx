import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import caseIcons from './caseIcons';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const findCover = (caseItem) => {
  if (caseItem.cover) return caseItem.cover;
  for (const scene of caseItem.scenes) {
    const photo = (scene.figures || []).find((figure) => !figure.doc);
    if (photo) return photo.src;
  }
  return null;
};

const CaseCard = ({ caseItem, number, index = 0, instant = false }) => {
  const Icon = caseIcons[caseItem.icon];
  const cover = findCover(caseItem);

  return (
    <Link
      to={`/cases/${caseItem.slug}`}
      className={`case-card fade-in fade-in-delay-${(index % 4) + 1}${instant ? ' visible' : ''}`}
    >
      <div className={`case-image${cover ? ' has-cover' : ''}`}>
        {cover && <img src={assetUrl(cover)} alt="" loading="lazy" />}
        <span className="case-number" aria-hidden="true">{String(number).padStart(2, '0')}</span>
        {!cover && (
          <span className="case-icon-tile">
            <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="case-content">
        <span className="case-type">{caseItem.category}</span>
        <h3>{caseItem.title}</h3>
        <p>{caseItem.shortDescription}</p>
        <div className="case-result">
          <span>Статус:</span> {caseItem.statusLine}
        </div>
        <span className="case-more">
          Читать историю <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

export default CaseCard;
