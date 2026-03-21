'use client'

import { useState, useRef, useEffect } from 'react'
import { Plane, Calendar, Users, Mail, Luggage, BriefcaseBusiness, ChevronDown, Minus, Plus, X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { Airport } from '@/lib/airports'

interface AirportBookingFormProps {
  airport: Airport
}

// Month calendar renderer
function renderMonth(monthDate: Date, daysInMonth: number) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()

  return (
    <div key={`${year}-${month}`} style={{ padding: '20px' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1D215E', marginBottom: '12px', textAlign: 'center' }}>
        {monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textAlign: 'center', height: '24px' }}>
            {day}
          </div>
        ))}
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} style={{ height: '32px' }} />
        ))}
        {Array(daysInMonth).fill(null).map((_, i) => {
          const day = i + 1
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          return (
            <div key={day} style={{ height: '32px' }}>
              <button
                type="button"
                onClick={() => {}}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: '#F5F7FA',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  color: '#1D215E'
                }}
              >
                {day}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Date picker modal
function DatePickerModal({ open, onClose, onConfirm }: any) {
  const [selectedDate, setSelectedDate] = useState<string>('')

  if (!open) return null

  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
  const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  const daysInNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate()

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)' }} onClick={onClose} />
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        maxHeight: '80vh',
        overflow: 'hidden',
        zIndex: 9999
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', paddingBottom: '8px' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: '#E2E8F0' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1D215E' }}>Select Date</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <X className="h-5 w-5" style={{ color: '#94A3B8' }} />
          </button>
        </div>
        <div style={{ overflowY: 'auto', maxHeight: 'calc(80vh - 80px)', display: 'flex' }}>
          {renderMonth(today, daysInCurrentMonth)}
          <div style={{ height: '1px', background: '#E2E8F0', margin: '0 20px 20px 20px', width: '100%' }} />
          {renderMonth(nextMonth, daysInNextMonth)}
        </div>
        <button
          type="button"
          onClick={() => {
            if (selectedDate) {
              onConfirm(selectedDate)
              onClose()
            }
          }}
          style={{
            display: 'block',
            width: 'calc(100% - 32px)',
            margin: '0 16px 16px 16px',
            height: '48px',
            borderRadius: '10px',
            background: selectedDate ? '#A16207' : 'rgba(161, 98, 7, 0.45)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '15px',
            border: 'none',
            cursor: selectedDate ? 'pointer' : 'not-allowed'
          }}
        >
          {selectedDate ? `Confirm — ${selectedDate}` : 'Select a date'}
        </button>
      </div>
    </div>,
    document.body
  )
}

export function AirportBookingForm({ airport }: AirportBookingFormProps) {
  const [direction, setDirection] = useState('arrival')
  const [serviceType, setServiceType] = useState('meet-greet')
  const [airportValue, setAirportValue] = useState(`${airport.city} ${airport.code}`)
  const [flightNumber, setFlightNumber] = useState('')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [luggage, setLuggage] = useState(0)
  const [carryon, setCarryon] = useState(0)
  const [email, setEmail] = useState('')
  const [datePickerOpen, setDatePickerOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-2xl">
      {/* Row 1 — Two dropdowns side by side */}
      <div className="flex gap-3 mb-3">
        {/* Direction Dropdown */}
        <div className="flex-1 relative">
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            style={{
              appearance: 'none',
              width: '100%',
              padding: '12px 16px',
              paddingRight: '32px',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              backgroundColor: 'white',
              color: '#1D215E',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
              backgroundSize: '20px'
            }}
          >
            <option value="arrival">Arrival</option>
            <option value="departure">Departure</option>
            <option value="connection">Connection</option>
          </select>
        </div>

        {/* Service Type Dropdown */}
        <div className="flex-1 relative">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            style={{
              appearance: 'none',
              width: '100%',
              padding: '12px 16px',
              paddingRight: '32px',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              backgroundColor: 'white',
              color: '#1D215E',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
              backgroundSize: '20px'
            }}
          >
            <option value="meet-greet">Meet & Greet</option>
            <option value="vip-tarmac">VIP Tarmac</option>
            <option value="lounge">Lounge Access</option>
          </select>
        </div>
      </div>

      {/* Row 2 — Airport or city (searchable, editable) */}
      <div className="mb-3">
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-white">
          <Plane size={20} className="text-gold opacity-60 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Airport or city"
            value={airportValue}
            onChange={(e) => setAirportValue(e.target.value)}
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-navy placeholder:text-gray-400 outline-none focus:border-blue transition-colors text-sm"
        />
      </div>

      {/* Row 4 — Select date (opens calendar modal) */}
      <div className="mb-3">
        <button
          type="button"
          onClick={() => setDatePickerOpen(true)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            backgroundColor: 'white',
            cursor: 'pointer',
            gap: '12px'
          }}
        >
          <Calendar size={20} className="text-gray-500" />
          <span style={{ flex: 1, textAlign: 'left', color: date ? '#1D215E' : '#94A3B8', fontSize: '14px' }}>
            {date || 'Select date'}
          </span>
        </button>
      </div>

      {/* Row 5 — Passengers, Luggage, Carry-on combined */}
      <div className="mb-3">
        <div style={{ display: 'flex', alignItems: 'stretch', border: '1px solid #E2E8F0', borderRadius: '10px', backgroundColor: 'white', overflow: 'hidden' }}>
          {/* Passengers */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px' }}>
            <Users size={20} className="text-gray-500 mr-2 flex-shrink-0" />
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1D215E' }}>{passengers} Pax</span>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: '#E2E8F0' }} />

          {/* Luggage */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', gap: '8px' }}>
            <Luggage size={20} className="text-gray-500 flex-shrink-0" />
            <span style={{ fontSize: '14px', color: '#1D215E' }}>{luggage}</span>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: '#E2E8F0' }} />

          {/* Carry-on */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', gap: '8px' }}>
            <BriefcaseBusiness size={20} className="text-gray-500 flex-shrink-0" />
            <span style={{ fontSize: '14px', color: '#1D215E' }}>{carryon}</span>
          </div>
        </div>
      </div>

      {/* Row 6 — Email */}
      <div className="mb-4">
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-white">
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
      <button className="w-full py-3 rounded-full font-semibold text-navy text-sm transition-all hover:shadow-md" style={{ backgroundColor: '#D4C5A9' }}>
        Get a Quote
      </button>

      {/* Date Picker Modal */}
      <DatePickerModal open={datePickerOpen} onClose={() => setDatePickerOpen(false)} onConfirm={setDate} />
    </div>
  )
}
