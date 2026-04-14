'use client'

import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  badges?: string[]
  cta?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  badges = [],
  cta = 'Explore',
}: ServiceCardProps) {
  return (
    <button className="group relative text-left h-full">
      <div className="h-full rounded-lg border border-border bg-background p-6 md:p-8 transition-all hover:border-primary hover:shadow-lg card-shadow">
        {/* Icon */}
        <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <div className="text-primary">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">
          {description}
        </p>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          {cta}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </div>
      </div>
    </button>
  )
}
