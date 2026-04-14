'use client'

import { FileText, TrendingUp, MapPin, AlertCircle, ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: <FileText className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Tax Help',
      description: 'AI-powered tax guidance, ITR filing, deduction planning & compliance tips.',
      badges: ['Personalized', 'AI-Powered', 'Secure'],
      cta: 'Explore Now',
      color: 'primary',
    },
    {
      icon: <TrendingUp className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Scheme Matching',
      description: 'Discover government schemes & subsidies you&apos;re eligible for instantly.',
      cta: 'Find Schemes',
      color: 'blue',
    },
    {
      icon: <MapPin className="h-8 w-8" strokeWidth={1.5} />,
      title: 'CSC Finder',
      description: 'Locate nearby Common Service Centres & banks for offline transactions.',
      cta: 'Find Location',
      color: 'orange',
    },
    {
      icon: <AlertCircle className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Log Grievance',
      description: 'Report issues, track complaints & get transparent status updates.',
      cta: 'Report Now',
      color: 'red',
    },
  ]

  const colorMap = {
    primary: { bg: 'bg-primary/5', text: 'text-primary', icon: 'text-primary' },
    blue: { bg: 'bg-blue/5', text: 'text-blue', icon: 'text-blue' },
    orange: { bg: 'bg-orange/5', text: 'text-orange', icon: 'text-orange' },
    red: { bg: 'bg-red/5', text: 'text-red', icon: 'text-red' },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Our Services
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl">
            Everything you need for financial peace of mind, powered by AI and trust.
          </p>
        </div>

        {/* Services Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap]
            return (
              <div
                key={index}
                className="card group cursor-pointer"
              >
                {/* Icon */}
                <div className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <div className={colors.icon}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-text text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Badges */}
                {service.badges && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          i === 0 ? 'badge badge-primary' :
                          i === 1 ? 'badge badge-blue' :
                          'badge badge-orange'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <button className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}>
                  {service.cta}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
