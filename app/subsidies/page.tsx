const schemes = [
  { name: 'PM-KISAN', summary: 'Income support for eligible farmer families.' },
  { name: 'PMAY', summary: 'Affordable housing support with credit-linked subsidy.' },
  { name: 'Stand-Up India', summary: 'Loans for women and SC/ST entrepreneurs.' },
]

export default function SubsidiesPage() {
  return (
    <section className="container page">
      <h2>Subsidy Scheme Finder</h2>
      <div className="glass form-grid">
        <input placeholder="Annual household income" />
        <input placeholder="Category" />
        <input placeholder="State" />
        <button className="primary-btn" type="button">Find Schemes</button>
      </div>
      <div className="scheme-list">
        {schemes.map((scheme) => (
          <article key={scheme.name} className="glass scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
