import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import caseIcons from './caseIcons';

const CaseCard = ({ caseItem, number, index = 0, instant = false }) => {
  const Icon = caseIcons[caseItem.icon];

  return (
    <Link
      to={`/cases/${caseItem.slug}`}
      className={`case-card fade-in fade-in-delay-${(index % 4) + 1}${instant ? ' visible' : ''}`}
    >
      <div className="case-image">
        <span className="case-number" aria-hidden="true">{String(number).padStart(2, '0')}</span>
        <span className="case-icon-tile">
          <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
        </span>
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
