'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DR</span>
              </div>
              <span className="font-bold text-lg text-white">
                DhanRakshak
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your AI-powered financial guardian. Empowering rural India with secure, accessible financial guidance.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tax-help" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Tax Help
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Scheme Matching
                </Link>
              </li>
              <li>
                <Link href="/csc-finder" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  CSC Finder
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Log Grievance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:support@dhanrakshak.in" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  support@dhanrakshak.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+91-1800-555-0135" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  1800-555-0135
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Jaipur, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500">
            <p>
              &copy; {currentYear} DhanRakshak. All rights reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-slate-700" />
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Data Protection
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Github className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <p className="text-xs text-gray-400 text-center">
            <strong>Disclaimer:</strong> DhanRakshak provides information and guidance only. Always consult qualified financial professionals for investment and tax decisions. We are not registered financial advisors.
          </p>
        </div>
      </div>
    </footer>
  )
}
