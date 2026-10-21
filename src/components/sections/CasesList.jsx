import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CaseCard from '@components/cases/CaseCard';
import cases from '@data/cases.json';

const CasesList = () => {
  const [group, setGroup] = useState('all');
  const [touched, setTouched] = useState(false);

  const visible = cases.cases
    .map((caseItem, index) => ({ caseItem, number: index + 1 }))
    .filter(({ caseItem }) => group === 'all' || caseItem.group === group);

  const choose = (id) => {
    setGroup(id);
    setTouched(true);
  };

  return (
    <>
      <div className="cases-filter fade-in" role="group" aria-label="Тема кейсов">
        {[{ id: 'all', label: 'Все' }, ...cases.groups].map((item) => (
          <button
            key={item.id}
            type="button"
            className={`cases-filter-chip${group === item.id ? ' active' : ''}`}
            aria-pressed={group === item.id}
            onClick={() => choose(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {visible.map(({ caseItem, number }, index) => (
          <CaseCard key={caseItem.id} caseItem={caseItem} number={number} index={index} instant={touched} />
        ))}
      </div>

      <div className="cases-method fade-in">
        <h3>Как мы пишем обращения</h3>
        <div className="work-steps">
          {cases.intro.method.map((step, index) => (
            <div key={step.title} className="work-step">
              <div className="work-step-number">{String(index + 1).padStart(2, '0')}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="btn-primary">
          Обсудить проект
        </Link>
      </div>
    </>
  );
};

export default CasesList;
