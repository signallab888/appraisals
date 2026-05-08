import business from '../data/business.json';

export function buildOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `https://${business.domain}/#org`,
    name: business.legalName,
    image: `https://${business.domain}/og/og-home.jpg`,
    telephone: business.phones.primary,
    email: business.email,
    url: `https://${business.domain}`,
    priceRange: '$700-$15000',
    areaServed: { '@type': 'State', name: 'Florida' },
    address: business.offices.map(o => ({
      '@type': 'PostalAddress',
      addressLocality: o.city,
      addressRegion: 'FL',
      addressCountry: 'US',
    })),
    founder: {
      '@type': 'Person',
      name: business.primaryAppraiser.name,
      identifier: business.primaryAppraiser.license,
    },
    knowsLanguage: ['en', 'es'],
  };
}

export function buildFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function buildLocalServiceSchema(regionLabel: string, phone: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: business.legalName,
    areaServed: regionLabel,
    telephone: phone,
    priceRange: '$700-$15000',
  };
}
