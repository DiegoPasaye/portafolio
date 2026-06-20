import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import TopNav from './components/TopNav'

export const metadata: Metadata = {
  title: 'Diego Pasaye — Software Engineer',
  description:
    'Software engineer crafting beautiful, accessible, and performant web experiences with modern technologies.',
  openGraph: {
    title: 'Diego Pasaye — Software Engineer',
    description: 'Software engineer crafting beautiful, accessible, and performant web experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <TopNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
