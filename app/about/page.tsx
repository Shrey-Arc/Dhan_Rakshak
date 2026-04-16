'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { Heart, Target, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'People First',
      description: 'We prioritize the financial well-being and security of our users above all.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Accessibility',
      description: 'Financial guidance should be available to everyone, regardless of literacy or location.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage AI and technology to simplify complex financial processes.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We build trust through transparency and long-term relationships with our users.'
    }
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Financial technologist with 15 years in banking'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'AI/ML specialist, former Google engineer'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      bio: 'Rural development expert and social entrepreneur'
    },
    {
      name: 'Divya Singh',
      role: 'Lead Tax Advisor',
      bio: 'Chartered Accountant with 10+ years experience'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Mission */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">About DhanRakshak</h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                DhanRakshak is an AI-powered financial guidance platform built for rural India. We simplify complex financial processes—from tax filing to government scheme matching—making expert guidance accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded with a mission to democratize financial services, DhanRakshak combines cutting-edge technology with human expertise to empower millions of Indians to take control of their financial futures.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="grid md:grid-cols-4 gap-4">
            {[
              { number: '500K+', label: 'Users' },
              { number: '₹1000Cr', label: 'Tax Filed' },
              { number: '2000+', label: 'Schemes Matched' },
              { number: '98%', label: 'Satisfaction' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10 rounded-xl border border-green-200/50 dark:border-green-900/30 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Values */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-navy dark:text-white">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-navy dark:text-white">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-navy dark:text-white">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-6 opacity-90">Help us empower millions of Indians with financial guidance</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
