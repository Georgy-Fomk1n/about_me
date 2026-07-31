import React from 'react';
import Card from '@components/ui/Card';
import services from '@data/services.json';

import {
  MonitorSmartphone,
  BriefcaseBusiness,
  Building2,
  SearchCode
} from 'lucide-react';

const icons = {
  MonitorSmartphone,
  BriefcaseBusiness,
  Building2,
  SearchCode
};

const Services = () => {
  return (
    <section>
      <div className="section-header fade-in">
        <h2>Что создаю и изучаю</h2>
        <p>
          Работаю на пересечении технологий, предпринимательства и урбанистики
        </p>
      </div>

      <div className="cards-grid">
        {services.services.map((service, index) => (
          <Card
            key={service.id}
            icon={icons[service.icon]}
            title={service.title}
            description={service.description}
            className={`fade-in fade-in-delay-${(index % 4) + 1}`}
          />
        ))}
      </div>
    </section >
  );
};

export default Services;