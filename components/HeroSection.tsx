'use client'

import { Search, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')

  const suggestions = [
    'How to file ITR?',
    'PM-KISAN eligibility',
    'Bank loan options',
    'Tax deductions',
  ]

  return (
    <section className="pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Gradient with Neomorphism */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        
        {/* Liquid Crystal decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 dark:from-green-900/10 dark:to-blue-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-green-200/20 dark:from-blue-900/10 dark:to-green-900/10 rounded-full blur-3xl -z-10" />

        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg shadow-green-200/50 dark:shadow-green-900/20">
              <span className="text-white font-bold text-lg">DR</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-green-400">
              DhanRakshak
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your AI Financial Guardian
          </p>

          {/* Subheading */}
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Expert guidance on taxes, government schemes, banking, and more. Trusted by rural communities across India.
          </p>

          {/* Search Bar with Neomorphism */}
          <div className="mt-10 space-y-4">
            <div className="relative max-w-2xl mx-auto">
              {/* Neomorphic Shadow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-200/30 to-blue-200/30 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl blur" />
              
              <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Ask anything about tax, subsidies, or banking..."
                  className="flex-1 pl-12 pr-4 py-4 bg-transparent focus:outline-none text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-base"
                />
                <button className="mr-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium hover:shadow-lg transition-all flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden md:inline">Ask AI</span>
                </button>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchValue(suggestion)}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-6 pt-8 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                ✓
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                ✓
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">AI-Powered Guidance</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                ✓
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
