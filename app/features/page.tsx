import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { Bot, AlertCircle, ArrowRight, SearchCheck, Landmark, CircleCheckBig } from 'lucide-react'

const featureRows = [
  {
    title: 'AI Tax Assistant',
    points: ['Smart deductions detection', 'ITR filing flow guidance', 'Multilingual, rural-friendly chat assistance'],
    cta: 'Try Tax Assistant',
    icon: Bot,
  },
  {
    title: 'Scheme Matcher',
    points: ['Profile-based eligibility checks', 'Filter by state, income, and category', 'One-click shortlist for applications'],
    cta: 'Check Eligibility',
    icon: SearchCheck,
  },
  {
    title: 'Grievance Tracker',
    points: ['Track service complaints transparently', 'Receive status updates in real time', 'Maintain record for escalation if needed'],
    cta: 'Open Tracker',
    icon: AlertCircle,
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-white md:text-5xl">Platform Features</h1>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
              Built for trust-first financial support with search-led, action-oriented user experience.
            </p>
          </section>

          <section className="space-y-6">
            {featureRows.map((row, idx) => {
              const Icon = row.icon
              const reverse = idx % 2 === 1

              return (
                <article key={row.title} className={`grid items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="rounded-xl bg-gradient-to-br from-green-50 to-blue-50 p-6 dark:from-green-900/20 dark:to-blue-900/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-navy dark:text-white">{row.title}</h2>
                    <ul className="mt-4 space-y-2">
                      {row.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
                      {row.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {row.title === 'Grievance Tracker' ? (
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                      <h3 className="mb-4 text-lg font-semibold text-navy dark:text-white">Live Complaint Journey</h3>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium">
                        <div className="rounded-lg bg-green-100 px-2 py-3 text-green-700 dark:bg-green-900/30 dark:text-green-300">Submitted</div>
                        <div className="rounded-lg bg-blue-100 px-2 py-3 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 animate-pulse">In Process</div>
                        <div className="rounded-lg bg-gray-200 px-2 py-3 text-gray-600 dark:bg-slate-700 dark:text-gray-300">Resolved</div>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-gray-200 dark:bg-slate-700">
                        <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-primary to-blue" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                      <div className="text-center">
                        <Landmark className="mx-auto h-10 w-10 text-primary" />
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Interactive module preview</p>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
