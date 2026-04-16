'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { TrendingUp, Zap, Target, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function SchemesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN',
      category: 'agriculture',
      description: 'Direct income support to farmers',
      benefit: '₹6,000 per year',
      eligible: 'Small and marginal farmers',
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'Mudra Loan',
      category: 'business',
      description: 'Business loans for entrepreneurs',
      benefit: 'Up to ₹10 lakhs',
      eligible: 'New entrepreneurs',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'Pradhan Mantri Jeevan Jyoti Bima',
      category: 'insurance',
      description: 'Life insurance coverage',
      benefit: '₹2 lakh coverage',
      eligible: '18-50 years',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 4,
      name: 'Sukanya Samriddhi Yojana',
      category: 'savings',
      description: 'Savings scheme for girls',
      benefit: '8.2% interest p.a.',
      eligible: 'Girls below 10 years',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: 5,
      name: 'Ayushman Bharat',
      category: 'health',
      description: 'Health insurance scheme',
      benefit: '₹5 lakh coverage',
      eligible: 'BPL families',
      icon: <Target className="h-6 w-6" />
    },
    {
      id: 6,
      name: 'Public Provident Fund',
      category: 'savings',
      description: 'Long-term savings scheme',
      benefit: '7.1% interest p.a.',
      eligible: 'All citizens',
      icon: <Zap className="h-6 w-6" />
    }
  ]

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'business', name: 'Business' },
    { id: 'health', name: 'Health' },
    { id: 'savings', name: 'Savings' },
    { id: 'insurance', name: 'Insurance' }
  ]

  const filtered = selectedCategory === 'all' 
    ? schemes 
    : schemes.filter(s => s.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">Government Schemes</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover and get matched with government schemes and subsidies you&apos;re eligible for.
            </p>
          </section>

          {/* Category Filter */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-navy dark:text-white">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-navy dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:border-primary'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </section>

          {/* Schemes Grid */}
          <section className="grid md:grid-cols-2 gap-6">
            {filtered.map((scheme) => (
              <div
                key={scheme.id}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center text-primary">
                    {scheme.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    {scheme.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{scheme.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{scheme.description}</p>
                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                  <p className="text-sm"><span className="font-semibold text-primary">Benefit:</span> {scheme.benefit}</p>
                  <p className="text-sm"><span className="font-semibold text-navy dark:text-white">Eligibility:</span> {scheme.eligible}</p>
                </div>
                <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 text-primary font-medium hover:shadow-md transition-all flex items-center justify-center gap-2 group-hover:from-green-500/20 group-hover:to-blue-500/20">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Scheme Recommendations</h2>
            <p className="text-lg mb-6 opacity-90">Answer a few questions to get personalized scheme matches</p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all">
              Start Assessment
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
