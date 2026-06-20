import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diego Pasaye — Software Engineer',
    short_name: 'Diego Pasaye',
    description:
      'Portfolio of Diego Pasaye, a junior frontend engineer in Morelia, México building React and Next.js web interfaces.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  }
}
