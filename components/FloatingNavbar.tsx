'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-primary hidden md:block">
              DR
            </Link>

            {/* Search Bar */}
            <div className="flex-1 mx-4 md:mx-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ask anything about tax, schemes..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm focus:outline-none focus:border-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {/* Features Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-navy dark:text-gray-200 hover:text-primary transition">
                  Features
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition p-2">
                  <Link
                    href="/tax-help"
                    className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                  >
                    Tax Help
                  </Link>
                  <Link
                    href="/schemes"
                    className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                  >
                    Scheme Matching
                  </Link>
                  <Link
                    href="/csc-finder"
                    className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                  >
                    CSC Finder
                  </Link>
                  <Link
                    href="/grievance"
                    className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                  >
                    Log Grievance
                  </Link>
                </div>
              </div>

              <Link href="/about" className="text-sm font-medium text-navy dark:text-gray-200 hover:text-primary transition">
                About
              </Link>

              <Link href="/contact" className="text-sm font-medium text-navy dark:text-gray-200 hover:text-primary transition">
                Contact
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-navy dark:text-gray-200" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-200" />
                )}
              </button>

              <Link
                href="/login"
                className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-navy" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-200" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                {isOpen ? (
                  <X className="h-5 w-5 text-navy dark:text-gray-200" />
                ) : (
                  <Menu className="h-5 w-5 text-navy dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 md:hidden">
          <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-4 space-y-3">
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="w-full text-left px-4 py-2 font-medium text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded flex items-center justify-between"
            >
              Features
              <ChevronDown className={`h-4 w-4 transition ${showFeatures ? 'rotate-180' : ''}`} />
            </button>
            {showFeatures && (
              <div className="pl-4 space-y-2">
                <Link href="/tax-help" className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
                  Tax Help
                </Link>
                <Link href="/schemes" className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
                  Scheme Matching
                </Link>
                <Link href="/csc-finder" className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
                  CSC Finder
                </Link>
                <Link href="/grievance" className="block px-4 py-2 text-sm text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
                  Log Grievance
                </Link>
              </div>
            )}
            <Link href="/about" className="block px-4 py-2 font-medium text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 font-medium text-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Contact
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 rounded-full bg-primary text-white text-center font-medium hover:bg-opacity-90 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
