'use client'

import { useState } from 'react'
import { Cloud, Wind, Eye } from 'lucide-react'
import { Airport } from '@/lib/airports'

interface AirportInfoSectionProps {
  airport: Airport
}

// Animated pulse dot component
function PulseDot() {
  return (
    <div className="relative inline-flex h-2 w-2">
      <div className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-green-500 opacity-75"></div>
      <div className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></div>
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
  { day: 'Today', temp: '22°C', icon: '⛅' },
  { day: 'Tomorrow', temp: '20°C', icon: '🌤️' },
  { day: 'Wed', temp: '19°C', icon: '☁️' },
  { day: 'Thu', temp: '23°C', icon: '⛅' },
  { day: 'Fri', temp: '21°C', icon: '🌤️' },
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
    <section className="w-full bg-white py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Airport Header - Single line */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider" style={{ color: '#1D215E', letterSpacing: '1px' }}>
            {airport.code}
          </h1>
          <PulseDot />
          <p className="text-sm md:text-base" style={{ color: '#6b6e94' }}>
            {airport.name}
          </p>
        </div>

        {/* Weather Cards + 5-day Forecast */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Conditions */}
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <Cloud size={16} style={{ color: '#3F5CA6' }} />
                <span className="text-xs text-gray-600">Conditions</span>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#1D215E' }}>
                Partly Cloudy
              </p>
            </div>

            {/* Temperature */}
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <span className="text-xs text-gray-600 block mb-1">Temperature</span>
              <p className="text-sm font-semibold" style={{ color: '#1D215E' }}>
                22°C
              </p>
            </div>

            {/* Wind */}
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <Wind size={16} style={{ color: '#3F5CA6' }} />
                <span className="text-xs text-gray-600">Wind</span>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#1D215E' }}>
                15 km/h
              </p>
            </div>

            {/* Visibility */}
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <Eye size={16} style={{ color: '#3F5CA6' }} />
                <span className="text-xs text-gray-600">Visibility</span>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#1D215E' }}>
                10 km
              </p>
            </div>
          </div>

          {/* 5-day Forecast - Horizontal strip */}
          <div className="overflow-x-auto py-1">
            <div className="flex gap-2 min-w-min">
              {mockForecast.map((day) => (
                <div key={day.day} className="flex-shrink-0 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-center" style={{ minWidth: '90px' }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#1D215E' }}>
                    {day.day}
                  </p>
                  <p className="text-lg mb-1">{day.icon}</p>
                  <p className="text-xs font-semibold text-gray-700">{day.temp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Flights Board */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-sm md:text-base font-semibold" style={{ color: '#1D215E' }}>
              Live Flights
            </h2>
            <PulseDot />
          </div>

          {/* Tabs */}
          <div className="flex gap-3 border-b border-gray-200">
            {(['departures', 'arrivals'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-3 py-2 font-semibold text-xs transition-colors"
                style={{
                  color: activeTab === tab ? '#1D215E' : '#6b6e94',
                  borderBottom: activeTab === tab ? '2px solid #B8913A' : 'none',
                  paddingBottom: activeTab === tab ? '10px' : '14px',
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Flights Table - Compact */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-3 py-2 text-left text-xs font-semibold" style={{ color: '#1D215E' }}>
                    Flight
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold" style={{ color: '#1D215E' }}>
                    {activeTab === 'departures' ? 'Destination' : 'Origin'}
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold" style={{ color: '#1D215E' }}>
                    Time
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold" style={{ color: '#1D215E' }}>
                    Gate
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold" style={{ color: '#1D215E' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockFlights.map((flight, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                    <td className="px-3 py-2 font-semibold text-xs" style={{ color: '#1D215E' }}>
                      {flight.number}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-700">{flight.destination}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{flight.time}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{flight.gate}</td>
                    <td className="px-3 py-2">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${getStatusBadgeColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map - Compact */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.7482577820706!2d2.0785!3d41.2971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a251beefb351%3A0x40099d4ccc4c0!2sBarcelona%20El%20Prat%20Airport!5e0!3m2!1sen!2ses!4v1000000000000"
            width="100%"
            height={180}
            style={{ border: 'none', borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* CTA Banner - Compact */}
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: '#E6EEF8' }}>
          <p className="mb-3 text-sm md:text-base" style={{ color: '#1D215E' }}>
            Flying through {airport.name}? Book your VIP Meet & Greet — we handle everything from gate to exit.
          </p>
          <a
            href="#hero"
            className="inline-block px-6 py-2 rounded-lg font-semibold text-white text-sm transition-colors hover:shadow-lg"
            style={{ backgroundColor: '#B8913A' }}
          >
            Book your service
          </a>
        </div>
      </div>
    </section>
  )
}
