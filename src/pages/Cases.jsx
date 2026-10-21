import React, { useEffect } from 'react';
import CasesList from '@components/sections/CasesList';
import cases from '@data/cases.json';
import { useScrollAnimation } from '@utils/hooks';
import SEO from '@utils/seo';

const Cases = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO
        title="Кейсы"
        description={cases.intro.lead}
        path="/cases"
      />
      <div className="page active">
        <section style={{ paddingTop: '140px' }}>
          <div className="section-header fade-in">
            <h2>{cases.intro.title}</h2>
            <p>{cases.intro.lead}</p>
          </div>
          <CasesList />
        </section>
      </div>
    </>
  );
};

export default Cases;
