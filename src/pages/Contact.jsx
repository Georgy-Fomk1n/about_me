import React, { useEffect } from 'react';
import ContactContent from '@components/sections/ContactContent';
import { useScrollAnimation } from '@utils/hooks';
import SEO from '@utils/seo';

const Contact = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO 
        title="Контакты"
        description="Открыты к сотрудничеству в разных форматах. Свяжитесь с нами для обсуждения проектов, партнёрства или консультаций."
        path="/contact"
      />
      <div className="page active">
        <section style={{ paddingTop: '140px' }}>
          <div className="section-header fade-in">
            <h2>Обсудим идею или проект</h2>
            <p>Открыты к сотрудничеству в разных форматах. Выберите удобный способ связи.</p>
          </div>
          <ContactContent />
        </section>
      </div>
    </>
  );
};

export default Contact;
