'use client'

import { useState } from 'react'
import { api } from '@/lib/api'

type Message = { role: 'assistant' | 'user'; text: string }

const defaultMessages: Message[] = [
  { role: 'assistant', text: 'Hi! I can help with deductions, ITR form selection, and filing reminders.' },
]

export default function TaxAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const sendQuery = async () => {
    const trimmed = query.trim()
    if (!trimmed || loading) return
    setError('')
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setQuery('')
    setLoading(true)
    try {
      const result = await api.queryAI(trimmed)
      setMessages((prev) => [...prev, { role: 'assistant', text: result.answer }])
    } catch {
      setError('Could not reach AI service. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container page">
      <h2>AI Tax Assistant</h2>
      <div className="chat-box glass">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.role}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="typing">AI is typing...</div>}
        {error && <p>{error}</p>}
        <div className="chat-input-row">
          <input
            placeholder="Ask about taxes, deductions, or filing..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                void sendQuery()
              }
            }}
          />
          <button className="primary-btn" type="button" onClick={() => void sendQuery()} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </section>
  )
}
