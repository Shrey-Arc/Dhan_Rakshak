'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Hero3D } from '@/components/Hero3D'
import { FeatureCard } from '@/components/FeatureCard'
import { api } from '@/lib/api'

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
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)

  const smartSearch = async () => {
    if (!query.trim() || searching) return
    setSearching(true)
    try {
      const result = await api.queryAI(query.trim())
      const intentRoute: Record<string, string> = {
        tax: '/tax-assistant',
        schemes: '/subsidies',
        locations: '/nearby',
        grievance: '/grievance',
      }
      router.push(intentRoute[result.intent] ?? '/tax-assistant')
    } catch {
      router.push('/tax-assistant')
    } finally {
      setSearching(false)
    }
  }

  return (
    <section className="container">
      <div className="hero glass">
        <div>
          <p className="badge">DhanRakshak – AI Financial Guardian</p>
          <h1>Your AI Financial Guardian</h1>
          <p>Premium fintech experience for taxes, subsidies, nearby services, and grievance support.</p>
          <input
            className="search"
            aria-label="Search services"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                void smartSearch()
              }
            }}
            placeholder="Search tax help, subsidies, or nearby centers..."
          />
          <button className="primary-btn" type="button" onClick={() => void smartSearch()} disabled={searching}>
            {searching ? 'Routing...' : 'Smart Search'}
          </button>
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
