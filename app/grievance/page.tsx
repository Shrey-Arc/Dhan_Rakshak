'use client'

import { useEffect, useMemo, useState } from 'react'
import { api, GrievanceItem } from '@/lib/api'

const stages = ['Pending Review', 'In Progress', 'Resolved']

export default function GrievancePage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Taxation')
  const [priority, setPriority] = useState('Medium')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [grievances, setGrievances] = useState<GrievanceItem[]>([])

  const loadGrievances = async () => {
    try {
      const result = await api.getGrievances()
      setGrievances(result.items)
    } catch {
      setStatus('Could not load grievance history.')
    }
  }

  useEffect(() => {
    void loadGrievances()
  }, [])

  const activeStage = useMemo(() => {
    const current = grievances[0]?.status ?? 'Pending Review'
    const idx = stages.indexOf(current)
    return idx === -1 ? 0 : idx
  }, [grievances])

  const submitGrievance = async () => {
    if (title.trim().length < 5 || description.trim().length < 10) {
      setStatus('Title must be at least 5 chars and description at least 10 chars.')
      return
    }
    try {
      const created = await api.createGrievance({ title, category, priority, description })
      setGrievances((prev) => [created, ...prev])
      setStatus(`Grievance ${created.id} submitted successfully.`)
      setTitle('')
      setDescription('')
    } catch {
      setStatus('Could not submit grievance.')
    }
  }

  return (
    <section className="container page">
      <h2>Grievance Tracking</h2>
      <div className="glass form-grid">
        <input placeholder="Issue title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input placeholder="Department / Service" value={category} onChange={(event) => setCategory(event.target.value)} />
        <input placeholder="Priority" value={priority} onChange={(event) => setPriority(event.target.value)} />
        <textarea placeholder="Describe your grievance" rows={4} value={description} onChange={(event) => setDescription(event.target.value)} />
        <button className="primary-btn" type="button" onClick={() => void submitGrievance()}>Submit Grievance</button>
        {status && <p>{status}</p>}
      </div>

      <div className="glass timeline">
        {stages.map((stage, index) => (
          <div key={stage} className="timeline-step">
            <span className="dot" data-active={index <= activeStage} />
            <p>{stage}</p>
          </div>
        ))}
      </div>

      <div className="scheme-list">
        {grievances.map((item) => (
          <article key={item.id} className="glass scheme-card">
            <div className="row">
              <h3>{item.title}</h3>
              <small>{item.id}</small>
            </div>
            <p>{item.description}</p>
            <small>{item.category} · {item.priority} · {item.status} · {item.date}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
