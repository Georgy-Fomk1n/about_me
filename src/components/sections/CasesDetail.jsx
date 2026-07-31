import React from 'react';
import cases from '@data/cases.json';

const CasesDetail = () => {
  return (
    <div className="cases-list">
      {cases.cases.map((caseItem, index) => (
        <div key={caseItem.id} className={`case-detail fade-in fade-in-delay-${(index % 4) + 1}`}>
          <div 
            className="case-detail-image" 
            style={{ 
              background: caseItem.gradient, 
              color: caseItem.color 
            }}
          >
            <span>{caseItem.image}</span>
          </div>
          <div className="case-detail-content">
            <div className="case-detail-header">
              <h3>{caseItem.title}</h3>
              <span className="case-type">{caseItem.type}</span>
            </div>
            <div className="case-detail-grid">
              <div className="case-detail-block">
                <h4>Проблема</h4>
                <p>{caseItem.details.problem}</p>
              </div>
              <div className="case-detail-block">
                <h4>Контекст</h4>
                <p>{caseItem.details.context}</p>
              </div>
              <div className="case-detail-block">
                <h4>Подход</h4>
                <p>{caseItem.details.approach}</p>
              </div>
              <div className="case-detail-block">
                <h4>Решение</h4>
                <p>{caseItem.details.solution}</p>
              </div>
              <div className="case-detail-block">
                <h4>Результат</h4>
                <p>{caseItem.details.result}</p>
              </div>
              <div className="case-detail-block">
                <h4>Вывод</h4>
                <p>{caseItem.details.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CasesDetail;
