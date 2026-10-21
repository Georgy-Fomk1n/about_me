import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@components/ui/Badge';
import { FaMapMarkerAlt, FaBriefcase, FaCode, FaStar } from 'react-icons/fa';
import services from '@data/services.json';

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
              Связаться с нами
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in fade-in-delay-2">
          <img
            src="https://sun9-36.vkuserphoto.ru/s/v1/ig2/2oW0oOs1iKEWogIRRLvfUKRA2K6GNCogVBkzsAZccORLra3og_SAa08za7z4NgOHCqzVTUTHAULzNsV1lS64DeLI.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0"
            alt="Георгий Фомкин"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
