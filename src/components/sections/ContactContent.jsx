import React from 'react';
import config from '@data/config.json';
import trust from '@data/trust.json';

const ContactContent = () => {
  return (
    <div className="bento-grid fade-in">
      {/* Large card - Main CTA */}
      <a 
        className="bento-card bento-card-large" 
        style={{ background: 'linear-gradient(135deg, rgba(190, 30, 45, 0.06) 0%, rgba(190, 30, 45, 0.02) 100%)' }}
        href={config.social.telegram}
      >
        <div>
          <div className="bento-icon">💬</div>
          <div className="bento-label">Начать диалог</div>
          <div className="bento-title">Расскажите о вашей задаче</div>
          <div className="bento-desc">Обсудим ваш проект, предложу подход и оценю возможности сотрудничества. Отвечаю в течение дня.</div>
        </div>
        <div className="bento-arrow">→</div>
      </a>

      {/* Telegram */}
      <a href={config.social.telegram} className="bento-card" target="_blank" rel="noopener noreferrer">
        <div>
          <div className="bento-icon">✈️</div>
          <div className="bento-label">Telegram</div>
          <div className="bento-title">Написать в Telegram</div>
          <div className="bento-desc">Быстрый способ связаться</div>
        </div>
        <div className="bento-arrow">→</div>
      </a>

      {/* Email */}
      <a href={`mailto:${config.social.email}`} className="bento-card">
        <div>
          <div className="bento-icon">✉️</div>
          <div className="bento-label">Email</div>
          <div className="bento-title">{config.social.email}</div>
          <div className="bento-desc">Для деловой переписки</div>
        </div>
        <div className="bento-arrow">→</div>
      </a>

      {/* Scenarios - Wide */}
      <div className="bento-card bento-card-wide">
        <div>
          <div className="bento-icon">🎯</div>
          <div className="bento-label">Сценарии</div>
          <div className="bento-title">С чем можно обратиться</div>
        </div>
        <ul className="bento-scenarios-list">
          {trust.scenarios.map((scenario, index) => (
            <li key={index}>{scenario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactContent;
