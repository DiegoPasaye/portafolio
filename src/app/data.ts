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

export type Project = {
  slug: 'licita' | 'barberdeck' | 'nakawe' | 'pladiermo'
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

export const projectSlugs = projects.map((project) => project.slug)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
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
