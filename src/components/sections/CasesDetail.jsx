import React from 'react';
import cases from '@data/cases.json';

const CasesDetail = () => {
  if (cases.cases.length === 0) {
    return (
      <div className="fade-in" style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚧</div>
        <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '16px' }}>Кейсы скоро появятся</h3>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          В данный момент я работаю над интересными проектами. Скоро здесь появятся подробные описания реализованных кейсов с детальным разбором проблем, подходов и результатов.
        </p>
        <div style={{ marginTop: '32px' }}>
          <a href="/contact" className="btn-primary">
            Обсудить проект
          </a>
        </div>
      </div>
    );
  }

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
