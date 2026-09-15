import type { Metadata, Viewport } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import TopNav from './components/TopNav'
import JsonLd from './components/JsonLd'
import { SITE_URL } from './site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Diego Pasaye — Desarrollador Full Stack',
  description:
    'Diego Pasaye es Desarrollador Full Stack en Morelia, Michoacán, con más de 18 meses de experiencia profesional. Construye productos web con React, Next.js, TypeScript, Python, FastAPI e inteligencia artificial.',
  keywords: [
    'Diego Pasaye',
    'Diego Pasaye developer',
    'desarrollador full stack',
    'desarrollador frontend',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'inteligencia artificial',
    'Morelia',
    'México',
    'web developer portfolio',
  ],
  authors: [{ name: 'Diego Pasaye', url: 'https://diegopasaye.dev' }],
  creator: 'Diego Pasaye',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Diego Pasaye — Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack en Morelia, Michoacán, con más de 18 meses de experiencia profesional. React, Next.js, TypeScript, Python, FastAPI e inteligencia artificial.',
    url: 'https://diegopasaye.dev',
    siteName: 'Diego Pasaye',
    locale: 'es_MX',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Pasaye — Desarrollador Full Stack',
    description: 'Más de 18 meses de experiencia profesional con React, Next.js, TypeScript, Python, FastAPI e inteligencia artificial.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <JsonLd />
        <SmoothScroll>
          <CustomCursor />
          <TopNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
