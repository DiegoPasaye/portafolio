// Single source of truth for portfolio content. Same information as the original site.

export const profile = {
  name: 'Diego Pasaye',
  role: 'Software Engineer',
  tagline: 'Building beautiful and interactive experiences with clean and efficient code.',
  email: 'pasayealvarado@gmail.com',
  location: 'Morelia, México · Remote-friendly',
}

export const navLinks = [
  { id: 'presentation', label: 'HOME' },
  { id: 'aboutMe', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
]

export const socials = [
  { href: 'https://github.com/DiegoPasaye', icon: '/github.svg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/diegopasaye/', icon: '/linkedin.svg', label: 'LinkedIn' },
  { href: 'mailto:pasayealvarado@gmail.com?subject=Hola%20te%20contacto%20por%20tu%20portafolio', icon: '/gmail.svg', label: 'Email' },
]

export const stats = [
  { value: 4, suffix: '+', label: 'Years Coding' },
  { value: 2, suffix: '', label: 'Production Apps' },
  { value: 8, suffix: '+', label: 'Months Pro Work' },
]

export const skills = [
  { group: 'FRONTEND', items: ['NextJs', 'HTML', 'AngularJs', 'Bootstrap'] },
  { group: 'BACKEND', items: ['NodeJs', 'Python', 'MongoDB', 'MySQL'] },
  { group: 'TOOLS', items: ['Git', 'Figma', 'VS Code', 'Jira'] },
]

export const projects = [
  {
    name: 'Licita',
    image: '/licitaProject.png',
    description:
      'An AI-assisted platform that centralizes public-works tender data and generates economic, technical, and legal proposal documents in one traceable workflow.',
    tools: ['Next.js', 'FastAPI', 'Supabase', 'Vercel'],
    demo: 'https://licitacionfrontend.vercel.app',
  },
  {
    name: 'Nakawé',
    image: '/nakaweProject.png',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tools: ['NextJS', 'MySQL'],
    demo: '#',
  },
  {
    name: 'Pladiermo',
    image: '/pladiermoProject.jpeg',
    description:
      "A web application designed to streamline the official handover process for the Municipal Comptroller's Office of Morelia.",
    tools: ['Angular', 'Spring boot', 'MySQL'],
    demo: '#',
  },
]

export const experience = [
  {
    time: 'Nov 2025 — Present',
    role: 'Junior Full Stack Engineer',
    company: 'Cumicsa Construcciones S.A. de C.V.',
    description:
      'Developing an AI-assisted platform that automates public-works tender workflows for construction companies in Mexico.',
    tools: ['NextJs', 'Supabase', 'FastAPI', 'Vercel'],
  },
  {
    time: 'Jun 2025 — Nov 2025',
    role: 'Junior Full Stack Engineer',
    company: 'Nakawe Foundation',
    description:
      'Developed an e-commerce platform to improve the visibility of artisan products and facilitate sales across Mexico.',
    tools: ['NextJs', 'MySQL'],
  },
  {
    time: 'Mar 2024 — Sep 2024',
    role: 'Frontend Developer',
    company: "Municipal Comptroller's Office of Morelia",
    description:
      "Contributed to Pladiermo, a platform for managing the municipal administration's official handover process.",
    tools: ['Angular', 'Spring boot', 'MySQL'],
  },
]
