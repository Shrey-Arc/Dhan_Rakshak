'use client'

import FloatingNavbar from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import { MapPin, Clock, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api, LocationItem } from '@/lib/api'

export default function CSCFinderPage() {
  const [searchLocation, setSearchLocation] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const localCenters = [
    {
      id: 1,
      name: 'Ram Nagar CSC',
      location: 'Ram Nagar, Jaipur',
      distance: '2.5 km',
      hours: '9:00 AM - 6:00 PM',
      services: ['Tax Filing', 'Bill Payment', 'Aadhar'],
      type: 'csc',
      rating: 4.8,
      phone: '+91-1234567890'
    },
    {
      id: 2,
      name: 'State Bank of India',
      location: 'City Center, Jaipur',
      distance: '1.2 km',
      hours: '10:00 AM - 4:00 PM',
      services: ['Loans', 'Savings Account', 'Investment'],
      type: 'bank',
      rating: 4.6,
      phone: '+91-9876543210'
    },
    {
      id: 3,
      name: 'Digital Seva CSC',
      location: 'Station Road, Jaipur',
      distance: '3.1 km',
      hours: '8:30 AM - 7:00 PM',
      services: ['ITR Filing', 'GST Services', 'License'],
      type: 'csc',
      rating: 4.9,
      phone: '+91-5555555555'
    },
    {
      id: 4,
      name: 'ICICI Bank',
      location: 'Mall Road, Jaipur',
      distance: '2.0 km',
      hours: '9:30 AM - 5:30 PM',
      services: ['Credit Card', 'Insurance', 'Wealth'],
      type: 'bank',
      rating: 4.7,
      phone: '+91-6666666666'
    }
  ]

  const [filtered, setFiltered] = useState<LocationItem[]>([])

  useEffect(() => {
    api.getLocations(searchLocation, selectedType).then((res) => setFiltered(res.items)).catch(() => {
      const fallback = localCenters.filter((c) => {
        const typeMatch = selectedType === 'all' || c.type === selectedType
        const locationMatch = searchLocation === '' || c.location.toLowerCase().includes(searchLocation.toLowerCase())
        return typeMatch && locationMatch
      })
      setFiltered(fallback.map((c) => ({ ...c, id: String(c.id) })))
    })
  }, [searchLocation, selectedType])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1 pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">Find Nearby CSC & Banks</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Locate the nearest Common Service Centres and banks for offline assistance and transactions.
            </p>
          </section>

          {/* Search & Filter */}
          <section className="space-y-4">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'all', name: 'All' },
                { id: 'csc', name: 'CSCs' },
                { id: 'bank', name: 'Banks' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedType === type.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-navy dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:border-primary'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-navy dark:text-white">{filtered.length} Results Found</h2>
            <div className="grid gap-4">
              {filtered.map((center) => (
                <div
                  key={center.id}
                  className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Info */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-navy dark:text-white">{center.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{center.location}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 text-primary" />
                          {center.distance}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 text-primary" />
                          {center.hours}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Services:</p>
                        <div className="flex flex-wrap gap-2">
                          {center.services.map((service, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-green-100/50 dark:bg-green-900/30 text-primary">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col justify-between items-end gap-3">
                      <div className="text-right">
                        <div className="text-yellow-400 text-lg">★★★★★</div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{center.rating} rating</p>
                      </div>
                      <button className="w-full md:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Map Placeholder */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-navy dark:text-white">Map View</h2>
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map integration coming soon</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
