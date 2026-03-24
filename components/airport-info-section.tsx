'use client'

import { useState } from 'react'
import { Cloud, Wind, Eye, Droplets, MapPin, Info, Calendar } from 'lucide-react'
import { Airport } from '@/lib/airports'

interface AirportInfoSectionProps {
  airport: Airport
}

// Animated pulse dot component
function PulseDot() {
  return (
    <div className="relative inline-flex h-3 w-3">
      <div className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-green-500 opacity-75"></div>
      <div className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></div>
    </div>
  )
}

// Mock flight data
const mockFlights = [
  { number: 'VY2847', destination: 'Madrid (MAD)', time: '14:30', gate: 'A12', status: 'On Time' },
  { number: 'FR1234', destination: 'London (LHR)', time: '15:15', gate: 'B05', status: 'Boarding' },
  { number: 'IB6789', destination: 'Paris (CDG)', time: '15:45', gate: 'C08', status: 'Delayed' },
  { number: 'VY4521', destination: 'Valencia (VLC)', time: '16:20', gate: 'A15', status: 'On Time' },
  { number: 'FR2901', destination: 'Berlin (BER)', time: '16:50', gate: 'B12', status: 'Departed' },
]

// Mock 5-day forecast
const mockForecast = [
  { day: 'Today', temp: '22°C', high: '24°C', low: '18°C', icon: '⛅' },
  { day: 'Tomorrow', temp: '20°C', high: '22°C', low: '16°C', icon: '🌤️' },
  { day: 'Wed', temp: '19°C', high: '21°C', low: '15°C', icon: '☁️' },
  { day: 'Thu', temp: '23°C', high: '25°C', low: '19°C', icon: '⛅' },
  { day: 'Fri', temp: '21°C', high: '23°C', low: '17°C', icon: '🌤️' },
]

export function AirportInfoSection({ airport }: AirportInfoSectionProps) {
  const [activeTab, setActiveTab] = useState<'departures' | 'arrivals'>('departures')

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'On Time':
        return 'bg-green-100 text-green-700'
      case 'Boarding':
        return 'bg-blue-100 text-blue-700'
      case 'Delayed':
        return 'bg-amber-100 text-amber-700'
      case 'Departed':
        return 'bg-gray-100 text-gray-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Sub-section 1: Airport Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest" style={{ color: '#1D215E', letterSpacing: '2px' }}>
              {airport.code}
            </h1>
            <PulseDot />
          </div>
          <p className="text-lg" style={{ color: '#6b6e94' }}>
            {airport.name} · {airport.country}
          </p>
        </div>

        {/* Sub-section 2: Current Weather */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1D215E' }}>
            Current Weather
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Conditions */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Cloud size={24} style={{ color: '#3F5CA6' }} />
                <span className="text-sm text-gray-600">Conditions</span>
              </div>
              <p className="text-2xl font-semibold" style={{ color: '#1D215E' }}>
                Partly Cloudy
              </p>
            </div>

            {/* Temperature */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-600">Temperature</span>
              </div>
              <p className="text-2xl font-semibold" style={{ color: '#1D215E' }}>
                22°C
              </p>
              <p className="text-sm text-gray-600">Feels like 20°C</p>
            </div>

            {/* Wind */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Wind size={24} style={{ color: '#3F5CA6' }} />
                <span className="text-sm text-gray-600">Wind</span>
              </div>
              <p className="text-2xl font-semibold" style={{ color: '#1D215E' }}>
                15 km/h
              </p>
              <p className="text-sm text-gray-600">Southwest</p>
            </div>

            {/* Visibility */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Eye size={24} style={{ color: '#3F5CA6' }} />
                <span className="text-sm text-gray-600">Visibility</span>
              </div>
              <p className="text-2xl font-semibold" style={{ color: '#1D215E' }}>
                10 km
              </p>
              <p className="text-sm text-gray-600">Humidity 65%</p>
            </div>
          </div>

          {/* 5-day Forecast */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-min">
              {mockForecast.map((day) => (
                <div key={day.day} className="flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-4 text-center" style={{ minWidth: '120px' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#1D215E' }}>
                    {day.day}
                  </p>
                  <p className="text-2xl mb-2">{day.icon}</p>
                  <p className="text-xs text-gray-600 mb-1">{day.high}</p>
                  <p className="text-xs text-gray-600">{day.low}</p>
                </div>
              ))}
            </div>
          </div>
          {/* TODO: Replace with OpenWeatherMap API call using coordinates 41.2971, 2.0785 */}
        </div>

        {/* Sub-section 3: Live Flights Board */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-semibold" style={{ color: '#1D215E' }}>
              Live Flights
            </h2>
            <PulseDot />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-200">
            {(['departures', 'arrivals'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-3 font-semibold text-sm transition-colors"
                style={{
                  color: activeTab === tab ? '#1D215E' : '#6b6e94',
                  borderBottom: activeTab === tab ? '3px solid #B8913A' : 'none',
                  paddingBottom: activeTab === tab ? '12px' : '16px',
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Flights Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#1D215E' }}>
                    Flight
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#1D215E' }}>
                    {activeTab === 'departures' ? 'Destination' : 'Origin'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#1D215E' }}>
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#1D215E' }}>
                    Gate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#1D215E' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockFlights.map((flight, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                    <td className="px-6 py-4 font-semibold" style={{ color: '#1D215E' }}>
                      {flight.number}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{flight.destination}</td>
                    <td className="px-6 py-4 text-gray-700">{flight.time}</td>
                    <td className="px-6 py-4 text-gray-700">{flight.gate}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TODO: Replace with AviationStack API call, airport code {airport.code}, refresh every 5 minutes */}
        </div>

        {/* Sub-section 4: Airport Info */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1D215E' }}>
            Airport Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Airport Details */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-semibold mb-6" style={{ color: '#1D215E' }}>
                Airport Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">IATA Code</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    {airport.code}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ICAO Code</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    LEBL
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Terminals</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    T1, T2
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Runways</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    2
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Elevation</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    12 ft
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-semibold mb-6" style={{ color: '#1D215E' }}>
                Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Latitude</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    41.2971° N
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Longitude</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    2.0785° E
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timezone</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    CET (UTC+1)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="text-lg font-semibold" style={{ color: '#1D215E' }}>
                    {airport.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 5: Map */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1D215E' }}>
            Location Map
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.7482577820706!2d2.0785!3d41.2971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a251beefb351%3A0x40099d4ccc4c0!2sBarcelona%20El%20Prat%20Airport!5e0!3m2!1sen!2ses!4v1000000000000"
            width="100%"
            height={220}
            style={{ border: 'none', borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sub-section 6: CTA Banner */}
        <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#E6EEF8' }}>
          <p className="mb-6 text-lg md:text-xl" style={{ color: '#1D215E' }}>
            Flying through {airport.name}? Book your VIP Meet & Greet — we handle everything from gate to exit.
          </p>
          <a
            href="#hero"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:shadow-lg"
            style={{ backgroundColor: '#1D215E' }}
          >
            Book your service
          </a>
        </div>
      </div>
    </section>
  )
}
