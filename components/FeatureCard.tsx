import Link from 'next/link'

export function FeatureCard({ title, desc, icon, href }: { title: string; desc: string; icon: string; href: string }) {
  return (
    <Link href={href} className="feature-card">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  )
}
