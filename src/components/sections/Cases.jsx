import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseCard from '@components/cases/CaseCard';
import cases from '@data/cases.json';

const Cases = () => {
  const featuredCases = cases.cases
    .map((caseItem, index) => ({ caseItem, number: index + 1 }))
    .filter(({ caseItem }) => caseItem.featured);

  return (
    <section>
      <div className="section-header fade-in">
        <h2>Избранные кейсы</h2>
        <p>Проекты, которые показывают подход и результаты</p>
      </div>
      <div className="cards-grid">
        {featuredCases.map(({ caseItem, number }, index) => (
          <CaseCard key={caseItem.id} caseItem={caseItem} number={number} index={index} />
        ))}
      </div>
      <div className="section-more fade-in">
        <Link to="/cases" className="story-link">
          Все кейсы <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Cases;
