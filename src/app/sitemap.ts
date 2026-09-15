import type { MetadataRoute } from 'next'
import { projects } from './data'
import { SITE_URL } from './site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    ...projects.map((project) => ({ url: `${SITE_URL}/${project.slug}` })),
  ]
}
