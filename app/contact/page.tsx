'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, MessageSquare, Linkedin, MessageCircle } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'

type ContactIntent = 'worry' | 'appreciation'

export default function ContactPage() {
  const [contactIntent, setContactIntent] = useState<ContactIntent>('worry')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, type: contactIntent })
  }

  const directLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Support',
      value: 'support@dhanrakshak.in',
      href: 'mailto:support@dhanrakshak.in',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'DhanRakshak Official',
      href: '#',
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: 'WhatsApp',
      value: '+91 90000 00000',
      href: 'https://wa.me/919000000000',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Helpline',
      value: '1800-555-0135',
      href: 'tel:+9118005550135',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-white md:text-5xl">Contact DhanRakshak</h1>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
              Share your concerns or feedback. We are here to help with secure and trustworthy financial guidance.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:col-span-1">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Send a Message</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Response within 24 hours.</p>

              <div className="mt-5 grid grid-cols-2 rounded-xl bg-gray-100 p-1 dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setContactIntent('worry')}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    contactIntent === 'worry' ? 'bg-white text-navy shadow dark:bg-slate-700 dark:text-white' : 'text-gray-500'
                  }`}
                >
                  Worry
                </button>
                <button
                  type="button"
                  onClick={() => setContactIntent('appreciation')}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    contactIntent === 'appreciation' ? 'bg-white text-navy shadow dark:bg-slate-700 dark:text-white' : 'text-gray-500'
                  }`}
                >
                  Appreciation
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-navy dark:text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-navy dark:text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-navy dark:text-white">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    placeholder="Tell us how we can help"
                  />
                </div>
                <button className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                  Submit Message
                </button>
              </form>
            </div>

            <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:col-span-1">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Direct Links</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred way to connect.</p>

              {directLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{link.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-navy dark:text-white">{link.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{link.value}</p>
                  </div>
                </a>
              ))}

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800 dark:border-amber-400/30 dark:bg-amber-900/20 dark:text-amber-300">
                For urgent grievance issues, use the Grievance Tracker for official status updates.
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:col-span-1">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Find Us</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Head office with nearby CSC and banking access.</p>

              <div className="mt-5 h-72 overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 dark:border-slate-700 dark:from-slate-900 dark:to-slate-700">
                <iframe
                  title="DhanRakshak Office Map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Jaipur%2C+Rajasthan&output=embed"
                />
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-primary" /> Jaipur, Rajasthan
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MessageSquare className="h-4 w-4 text-primary" /> Nearby markers: CSCs & Banks
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
