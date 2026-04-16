'use client'

import { Shield, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-20 bg-white border-b border-gray-border backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-xl text-navy hidden sm:block">
            DhanRakshak
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-text hover:text-navy transition-colors">
            Home
          </a>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-text hover:text-navy transition-colors">
              Features
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" strokeWidth={2} />
            </button>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1">
              <a href="#" className="block px-3 py-2 text-sm text-gray-text hover:bg-gray-light hover:text-navy rounded-sm transition-colors">
                Tax Help
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-text hover:bg-gray-light hover:text-navy rounded-sm transition-colors">
                Scheme Matching
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-text hover:bg-gray-light hover:text-navy rounded-sm transition-colors">
                CSC Finder
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-text hover:bg-gray-light hover:text-navy rounded-sm transition-colors">
                Grievance
              </a>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-gray-text hover:text-navy transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-gray-text hover:text-navy transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <select className="text-sm font-medium text-gray-text bg-white border border-gray-border rounded-lg px-3 py-2 hover:border-primary transition-colors cursor-pointer">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <button className="btn btn-primary text-sm">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-light rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-navy" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6 text-navy" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-border shadow-lg">
          <div className="container-custom py-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-navy hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="block text-sm font-medium text-navy hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="block text-sm font-medium text-navy hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="block text-sm font-medium text-navy hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-3 border-t border-gray-border space-y-3">
              <select className="w-full text-sm font-medium text-navy border border-gray-border rounded-lg px-3 py-2">
                <option>English</option>
                <option>हिन्दी</option>
              </select>
              <button className="w-full btn btn-primary">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
