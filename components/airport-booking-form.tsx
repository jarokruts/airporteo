'use client'

import { useState } from 'react'
import { Plane, Calendar, Users, Mail, Luggage } from 'lucide-react'
import { Airport } from '@/lib/airports'

interface AirportBookingFormProps {
  airport: Airport
}

export function AirportBookingForm({ airport }: AirportBookingFormProps) {
  const [direction, setDirection] = useState('arrival')
  const [serviceType, setServiceType] = useState('meet-greet')
  const [flightNumber, setFlightNumber] = useState('')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [luggage, setLuggage] = useState('0')
  const [email, setEmail] = useState('')

  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-2xl">
      {/* Row 1 — Two dropdowns side by side */}
      <div className="flex gap-3 mb-3">
        {/* Direction Dropdown */}
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="flex-1 px-4 py-3.5 border border-gray-300 rounded-lg text-navy font-medium outline-none focus:border-blue transition-colors bg-white"
        >
          <option value="arrival">Arrival</option>
          <option value="departure">Departure</option>
          <option value="connection">Connection</option>
        </select>

        {/* Service Type Dropdown */}
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="flex-1 px-4 py-3.5 border border-gray-300 rounded-lg text-navy font-medium outline-none focus:border-blue transition-colors bg-white"
        >
          <option value="meet-greet">Meet & Greet</option>
          <option value="vip-tarmac">VIP Tarmac</option>
          <option value="lounge">Lounge Access</option>
        </select>
      </div>

      {/* Row 2 — Airport or city */}
      <div className="mb-3">
        <div className="flex items-center px-4 py-3.5 border border-gray-300 rounded-lg bg-white">
          <Plane size={20} className="text-gold opacity-60 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Airport or city"
            value={airport ? `${airport.city} ${airport.code}` : ''}
            readOnly={!!airport}
            className="flex-1 bg-transparent text-navy placeholder:text-gray-400 outline-none text-sm"
          />
        </div>
      </div>

      {/* Row 3 — Flight number */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Flight #   e.g. BA206"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          className="w-full px-4 py-3.5 border border-gray-300 rounded-lg bg-white text-navy placeholder:text-gray-400 outline-none focus:border-blue transition-colors text-sm"
        />
      </div>

      {/* Row 4 — Select date */}
      <div className="mb-3">
        <div className="flex items-center px-4 py-3.5 border border-gray-300 rounded-lg bg-white cursor-pointer">
          <Calendar size={20} className="text-gray-500 mr-3 flex-shrink-0" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 bg-transparent text-navy outline-none text-sm"
          />
        </div>
      </div>

      {/* Row 5 — Passengers and luggage */}
      <div className="mb-3">
        <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
          {/* Left side - Passengers */}
          <div className="flex-1 flex items-center px-4 py-3.5">
            <Users size={20} className="text-gray-500 mr-3 flex-shrink-0" />
            <span className="text-navy font-medium text-sm">{passengers} Pax</span>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-gray-300 h-6" />

          {/* Right side - Luggage */}
          <div className="flex-1 flex items-center px-4 py-3.5 gap-2">
            <Luggage size={20} className="text-gray-500 flex-shrink-0" />
            <select
              value={luggage}
              onChange={(e) => setLuggage(e.target.value)}
              className="flex-1 bg-transparent text-navy outline-none text-sm font-medium cursor-pointer appearance-none"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <svg
              className="w-4 h-4 text-gray-500 flex-shrink-0 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 6 — Email */}
      <div className="mb-4">
        <div className="flex items-center px-4 py-3.5 border border-gray-300 rounded-lg bg-white">
          <Mail size={20} className="text-gray-500 mr-3 flex-shrink-0" />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-navy placeholder:text-gray-400 outline-none text-sm"
          />
        </div>
      </div>

      {/* Row 7 — Submit button */}
      <button className="w-full py-3.5 rounded-full font-semibold text-navy text-sm transition-all hover:shadow-md" style={{ backgroundColor: '#D4C5A9' }}>
        Get a Quote
      </button>
    </div>
  )
}
