import type { MetadataRoute } from 'next'
import { caseStudyProjects } from './data'
import { SITE_URL } from './site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/proyectos` },
    ...caseStudyProjects.map((project) => ({ url: `${SITE_URL}/${project.slug}` })),
  ]
}
