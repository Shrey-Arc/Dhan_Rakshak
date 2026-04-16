'use client'

import { TrendingUp, ArrowRight, Shield, Zap } from 'lucide-react'

export default function FeaturedTaxCard() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="card flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 overflow-hidden relative">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 pointer-events-none" />
          
          {/* Left Content */}
          <div className="flex-1 relative z-10">
            <div className="inline-block mb-4">
              <span className="badge badge-primary">Featured</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              AI-Powered Tax Help
            </h3>
            
            <p className="text-gray-text mb-6 leading-relaxed">
              Get personalized tax guidance, file your ITR with confidence, and discover deductions you might miss. Our AI analyzes your financial situation to provide customized recommendations.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-navy font-medium">Personalized tax planning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-navy font-medium">Step-by-step ITR filing guidance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-navy font-medium">Deduction & savings optimization</span>
              </li>
            </ul>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-lg">
                <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
                <span className="text-xs font-medium text-primary">Bank-Grade Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-blue/5 rounded-lg">
                <Zap className="h-4 w-4 text-blue" strokeWidth={2} />
                <span className="text-xs font-medium text-blue">AI-Powered</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 btn btn-primary">
              Explore Tax Help
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative z-10">
            <div className="bg-gradient-to-br from-primary/10 to-blue/10 rounded-2xl p-8 flex items-center justify-center min-h-64">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-navy font-medium">Maximize your tax returns</p>
                <p className="text-xs text-gray-text mt-1">Average savings: ₹45,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
