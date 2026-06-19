import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
  CONTACT_EMAIL,
} from '../config/site';

// JSON-LD structured data for search engines & rich results.
// React 19 hoists <script> in the tree into <head>.
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: SITE_LEGAL_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        image: OG_IMAGE,
        description: SITE_DESCRIPTION,
        contactPoint: {
          '@type': 'ContactPoint',
          email: CONTACT_EMAIL,
          contactType: 'sales',
          areaServed: 'ID',
          availableLanguage: ['id', 'en'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'id-ID',
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}/#organization` },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IDR',
          description: 'Request a demo',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
