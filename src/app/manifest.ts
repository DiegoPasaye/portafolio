import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diego Pasaye — Software Engineer',
    short_name: 'Diego Pasaye',
    description:
      'Portfolio of Diego Pasaye, a junior full stack engineer in Morelia, México building React, Next.js, FastAPI, and Supabase web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  }
}
