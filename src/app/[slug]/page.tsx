import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projectSlugs } from '../data'
import { serializeJsonLd } from '../lib/jsonld'
import { SITE_NAME, SITE_URL } from '../site'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  const title = `${project.name} | Diego Pasaye`
  const url = `/${project.slug}`

  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description: project.summary,
      url,
      siteName: SITE_NAME,
      locale: 'es_MX',
      images: [{ url: project.image, alt: `${project.name} — Diego Pasaye` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.summary,
      images: [{ url: project.image, alt: `${project.name} — Diego Pasaye` }],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const canonicalUrl = `${SITE_URL}/${project.slug}`
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${project.name} | Diego Pasaye`,
        description: project.summary,
        inLanguage: 'es-MX',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${canonicalUrl}#project` },
      },
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        url: canonicalUrl,
        name: project.name,
        description: project.summary,
        image: `${SITE_URL}${project.image}`,
        inLanguage: 'es-MX',
        author: { '@id': `${SITE_URL}/#person` },
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      },
    ],
  }

  return (
    <main className="mx-auto min-h-dvh max-w-[1400px] px-6 pb-24 pt-28 md:px-10 md:pb-36 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectJsonLd) }}
      />
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-faint transition-colors hover:text-fg"
      >
        <span>←</span>
        VOLVER A PROYECTOS
      </Link>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="relative aspect-[4/3]">
            <Image
              src={project.image}
              alt={`Vista previa del proyecto ${project.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-accent">CASO DE ESTUDIO</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tighter md:text-7xl">{project.name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-10 border-y border-line py-6">
            <p className="font-mono text-xs tracking-widest text-faint">PARTICIPACIÓN</p>
            <p className="mt-3 leading-relaxed text-muted">{project.role}</p>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs tracking-widest text-faint">ENFOQUE</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-faint">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
            >
              Ver sitio
              <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>

      <section className="mt-20 max-w-3xl border-t border-line pt-10 md:mt-32 md:pt-14">
        <p className="font-mono text-xs tracking-widest text-accent">SOBRE EL PROYECTO</p>
        <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted">
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
