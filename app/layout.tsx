import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AppNavbar } from '@/components/AppNavbar'

export const metadata: Metadata = {
  title: 'DhanRakshak – AI Financial Guardian',
  description: 'Premium fintech UI for AI tax help, subsidy discovery, nearby services, and grievance tracking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppNavbar />
          <main className="app-shell">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
