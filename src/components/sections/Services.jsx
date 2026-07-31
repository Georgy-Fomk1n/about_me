import React from 'react';
import Card from '@components/ui/Card';
import services from '@data/services.json';

const Services = () => {
  return (
    <section>
      <div className="section-header fade-in">
        <h2>Чем занимаюсь</h2>
        <p>Объединяю технологии, управление и городские инициативы для решения реальных задач</p>
      </div>
      <div className="cards-grid">
        {services.services.map((service, index) => (
          <Card
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            className={`fade-in fade-in-delay-${(index % 4) + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
