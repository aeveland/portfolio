import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andy Eveland - Product Designer',
  description: 'Principal product designer specializing in mobile, web, and spatial experiences. I turn complex problems into simple, delightful products that just work.',
  keywords: ['Product Designer', 'UX Designer', 'Mobile Design', 'Web Design', 'Spatial Design', 'Vision Pro', 'iOS', 'Android'],
  authors: [{ name: 'Andy Eveland' }],
  creator: 'Andy Eveland',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Andy Eveland - Product Designer',
    description: 'Principal product designer specializing in mobile, web, and spatial experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andy Eveland - Product Designer',
    description: 'Principal product designer specializing in mobile, web, and spatial experiences.',
    creator: '@luckyduner13',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
