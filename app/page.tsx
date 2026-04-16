import { Hero3D } from '@/components/Hero3D'
import { FeatureCard } from '@/components/FeatureCard'

const features = [
  {
    title: 'AI Tax Assistant',
    desc: 'Smart filing guidance, deductions, and compliance tips.',
    icon: '🤖',
    href: '/tax-assistant',
  },
  {
    title: 'Subsidy Finder',
    desc: 'Discover relevant state and central schemes in seconds.',
    icon: '🎯',
    href: '/subsidies',
  },
  {
    title: 'Bank/CSC Locator',
    desc: 'Find nearby centers with fast direction shortcuts.',
    icon: '📍',
    href: '/nearby',
  },
  {
    title: 'Grievance Tracker',
    desc: 'Submit grievances and monitor resolution timelines.',
    icon: '📌',
    href: '/grievance',
  },
]

export default function HomePage() {
  return (
    <section className="container">
      <div className="hero glass">
        <div>
          <p className="badge">DhanRakshak – AI Financial Guardian</p>
          <h1>Your AI Financial Guardian</h1>
          <p>Premium fintech experience for taxes, subsidies, nearby services, and grievance support.</p>
          <input className="search" aria-label="Search services" placeholder="Search tax help, subsidies, or nearby centers..." />
        </div>
        <Hero3D />
      </div>

      <div className="feature-grid">
        {features.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
