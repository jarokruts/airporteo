'use client'

import { useState, useRef, useEffect } from 'react'
import { Plane, Calendar, Users, Mail, Luggage, BriefcaseBusiness, ChevronDown, X } from 'lucide-react'
import { Airport } from '@/lib/airports'

interface AirportBookingFormProps {
  airport: Airport
}

// Local AIRPORTS array matching the main page
const TRENDING_AIRPORTS = [
  { code: "LHR", city: "London", name: "Heathrow" },
  { code: "LGW", city: "London", name: "Gatwick" },
  { code: "CDG", city: "Paris", name: "Charles de Gaulle" },
  { code: "AMS", city: "Amsterdam", name: "Schiphol" },
  { code: "FRA", city: "Frankfurt", name: "Frankfurt Airport" },
  { code: "MAD", city: "Madrid", name: "Barajas" },
  { code: "BCN", city: "Barcelona", name: "El Prat" },
  { code: "JFK", city: "New York", name: "John F. Kennedy" },
  { code: "DXB", city: "Dubai", name: "Dubai International" },
  { code: "IST", city: "Istanbul", name: "Istanbul Airport" },
]

type TrendingAirport = (typeof TRENDING_AIRPORTS)[number]

// Airport Search Field Component
function AirportSearchField({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const filteredAirports = TRENDING_AIRPORTS.filter(
    a =>
      a.city.toLowerCase().includes(query.toLowerCase()) ||
      a.code.toLowerCase().includes(query.toLowerCase()) ||
      a.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelectAirport = (airport: TrendingAirport) => {
    const displayValue = `${airport.city} ${airport.code}`
    setQuery('')
    onChange(displayValue)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setQuery(newValue)
    onChange(newValue)
    setIsOpen(true)
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '40px',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          paddingLeft: '10px',
          paddingRight: '10px',
          background: 'white',
          transition: 'all 200ms',
          cursor: 'text'
        }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={(e) => !isOpen && (e.currentTarget.style.background = '#F5F7FA')}
        onMouseLeave={(e) => !isOpen && (e.currentTarget.style.background = 'white')}
      >
        <Plane size={13} style={{ color: '#C9A84C', flexShrink: 0, marginRight: '6px' }} />
        <input
          ref={inputRef}
          type="text"
          value={query || value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder="Airport or city"
          style={{
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1D215E',
            padding: 0
          }}
        />
      </div>

      {/* Dropdown Menu - Shows filtered airports with "TRENDING AIRPORTS" header */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            background: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '8px', borderBottom: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94A3B8' }}>
              Trending Airports
            </p>
          </div>

          {/* Airport List */}
          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport) => (
              <button
                key={airport.code}
                type="button"
                onClick={() => handleSelectAirport(airport)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  textAlign: 'left',
                  background: 'white',
                  border: 'none',
                  borderBottom: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
              >
                {/* Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#F0F4F8',
                    color: '#1D215E',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}
                >
                  {airport.code}
                </div>

                {/* City and Airport Name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1D215E' }}>
                    {airport.city}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>
                    {airport.name}
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div style={{ padding: '12px', textAlign: 'center', fontSize: '13px', color: '#94A3B8' }}>
              No airports found
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Simple Dropdown Component
function SimpleDropdown({
  value,
  onChange,
  options,
  label
}: {
  value: string
  onChange: (value: string) => void
  options: string[]
  label: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} style={{ position: 'relative', flex: 1 }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          background: 'white',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1D215E',
          transition: 'all 200ms',
          userSelect: 'none'
        }}
        onMouseEnter={(e) => !isOpen && (e.currentTarget.style.background = '#F5F7FA')}
        onMouseLeave={(e) => !isOpen && (e.currentTarget.style.background = 'white')}
      >
        <span>{value}</span>
        <ChevronDown size={14} style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }} />
      </button>

      {/* Dropdown Menu - Opens Downward */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            background: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >
          {options.map((option, idx) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              style={{
                width: '100%',
                padding: '12px 12px',
                textAlign: 'left',
                background: value === option ? '#FDF8E8' : 'white',
                border: 'none',
                borderBottom: idx < options.length - 1 ? '1px solid #E2E8F0' : 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                color: value === option ? '#C9A84C' : '#1D215E',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = value === option ? '#FDF8E8' : '#F5F7FA')}
              onMouseLeave={(e) => (e.currentTarget.style.background = value === option ? '#FDF8E8' : 'white')}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Counter component
function Counter({ 
  label, 
  value, 
  onChange 
}: { 
  label: string
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', paddingTop: '14px', paddingBottom: '14px', borderBottom: '1px solid #E2E8F0' }}>
      <span style={{ fontSize: '14px', fontWeight: 500, color: '#1D215E' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          disabled={value <= 0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid #E2E8F0',
            color: '#1D215E',
            background: 'white',
            cursor: value > 0 ? 'pointer' : 'not-allowed',
            opacity: value > 0 ? 1 : 0.3,
            transition: 'all 200ms'
          }}
          onMouseEnter={(e) => value > 0 && (e.currentTarget.style.borderColor = '#C9A84C')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
        >
          <span style={{ fontSize: '16px', fontWeight: 600 }}>−</span>
        </button>
        <span style={{ width: '24px', textAlign: 'center', fontSize: '15px', fontWeight: 600, color: '#1D215E' }}>{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(10, value + 1))}
          disabled={value >= 10}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid #E2E8F0',
            color: '#1D215E',
            background: 'white',
            cursor: value < 10 ? 'pointer' : 'not-allowed',
            opacity: value < 10 ? 1 : 0.3,
            transition: 'all 200ms'
          }}
          onMouseEnter={(e) => value < 10 && (e.currentTarget.style.borderColor = '#C9A84C')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
        >
          <span style={{ fontSize: '16px', fontWeight: 600 }}>+</span>
        </button>
      </div>
    </div>
  )
}

// Bottom Sheet Component
function BottomSheet({ 
  open, 
  onClose, 
  title, 
  children 
}: { 
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode 
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        onClick={onClose}
      />
      <div 
        style={{
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
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', paddingBottom: '8px' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: '#E2E8F0' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1D215E' }}>{title}</h3>
          <button 
            onClick={onClose}
            style={{
              padding: '4px',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <X className="h-5 w-5" style={{ color: '#94A3B8' }} />
          </button>
        </div>
        <div style={{ overflowY: 'auto', maxHeight: 'calc(80vh - 80px)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function AirportBookingForm({ airport }: AirportBookingFormProps) {
  const [direction, setDirection] = useState('Arrival')
  const [service, setService] = useState('Meet & Greet')
  const [airportValue, setAirportValue] = useState(`${airport.city} ${airport.code}`)
  const [flightNumber, setFlightNumber] = useState('')
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [cabinBags, setCabinBags] = useState(0)
  const [checkedBags, setCheckedBags] = useState(0)
  const [email, setEmail] = useState('')
  const [showPassengersSheet, setShowPassengersSheet] = useState(false)

  const directionOptions = ['Arrival', 'Departure', 'Connection']
  const serviceOptions = ['Meet & Greet', 'VIP Platinum', 'Hotel Transfer']

  // Compute filtered options based on current selections
  const getFilteredServiceOptions = () => {
    if (direction === 'Connection') {
      return ['Meet & Greet', 'VIP Platinum']
    }
    return serviceOptions
  }

  const getFilteredDirectionOptions = () => {
    if (service === 'Hotel Transfer') {
      return ['Arrival', 'Departure']
    }
    return directionOptions
  }

  // Handle direction change with auto-reset logic
  const handleDirectionChange = (newDirection: string) => {
    setDirection(newDirection)
    // Auto-reset: If "Connection" is selected and service is "Hotel Transfer", reset service to "Meet & Greet"
    if (newDirection === 'Connection' && service === 'Hotel Transfer') {
      setService('Meet & Greet')
    }
  }

  // Handle service change with auto-reset logic
  const handleServiceChange = (newService: string) => {
    setService(newService)
    // Auto-reset: If "Hotel Transfer" is selected and direction is "Connection", reset direction to "Arrival"
    if (newService === 'Hotel Transfer' && direction === 'Connection') {
      setDirection('Arrival')
    }
  }

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 space-y-2">
      {/* Row 1: Direction + Service - Two separate equal-width dropdowns */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <SimpleDropdown 
          value={direction}
          onChange={handleDirectionChange}
          options={getFilteredDirectionOptions()}
          label="Direction"
        />
        <SimpleDropdown 
          value={service}
          onChange={handleServiceChange}
          options={getFilteredServiceOptions()}
          label="Service"
        />
      </div>

      {/* Row 2: Airport field with autocomplete search */}
      <AirportSearchField value={airportValue} onChange={setAirportValue} />

      {/* Row 3: Flight # */}
      <div style={{ display: 'flex', height: '40px', alignItems: 'center', borderRadius: '10px', border: '1px solid #E2E8F0', paddingLeft: '10px', paddingRight: '10px', background: 'white' }}>
        <span style={{ fontSize: '14px', fontWeight: 500, color: '#1D215E', flexShrink: 0 }}>Flight #</span>
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value.replace(/[^A-Za-z0-9]/g, '').slice(0, 6))}
          placeholder="e.g. BA206"
          maxLength={6}
          style={{
            marginLeft: '8px',
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1D215E',
            padding: 0
          }}
        />
      </div>

      {/* Row 4: Date */}
      <button
        type="button"
        onClick={() => {}}
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          paddingLeft: '10px',
          paddingRight: '10px',
          background: 'white',
          cursor: 'pointer',
          transition: 'all 200ms'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
      >
        <Calendar size={14} style={{ color: '#94A3B8', flexShrink: 0, marginRight: '6px' }} />
        <span style={{ flex: 1, textAlign: 'left', fontSize: '14px', color: date ? '#1D215E' : '#94A3B8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {date ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select date'}
        </span>
        <ChevronDown size={12} style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0 }} />
      </button>

      {/* Row 5: Passengers + Luggage */}
      <button
        type="button"
        onClick={() => setShowPassengersSheet(true)}
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          overflow: 'visible',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          background: 'white',
          cursor: 'pointer',
          transition: 'all 200ms'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
      >
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', gap: '4px', borderRight: '1px solid #E2E8F0' }}>
          <Users size={13} style={{ color: '#94A3B8', flexShrink: 0 }} />
          <span style={{ fontSize: '14px', color: '#1D215E', fontWeight: 500 }}>{adults} Pax</span>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', gap: '2px' }}>
          <BriefcaseBusiness size={13} style={{ color: '#94A3B8', flexShrink: 0 }} />
          <span style={{ fontSize: '14px', color: '#1D215E', fontWeight: 500 }}>{cabinBags}</span>
          <Luggage size={13} style={{ color: '#94A3B8', flexShrink: 0, marginLeft: '4px' }} />
          <span style={{ fontSize: '14px', color: '#1D215E', fontWeight: 500 }}>{checkedBags}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
          <ChevronDown size={12} style={{ color: '#94A3B8' }} />
        </div>
      </button>

      {/* Row 6: Email */}
      <div style={{ display: 'flex', alignItems: 'center', borderRadius: '10px', border: '1.5px solid #E2E8F0', backgroundColor: '#FFFFFF', padding: '0 12px', height: '40px' }}>
        <Mail size={13} style={{ color: '#94A3B8', flexShrink: 0, marginRight: '6px' }} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            color: '#1D215E',
            padding: 0
          }}
        />
      </div>

      {/* Row 7: CTA Button */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
        <button
          type="button"
          style={{
            width: '60%',
            height: '44px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            color: 'white',
            background: '#A16207',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 200ms'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#8B4E06')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#A16207')}
        >
          Get a Quote
        </button>
      </div>

      {/* Passengers Sheet */}
      <BottomSheet 
        open={showPassengersSheet} 
        onClose={() => setShowPassengersSheet(false)}
        title="Passengers & Luggage"
      >
        <Counter label="Adults" value={adults} onChange={setAdults} />
        <Counter label="Cabin Bags" value={cabinBags} onChange={setCabinBags} />
        <Counter label="Checked Bags" value={checkedBags} onChange={setCheckedBags} />
        <div style={{ padding: '16px 20px' }}>
          <button
            onClick={() => setShowPassengersSheet(false)}
            style={{
              width: '100%',
              height: '44px',
              borderRadius: '10px',
              background: '#A16207',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Done
          </button>
        </div>
      </BottomSheet>
    </div>
  )
}
