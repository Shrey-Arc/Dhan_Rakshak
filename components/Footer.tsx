'use client'

import { Shield, Mail, MapPin, Phone, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white border-t border-navy">
      <div className="container-custom py-12 md:py-16">
        {/* Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-lg text-white">
                DhanRakshak
              </span>
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Your AI-powered financial guardian. Empowering rural India with secure, accessible financial guidance.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Blog & Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  PM-KISAN Scheme
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Income Tax Department
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  CSC eGovernance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  RBI Official Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a href="mailto:support@dhanrakshak.in" className="text-sm text-white/70 hover:text-primary transition-colors">
                  support@dhanrakshak.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a href="tel:+91-1800-555-0135" className="text-sm text-white/70 hover:text-primary transition-colors">
                  1800-555-0135
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-white/70">
                  Available across rural India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-white/60">
            <p>
              &copy; {currentYear} DhanRakshak. All rights reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/20" />
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
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white/70 hover:text-primary transition-colors" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-white/70 hover:text-primary transition-colors" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                className="h-5 w-5 text-white/70 hover:text-primary transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-2 9-2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-xs text-white/60 text-center">
            <strong>Disclaimer:</strong> DhanRakshak provides information and guidance only. Always consult qualified financial professionals for investment and tax decisions. We are not registered financial advisors.
          </p>
        </div>
      </div>
    </footer>
  )
}
