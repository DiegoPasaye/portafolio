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

  const title = project.seoTitle
  const url = `/${project.slug}`

  return {
    title,
    description: project.seoDescription,
    keywords: project.keyPhrases,
    alternates: { canonical: url },
    other: {
      'geo.region': 'MX-MIC',
      'geo.placename': 'Morelia, Michoacán',
      'geo.position': '19.7060;-101.1950',
      ICBM: '19.7060, -101.1950',
      'content-language': 'es-MX',
    },
    openGraph: {
      type: 'website',
      title,
      description: project.seoDescription,
      url,
      siteName: SITE_NAME,
      locale: 'es_MX',
      images: [{ url: project.image, alt: `${project.name} — Diego Pasaye` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.seoDescription,
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
        name: project.seoTitle,
        description: project.seoDescription,
        keywords: project.keyPhrases,
        inLanguage: 'es-MX',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${canonicalUrl}#project` },
      },
      ...(project.features
        ? [
            {
              '@type': 'SoftwareApplication',
              '@id': `${canonicalUrl}#software`,
              name: project.name,
              alternateName: project.slug === 'licita' ? 'Licita por Nomatech' : undefined,
              url: canonicalUrl,
              applicationCategory: 'BusinessApplication',
              applicationSubCategory:
                project.applicationSubCategory ?? 'Software de automatización',
              operatingSystem: 'Web',
              inLanguage: 'es-MX',
              description: project.seoDescription,
              creator:
                project.slug === 'licita'
                  ? { '@type': 'Organization', name: 'Nomatech' }
                  : undefined,
              author: { '@id': `${SITE_URL}/#person` },
              featureList: project.features,
              keywords: project.keyPhrases,
              mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
            },
          ]
        : []),
      {
        '@type': project.slug === 'polymarket-bot' ? 'SoftwareSourceCode' : 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        url: canonicalUrl,
        name: project.seoTitle,
        headline: project.headline ?? project.seoTitle,
        description: project.seoDescription,
        abstract: project.seoDescription,
        image: `${SITE_URL}${project.image}`,
        inLanguage: 'es-MX',
        author: { '@id': `${SITE_URL}/#person` },
        about: project.features ? { '@id': `${canonicalUrl}#software` } : undefined,
        keywords: project.keyPhrases,
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
        ...(project.slug === 'polymarket-bot' ? { programmingLanguage: 'Python' } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Proyectos',
            item: `${SITE_URL}/proyectos`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: project.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
        href="/proyectos"
        className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-faint transition-colors hover:text-fg"
      >
        <span>←</span>
        VOLVER A PROYECTOS
      </Link>

      <nav aria-label="Ruta de navegación" className="mt-8 flex gap-2 font-mono text-xs text-faint">
        <Link href="/" className="hover:text-fg">
          INICIO
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/proyectos" className="hover:text-fg">
          PROYECTOS
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-muted">
          {project.name.toUpperCase()}
        </span>
      </nav>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-20">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface lg:self-stretch">
          <div className="relative aspect-[4/3] lg:h-full lg:min-h-[38rem] lg:aspect-auto">
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
          <h1 className="mt-4 text-4xl font-semibold tracking-tighter md:text-6xl">
            <span>{project.name}</span>{' '}
            {project.headline ? (
              <span className="mt-2 block text-xl font-normal text-muted md:text-2xl">
                {project.headline}
              </span>
            ) : null}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-10 border-y border-line py-6">
            <p className="font-mono text-xs tracking-widest text-faint">PARTICIPACIÓN</p>
            <p className="mt-3 leading-relaxed text-muted">{project.role}</p>
            {project.roleDetails && project.roleDetails.length > 0 ? (
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {project.roleDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
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

          <div className="mt-8">
            <p className="font-mono text-xs tracking-widest text-faint">TEMAS</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Temas de ${project.name}`}>
              {project.keyPhrases.map((phrase) => (
                <li key={phrase} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-faint">
                  {phrase}
                </li>
              ))}
            </ul>
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

      {project.sections && project.sections.length > 0 ? (
        <div className="mt-20 max-w-4xl space-y-16 border-t border-line pt-10 md:mt-32 md:space-y-24 md:pt-14">
          {project.sections.map((section) => (
            <section key={section.title} aria-label={section.title}>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                {section.title}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs ? (
                <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : null}
              {section.items ? (
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item.heading}
                      className="rounded-xl border border-line bg-surface/50 p-6"
                    >
                      <h3 className="font-medium text-fg text-lg">{item.heading}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}

      <section className="mt-20 max-w-3xl border-t border-line pt-10 md:mt-32 md:pt-14" aria-labelledby="project-faqs">
        <p className="font-mono text-xs tracking-widest text-accent">PREGUNTAS FRECUENTES</p>
        <h2 id="project-faqs" className="mt-4 text-3xl font-semibold tracking-tight">
          {project.name}: contexto y participación
        </h2>
        <dl className="mt-8 space-y-8">
          {project.faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-medium">{faq.question}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
