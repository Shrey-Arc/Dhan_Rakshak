import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DhanRakshak - Your AI Financial Guardian',
  description:
    'Your AI Financial Guardian. Get expert guidance on taxes, discover government schemes, find CSCs, and track grievances. Trusted by rural communities.',
  keywords: [
    'tax help',
    'income tax',
    'government schemes',
    'subsidies',
    'CSC finder',
    'grievance',
    'financial guidance',
    'rural India',
    'AI financial assistant',
  ],
  openGraph: {
    title: 'DhanRakshak - Your AI Financial Guardian',
    description:
      'Get expert guidance on taxes, schemes, and financial services.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00B386',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased font-sans text-navy bg-white">
        {children}
      </body>
    </html>
  )
}
