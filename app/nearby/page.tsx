const places = [
  { name: 'CSC Seva Kendra', distance: '1.2 km' },
  { name: 'SBI Branch', distance: '2.1 km' },
  { name: 'District Tax Help Center', distance: '3.4 km' },
]

export default function NearbyPage() {
  return (
    <section className="container page">
      <h2>Bank / CSC Locator</h2>
      <div className="map-wrap glass">Interactive map placeholder</div>
      <div className="scheme-list">
        {places.map((place) => (
          <article key={place.name} className="glass scheme-card row">
            <div>
              <h3>{place.name}</h3>
              <p>{place.distance}</p>
            </div>
            <button className="ghost-btn" type="button">Get Directions</button>
          </article>
        ))}
      </div>
    </section>
  )
}
