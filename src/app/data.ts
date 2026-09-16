// Single source of truth for portfolio content. Same information as the original site.

export const profile = {
  name: 'Diego Pasaye',
  role: 'Desarrollador Full Stack',
  tagline: 'Construyo productos web reales con React, Next.js, TypeScript, Python e inteligencia artificial.',
  email: 'pasayealvarado@gmail.com',
  location: 'Morelia, México · Remote-friendly',
}

export const navLinks = [
  { id: 'presentation', label: 'INICIO' },
  { id: 'aboutMe', label: 'SOBRE MÍ' },
  { id: 'projects', label: 'PROYECTOS' },
  { id: 'experience', label: 'EXPERIENCIA' },
  { id: 'contact', label: 'CONTACTO' },
]

export const socials = [
  { href: 'https://github.com/DiegoPasaye', icon: '/github.svg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/diegopasaye/', icon: '/linkedin.svg', label: 'LinkedIn' },
  { href: 'mailto:pasayealvarado@gmail.com?subject=Hola%20te%20contacto%20por%20tu%20portafolio', icon: '/gmail.svg', label: 'Email' },
]

export const stats = [
  { value: 4, suffix: '', label: 'PROYECTOS DESTACADOS' },
  { value: 3, suffix: '', label: 'SECTORES' },
  { value: 18, suffix: '+', label: 'MESES DE EXPERIENCIA' },
]

