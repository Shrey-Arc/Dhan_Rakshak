'use client'

import { useEffect, useState } from 'react'
import { api, Scheme } from '@/lib/api'

export default function SubsidiesPage() {
  const [income, setIncome] = useState('')
  const [category, setCategory] = useState('all')
  const [stateName, setStateName] = useState('')
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadSchemes = async (nextCategory = category) => {
    setLoading(true)
    setError('')
    try {
      const result = await api.getSchemes(nextCategory)
      setSchemes(result.items)
    } catch {
      setError('Could not load schemes right now. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadSchemes()
  }, [])

  return (
    <section className="container page">
      <h2>Subsidy Scheme Finder</h2>
      <div className="glass form-grid">
        <input placeholder="Annual household income" value={income} onChange={(event) => setIncome(event.target.value)} />
        <input
          placeholder="Category (farmer, women, SC/ST...)"
          value={category}
          onChange={(event) => setCategory(event.target.value || 'all')}
        />
        <input placeholder="State" value={stateName} onChange={(event) => setStateName(event.target.value)} />
        <button className="primary-btn" type="button" onClick={() => void loadSchemes(category)}>Find Schemes</button>
      </div>
      {loading && <p>Loading schemes...</p>}
      {error && <p>{error}</p>}
      <div className="scheme-list">
        {schemes
          .filter((scheme) => {
            const incomeHint = income.trim() === '' || scheme.eligible.toLowerCase().includes('income')
            const stateHint = stateName.trim() === '' || scheme.description.toLowerCase().includes(stateName.toLowerCase())
            return incomeHint && stateHint
          })
          .map((scheme) => (
            <article key={scheme.id} className="glass scheme-card">
              <h3>{scheme.name}</h3>
              <p>{scheme.description}</p>
              <p><strong>Benefit:</strong> {scheme.benefit}</p>
              <p><strong>Eligibility:</strong> {scheme.eligible}</p>
            </article>
          ))}
      </div>
    </section>
  )
}
