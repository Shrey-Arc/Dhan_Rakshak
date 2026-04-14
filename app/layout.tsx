import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DhanRakshak - Your Financial Guardian',
  description:
    'AI-powered financial guidance for taxes, subsidies, and banking. Trusted by rural communities across India.',
  keywords: [
    'tax help',
    'government schemes',
    'subsidies',
    'banking',
    'financial guidance',
    'rural India',
  ],
  openGraph: {
    title: 'DhanRakshak - Your Financial Guardian',
    description:
      'AI-powered financial guidance for taxes, subsidies, and banking.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0066FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
