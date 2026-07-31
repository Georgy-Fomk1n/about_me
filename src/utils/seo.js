import { Helmet } from 'react-helmet-async';
import config from '@data/config.json';

export const SEO = ({ title, description, image, type = 'website', path = '' }) => {
  const siteTitle = title ? `${title} | ${config.site.title}` : config.site.title;
  const siteDescription = description || config.site.description;
  const siteImage = image || `${config.site.url}/og-image.jpg`;
  const siteUrl = `${config.site.url}${path}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Георгий Фомкин',
    jobTitle: 'Предприниматель и архитектор цифровых продуктов',
    url: config.site.url,
    sameAs: [
      config.social.telegram,
      config.social.github,
      config.social.linkedin
    ],
    worksFor: {
      '@type': 'Organization',
      name: config.company.name,
      description: config.company.description
    },
    description: config.site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU'
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={config.site.keywords} />
      <meta name="author" content={config.site.author} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content={config.site.locale} />
      <meta property="og:site_name" content={config.site.title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
