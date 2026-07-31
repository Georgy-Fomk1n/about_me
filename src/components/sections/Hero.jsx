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
            src="https://sun9-47.vkuserphoto.ru/s/v1/ig2/c0yBAWB8NQ02vdVaeoSm4MCFSvbtfXWa59jUn9Kp6G58Ep-c9011V1IjZLeSZ_OKEBb4CjKz1D390ChJZSmGUeAq.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&u=n2lE8tH0Lcoi0DAeOXQkNTenM_4RfDkLuJmGfOYvkik&cs=2560x0" 
            alt="Георгий Фомкин"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
