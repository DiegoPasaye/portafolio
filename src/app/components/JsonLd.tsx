// Structured data (JSON-LD) for diegopasaye.dev — GEO entity recognition.
// Render once inside the App Router <body> (e.g. in app/layout.tsx, before {children}).
// Server component: the JSON ships in the initial HTML so AI crawlers (GPTBot,
// ClaudeBot, PerplexityBot) and Google see it without executing JavaScript.
//
// @graph combines Person (priority entity) + WebSite + ProfilePage and cross-links
// them by @id. Replace IMAGE placeholders once a real profile photo / OG image exists.

import { serializeJsonLd } from '../lib/jsonld'
import { SITE_URL } from '../site'

const SITE = SITE_URL

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Diego Pasaye',
      givenName: 'Diego',
      familyName: 'Pasaye',
      url: SITE,
      // image: add once a real hosted headshot exists in /public (boosts knowledge-panel eligibility).
      jobTitle: 'Desarrollador Full Stack',
      description:
        'Desarrollador Full Stack con más de 18 meses de experiencia profesional y egresado de Ingeniería en Tecnologías de la Información, con experiencia en productos web para construcción, comercio electrónico y gobierno.',
      email: 'mailto:pasayealvarado@gmail.com',
      knowsLanguage: ['es-MX', 'en'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Morelia',
        addressRegion: 'Michoacán',
        addressCountry: 'MX',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Tecnológica de Morelia',
        sameAs: 'https://www.utmorelia.edu.mx/',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Cumicsa Construcciones S.A. de C.V.',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Engineer',
        occupationalCategory: '15-1254.00', // O*NET-SOC: Web Developers
      },
      knowsAbout: [
        'Full Stack Development',
        'Frontend Development',
        'Next.js',
        'React',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Node.js',
        'Python',
        'FastAPI',
        'MySQL',
        'MongoDB',
        'Vercel',
        'Artificial Intelligence',
        'Process Automation',
        'Quantitative Research',
        'Probabilistic Modeling',
        'Asynchronous Systems',
      ],
      sameAs: [
        'https://github.com/DiegoPasaye',
        'https://www.linkedin.com/in/diegopasaye/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Diego Pasaye — Portfolio',
      alternateName: 'Diego Pasaye',
      url: SITE,
      description:
        'Portafolio de Diego Pasaye, Desarrollador Full Stack en Morelia, Michoacán, con experiencia en productos web para construcción, comercio electrónico y gobierno.',
      inLanguage: 'es-MX',
      publisher: { '@id': `${SITE}/#person` },
      author: { '@id': `${SITE}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/#profilepage`,
      url: SITE,
      name: 'Diego Pasaye — Desarrollador Full Stack',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#person` },
      mainEntity: { '@id': `${SITE}/#person` },
      inLanguage: 'es-MX',
      // Marks the most quotable, self-contained sections for AI assistants / voice.
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#presentation h1', '#presentation p', '#aboutMe p'],
      },
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Licita',
          url: `${SITE}/licita`,
          description:
            'Plataforma full stack desarrollada en equipo para centralizar información, estructurar flujos de trabajo y aplicar inteligencia artificial en la preparación documental de licitaciones de obra pública.',
          applicationCategory: 'BusinessApplication',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'SoftwareSourceCode',
          name: 'Nakawé',
          url: `${SITE}/nakawe`,
          description:
            'Plataforma de comercio electrónico desarrollada en equipo para exhibir productos artesanales y facilitar su comercialización a nivel nacional.',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'SoftwareSourceCode',
          name: 'Pladiermo',
          url: `${SITE}/pladiermo`,
          description:
            'Plataforma Digital de Entrega-Recepción para el Municipio de Morelia; Diego participó en el desarrollo frontend de interfaces, formularios y recorridos de usuario.',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'BarberDeck',
          url: `${SITE}/barberdeck`,
          description:
            'Plataforma de automatización para barberías con un panel web de gestión y un asistente de inteligencia artificial integrado a WhatsApp.',
          applicationCategory: 'BusinessApplication',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'SoftwareSourceCode',
          name: 'Polymarket Probability Research Bot',
          url: `${SITE}/polymarket-bot`,
          description:
            'Sistema en Python para investigar mercados de Ethereum de cinco minutos con datos en tiempo real, modelos probabilísticos, ejecución maker, backtesting y simulaciones Monte Carlo.',
          programmingLanguage: 'Python',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'CreativeWork',
          name: 'CUMICSA',
          url: `${SITE}/cumicsa`,
          description:
            'Sitio corporativo para una empresa de construcción e infraestructura en Morelia; Diego Pasaye participó en el desarrollo Full Stack.',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'CreativeWork',
          name: 'MIA Bistro Caffé',
          url: `${SITE}/mia-bistro`,
          description:
            'Sitio web para un bistró mediterráneo en Morelia, con información de menú, reservaciones, horario y ubicación; Diego Pasaye participó en el desarrollo Full Stack.',
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'CreativeWork',
          name: 'NoMaTech',
          url: `${SITE}/nomatech`,
          description:
            'Sitio corporativo para una firma de software a medida, inteligencia artificial y automatización en Morelia; Diego Pasaye participó en el desarrollo Full Stack.',
          author: { '@id': `${SITE}/#person` },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      isPartOf: { '@id': `${SITE}/#website` },
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Quién es Diego Pasaye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diego Pasaye es Desarrollador Full Stack con más de 18 meses de experiencia profesional y egresado de Ingeniería en Tecnologías de la Información por la Universidad Tecnológica de Morelia. Construye productos web con React, Next.js, TypeScript, Python, FastAPI e inteligencia artificial.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué productos desarrolla Diego Pasaye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Desarrolla productos web full stack y frontend para construcción, comercio electrónico, gobierno y servicios; entre ellos Licita, BarberDeck, Nakawé y PLADIERMO. También desarrolla sistemas de investigación cuantitativa en Python.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo puedo contactar a Diego Pasaye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'By email at pasayealvarado@gmail.com, on GitHub at github.com/DiegoPasaye, or on LinkedIn at linkedin.com/in/diegopasaye.',
          },
        },
      ],
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  )
}
