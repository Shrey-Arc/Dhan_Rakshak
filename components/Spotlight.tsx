'use client'

import { ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  category: string
}

export default function Spotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'PM-KISAN 17th Installment Released',
      description:
        'Check your account for the latest PM-KISAN subsidy payment. Over 11 crore farmers benefited.',
      date: 'April 10, 2024',
      category: 'Subsidy',
    },
    {
      id: 2,
      title: 'New ITR Rules for FY 2024-25',
      description:
        'Important changes to income tax filing. Understand the new categories and exemptions.',
      date: 'April 8, 2024',
      category: 'Tax',
    },
    {
      id: 3,
      title: 'Bank Interest Rate Update',
      description:
        'RBI announces new lending rates. Check how this affects your home and personal loans.',
      date: 'April 5, 2024',
      category: 'Banking',
    },
    {
      id: 4,
      title: 'Digital Payment Scheme Extended',
      description:
        'Government extends digital transaction incentives for farmers. Apply now through your CSC.',
      date: 'April 1, 2024',
      category: 'Digital',
    },
  ]

  useEffect(() => {
    if (!autoScroll) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoScroll, news.length])

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Spotlight
        </h2>

        {/* News Feed */}
        <div className="space-y-3">
          {news.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(index)
                setAutoScroll(false)
              }}
              className={`w-full text-left p-4 md:p-6 rounded-lg border transition-all ${
                index === currentIndex
                  ? 'border-primary bg-background shadow-md'
                  : 'border-border bg-background/50 hover:border-muted'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {index === currentIndex && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    index === currentIndex ? 'text-primary' : ''
                  }`}
                  strokeWidth={2}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Auto-scroll Info */}
        <p className="text-xs text-muted-foreground mt-4">
          Click to pause auto-scroll
        </p>
      </div>
    </section>
  )
}
