'use client'

import { Shield, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <span className="text-xl font-bold text-foreground">DhanRakshak</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button className="px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors">
              Home
            </button>

            <div className="relative">
              <button
                onClick={() => setIsFeatureDropdownOpen(!isFeatureDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Features
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </button>

              {isFeatureDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg p-2">
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    Tax Help
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    Scheme Matching
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    CSC Finder
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    Grievance Tracking
                  </a>
                </div>
              )}
            </div>

            <button className="px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors">
              About
            </button>

            <button className="px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors">
              Contact
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors">
              Language
            </button>
            <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-2">
            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
            >
              Contact
            </a>
            <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
