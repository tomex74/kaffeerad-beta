import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/navigation/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: 'KaffeeRad Berlin',
    template: '%s | KaffeeRad Berlin',
  },
  description:
    'Premium coffee experiences in Berlin. Minimal, stylish, and warm - discover our curated coffee offerings and book your next event.',
  keywords: [
    'coffee',
    'Berlin',
    'espresso',
    'events',
    'catering',
    'specialty coffee',
    'KaffeeRad',
  ],
  authors: [{ name: 'KaffeeRad Berlin' }],
  creator: 'KaffeeRad Berlin',
  metadataBase: new URL('https://kaffeerad.berlin'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kaffeerad.berlin',
    title: 'KaffeeRad Berlin',
    description:
      'Premium coffee experiences in Berlin. Minimal, stylish, and warm - discover our curated coffee offerings and book your next event.',
    siteName: 'KaffeeRad Berlin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KaffeeRad Berlin',
    description:
      'Premium coffee experiences in Berlin. Minimal, stylish, and warm - discover our curated coffee offerings and book your next event.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}