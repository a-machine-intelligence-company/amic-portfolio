import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Grand_Hotel } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: '/brand/amic-logo.png',
    apple: '/brand/amic-logo.png',
    shortcut: '/brand/amic-logo.png',
  },
  title: {
    default: 'Next.js Portfolio-Vorlage',
    template: '%s | Next.js Portfolio-Vorlage',
  },
  description: 'Dies ist mein Portfolio.',
  openGraph: {
    title: 'Mein Portfolio',
    description: 'Dies ist mein Portfolio.',
    url: baseUrl,
    siteName: 'Mein Portfolio',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')
const grandHotel = Grand_Hotel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brand',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={cx(
        'text-[var(--brand-text)] bg-brand-canvas',
        GeistSans.variable,
        GeistMono.variable,
        grandHotel.variable
      )}
    >
      <body className="antialiased">
        <main className="page-shell relative z-10 flex-auto min-w-0 mt-6 px-4 sm:px-6">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