export const skills = [
  { group: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
  { group: 'BACKEND', items: ['Python', 'FastAPI', 'Express', 'APIs REST', 'Spring Boot'] },
  { group: 'BASES DE DATOS', items: ['MySQL', 'MongoDB'] },
  { group: 'HERRAMIENTAS', items: ['Git', 'GitHub', 'Bitbucket', 'Vercel', 'Figma'] },
]

export type ProjectSlug =
  | 'licita'
  | 'barberdeck'
  | 'nakawe'
  | 'pladiermo'
  | 'cumicsa'
  | 'mia-bistro'
  | 'nomatech'
  | 'polymarket-bot'

export type Project = {
  slug: ProjectSlug
  name: string
  image: string
  summary: string
  seoTitle: string
  seoDescription: string
  keyPhrases: string[]
  overview: string[]
  role: string
  tools: string[]
  faqs: Array<{ question: string; answer: string }>
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'licita',
    name: 'Licita',
    image: '/licitaProject.png',
    summary:
      'Plataforma full stack desarrollada en equipo para centralizar información, estructurar flujos de trabajo y aplicar inteligencia artificial en la preparación documental de licitaciones de obra pública.',
    seoTitle: 'Licita: automatización de licitaciones con IA | Diego Pasaye',
    seoDescription:
      'Caso de estudio de Licita: plataforma desarrollada en equipo para automatizar y organizar la preparación documental de licitaciones de obra pública con inteligencia artificial.',
    keyPhrases: [
      'automatización de licitaciones',
      'licitaciones de obra pública',
      'inteligencia artificial para licitaciones',
      'preparación documental de licitaciones',
    ],
    overview: [
      'Licita es una plataforma full stack desarrollada en equipo para centralizar información y estructurar flujos de trabajo de licitaciones de obra pública.',
      'El proyecto aplica inteligencia artificial en la preparación documental para apoyar la organización de propuestas económicas, técnicas y legales.',
    ],
    role: 'Desarrollo Full Stack en equipo.',
    tools: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'IA'],
    faqs: [
      {
        question: '¿Qué es Licita?',
        answer:
          'Licita es una plataforma full stack desarrollada en equipo para centralizar información y estructurar flujos de trabajo de licitaciones de obra pública.',
      },
      {
        question: '¿Qué procesos apoya Licita?',
        answer:
          'El proyecto aplica inteligencia artificial en la preparación documental para apoyar la organización de propuestas económicas, técnicas y legales.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye en Licita?',
        answer: 'Diego Pasaye participó en el desarrollo Full Stack dentro de un equipo.',
      },
    ],
    demo: 'https://licitacionfrontend.vercel.app',
  },
  {
    slug: 'barberdeck',
    name: 'BarberDeck',
    image: '/barberdeckProject.png',
    summary:
      'Plataforma de automatización para barberías con panel de gestión y asistente de inteligencia artificial integrado a WhatsApp para agenda, recordatorios y seguimiento operativo.',
    seoTitle: 'BarberDeck: automatización para barberías con IA | Diego Pasaye',
    seoDescription:
      'Caso de estudio de BarberDeck: plataforma SaaS para automatizar consultas, disponibilidad, citas y recordatorios de barberías con IA y WhatsApp.',
    keyPhrases: [
      'automatización para barberías',
      'asistente de IA para WhatsApp',
      'agenda y recordatorios para barberías',
      'SaaS para barberías',
    ],
    overview: [
      'BarberDeck es una plataforma de automatización para barberías que combina un panel web de gestión con un asistente de inteligencia artificial integrado a WhatsApp.',
      'Permite responder consultas, consultar disponibilidad, agendar y reprogramar citas, enviar recordatorios automáticos y facilitar el seguimiento de la operación del negocio.',
    ],
    role: 'Desarrollo de producto web y automatización.',
    tools: ['SaaS', 'IA', 'WhatsApp'],
    faqs: [
      {
        question: '¿Qué es BarberDeck?',
        answer:
          'BarberDeck es una plataforma de automatización para barberías que combina un panel web de gestión con un asistente de inteligencia artificial integrado a WhatsApp.',
      },
      {
        question: '¿Qué tareas automatiza BarberDeck?',
        answer:
          'Permite responder consultas, consultar disponibilidad, agendar y reprogramar citas, enviar recordatorios automáticos y facilitar el seguimiento de la operación del negocio.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye en BarberDeck?',
        answer: 'Diego Pasaye participó en el desarrollo de producto web y automatización.',
      },
    ],
    demo: 'https://www.barberdeck.com/',
  },
  {
    slug: 'nakawe',
    name: 'Nakawé',
    image: '/nakaweProject.png',
    summary:
      'Plataforma de comercio electrónico desarrollada en equipo para exhibir productos artesanales y facilitar su comercialización a nivel nacional.',
    seoTitle: 'Nakawé: e-commerce de artesanías mexicanas | Diego Pasaye',
    seoDescription:
      'Caso de estudio de Nakawé: plataforma de e-commerce desarrollada en equipo para exhibir productos artesanales y conectar comunidades con compradores.',
    keyPhrases: [
      'e-commerce de artesanías mexicanas',
      'desarrollo frontend para e-commerce',
      'plataforma para fundación mexicana',
      'comercio justo y artesanías',
    ],
    overview: [
      'Participé en el desarrollo frontend de Nakawé, una plataforma web para una fundación mexicana enfocada en la preservación de tradiciones artesanales, sostenibilidad y desarrollo de comunidades.',
      'El proyecto incluye una experiencia de e-commerce para presentar y comercializar piezas artesanales, junto con funcionalidades para explorar colecciones, productos y el trabajo de las comunidades.',
      'Mi participación estuvo enfocada en el desarrollo de interfaces y experiencias de usuario para facilitar la conexión entre las piezas artesanales y sus compradores.',
    ],
    role: 'Participación en desarrollo frontend, dentro de un equipo de dos personas.',
    tools: ['E-commerce', 'Desarrollo Full Stack'],
    faqs: [
      {
        question: '¿Qué es Nakawé?',
        answer:
          'Nakawé es una plataforma web para una fundación mexicana enfocada en la preservación de tradiciones artesanales, sostenibilidad y desarrollo de comunidades.',
      },
      {
        question: '¿Qué incluye la plataforma Nakawé?',
        answer:
          'Incluye una experiencia de e-commerce para presentar y comercializar piezas artesanales, junto con contenidos sobre colecciones, productos y comunidades.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye en Nakawé?',
        answer:
          'Diego Pasaye participó en el desarrollo frontend y en la construcción de interfaces y experiencias de usuario dentro de un equipo de dos personas.',
      },
    ],
    demo: 'https://nakawe.vercel.app',
  },
  {
    slug: 'pladiermo',
    name: 'Pladiermo',
    image: '/pladiermoProject.jpeg',
    summary:
      'Plataforma Digital de Entrega-Recepción para el Municipio de Morelia. Participé en el desarrollo frontend de interfaces, formularios y recorridos de usuario para digitalizar procesos y actas de entrega-recepción.',
    seoTitle: 'PLADIERMO: entrega-recepción digital en Morelia | Diego Pasaye',
    seoDescription:
      'Caso de estudio de PLADIERMO: plataforma institucional para digitalizar los procesos y actas de entrega-recepción del Municipio de Morelia.',
    keyPhrases: [
      'plataforma de entrega-recepción digital',
      'gobierno digital en Morelia',
      'desarrollo frontend institucional',
      'digitalización de actas de entrega-recepción',
    ],
    overview: [
      'Pladiermo es una Plataforma Digital de Entrega-Recepción para el Municipio de Morelia.',
      'Participé en el desarrollo frontend de interfaces, formularios y recorridos de usuario para digitalizar procesos y actas de entrega-recepción.',
    ],
    role: 'Participación en desarrollo frontend institucional.',
    tools: ['Frontend', 'Gobierno digital'],
    faqs: [
      {
        question: '¿Qué es PLADIERMO?',
        answer: 'PLADIERMO es la Plataforma Digital de Entrega-Recepción para el Municipio de Morelia.',
      },
      {
        question: '¿Qué proceso digitaliza PLADIERMO?',
        answer:
          'Digitaliza procesos y actas de entrega-recepción mediante interfaces, formularios y recorridos de usuario.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye en PLADIERMO?',
        answer:
          'Diego Pasaye participó en el desarrollo frontend institucional de interfaces, formularios y recorridos de usuario.',
      },
    ],
  },
]

