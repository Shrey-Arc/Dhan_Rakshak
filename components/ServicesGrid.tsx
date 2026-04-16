'use client'

import Link from 'next/link'
import { FileText, TrendingUp, MapPin, AlertCircle, ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: <FileText className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Tax Help',
      description: 'AI-powered tax guidance, ITR filing, deduction planning & compliance tips.',
      badges: ['Personalized', 'AI-Powered', 'Secure'],
      cta: 'Explore Now',
      link: '/tax-help',
      color: 'primary',
    },
    {
      icon: <TrendingUp className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Scheme Matching',
      description: 'Discover government schemes & subsidies you&apos;re eligible for instantly.',
      cta: 'Find Schemes',
      link: '/schemes',
      color: 'blue',
    },
    {
      icon: <MapPin className="h-8 w-8" strokeWidth={1.5} />,
      title: 'CSC Finder',
      description: 'Locate nearby Common Service Centres & banks for offline transactions.',
      cta: 'Find Location',
      link: '/csc-finder',
      color: 'orange',
    },
    {
      icon: <AlertCircle className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Log Grievance',
      description: 'Report issues, track complaints & get transparent status updates.',
      cta: 'Report Now',
      link: '/grievance',
      color: 'red',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl">
            Everything you need for financial peace of mind, powered by AI and trust.
          </p>
        </div>

        {/* Services Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div className="h-full p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Badges */}
                {service.badges && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
