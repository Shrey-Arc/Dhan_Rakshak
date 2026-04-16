'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { AlertCircle, CheckCircle, Clock, MessageSquare, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function GrievancePage() {
  const [view, setView] = useState('log')

  const myGrievances = [
    {
      id: 'GRV001',
      title: 'Incorrect Tax Assessment',
      category: 'Taxation',
      status: 'In Progress',
      date: '2024-04-10',
      priority: 'High',
      description: 'Assessment shows incorrect income source'
    },
    {
      id: 'GRV002',
      title: 'Bank Loan Denial',
      category: 'Banking',
      status: 'Resolved',
      date: '2024-04-05',
      priority: 'Medium',
      description: 'Loan application rejected without proper explanation'
    },
    {
      id: 'GRV003',
      title: 'Scheme Eligibility Issue',
      category: 'Schemes',
      status: 'Pending Review',
      date: '2024-04-08',
      priority: 'Low',
      description: 'Unable to apply for PM-KISAN scheme'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
      case 'Resolved':
        return 'bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
      case 'Pending Review':
        return 'bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
      default:
        return 'bg-gray-100/50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400'
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">Log Grievance</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Report issues, track complaints, and get timely resolutions with transparent status updates.
            </p>
          </section>

          {/* Tabs */}
          <section>
            <div className="flex gap-4 border-b border-gray-200 dark:border-slate-700">
              <button
                onClick={() => setView('log')}
                className={`pb-4 font-semibold transition-all ${
                  view === 'log'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-white'
                }`}
              >
                Log New Grievance
              </button>
              <button
                onClick={() => setView('track')}
                className={`pb-4 font-semibold transition-all ${
                  view === 'track'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-white'
                }`}
              >
                Track My Grievances
              </button>
            </div>
          </section>

          {/* Log Grievance Form */}
          {view === 'log' && (
            <section className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-white focus:outline-none focus:border-primary">
                    <option>Taxation</option>
                    <option>Banking</option>
                    <option>Schemes</option>
                    <option>CSC Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Priority</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-white focus:outline-none focus:border-primary">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Brief title of your grievance"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Description</label>
                <textarea
                  placeholder="Provide detailed information about your grievance"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy dark:text-white mb-2">Attachments</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition">
                  <p className="text-gray-600 dark:text-gray-400">Drag and drop files or click to select</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Supported: PDF, JPG, PNG (Max 5MB)</p>
                </div>
              </div>

              <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Submit Grievance
                <ArrowRight className="h-4 w-4" />
              </button>
            </section>
          )}

          {/* Track Grievances */}
          {view === 'track' && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-navy dark:text-white">My Grievances</h2>
              <div className="space-y-4">
                {myGrievances.map((grievance) => (
                  <div
                    key={grievance.id}
                    className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-xs font-mono bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                            {grievance.id}
                          </code>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(grievance.status)}`}>
                            {grievance.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-navy dark:text-white">{grievance.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{grievance.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                        <p className="text-sm font-semibold text-navy dark:text-white">{grievance.category}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Priority</p>
                        <p className="text-sm font-semibold text-navy dark:text-white">{grievance.priority}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Logged On</p>
                        <p className="text-sm font-semibold text-navy dark:text-white">{grievance.date}</p>
                      </div>
                      <div className="flex justify-end">
                        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 text-primary font-medium text-sm hover:shadow-md transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Support */}
          <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-lg mb-6 opacity-90">Connect with our support team for urgent issues</p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto">
              <MessageSquare className="h-5 w-5" />
              Chat with Support
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
