import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@components/ui/Badge';
import services from '@data/services.json';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="fade-in">
            Проектирую цифровые продукты и решения для города
          </h1>
          <p className="fade-in fade-in-delay-1">
            Предприниматель и архитектор цифровых продуктов. Разрабатываю решения для бизнеса, исследую городские системы и объединяю технологии с практическими задачами людей.
          </p>
          <div className="hero-badges fade-in fade-in-delay-2">
            <Badge>Предприниматель</Badge>
            <Badge>Архитектор цифровых продуктов</Badge>
            <Badge>Основатель Глори.Цифра</Badge>
            <Badge>Москва</Badge>
          </div>
          <div className="fade-in fade-in-delay-3">
            <Link to="/contact" className="btn-primary">
              Обсудить проект
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in fade-in-delay-2">
          <img 
            src="https://image.qwenlm.ai/public_source/a1b4e549-ed72-4014-9407-ec98b0244fe6/1d04d7cbd-9368-47b2-97f0-426fb68235dc.png" 
            alt="Георгий Фомкин"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
