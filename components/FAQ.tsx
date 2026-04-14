'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How do I get started with DhanRakshak?',
      answer:
        'Simply create an account using your phone number or email. Our AI will guide you through a quick profile setup to understand your financial situation, and then we&apos;ll provide personalized recommendations.',
    },
    {
      id: 'faq-2',
      question: 'Is my financial information secure?',
      answer:
        'Yes, we use enterprise-grade encryption and comply with all Indian financial data protection regulations. Your data is never shared with third parties without your explicit consent.',
    },
    {
      id: 'faq-3',
      question: 'Can I file my income tax return through DhanRakshak?',
      answer:
        'We provide comprehensive guidance for ITR filing with personalized recommendations. You can file directly or download the forms to file through the official income tax portal.',
    },
    {
      id: 'faq-4',
      question: 'How do I find nearby CSCs and banks?',
      answer:
        'Use our CSC Finder feature to search by location. We&apos;ll show you nearby centers with their working hours, services offered, and directions using integrated maps.',
    },
    {
      id: 'faq-5',
      question: 'What government schemes am I eligible for?',
      answer:
        'Our Scheme Matching tool analyzes your profile and automatically identifies all schemes you may qualify for. We filter by your state, income level, profession, and other relevant factors.',
    },
    {
      id: 'faq-6',
      question: 'Is there customer support available?',
      answer:
        'Yes, we offer 24/7 AI-powered support in multiple languages. You can also reach our team via WhatsApp, email, or phone for complex issues.',
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and how to use them.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between bg-background hover:bg-secondary/50 transition-colors text-left"
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-semibold text-foreground text-base md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {openId === faq.id && (
                  <div className="px-4 md:px-6 py-4 md:py-5 bg-secondary/30 border-t border-border">
                    <p className="text-foreground text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
