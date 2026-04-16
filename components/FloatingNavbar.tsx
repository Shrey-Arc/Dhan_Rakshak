'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, ChevronDown, Globe } from 'lucide-react'

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-gray-200 bg-white/90 shadow-lg backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-blue-500 font-bold text-white">DR</span>
            <span className="hidden text-sm font-semibold text-navy md:block dark:text-white">DhanRakshak</span>
          </Link>

          <div className="hidden flex-1 md:block md:max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ask anything about tax, schemes, CSC..."
                className="h-11 w-full rounded-full border border-gray-200 bg-gray-100 pl-11 pr-4 text-sm text-navy transition focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,179,134,0.12)] dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                aria-label="AI search"
              />
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-navy transition hover:text-primary dark:text-gray-200">
                Features
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute right-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-800">
                <Link href="/features" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700">All Features</Link>
                <Link href="/tax-help" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700">Tax Help</Link>
                <Link href="/schemes" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700">Scheme Matching</Link>
                <Link href="/csc-finder" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700">CSC Finder</Link>
                <Link href="/grievance" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700">Grievance Tracker</Link>
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-navy transition hover:text-primary dark:text-gray-200">About</Link>
            <Link href="/contact" className="text-sm font-medium text-navy transition hover:text-primary dark:text-gray-200">Contact</Link>

            <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-gray-300">
              <Globe className="h-3.5 w-3.5" /> EN
            </button>

            <Link href="/login" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark">Login</Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full p-2 transition hover:bg-gray-100 md:hidden dark:hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-navy dark:text-gray-200" /> : <Menu className="h-5 w-5 text-navy dark:text-gray-200" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed left-0 right-0 top-20 z-40 mx-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg md:hidden dark:border-slate-700 dark:bg-slate-900">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Ask anything..." className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-800" />
          </div>
          <button
            onClick={() => setShowFeatures((prev) => !prev)}
            className="mb-2 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
          >
            Features
            <ChevronDown className={`h-4 w-4 transition ${showFeatures ? 'rotate-180' : ''}`} />
          </button>
          {showFeatures && (
            <div className="mb-3 space-y-1 pl-2">
              <Link href="/features" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">All Features</Link>
              <Link href="/tax-help" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">Tax Help</Link>
              <Link href="/schemes" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">Scheme Matching</Link>
              <Link href="/csc-finder" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">CSC Finder</Link>
              <Link href="/grievance" className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">Grievance Tracker</Link>
            </div>
          )}
          <div className="space-y-1">
            <Link href="/about" className="block rounded-md px-3 py-2 text-sm font-medium text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">About</Link>
            <Link href="/contact" className="block rounded-md px-3 py-2 text-sm font-medium text-navy hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800">Contact</Link>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 dark:border-slate-700 dark:text-gray-300">
              <Globe className="h-3.5 w-3.5" /> EN
            </button>
            <Link href="/login" className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white">Login</Link>
          </div>
        </div>
      )}
    </>
  )
}
