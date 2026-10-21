import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Quote,
  Scale,
  Users
} from 'lucide-react';
import caseIcons from './caseIcons';
import caseStatus from './caseStatus';
import cases from '@data/cases.json';
import { useReadingProgress, useScrollAnimation } from '@utils/hooks';

const pad = (n) => String(n).padStart(2, '0');
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const Scene = ({ number, eyebrow, title, children }) => (
  <div className="story-scene">
    <div className="story-scene-side">
      <div className="story-scene-no" aria-hidden="true">{pad(number)}</div>
      <span className="story-scene-eyebrow">{eyebrow}</span>
    </div>
    <div className="story-scene-main fade-in">
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

const Paragraphs = ({ items }) =>
  items?.length ? (
    <div className="story-prose">
      {items.map((text) => <p key={text}>{text}</p>)}
    </div>
  ) : null;

const SceneBody = ({ scene }) => (
  <>
    <Paragraphs items={scene.paragraphs} />

    {scene.figures && (
      <div className={`story-figures${scene.figures.some((f) => f.doc) ? ' story-figures-docs' : ''}`}>
        {scene.figures.map((figure) => (
          <figure key={figure.src} className={`story-figure${figure.doc ? ' story-figure-doc' : ''}`}>
            {figure.doc ? (
              <a href={assetUrl(figure.src)} target="_blank" rel="noopener noreferrer">
                <img src={assetUrl(figure.src)} alt={figure.alt} loading="lazy" />
              </a>
            ) : (
              <img src={assetUrl(figure.src)} alt={figure.alt} loading="lazy" />
            )}
            <figcaption>{figure.caption}</figcaption>
          </figure>
        ))}
      </div>
    )}

    {scene.facts && (
      <dl className="story-facts">
        {scene.facts.map((fact) => (
          <div key={fact.label} className="story-fact">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    )}

    {scene.timeline && (
      <ol className="timeline story-timeline">
        {scene.timeline.map((item, index) => (
          <li key={`${item.date}-${index}`} className="timeline-item">
            <span className="timeline-year">{item.date}</span>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    )}

    {scene.quote && (
      <figure className="story-quote">
        <span className="story-icon-tile" aria-hidden="true">
          <Quote size={22} strokeWidth={1.8} />
        </span>
        <blockquote>{scene.quote.text}</blockquote>
        <figcaption>{scene.quote.source}</figcaption>
      </figure>
    )}

    {scene.intro && <p className="story-asks-intro">{scene.intro}</p>}
    {scene.asks && (
      <ol className="story-asks">
        {scene.asks.map((ask, index) => (
          <li key={ask.title} className="story-ask">
            <span className="story-ask-no" aria-hidden="true">{index + 1}</span>
            <div>
              <h3>{ask.title}</h3>
              <p>{ask.text}</p>
            </div>
          </li>
        ))}
      </ol>
    )}

    <Paragraphs items={scene.after} />

    {scene.links && (
      <ul className="story-links">
        {scene.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="story-link" target="_blank" rel="noopener noreferrer">
              {link.label} <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    )}
  </>
);

const DossierRow = ({ icon: RowIcon, label, value }) => (
  <div>
    <dt><RowIcon size={14} strokeWidth={2} aria-hidden="true" /> {label}</dt>
    <dd>{value}</dd>
  </div>
);

const CaseStory = ({ caseItem, prev, next }) => {
  const barRef = useRef(null);
  useReadingProgress(barRef);
  useScrollAnimation();

  const Icon = caseIcons[caseItem.icon];
  const status = caseStatus[caseItem.status];
  const StatusIcon = status.icon;
  const statusLabel = caseItem.statusLabel || status.label;
  const related = (caseItem.related || [])
    .map((slug) => cases.cases.find((item) => item.slug === slug))
    .filter(Boolean);

  let lastNumber = caseItem.scenes.length;

  return (
    <article className="story">
      <div className="story-progress" aria-hidden="true">
        <div className="story-progress-bar" ref={barRef} />
      </div>

      <Link to="/cases" className="story-link story-back">
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" /> Все кейсы
      </Link>

      <header className="story-hero">
        <div className="story-hero-text">
          <span className="case-type fade-in">{caseItem.category}</span>
          <h1 className="fade-in fade-in-delay-1">{caseItem.title}</h1>
          <p className="story-lead fade-in fade-in-delay-2">{caseItem.subtitle}</p>
        </div>

        <aside className="story-dossier fade-in fade-in-delay-3" aria-label="Коротко о кейсе">
          <span className="story-icon-tile story-icon-tile-lg" aria-hidden="true">
            <Icon size={28} strokeWidth={1.8} />
          </span>
          <dl>
            <DossierRow icon={MapPin} label={caseItem.placeLabel || 'Где'} value={caseItem.place} />
            {caseItem.addressee && (
              <DossierRow icon={Users} label={caseItem.addresseeLabel || 'Кому'} value={caseItem.addressee} />
            )}
            <DossierRow icon={CalendarDays} label="Когда" value={caseItem.period} />
            <DossierRow icon={StatusIcon} label="Статус" value={statusLabel} />
          </dl>
        </aside>
      </header>

      {caseItem.scenes.map((scene, index) => (
        <Scene key={scene.title} number={index + 1} eyebrow={scene.eyebrow} title={scene.title}>
          <SceneBody scene={scene} />
        </Scene>
      ))}

      {caseItem.law && (
        <Scene number={++lastNumber} eyebrow="Опора" title="На что мы опирались">
          <div className="story-laws">
            {caseItem.law.map((law) => (
              <div key={law.name} className="story-law">
                <span className="story-icon-tile" aria-hidden="true">
                  <Scale size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3>{law.name}</h3>
                  <p>{law.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Scene>
      )}

      <Scene number={++lastNumber} eyebrow="Статус" title={status.sceneTitle}>
        <div className="story-status">
          <span className="story-icon-tile" aria-hidden="true">
            <StatusIcon size={22} strokeWidth={1.8} />
          </span>
          <div>
            <h3>{statusLabel}</h3>
            <p>{caseItem.outcome}</p>
          </div>
        </div>
      </Scene>

      <div className="story-takeaway fade-in">
        <span className="story-takeaway-label">Что мы из этого вынесли</span>
        <p>{caseItem.takeaway}</p>
      </div>

      {related.length > 0 && (
        <nav className="story-related" aria-label="Связанные истории">
          <h2>Связанные истории</h2>
          <div className="story-related-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/cases/${item.slug}`} className="story-nav-card">
                <span className="case-type">{item.category}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </nav>
      )}

      <nav className="story-nav" aria-label="Другие кейсы">
        {prev ? (
          <Link to={`/cases/${prev.slug}`} className="story-nav-card">
            <span className="case-type"><ArrowLeft size={12} strokeWidth={2.5} aria-hidden="true" /> Предыдущий кейс</span>
            <strong>{prev.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/cases/${next.slug}`} className="story-nav-card story-nav-next">
            <span className="case-type">Следующий кейс <ArrowRight size={12} strokeWidth={2.5} aria-hidden="true" /></span>
            <strong>{next.title}</strong>
          </Link>
        ) : <span />}
      </nav>

      <div className="story-cta fade-in">
        <h2>Есть городской вопрос, который хочется довести до ответа?</h2>
        <Link to="/contact" className="btn-primary">
          Обсудить проект
        </Link>
      </div>
    </article>
  );
};

export default CaseStory;