export const secondaryCaseStudies: Project[] = [
  {
    slug: 'cumicsa',
    name: 'CUMICSA',
    image: '/cumicsaProject.png',
    summary:
      'Sitio corporativo para una empresa de construcción e infraestructura en Morelia, diseñado para presentar servicios, trayectoria y canales de contacto.',
    seoTitle: 'CUMICSA: sitio web corporativo de construcción | Diego Pasaye',
    seoDescription:
      'Caso de estudio de CUMICSA: desarrollo Full Stack de un sitio corporativo para comunicar servicios de construcción, infraestructura y contacto en Morelia.',
    keyPhrases: [
      'sitio web para constructora',
      'desarrollo Full Stack corporativo',
      'construcción e infraestructura en Morelia',
      'web para empresa constructora',
    ],
    overview: [
      'Participé en el desarrollo Full Stack de CUMICSA, una presencia digital corporativa para una empresa enfocada en construcción e infraestructura en Morelia.',
      'El sitio organiza la comunicación de servicios, trayectoria y puntos de contacto para facilitar la consulta de información institucional por parte de clientes y aliados.',
      'Este proyecto amplía mi experiencia construyendo productos y experiencias web para el sector de la construcción.',
    ],
    role: 'Desarrollo Full Stack.',
    tools: ['Desarrollo Full Stack', 'Sitio corporativo', 'Construcción e infraestructura'],
    faqs: [
      {
        question: '¿Qué es CUMICSA?',
        answer:
          'CUMICSA es una empresa de construcción e infraestructura en Morelia; este caso presenta la participación de Diego Pasaye en el desarrollo Full Stack de su sitio web corporativo.',
      },
      {
        question: '¿Qué comunica el sitio web de CUMICSA?',
        answer:
          'Comunica los servicios, la trayectoria y los canales de contacto de la empresa para presentar su información institucional de forma clara.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye?',
        answer: 'Diego Pasaye participó en el desarrollo Full Stack del sitio corporativo.',
      },
    ],
    demo: 'https://www.cumicsa.com.mx/',
  },
  {
    slug: 'mia-bistro',
    name: 'MIA Bistro Caffé',
    image: '/miaBistroProject.png',
    summary:
      'Sitio web para un bistró mediterráneo en Morelia que reúne propuesta gastronómica, menú, reservaciones, horario y ubicación.',
    seoTitle: 'MIA Bistro Caffé: sitio web gastronómico | Diego Pasaye',
    seoDescription:
      'Caso de estudio de MIA Bistro Caffé: desarrollo Full Stack para una experiencia gastronómica en Morelia con información de menú, reservaciones, horario y ubicación.',
    keyPhrases: [
      'sitio web para restaurante',
      'desarrollo Full Stack gastronómico',
      'reservaciones para restaurante',
      'bistró mediterráneo en Morelia',
    ],
    overview: [
      'Participé en el desarrollo Full Stack de MIA Bistro Caffé, un sitio para comunicar la propuesta de un bistró mediterráneo en Morelia.',
      'La experiencia concentra información útil para visitantes: propuesta gastronómica, menú, opciones de reservación, horario y ubicación.',
      'El proyecto está orientado a que la información clave del negocio sea accesible desde una experiencia web clara y directa.',
    ],
    role: 'Desarrollo Full Stack.',
    tools: ['Desarrollo Full Stack', 'Experiencia gastronómica', 'Reservaciones'],
    faqs: [
      {
        question: '¿Qué es MIA Bistro Caffé?',
        answer:
          'MIA Bistro Caffé es un bistró mediterráneo en Morelia; este caso presenta la participación de Diego Pasaye en el desarrollo Full Stack de su sitio web.',
      },
      {
        question: '¿Qué información ofrece el sitio?',
        answer:
          'El sitio reúne propuesta gastronómica, menú, opciones de reservación, horario y ubicación para visitantes.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye?',
        answer: 'Diego Pasaye participó en el desarrollo Full Stack del sitio.',
      },
    ],
    demo: 'https://mia-bistro.vercel.app/',
  },
  {
    slug: 'nomatech',
    name: 'NoMaTech',
    image: '/nomatechProject.png',
    summary:
      'Sitio corporativo para una firma de software a medida, inteligencia artificial y automatización de procesos en Morelia.',
    seoTitle: 'NoMaTech: sitio corporativo de software e IA | Diego Pasaye',
    seoDescription:
      'Caso de estudio de NoMaTech: desarrollo Full Stack de una presencia corporativa para comunicar software a medida, inteligencia artificial y automatización en Morelia.',
    keyPhrases: [
      'sitio web para empresa de software',
      'software a medida en Morelia',
      'inteligencia artificial y automatización',
      'desarrollo Full Stack corporativo tecnológico',
    ],
    overview: [
      'Participé en el desarrollo Full Stack de NoMaTech, una presencia corporativa orientada a comunicar servicios de software a medida, inteligencia artificial y automatización de procesos.',
      'El sitio articula la oferta de la firma para que empresas interesadas puedan conocer sus áreas de trabajo y establecer contacto.',
      'Este proyecto combina comunicación corporativa, tecnología y una experiencia web enfocada en servicios digitales.',
    ],
    role: 'Desarrollo Full Stack.',
    tools: ['Desarrollo Full Stack', 'Software a medida', 'IA y automatización'],
    faqs: [
      {
        question: '¿Qué es NoMaTech?',
        answer:
          'NoMaTech es una firma de software a medida, inteligencia artificial y automatización en Morelia; este caso presenta la participación de Diego Pasaye en el desarrollo Full Stack de su sitio web.',
      },
      {
        question: '¿Qué comunica el sitio de NoMaTech?',
        answer:
          'Comunica una oferta de software a medida, inteligencia artificial y automatización de procesos para empresas interesadas en servicios digitales.',
      },
      {
        question: '¿Cuál fue la participación de Diego Pasaye?',
        answer: 'Diego Pasaye participó en el desarrollo Full Stack del sitio corporativo.',
      },
    ],
    demo: 'https://www.nomatech.dev/',
  },
  {
    slug: 'polymarket-bot',
    name: 'Polymarket Probability Research Bot',
    image: '/polymarketBotProject.png',
    summary:
      'Sistema de investigación y trading automatizado en Python para mercados de Ethereum de cinco minutos en Polymarket, con datos en tiempo real, modelos probabilísticos, ejecución de órdenes y análisis histórico.',
    seoTitle: 'Bot probabilístico para Polymarket y Ethereum | Diego Pasaye',
    seoDescription:
      'Caso técnico de un sistema en Python para investigar mercados de Ethereum de cinco minutos en Polymarket: datos en tiempo real, probabilidades, ejecución maker, backtesting y observabilidad.',
    keyPhrases: [
      'bot probabilístico para Polymarket',
      'trading automatizado de Ethereum',
      'modelos probabilísticos para mercados de predicción',
      'ejecución maker y análisis cuantitativo',
      'backtesting y simulación Monte Carlo',
    ],
    overview: [
      'Desarrollé en Python un sistema de investigación y trading automatizado para mercados de Ethereum de cinco minutos en Polymarket. Integra datos en tiempo real, modelos probabilísticos, ejecución de órdenes y análisis histórico para estudiar estrategias bajo condiciones de mercado.',
      'El trabajo aborda no solo la generación de señales, sino también latencia, liquidez, ejecuciones parciales y cambios de precio entre la decisión y la ejecución.',
      'Incluye feeds de Chainlink, velas de Binance agrupadas en intervalos de cinco segundos y libros de órdenes históricos de Synthesis; un modelo estima probabilidades según volatilidad, distancia al precio de referencia y tiempo restante.',
      'La investigación contempla órdenes límite post-only, seguimiento de órdenes, gestión de posiciones, reconciliación de fills, reconexión de feeds, pruebas automatizadas, backtesting y simulaciones Monte Carlo. El proyecto se encuentra en investigación y desarrollo iterativo: la rentabilidad sostenida es un objetivo de validación, no un resultado garantizado.',
    ],
    role: 'Diseño e implementación individual de investigación y desarrollo cuantitativo.',
    tools: [
      'Python',
      'AsyncIO',
      'HTTPX',
      'WebSockets',
      'APIs REST',
      'Polymarket CLOB',
      'Chainlink',
      'Binance',
      'Supabase/PostgreSQL',
      'pytest',
    ],
    faqs: [
      {
        question: '¿Qué investiga este bot de Polymarket?',
        answer:
          'Investiga estrategias para mercados de Ethereum de cinco minutos mediante datos en tiempo real, modelos probabilísticos, ejecución maker y análisis histórico.',
      },
      {
        question: '¿Qué retos técnicos contempla?',
        answer:
          'Contempla latencia, liquidez, ejecuciones parciales, movimientos de precio entre decisión y ejecución, reconexión de feeds y reconciliación de fills.',
      },
      {
        question: '¿El proyecto garantiza rentabilidad?',
        answer:
          'No. Está en investigación y desarrollo iterativo con pruebas históricas, ejecución simulada y pruebas con capital real; la rentabilidad sostenida sigue siendo un objetivo de validación.',
      },
    ],
  },
]

