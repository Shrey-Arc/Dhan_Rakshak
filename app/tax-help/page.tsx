'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { FileText, CheckCircle, ArrowRight, Upload, Calculator, MessageSquare } from 'lucide-react'

export default function TaxHelpPage() {
  const steps = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload Documents',
      description: 'Upload your income proofs, receipts, and financial documents securely.'
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: 'AI Analysis',
      description: 'Our AI analyzes your documents and identifies all applicable deductions.'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Expert Review',
      description: 'Connect with tax experts for clarification and personalized advice.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'ITR Filing',
      description: 'File your ITR directly through our platform with one click.'
    }
  ]

  const benefits = [
    'Maximize your tax refund with AI-identified deductions',
    'Expert guidance at every step of the process',
    'Bank-level security for all your financial data',
    'File ITR in minutes, not hours',
    'Get real-time updates on your filing status',
    '24/7 support from tax professionals'
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                <FileText className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">Tax Help</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Get expert guidance on income tax filing, maximize deductions, and ensure compliance with the latest tax regulations.
            </p>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium hover:shadow-lg transition-all flex items-center gap-2">
              Start Your Tax Filing
              <ArrowRight className="h-4 w-4" />
            </button>
          </section>

          {/* Steps */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy dark:text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white">Why Choose DhanRakshak?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg border border-green-200/50 dark:border-green-900/30">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to file your taxes?</h2>
            <p className="text-lg mb-6 opacity-90">Join thousands of Indians who have simplified their tax filing with DhanRakshak</p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all">
              Start Now
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
