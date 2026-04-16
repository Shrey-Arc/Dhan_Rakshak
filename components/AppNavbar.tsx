import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { AuthModal } from '@/components/AuthModal'

const links = [
  ['Home', '/'],
  ['Tax Assistant', '/tax-assistant'],
  ['Subsidies', '/subsidies'],
  ['Nearby', '/nearby'],
  ['Grievance', '/grievance'],
] as const

export function AppNavbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">DhanRakshak</Link>
      <nav>
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="nav-link">{label}</Link>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <AuthModal />
      </div>
    </header>
  )
}
