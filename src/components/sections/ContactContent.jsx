import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquareText, Clock, Handshake, Users, ArrowUpRight } from 'lucide-react';
import config from '@data/config.json';
import trust from '@data/trust.json';

const steps = [
  { icon: MessageSquareText, title: 'Вы пишете', text: 'Коротко о задаче: что нужно сделать и к какому сроку.' },
  { icon: Clock, title: 'Мы отвечаем', text: 'Обычно в течение дня.' },
  { icon: Handshake, title: 'Обсуждаем', text: 'Предлагаем подход и обсуждаем, как работать вместе.' }
];

const ContactContent = () => {
  const [topic, setTopic] = useState(trust.scenarios[0]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Обращение с сайта: ${topic}`;
    const body = `${name ? `Меня зовут ${name}.\n\n` : ''}${message}`;
    window.location.href = `mailto:${config.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.social.emailDisplay);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="contact-layout fade-in">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Напишите о задаче</h3>
        <p className="contact-form-lead">Форма откроет письмо в вашей почтовой программе, ничего не отправляется через сайт.</p>

        <fieldset className="contact-topics">
          <legend>О чём хотите поговорить</legend>
          <div className="contact-chips">
            {trust.scenarios.map((scenario) => (
              <label key={scenario} className={`contact-chip${topic === scenario ? ' active' : ''}`}>
                <input
                  type="radio"
                  name="topic"
                  value={scenario}
                  checked={topic === scenario}
                  onChange={() => setTopic(scenario)}
                />
                {scenario}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="contact-field">
          <span>Как к вам обращаться</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>

        <label className="contact-field">
          <span>Что хотите обсудить</span>
          <textarea
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Расскажите о задаче, сроках и ожиданиях"
          />
        </label>

        <button type="submit" className="btn-primary contact-submit">
          <Send size={16} strokeWidth={2} aria-hidden="true" /> Написать письмо
        </button>
      </form>

      <aside className="contact-side">
        <div className="contact-mail-card">
          <span className="icon-tile" aria-hidden="true"><Mail size={24} strokeWidth={1.8} /></span>
          <span className="contact-mail-label">Почта</span>
          <a className="contact-mail" href={`mailto:${config.social.email}`}>{config.social.emailDisplay}</a>
          <button type="button" className="contact-copy" onClick={copyEmail}>
            {copied ? <Check size={16} strokeWidth={2} aria-hidden="true" /> : <Copy size={16} strokeWidth={2} aria-hidden="true" />}
            {copied ? 'Скопировано' : 'Скопировать адрес'}
          </button>
        </div>

        <div className="contact-links">
          <a href={config.social.telegram} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon-tile" aria-hidden="true"><Send size={22} strokeWidth={1.8} /></span>
            <span className="contact-link-text">
              <strong>Telegram</strong>
              <span>Быстрый способ связаться</span>
            </span>
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <a href={config.social.vk} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon-tile" aria-hidden="true"><Users size={22} strokeWidth={1.8} /></span>
            <span className="contact-link-text">
              <strong>ВКонтакте</strong>
              <span>Запасной канал, если Telegram не открывается</span>
            </span>
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <ol className="contact-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="contact-step-no" aria-hidden="true">{index + 1}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
};

export default ContactContent;
