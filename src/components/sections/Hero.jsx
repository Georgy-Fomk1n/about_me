import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@components/ui/Badge';
import { FaMapMarkerAlt, FaBriefcase, FaCode, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badges fade-in fade-in-delay-2">
            <Badge icon={FaMapMarkerAlt}>Москва</Badge>
            <Badge icon={FaBriefcase}>Предприниматель</Badge>
            <Badge icon={FaCode}>Архитектор цифровых продуктов</Badge>
            <Badge icon={FaStar}>Основатель Глори.Цифра</Badge>
          </div>
          <h1 className="fade-in">
            На стыке технологий, бизнеса и города
          </h1>
          <p className="fade-in fade-in-delay-1">
            С командой «Глори.Цифра» разрабатываем цифровые решения для бизнеса, а я исследую городские системы и объединяю технологии с практическими задачами людей.
          </p>
          <div className="fade-in fade-in-delay-3">
            <Link to="/contact" className="btn-primary">
              Связаться со мной
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in fade-in-delay-2">
          <img
            src={`${import.meta.env.BASE_URL}hero.jpg`}
            alt="Георгий Фомкин"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
