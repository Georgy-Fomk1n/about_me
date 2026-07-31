import React, { useEffect } from 'react';
import CasesDetail from '@components/sections/CasesDetail';
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
        description="Каждый проект — это история мышления, подхода и результата. Посмотрите мои реализованные проекты в цифровой разработке, предпринимательстве и городских инициативах."
        path="/cases"
      />
      <div className="page active">
        <section style={{ paddingTop: '140px' }}>
          <div className="section-header fade-in">
            <h2>Кейсы</h2>
            <p>Каждый проект — это история мышления, подхода и результата</p>
          </div>
          <CasesDetail />
        </section>
      </div>
    </>
  );
};

export default Cases;
