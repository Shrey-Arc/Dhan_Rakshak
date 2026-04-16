const messages = [
  { role: 'assistant', text: 'Hi! I can help with deductions, ITR form selection, and filing reminders.' },
  { role: 'user', text: 'Can I claim HRA and home loan benefits together?' },
  { role: 'assistant', text: 'Yes, if conditions are met. Share your city and rent details for an estimate.' },
]

export default function TaxAssistantPage() {
  return (
    <section className="container page">
      <h2>AI Tax Assistant</h2>
      <div className="chat-box glass">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.role}`}>
            {msg.text}
          </div>
        ))}
        <div className="typing">AI is typing...</div>
        <div className="chat-input-row">
          <input placeholder="Ask about taxes, deductions, or filing..." />
          <button className="primary-btn" type="button">Send</button>
        </div>
      </div>
    </section>
  )
}
