// Structured data (JSON-LD) for diegopasaye.dev — GEO entity recognition.
// Render once inside the App Router <body> (e.g. in app/layout.tsx, before {children}).
// Server component: the JSON ships in the initial HTML so AI crawlers (GPTBot,
// ClaudeBot, PerplexityBot) and Google see it without executing JavaScript.
//
// @graph combines Person (priority entity) + WebSite + ProfilePage and cross-links
// them by @id. Replace IMAGE placeholders once a real profile photo / OG image exists.

const SITE = 'https://diegopasaye.dev'

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
      jobTitle: 'Junior Frontend Engineer',
      description:
        'Software-engineering student and junior frontend engineer based in Morelia, México, building accessible, performant web interfaces with React and Next.js.',
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
        name: 'Nakawé',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Frontend Engineer',
        occupationalCategory: '15-1254.00', // O*NET-SOC: Web Developers
      },
      knowsAbout: [
        'Frontend Development',
        'Next.js',
        'React',
        'Angular',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Node.js',
        'Python',
        'MySQL',
        'MongoDB',
        'UI/UX Design',
        'Web Accessibility',
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
        "Single-page portfolio covering Diego Pasaye's bio, skills, projects, and work experience as a junior frontend engineer in Morelia, México.",
      inLanguage: 'en',
      publisher: { '@id': `${SITE}/#person` },
      author: { '@id': `${SITE}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/#profilepage`,
      url: SITE,
      name: 'Diego Pasaye — Software Engineer',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#person` },
      mainEntity: { '@id': `${SITE}/#person` },
      inLanguage: 'en',
      // Marks the most quotable, self-contained sections for AI assistants / voice.
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#presentation h1', '#presentation p', '#aboutMe p'],
      },
      hasPart: [
        {
          '@type': 'SoftwareSourceCode',
          name: 'Nakawé',
          url: `${SITE}/#projects`,
          description:
            'A full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard, built in contribution to a foundation supporting Mexican artisans.',
          programmingLanguage: ['Next.js', 'MySQL'],
          author: { '@id': `${SITE}/#person` },
        },
        {
          '@type': 'SoftwareSourceCode',
          name: 'Pladiermo',
          url: `${SITE}/#projects`,
          description:
            "A web application that streamlines the official delivery-reception (handover) process for the Municipal Comptroller's Office of Morelia (Contraloría Municipal de Morelia).",
          programmingLanguage: ['Angular', 'Spring Boot', 'MySQL'],
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
          name: 'Who is Diego Pasaye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diego Pasaye is a junior frontend engineer and software-engineering student at the Universidad Tecnológica de Morelia, in Morelia, México. He builds accessible, performant web interfaces with React, Next.js, and TypeScript.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Diego Pasaye build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Full-stack and frontend web apps — including Nakawé, a Next.js and MySQL e-commerce platform supporting Mexican artisans, and Pladiermo, an Angular and Spring Boot handover application for the Municipal Comptroller’s Office of Morelia.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Diego Pasaye?',
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
      // Static, author-controlled object — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
