# Георгий Фомкин — Личный сайт

Современный React-сайт портфолио с SEO оптимизацией и PWA поддержкой.

## 🚀 Технологии

- **React 18** — UI библиотека
- **Vite** — Сборщик и dev сервер
- **React Router** — Маршрутизация
- **React Helmet Async** — SEO оптимизация
- **CSS Variables** — Управление стилями
- **PWA** — Progressive Web App поддержка

## 📁 Структура проекта

```
about_me/
├── public/                  # Статические файлы
│   ├── images/             # Изображения
│   ├── manifest.json       # PWA манифест
│   ├── sw.js               # Service Worker
│   ├── sitemap.xml         # Sitemap для SEO
│   ├── robots.txt          # Директивы для поисковых роботов
│   └── favicon.svg         # Фавикон
├── src/
│   ├── components/         # React компоненты
│   │   ├── common/        # Общие компоненты (Header, Footer)
│   │   ├── sections/      # Секционные компоненты
│   │   └── ui/            # UI компоненты (Button, Card, Badge)
│   ├── data/              # JSON файлы с данными
│   │   ├── config.json    # Основная конфигурация
│   │   ├── cases.json     # Кейсы проектов
│   │   ├── services.json  # Услуги
│   │   ├── stats.json     # Статистика
│   │   ├── competencies.json # Компетенции
│   │   ├── timeline.json  # Хронология
│   │   ├── principles.json # Принципы работы
│   │   ├── work-steps.json # Этапы работы
│   │   ├── focus-areas.json # Фокус области
│   │   └── trust.json     # Партнёры и сценарии
│   ├── pages/             # Страницы приложения
│   │   ├── Home.jsx       # Главная страница
│   │   ├── Cases.jsx      # Страница кейсов
│   │   ├── About.jsx      # Страница "Обо мне"
│   │   └── Contact.jsx     # Страница контактов
│   ├── styles/            # CSS файлы
│   │   ├── variables.css  # CSS переменные
│   │   ├── reset.css      # Сброс стилей
│   │   ├── components.css # Стили компонентов
│   │   ├── layout.css     # Стили разметки
│   │   └── main.css       # Главный файл стилей
│   ├── utils/             # Утилиты
│   │   ├── seo.js         # SEO компонент
│   │   ├── hooks.js       # React hooks
│   │   ├── analytics.js   # Аналитика
│   │   └── serviceWorkerRegistration.js
│   ├── App.jsx            # Главный компонент
│   └── main.jsx           # Точка входа
├── index.html             # HTML шаблон
├── package.json           # Зависимости проекта
├── vite.config.js         # Конфигурация Vite
└── README.md              # Документация
```

## 🛠️ Установка и запуск

### Установка зависимостей

```bash
npm install
```

### Запуск разработки

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:5173`

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

### Предпросмотр продакшн сборки

```bash
npm run preview
```

## 📝 Работа с данными

### Добавление новых кейсов

Откройте файл `src/data/cases.json` и добавьте новый объект в массив `cases`:

```json
{
  "cases": [
    {
      "id": 6,
      "title": "Название проекта",
      "type": "Разработка",
      "category": "Разработка",
      "shortDescription": "Краткое описание",
      "result": "Результат проекта",
      "image": "🏢",
      "gradient": "linear-gradient(135deg, #F8E5E7 0%, #F0D0D3 100%)",
      "color": "var(--accent-red)",
      "details": {
        "problem": "Описание проблемы",
        "context": "Контекст",
        "approach": "Подход",
        "solution": "Решение",
        "result": "Результат",
        "conclusion": "Вывод"
      }
    }
  ]
}
```

### Обновление конфигурации

Основные настройки сайта находятся в `src/data/config.json`:

- `site` — информация о сайте
- `navigation` — меню навигации
- `social` — ссылки на социальные сети
- `company` — информация о компании

## 🔍 SEO оптимизация

### Meta теги

Meta теги управляются через компонент `SEO` в `src/utils/seo.js`. На каждой странице можно задавать уникальные мета-данные:

```jsx
<SEO 
  title="Заголовок страницы"
  description="Описание страницы"
  path="/path"
/>
```

### Sitemap

Файл `public/sitemap.xml` содержит карту сайта для поисковых роботов. После добавления новых страниц обновите этот файл.

### Robots.txt

Файл `public/robots.txt` содержит директивы для поисковых роботов.

### Структурированные данные

JSON-LD для Person автоматически генерируется в компоненте SEO.

## 📱 PWA настройка

### Manifest

Файл `public/manifest.json` содержит настройки PWA приложения.

### Service Worker

Service Worker в `public/sw.js` обеспечивает офлайн-работу и кэширование.

### Иконки

Добавьте иконки в папку `public/`:
- `icon-192x192.png` — иконка 192x192
- `icon-512x512.png` — иконка 512x512
- `og-image.jpg` — изображение для Open Graph

## 🎨 Стили

### CSS переменные

Все CSS переменные определены в `src/styles/variables.css`:

```css
:root {
    --bg-primary: #F5F5F4;
    --accent-red: #BE1E2D;
    --accent-blue: #1E5AA8;
    /* ... */
}
```

### Адаптивность

Сайт полностью адаптивен. Точки перехода:
- `1024px` — планшеты
- `768px` — мобильные устройства

## 📊 Аналитика

### Google Analytics

Для подключения Google Analytics создайте файл `.env`:

```env
VITE_GA_MEASUREMENT_ID=your-ga-id
```

### Yandex Metrica

Для подключения Yandex Metrica:

```env
VITE_YM_COUNTER_ID=your-ym-id
```

Затем инициализируйте аналитику в `src/main.jsx`:

```jsx
import { initGA, initYM } from '@utils/analytics';

initGA(import.meta.env.VITE_GA_MEASUREMENT_ID);
initYM(import.meta.env.VITE_YM_COUNTER_ID);
```

## 🚢 Деплой

### Vercel

1. Подключите репозиторий к Vercel
2. Настройте build команду: `npm run build`
3. Настройте output директорию: `dist`

### Netlify

1. Подключите репозиторий к Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Затем загрузите содержимое папки dist/ в gh-pages ветку
```

## 🧪 Тестирование

Перед деплоем проверьте:

1. Все страницы загружаются корректно
2. Meta теги отображаются правильно
3. Ссылки работают
4. Адаптивность на разных устройствах
5. PWA функциональность
6. SEO мета-данные

## 📝 Лицензия

© 2024 Георгий Фомкин. Все права защищены.

## 🤝 Поддержка

Для вопросов и предложений:
- Email: hello@fomkin.ru
- Telegram: https://t.me/
