import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import TopNav from './components/TopNav'
import JsonLd from './components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://diegopasaye.dev'),
  title: 'Diego Pasaye — Software Engineer',
  description:
    'Diego Pasaye is a junior frontend engineer and software-engineering student in Morelia, México, building accessible, performant web interfaces with React and Next.js.',
  keywords: [
    'Diego Pasaye',
    'Diego Pasaye developer',
    'frontend engineer',
    'software engineer',
    'React developer',
    'Next.js developer',
    'Morelia',
    'México',
    'web developer portfolio',
  ],
  authors: [{ name: 'Diego Pasaye', url: 'https://diegopasaye.dev' }],
  creator: 'Diego Pasaye',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Diego Pasaye — Software Engineer',
    description:
      'Junior frontend engineer in Morelia, México — building accessible, performant web interfaces with React and Next.js.',
    url: 'https://diegopasaye.dev',
    siteName: 'Diego Pasaye',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Pasaye — Software Engineer',
    description: 'Junior frontend engineer in Morelia, México — React & Next.js.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
