'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchHero() {
  const [query, setQuery] = useState('')

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance leading-tight">
            Your AI-Powered Financial Guardian
          </h1>

          <p className="text-lg text-muted-foreground text-center mb-8 text-balance">
            Get instant answers about taxes, government subsidies, and banking. Trusted by rural communities across India.
          </p>

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-3 md:py-4 shadow-sm hover:shadow-md transition-shadow">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Ask Anything about Tax, Subsidies, or Banking..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-base md:text-lg"
                aria-label="Search financial assistance"
              />
              <button className="btn-primary whitespace-nowrap text-sm md:text-base">
                Search
              </button>
            </div>
          </div>

          {/* Search Tips */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="text-xs md:text-sm text-muted-foreground">Try:</span>
            <button className="text-xs md:text-sm px-3 py-1 bg-secondary text-foreground rounded-full hover:bg-muted transition-colors">
              Income Tax Filing
            </button>
            <button className="text-xs md:text-sm px-3 py-1 bg-secondary text-foreground rounded-full hover:bg-muted transition-colors">
              PM-KISAN Scheme
            </button>
            <button className="text-xs md:text-sm px-3 py-1 bg-secondary text-foreground rounded-full hover:bg-muted transition-colors">
              Bank Loan Eligibility
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
