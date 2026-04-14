'use client'

import { Zap, Target, MapPin, AlertCircle } from 'lucide-react'
import ServiceCard from './ServiceCard'

export default function ServicesGrid() {
  const services = [
    {
      icon: <Zap className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Tax Help',
      description:
        'Personalized tax guidance, ITR filing assistance, and deduction planning powered by AI.',
      badges: ['AI-Powered', 'Secure'],
      cta: 'Get Tax Help',
    },
    {
      icon: <Target className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Scheme Matching',
      description:
        'Discover government schemes and subsidies you&apos;re eligible for based on your profile.',
      cta: 'Find Schemes',
    },
    {
      icon: <MapPin className="h-8 w-8" strokeWidth={1.5} />,
      title: 'CSC Finder',
      description:
        'Locate nearby Common Service Centres and banks for offline assistance and transactions.',
      cta: 'Find Locations',
    },
    {
      icon: <AlertCircle className="h-8 w-8" strokeWidth={1.5} />,
      title: 'Log Grievance',
      description:
        'Report issues, track complaints, and get timely resolutions with transparent status updates.',
      cta: 'Report Issue',
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive financial assistance tools designed for your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
