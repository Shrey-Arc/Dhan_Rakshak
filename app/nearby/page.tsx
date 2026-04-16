'use client'

import { useEffect, useState } from 'react'
import { api, LocationItem } from '@/lib/api'

export default function NearbyPage() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [places, setPlaces] = useState<LocationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadLocations = async (q = query, nextType = type) => {
    setLoading(true)
    setError('')
    try {
      const result = await api.getLocations(q, nextType)
      setPlaces(result.items)
    } catch {
      setError('Could not fetch nearby services.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadLocations('', 'all')
  }, [])

  return (
    <section className="container page">
      <h2>Bank / CSC Locator</h2>
      <div className="glass form-grid">
        <input placeholder="Search by locality or center name" value={query} onChange={(event) => setQuery(event.target.value)} />
        <input placeholder="Type: all, csc, bank" value={type} onChange={(event) => setType(event.target.value || 'all')} />
        <button className="primary-btn" type="button" onClick={() => void loadLocations(query, type)}>Search</button>
      </div>
      <div className="map-wrap glass">Map integration ready for map SDK key binding.</div>
      {loading && <p>Loading locations...</p>}
      {error && <p>{error}</p>}
      <div className="scheme-list">
        {places.map((place) => (
          <article key={place.id} className="glass scheme-card row">
            <div>
              <h3>{place.name}</h3>
              <p>{place.location} · {place.distance}</p>
              <p>{place.hours}</p>
            </div>
            <a className="ghost-btn" href={`tel:${place.phone}`}>Call</a>
          </article>
        ))}
      </div>
    </section>
  )
}
