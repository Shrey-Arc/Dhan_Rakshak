'use client'

import { Search, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

const hints = [
  'How do I file my income tax?',
  'Which government schemes am I eligible for?',
  'Where is my nearest CSC center?',
]

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const [hintIndex, setHintIndex] = useState(0)
  const [aiResponse, setAiResponse] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setHintIndex((prev) => (prev + 1) % hints.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#00B386_0%,#2563EB_100%)] px-4 pb-24 pt-36 md:px-8 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.22),transparent_45%)]" />
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-12 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center text-white">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-sm md:text-sm">
          <Sparkles className="h-4 w-4" /> AI-powered financial guidance for every village
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Your AI Financial Guardian
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-white/90 md:text-lg">
          Get trusted help for taxes, government schemes, CSC services, and grievance tracking in one simple place.
        </p>

        <div className="mx-auto mt-10 w-full max-w-4xl">
          <div className="group relative rounded-full bg-white/20 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <div className="relative flex h-14 items-center rounded-full bg-white pl-5 pr-2 text-left transition group-focus-within:shadow-[0_0_0_6px_rgba(255,255,255,.35)]">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Ask anything about tax, schemes, CSC..."
                className="h-full flex-1 border-none bg-transparent px-3 text-sm text-navy focus:outline-none md:text-base"
                aria-label="Ask DhanRakshak AI"
              />
              <button
                onClick={async () => {
                  if (!searchValue.trim()) return
                  try {
                    setLoading(true)
                    const data = await api.queryAI(searchValue)
                    setAiResponse(data.answer)
                  } catch {
                    setAiResponse('AI backend unavailable. Please try again shortly.')
                  } finally {
                    setLoading(false)
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark md:px-5"
              >
                <Sparkles className="h-4 w-4" /> Ask AI
              </button>
            </div>
          </div>

          <p className="mt-3 text-sm text-white/85">
            Try: <span className="font-medium">{hints[hintIndex]}</span>
            <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-white/90 align-middle" />
          </p>
          {(loading || aiResponse) && (
            <p className="mt-3 rounded-lg bg-white/15 px-4 py-2 text-left text-sm text-white/95">
              {loading ? 'Thinking…' : aiResponse}
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="rounded-full border border-white/35 bg-white/15 px-4 py-2">Bank-Level Security</span>
          <span className="rounded-full border border-white/35 bg-white/15 px-4 py-2">AI-Powered</span>
          <span className="rounded-full border border-white/35 bg-white/15 px-4 py-2">100% Free Guidance</span>
        </div>
      </div>
    </section>
  )
}
