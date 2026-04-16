'use client'

import { Pause, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NewsItem {
  id: number
  title: string
  source: string
  time: string
  tag: string
}

export default function Spotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'PM-KISAN 17th Installment Released - Check Your Account',
      source: 'PIB',
      time: '2 hours ago',
      tag: 'Government Alert',
    },
    {
      id: 2,
      title: 'New ITR Rules for FY 2024-25 - Key Changes Explained',
      source: 'Income Tax Dept',
      time: '1 day ago',
      tag: 'Tax Update',
    },
    {
      id: 3,
      title: 'RBI Announces New Lending Rates - How It Affects Your Loans',
      source: 'RBI Official',
      time: '3 days ago',
      tag: 'Banking News',
    },
    {
      id: 4,
      title: 'Digital Payment Scheme Extended for Rural Communities',
      source: 'Ministry of Finance',
      time: '1 week ago',
      tag: 'Scheme Update',
    },
  ]

  useEffect(() => {
    if (!isPlaying || isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPlaying, isHovered, news.length])

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Spotlight
            </h2>
            <p className="text-gray-text text-sm">Latest government updates & financial news</p>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-border hover:bg-white transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 text-navy" strokeWidth={2} />
                <span className="text-sm font-medium text-navy">Pause</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 text-navy" strokeWidth={2} />
                <span className="text-sm font-medium text-navy">Play</span>
              </>
            )}
          </button>
        </div>

        {/* News Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden bg-white rounded-2xl border border-gray-border shadow-base">
            <div className="relative h-32 md:h-40">
              {/* News Items */}
              {news.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 p-6 md:p-8 transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {/* Tag */}
                  <div className="inline-block mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-navy mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-text">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex items-center justify-between px-6 md:px-8 py-4 border-t border-gray-border bg-gray-light/50">
              <div className="flex gap-2">
                {news.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsPlaying(false)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-gray-border hover:bg-gray-text'
                    }`}
                    aria-label={`Go to news item ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-gray-text">
                {currentIndex + 1} / {news.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
