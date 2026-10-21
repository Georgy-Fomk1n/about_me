import React, { useEffect } from 'react';
import AboutContent from '@components/sections/AboutContent';
import { useScrollAnimation } from '@utils/hooks';
import SEO from '@utils/seo';

const About = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO 
        title="О нас"
        description="Познакомьтесь с нашим подходом к работе, компетенциями и путём в технологиях. Предприниматель, архитектор цифровых продуктов, исследователь городских систем."
        path="/about"
      />
      <div className="page active">
        <section style={{ paddingTop: '140px' }}>
          <AboutContent />
        </section>
      </div>
    </>
  );
};

export default About;
