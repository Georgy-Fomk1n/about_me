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
        <h2>Проектирую цифровые решения, которые делают сложные системы понятнее и удобнее</h2>
        <p>Я — Георгий Фомкин, предприниматель и архитектор цифровых продуктов.</p>
        <p>Создаю цифровые сервисы для бизнеса, развиваю технологические проекты и исследую городские системы. Мне интересно находить точки улучшения, превращать идеи в работающие решения и объединять людей вокруг сложных задач.</p>
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
        <h3>Как я к этому пришёл</h3>
        <p>Организовывать людей и события мне нравилось с детского сада, и этот интерес со мной до сих пор. В седьмом классе, после первых уроков программирования, я увлёкся информатикой. В восьмом и девятом у меня был финансовый предпрофиль с основами предпринимательства, так что технологии и экономика встретились у меня довольно рано.</p>
        <p>После девятого класса я выбрал колледж, где учат программированию. Во время поступления я познакомился с активистом студенческого совета: он помог с документами и позвал в команду. Я начал с профориентации и информационной работы, потом сосредоточился на информационном секторе, стал заместителем координатора, а затем координатором.</p>
        <p>Первой серьёзной городской темой стал транспорт: я добивался, чтобы автобусы до колледжа ходили по расписанию. Помощник депутата нашего округа посоветовал вступить в Молодёжный парламент Москвы, и я вступил. На выборах председателя студенческого совета я занял третье место с 24% голосов. Когда сформировалась новая команда, я направил силы на то, чему научился на транспортных обращениях: на работу с городскими властями.</p>
        <p>Сегодня я председатель комиссии по транспорту и мобильности Молодёжной палаты Западного Дегунина: организую мероприятия для жителей и пишу обращения по вопросам района. Я учился на курсах Центра молодёжного парламентаризма и участвую в дебатах, а в 2024 году дошёл до финала конкурса «Мастер слова» в сборной Северного административного округа. Образование продолжаю в Финансовом университете, на очно-заочной программе «Управление бизнесом».</p>
        <p>Вне работы мне нравятся стратегии и градостроительные симуляторы, фотография и видеосъёмка, трейдинг, спортзал и бассейн. Кому-то я кажусь слишком серьёзным, потому что видят меня в основном в деловой обстановке.</p>
      </div>

      <div className="about-section fade-in">
        <h3>На стыке технологий и города</h3>
        <p>Моя особенность — сочетание интереса к IT и городскому развитию.</p>
        <p>С одной стороны, я создаю цифровые продукты: веб-сервисы, платформы и инструменты для бизнеса.</p>
        <p>С другой — исследую городские процессы: транспорт, инфраструктуру и качество городской среды.</p>
        <p>Мне близок технократический подход: принимать решения на основе данных, анализа и понимания реальных потребностей людей.</p>
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
        <h3>Как я работаю</h3>
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
        <p>Я развиваю студию цифровых решений <strong>Глори.Цифра</strong>, где мы создаём современные веб-продукты и помогаем компаниям использовать технологии для решения практических задач.</p>
        <p>Для меня предпринимательство — это не только создание бизнеса. Это возможность проверять идеи на практике, собирать сильные команды и превращать концепции в работающие системы.</p>
      </div>

      <div className="about-section fade-in">
        <h3>Общественная деятельность</h3>
        <p>Помимо технологических проектов, занимаюсь развитием городской среды.</p>
        <p>Работаю с городскими инициативами, связанными с транспортом, безопасностью и комфортом жителей.</p>
        <p>Мне важно не просто обозначить проблему, а пройти весь путь: <strong>проблема → анализ → предложение решения → взаимодействие → результат.</strong></p>
        <p>Я председатель комиссии по транспорту и мобильности Молодёжной палаты Западного Дегунина. Истории обращений, ответы ведомств и результаты собраны в кейсах.</p>
        <Link to="/cases" className="story-link">
          Читать кейсы <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>

      {/* Focus Areas */}
      <div className="about-section fade-in">
        <h3>Фокус 2025–2026</h3>
        <p>Направления, на которых сосредоточены мои усилия сейчас.</p>
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
