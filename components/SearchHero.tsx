'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchHero() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue to-blue/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3 leading-tight text-balance">
            Your AI Financial Guardian
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto">
            Get instant expert guidance on taxes, government schemes, and financial services
          </p>

          {/* Search Bar - Hero Element */}
          <div className="mb-8">
            <div 
              className={`relative flex items-center bg-white rounded-full px-6 py-4 transition-all duration-300 ${
                isFocused ? 'ring-4 ring-white/30 shadow-2xl scale-105' : 'shadow-lg'
              }`}
              style={{width: 'clamp(280px, 90%, 800px)', margin: '0 auto'}}
            >
              <Search className="h-5 w-5 text-gray-text flex-shrink-0" strokeWidth={2} />
              <input
                type="text"
                placeholder="Ask anything about tax, schemes, CSC…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent text-navy placeholder-gray-text outline-none text-base md:text-lg font-medium px-4"
                aria-label="Search financial assistance"
              />
              <button className="btn btn-primary text-sm md:text-base whitespace-nowrap ml-2">
                Search
              </button>
            </div>
            <p className="text-white/80 text-xs md:text-sm mt-3">
              ✓ Personalized recommendations  ✓ AI-powered analysis  ✓ Secure & private
            </p>
          </div>

          {/* Quick Search Suggestions */}
          <div className="space-y-3">
            <p className="text-white/80 text-sm font-medium">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full border border-white/30 transition-all hover:border-white/50">
                Income Tax Filing
              </button>
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full border border-white/30 transition-all hover:border-white/50">
                PM-KISAN Scheme
              </button>
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full border border-white/30 transition-all hover:border-white/50">
                Bank Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
