import React from 'react';
import { Link } from 'react-router-dom';
import cases from '@data/cases.json';

const Cases = () => {
  const featuredCases = cases.cases.slice(0, 5);

  return (
    <section>
      <div className="section-header fade-in">
        <h2>Избранные кейсы</h2>
        <p>Проекты, которые показывают подход и результаты</p>
      </div>
      <div className="cards-grid">
        {featuredCases.map((caseItem, index) => (
          <div
            key={caseItem.id}
            className={`case-card fade-in fade-in-delay-${(index % 4) + 1}`}
            onClick={() => window.location.href = '/cases'}
          >
            <div 
              className="case-image" 
              style={{ 
                background: caseItem.gradient, 
                color: caseItem.color 
              }}
            >
              <span>{caseItem.image}</span>
            </div>
            <div className="case-content">
              <span className="case-type">{caseItem.category}</span>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.shortDescription}</p>
              <div className="case-result">
                <span>Результат:</span> {caseItem.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;
