import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import stats from '@data/stats.json';
import principles from '@data/principles.json';
import competencies from '@data/competencies.json';
import workSteps from '@data/work-steps.json';
import focusAreas from '@data/focus-areas.json';
import timeline from '@data/timeline.json';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-intro fade-in">
        <h2>Проектируем цифровые решения, которые делают сложные системы понятнее и удобнее</h2>
        <p>Мы — Георгий Фомкин, предприниматель и архитектор цифровых продуктов.</p>
        <p>Создаём цифровые сервисы для бизнеса, развиваем технологические проекты и исследуем городские системы. Нам интересно находить точки улучшения, превращать идеи в работающие решения и объединять людей вокруг сложных задач.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid fade-in">
        {stats.stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="about-principles fade-in">
        {principles.principles.map((principle) => (
          <div key={principle.id} className="principle">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="about-section fade-in">
        <h3>Как мы к этому пришли</h3>
        <p>Организовывать людей и события нам нравилось с детского сада, и этот интерес с нами до сих пор. В седьмом классе, после первых уроков программирования, мы увлеклись информатикой. В восьмом и девятом у нас был финансовый предпрофиль с основами предпринимательства, так что технологии и экономика встретились довольно рано.</p>
        <p>После девятого класса мы выбрали колледж, где учат программированию. Во время поступления познакомились с активистом студенческого совета: он помог с документами и позвал в команду. Мы начали с профориентации и информационной работы, потом сосредоточились на информационном секторе, стали заместителем координатора, а затем координатором.</p>
        <p>Первой серьёзной городской темой стал транспорт: мы добивались, чтобы автобусы до колледжа ходили по расписанию. Помощник депутата нашего округа посоветовал вступить в Молодёжный парламент Москвы, и мы вступили. На выборах председателя студенческого совета мы заняли третье место с 24% голосов. Когда сформировалась новая команда, мы направили силы на то, чему научились на транспортных обращениях: на работу с городскими властями.</p>
        <p>Сегодня мы возглавляем комиссию по транспорту и мобильности Молодёжной палаты Западного Дегунина: организуем мероприятия для жителей и пишем обращения по вопросам района. Мы учились на курсах Центра молодёжного парламентаризма и участвуем в дебатах, а в 2024 году дошли до финала конкурса «Мастер слова» в сборной Северного административного округа. Образование продолжаем в Финансовом университете, на очно-заочной программе «Управление бизнесом».</p>
        <p>Вне работы нам нравятся стратегии и градостроительные симуляторы, фотография и видеосъёмка, трейдинг, спортзал и бассейн. Кому-то мы кажемся слишком серьёзными, потому что видят нас в основном в деловой обстановке.</p>
      </div>

      <div className="about-section fade-in">
        <h3>На стыке технологий и города</h3>
        <p>Наша особенность — сочетание интереса к IT и городскому развитию.</p>
        <p>С одной стороны, мы создаём цифровые продукты: веб-сервисы, платформы и инструменты для бизнеса.</p>
        <p>С другой — исследуем городские процессы: транспорт, инфраструктуру и качество городской среды.</p>
        <p>Нам близок технократический подход: принимать решения на основе данных, анализа и понимания реальных потребностей людей.</p>
      </div>

      {/* Competencies */}
      <div className="about-section fade-in">
        <h3>Компетенции</h3>
        <p>Навыки, которые позволяют решать задачи на стыке разных областей.</p>
        <div className="competencies-grid">
          {competencies.competencies.map((competency) => (
            <div key={competency.id} className="competency">
              <div className="competency-icon">{competency.icon}</div>
              <h4>{competency.title}</h4>
              <p>{competency.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How I Work */}
      <div className="about-section fade-in">
        <h3>Как мы работаем</h3>
        <p>Процесс, который позволяет доводить идеи до результата.</p>
        <div className="work-steps">
          {workSteps.workSteps.map((step) => (
            <div key={step.id} className="work-step">
              <div className="work-step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section fade-in">
        <h3>Предпринимательство как способ создавать изменения</h3>
        <p>Мы развиваем студию цифровых решений <strong>Глори.Цифра</strong>, где создаём современные веб-продукты и помогаем компаниям использовать технологии для решения практических задач.</p>
        <p>Для нас предпринимательство — это не только создание бизнеса. Это возможность проверять идеи на практике, собирать сильные команды и превращать концепции в работающие системы.</p>
      </div>

      <div className="about-section fade-in">
        <h3>Общественная деятельность</h3>
        <p>Помимо технологических проектов, мы занимаемся развитием городской среды.</p>
        <p>Работаем с городскими инициативами, связанными с транспортом, безопасностью и комфортом жителей.</p>
        <p>Нам важно не просто обозначить проблему, а пройти весь путь: <strong>проблема → анализ → предложение решения → взаимодействие → результат.</strong></p>
        <p>Мы возглавляем комиссию по транспорту и мобильности Молодёжной палаты Западного Дегунина. Истории обращений, ответы ведомств и результаты собраны в кейсах.</p>
        <Link to="/cases" className="story-link">
          Читать кейсы <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>

      {/* Focus Areas */}
      <div className="about-section fade-in">
        <h3>Фокус 2025–2026</h3>
        <p>Направления, на которых сосредоточены наши усилия сейчас.</p>
        <div className="focus-grid">
          {focusAreas.focusAreas.map((area) => (
            <div key={area.id} className="focus-card">
              <span className="focus-card-tag">{area.tag}</span>
              <h4>{area.title}</h4>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-quote fade-in">
        <p>Создавать технологии и системы, которыми удобно пользоваться людям и которыми эффективно управлять.</p>
      </div>

      <div className="about-section fade-in">
        <h3>Путь</h3>
        <div className="timeline">
          {timeline.timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
