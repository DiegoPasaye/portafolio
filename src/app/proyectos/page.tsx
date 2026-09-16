import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudyProjects, projects, subprojects } from '../data'
import { serializeJsonLd } from '../lib/jsonld'
import { SITE_NAME, SITE_URL } from '../site'

const canonicalUrl = `${SITE_URL}/proyectos`
const title = `Proyectos de ${SITE_NAME} | Desarrollo Full Stack`
const description =
  'Proyectos destacados de Diego Pasaye: automatización de licitaciones, SaaS con IA, comercio electrónico y gobierno digital.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/proyectos' },
  openGraph: {
    type: 'website',
    title,
    description,
    url: '/proyectos',
    siteName: SITE_NAME,
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage: 'es-MX',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Proyectos', item: canonicalUrl },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#case-studies`,
      name: 'Casos de estudio de Diego Pasaye',
      itemListElement: caseStudyProjects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/${project.slug}`,
        name: project.name,
      })),
    },
  ],
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-[1400px] px-6 pb-24 pt-28 md:px-10 md:pb-36 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <nav aria-label="Ruta de navegación" className="font-mono text-xs tracking-widest text-faint">
        <Link href="/" className="hover:text-fg">
          INICIO
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-muted">
          PROYECTOS
        </span>
      </nav>

      <header className="mt-12 max-w-3xl">
        <p className="font-mono text-xs tracking-widest text-accent">CATÁLOGO</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tighter md:text-7xl">Todos los proyectos</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Casos de estudio y proyectos complementarios que reúnen automatización de licitaciones,
          SaaS con IA, comercio electrónico, gobierno digital, sitios corporativos y sistemas cuantitativos.
        </p>
      </header>

      <section className="mt-20 md:mt-28" aria-labelledby="featured-projects">
        <p className="font-mono text-xs tracking-widest text-accent">DESTACADOS</p>
        <h2 id="featured-projects" className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Casos de estudio
        </h2>
        <div className="mt-8 border-t border-line">
          {projects.map((project, index) => (
            <article key={project.slug} className="grid gap-4 border-b border-line py-6 md:grid-cols-[3rem_12rem_1fr_auto] md:items-center">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
              <Link href={`/${project.slug}`} className="text-sm font-medium hover:text-accent">
                Ver caso →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-10 md:mt-28 md:pt-14" aria-labelledby="subprojects">
        <p className="font-mono text-xs tracking-widest text-faint">PROYECTOS COMPLEMENTARIOS</p>
        <h2 id="subprojects" className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Productos y experiencias web
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Proyectos de desarrollo web y un caso técnico de investigación cuantitativa, cada uno con una
          página canónica, contexto de participación y enlace al sitio cuando está disponible.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {subprojects.map((project) => (
            <article key={project.id} className="rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-xs tracking-widest text-faint">{project.id}</p>
              <h3 className="mt-6 text-xl font-medium">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <p className="mt-4 font-mono text-xs text-faint">{project.role}</p>
              <Link href={project.href} className="mt-6 inline-flex text-sm font-medium hover:text-accent">
                Ver proyecto →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
