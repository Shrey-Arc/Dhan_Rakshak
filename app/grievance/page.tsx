const stages = ['Submitted', 'In Progress', 'Resolved']

export default function GrievancePage() {
  return (
    <section className="container page">
      <h2>Grievance Tracking</h2>
      <div className="glass form-grid">
        <input placeholder="Issue title" />
        <input placeholder="Department / Service" />
        <textarea placeholder="Describe your grievance" rows={4} />
        <button className="primary-btn" type="button">Submit Grievance</button>
      </div>
      <div className="glass timeline">
        {stages.map((stage, index) => (
          <div key={stage} className="timeline-step">
            <span className="dot" data-active={index <= 1} />
            <p>{stage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
