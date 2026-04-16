'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How do I get started with DhanRakshak?',
      answer:
        'Simply create an account using your phone number. Our AI will guide you through a quick profile setup to understand your financial situation, and then provide personalized recommendations for taxes, schemes, and financial services.',
    },
    {
      id: 'faq-2',
      question: 'Is my financial information secure and private?',
      answer:
        'Yes, we use bank-grade encryption and comply with all Indian data protection regulations. Your financial data is encrypted end-to-end and never shared with third parties without your explicit consent.',
    },
    {
      id: 'faq-3',
      question: 'Can I file my income tax return through DhanRakshak?',
      answer:
        'We provide comprehensive ITR guidance with AI-powered recommendations. You can download forms or file directly through the official income tax portal with our step-by-step assistance.',
    },
    {
      id: 'faq-4',
      question: 'How do I find nearby CSCs and banks?',
      answer:
        'Use our CSC Finder feature to search by location. We show nearby centers with working hours, available services, ratings, and integrated directions using Google Maps.',
    },
    {
      id: 'faq-5',
      question: 'What government schemes am I eligible for?',
      answer:
        'Our Scheme Matcher analyzes your profile automatically and identifies all schemes you qualify for based on income, state, profession, and other relevant eligibility criteria.',
    },
    {
      id: 'faq-6',
      question: 'Is there 24/7 customer support available?',
      answer:
        'Yes, we offer 24/7 AI-powered support in multiple languages. For complex issues, reach our human team via WhatsApp, email, or phone support.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-text text-base md:text-lg">
              Get answers to common questions about DhanRakshak services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 border border-gray-border rounded-2xl overflow-hidden divide-y divide-gray-border bg-white shadow-base">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-light transition-colors text-left group"
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-semibold text-navy text-base md:text-lg group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-text flex-shrink-0 transition-all duration-300 group-hover:text-navy ${
                      openId === faq.id ? 'rotate-180 text-primary' : ''
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {openId === faq.id && (
                  <div className="px-6 py-5 bg-gray-light border-t border-gray-border animate-fade-in-up">
                    <p className="text-navy text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 p-6 md:p-8 bg-gray-light rounded-2xl border border-gray-border text-center">
            <h3 className="text-lg font-semibold text-navy mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-text mb-4">
              Our AI assistant is available 24/7 to help you with any queries.
            </p>
            <button className="btn btn-primary">
              Chat with Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
