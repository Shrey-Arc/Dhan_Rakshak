'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add submission logic here
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      info: 'support@dhanrakshak.in',
      responseTime: 'Response within 24 hours'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      info: '+91-1234-567-890',
      responseTime: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Live Chat',
      info: 'Start a conversation',
      responseTime: 'Instant support available'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      info: 'Jaipur, Rajasthan',
      responseTime: 'India'
    }
  ]

  const faqs = [
    {
      q: 'What are your support hours?',
      a: 'We provide support 24/7 through email and chat. Phone support is available 9 AM - 6 PM IST, Monday to Friday.'
    },
    {
      q: 'How long does it take to resolve issues?',
      a: 'Most issues are resolved within 24-48 hours. Critical issues receive immediate attention.'
    },
    {
      q: 'Can I schedule a call with an advisor?',
      a: 'Yes, you can schedule a call through our platform. Premium users get priority booking.'
    },
    {
      q: 'Is my information secure when I contact support?',
      a: 'Yes, all communication is encrypted and secure. We follow RBI security guidelines.'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero */}
          <section className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="grid md:grid-cols-4 gap-4">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center text-primary mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="font-bold text-navy dark:text-white mb-1">{method.title}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{method.info}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{method.responseTime}</p>
              </div>
            ))}
          </section>

          {/* Contact Form */}
          <section className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* FAQs */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-navy dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <summary className="font-semibold text-navy dark:text-white flex items-center justify-between">
                    {faq.q}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
