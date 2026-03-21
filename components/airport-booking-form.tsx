'use client'

import { useState } from 'react'
import { Plane, Calendar, Users, Lock } from 'lucide-react'
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

  return (
    <div className="backdrop-blur-md rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'rgba(29, 33, 94, 0.6)', borderColor: 'rgba(255, 255, 255, 0.1)', borderWidth: '1px' }}>
      {/* Row 1 - Direction Toggles */}
      <div className="mb-6">
        <div className="flex gap-2">
          {['arrival', 'departure', 'connection'].map(option => (
            <button
              key={option}
              onClick={() => setDirection(option)}
              className="flex-1 px-3 py-2.5 md:px-4 md:py-3 rounded-lg font-medium text-sm transition-all"
              style={{
                backgroundColor: direction === option ? '#3F5CA6' : 'transparent',
                color: direction === option ? 'white' : 'rgba(255, 255, 255, 0.5)',
                border: direction === option ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2 - Service Type Toggles */}
      <div className="mb-6 pb-6 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
        <div className="flex gap-2">
          {['meet-greet', 'vip-tarmac'].map(option => (
            <button
              key={option}
              onClick={() => setServiceType(option)}
              className="flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg font-medium text-sm transition-all"
              style={{
                backgroundColor: serviceType === option ? '#D4AF37' : 'transparent',
                color: serviceType === option ? '#1D215E' : 'rgba(255, 255, 255, 0.5)',
                border: serviceType === option ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {option === 'meet-greet' ? 'Meet & Greet' : 'VIP Tarmac'}
            </button>
          ))}
        </div>
      </div>

      {/* Row 3 - Airport Field (Pre-filled, Locked) */}
      <div className="mb-4">
        <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'DM Sans, sans-serif' }}>
          Airport
        </label>
        <div className="relative flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Plane size={18} className="ml-3" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
          <input
            type="text"
            value={`${airport.city} ${airport.code}`}
            readOnly
            className="flex-1 px-3 py-3 md:py-3.5 bg-transparent text-white text-sm outline-none"
            style={{ color: 'white' }}
          />
          <Lock size={16} className="mr-3" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
        </div>
      </div>

      {/* Row 4 - Flight Number */}
      <div className="mb-4">
        <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'DM Sans, sans-serif' }}>
          Flight Number
        </label>
        <div className="relative flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Plane size={18} className="ml-3" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
          <input
            type="text"
            placeholder="e.g. BA 478"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className="flex-1 px-3 py-3 md:py-3.5 bg-transparent text-white text-sm outline-none placeholder-opacity-30"
            style={{ color: 'white', '--placeholder-opacity': '0.3' } as any}
          />
        </div>
      </div>

      {/* Row 5 - Date */}
      <div className="mb-4">
        <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'DM Sans, sans-serif' }}>
          Date
        </label>
        <div className="relative flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Calendar size={18} className="ml-3" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 px-3 py-3 md:py-3.5 bg-transparent text-white text-sm outline-none"
            style={{ color: 'white' }}
          />
        </div>
      </div>

      {/* Row 6 - Passengers */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'DM Sans, sans-serif' }}>
          Passengers
        </label>
        <div className="relative flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Users size={18} className="ml-3" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="flex-1 px-3 py-3 md:py-3.5 bg-transparent text-white text-sm outline-none appearance-none cursor-pointer"
            style={{ color: 'white' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <option key={n} value={n} className="bg-navy text-white">
                {n} {n === 1 ? 'Pax' : 'Pax'}
              </option>
            ))}
          </select>
          <svg
            className="w-4 h-4 mr-3 pointer-events-none"
            style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Row 7 - Submit Button */}
      <button
        className="w-full px-6 py-3.5 md:py-4 rounded-lg font-semibold text-white text-sm md:text-base transition-all hover:shadow-lg"
        style={{ backgroundColor: '#3F5CA6' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#355299'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3F5CA6'}
      >
        Get a Quote
      </button>

      {/* Row 8 - Legal Text */}
      <p className="text-xs text-center mt-4" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
        By clicking "Get a Quote" you agree to our Terms & Conditions
      </p>
    </div>
  )
}