export const caseStudyProjects = [...projects, ...secondaryCaseStudies]
export const projectSlugs = caseStudyProjects.map((project) => project.slug)

export const subprojects = secondaryCaseStudies.map((project, index) => ({
  id: String(index + projects.length + 1).padStart(2, '0'),
  name: project.name,
  description: project.summary,
  role: project.role,
  href: `/${project.slug}`,
}))

export function getProjectBySlug(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug)
}

export const experience = [
  {
    time: 'Nov. 2025 — Jun. 2026',
    role: 'Desarrollador Full Stack',
    company: 'Cumicsa Construcciones S.A. de C.V.',
    description:
      'Colaboré en un equipo de dos desarrolladores para diseñar y construir una plataforma full stack que digitaliza, centraliza y organiza procesos de licitación de obra pública para empresas constructoras en México.',
    tools: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'IA'],
  },
  {
    time: 'Jun. 2025 — Nov. 2025',
    role: 'Desarrollador Full Stack',
    company: 'Fundación Nakawé',
    description:
      'Desarrollé, junto con un equipo de dos personas, una plataforma de comercio electrónico para exhibir productos artesanales y facilitar su comercialización a nivel nacional.',
    tools: ['E-commerce', 'Desarrollo Full Stack'],
  },
  {
    time: 'Mar. 2024 — Sept. 2024',
    role: 'Desarrollador Frontend',
    company: 'Contraloría Municipal de Morelia',
    description:
      'Participé en el desarrollo de Pladiermo, plataforma institucional para gestionar procesos y actas de entrega-recepción en la administración municipal.',
    tools: ['Frontend', 'Gobierno digital'],
  },
]
