'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DiscoverMoreSection } from '@/components/discover-more-section'
import { ServiceBookingForm } from '@/components/service-booking-form'
import { AIRPORTS_DATA } from '@/lib/airports-directory'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'

const POPULAR_AIRPORTS = [
  { city: 'London', code: 'LHR', price: 150, image: '/images/airport-london.jpg' },
  { city: 'Dubai', code: 'DXB', price: 180, image: '/images/airport-dubai.jpg' },
  { city: 'Paris', code: 'CDG', price: 120, image: '/images/airport-paris.jpg' },
  { city: 'New York', code: 'JFK', price: 150, image: '/images/airport-jfk.jpg' },
  { city: 'Barcelona', code: 'BCN', price: 45, image: '/images/airport-barcelona.jpg' },
  { city: 'Singapore', code: 'SIN', price: 200, image: '/images/airport-singapore.jpg' },
]

const REGIONS = ['All', 'Europe', 'Middle East', 'Asia', 'Americas', 'Africa', 'Oceania']

export default function AirportsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')

  const heroService = {
    name: 'Airports',
    slug: 'airports',
    shortDescription: 'Premium concierge services at over 120 airports across 50+ countries.',
    description: '',
    icon: 'Plane',
    color: '#3F5CA6',
    duration: 'Varies',
    pricing: [{ currency: '$', price: 45 }],
    airports: [],
  }

  // Filter airports based on search query and region
  const filteredDirectoryAirports = useMemo(() => {
    let filtered = AIRPORTS_DATA

    // Filter by region
    if (selectedRegion !== 'All') {
      filtered = filtered.filter(airport => airport.region === selectedRegion)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(airport =>
        airport.city.toLowerCase().includes(query) ||
        airport.airport.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [searchQuery, selectedRegion])

  // Filter popular airports for section 2
  const filteredPopularAirports = useMemo(() => {
    if (!searchQuery.trim()) return POPULAR_AIRPORTS

    const query = searchQuery.toLowerCase()
    return POPULAR_AIRPORTS.filter(airport =>
      airport.city.toLowerCase().includes(query) ||
      airport.code.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Group filtered airports by country
  const groupedAirports = useMemo(() => {
    const grouped: { [key: string]: typeof AIRPORTS_DIRECTORY } = {}

    filteredDirectoryAirports.forEach(airport => {
      if (!grouped[airport.country]) {
        grouped[airport.country] = []
      }
      grouped[airport.country].push(airport)
    })

    // Sort countries alphabetically and airports within each country by city
    const sorted: { [key: string]: typeof AIRPORTS_DIRECTORY } = {}
    Object.keys(grouped).sort().forEach(country => {
      sorted[country] = grouped[country].sort((a, b) => a.city.localeCompare(b.city))
    })

    return sorted
  }, [filteredDirectoryAirports])

  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <section
          className="relative w-full flex flex-col overflow-visible pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 bg-[var(--navy)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/75 to-[var(--navy)]/85" />

          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <div className="grid md:grid-cols-[55%_45%] gap-8 md:gap-12 items-start">
              {/* Left Column */}
              <div className="flex flex-col text-white">
                <div className="flex items-center gap-2 mb-6 md:mb-8 text-xs md:text-sm opacity-75">
                  <Link href="/" className="hover:opacity-100">Home</Link>
                  <span>/</span>
                  <span>Airports</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Airports
                </h1>

                <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed">
                  Premium concierge services at over 120 airports across 50+ countries. Find your airport, check available services, and book instantly.
                </p>

                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by city, airport name, or code (e.g. Barcelona, Heathrow, JFK)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                  />
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div>
                <ServiceBookingForm service={heroService} preSelectedService="Airports" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Popular Airports */}
        <section className="bg-[var(--gray-bg)] py-10 md:py-12 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-2">
                Popular Airports
              </h2>
              <p className="text-[var(--gray-text)]">
                {searchQuery ? `Search results for "${searchQuery}"` : 'Top destinations served by Airporteo'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {filteredPopularAirports.length > 0 ? (
                filteredPopularAirports.map((airport) => (
                  <Link
                    key={airport.code}
                    href={`/airports/${airport.code.toLowerCase()}`}
                    className="group flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200"
                  >
                    <div className="relative w-full aspect-square overflow-hidden rounded-xl border-2 border-[var(--border)] group-hover:border-[var(--gold)] shadow-sm group-hover:shadow-lg transition-all duration-200">
                      <Image
                        src={airport.image}
                        alt={`${airport.city} ${airport.code}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 text-white">
                        <h3 className="font-bold text-sm md:text-base">{airport.city}</h3>
                        <p className="text-xs md:text-sm text-white/80">{airport.code}</p>
                      </div>
                    </div>

                    <div className="text-center" />
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-[var(--gray-text)]">
                  No airports found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Airport Directory */}
        <section className="bg-white py-10 md:py-12 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Region Filter Tabs */}
            <div className="mb-12 flex flex-wrap gap-2">
              {REGIONS.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                    selectedRegion === region
                      ? 'bg-[var(--navy)] text-white'
                      : 'bg-white border border-[var(--navy)] text-[var(--navy)] hover:border-[var(--gold)]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Directory Grid */}
            {Object.keys(groupedAirports).length > 0 ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
                {Object.entries(groupedAirports).map(([country, airports]) => (
                  <div key={country} className="space-y-4">
                    <h3 className="text-lg font-bold text-[var(--navy)] border-b border-[var(--border)] pb-2">
                      {country}
                    </h3>
                    <div className="space-y-3">
                      {airports.map(airport => (
                        <Link
                          key={airport.code}
                          href={`/airports/${airport.slug}`}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-[var(--gray-bg)] transition-colors"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-[var(--navy)] group-hover:text-[var(--gold)]">
                              {airport.city}
                            </p>
                            <p className="text-sm text-[var(--gray-text)]">
                              {airport.airport}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 ml-4">
                            <span className="text-xs bg-[var(--border)] text-[var(--navy)] px-2 py-1 rounded font-mono">
                              {airport.code}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[var(--gray-text)]">
                <p className="text-lg">No airports found matching your search.</p>
                <p className="text-sm mt-2">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: CTA */}
        <section className="bg-[var(--gray-bg)] py-10 md:py-12 px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              Don't see your airport?
            </h2>
            <p className="text-base md:text-lg text-[var(--gray-text)] mb-8">
              We are constantly expanding. Contact us and we will check availability for your destination.
            </p>
            <button className="px-8 py-4 bg-[var(--gold)] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        </section>

        {/* Section 5: Discover More + Footer */}
        <DiscoverMoreSection />
      </main>
      <Footer />
    </>
  )
}
