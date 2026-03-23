'use client'

import { useState, useEffect } from 'react'
import { Plane, Calendar, Users, Mail, Luggage, BriefcaseBusiness, ChevronDown, X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { Airport } from '@/lib/airports'

interface AirportBookingFormProps {
  airport: Airport
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

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        onClick={onClose}
      />
      {/* Sheet */}
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
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', paddingBottom: '8px' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: '#E2E8F0' }} />
        </div>
        {/* Header */}
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
        {/* Content */}
        <div style={{ overflowY: 'auto', maxHeight: 'calc(80vh - 80px)' }}>
          {children}
        </div>
      </div>
    </div>,
    document.body
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

export function AirportBookingForm({ airport }: AirportBookingFormProps) {
  const [direction, setDirection] = useState('arrival')
  const [service, setService] = useState('Meet & Greet')
  const [airportValue, setAirportValue] = useState(`${airport.city} ${airport.code}`)
  const [flightNumber, setFlightNumber] = useState('')
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [cabinBags, setCabinBags] = useState(0)
  const [checkedBags, setCheckedBags] = useState(0)
  const [email, setEmail] = useState('')
  const [showDirectionServiceSheet, setShowDirectionServiceSheet] = useState(false)
  const [showPassengersSheet, setShowPassengersSheet] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 space-y-2">
      {/* Row 1: Direction + Service - Two separate dropdowns */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {/* Left: Direction Dropdown */}
        <button
          type="button"
          onClick={() => setShowDirectionServiceSheet(true)}
          style={{
            flex: 1,
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
          onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
        >
          <span>{direction === 'arrival' ? 'Arrival' : direction === 'departure' ? 'Departure' : 'Connection'}</span>
          <ChevronDown size={14} style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0 }} />
        </button>

        {/* Right: Service Dropdown */}
        <button
          type="button"
          onClick={() => setShowDirectionServiceSheet(true)}
          style={{
            flex: 1,
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
            userSelect: 'none',
            minWidth: 0
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{service}</span>
          <ChevronDown size={14} style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0 }} />
        </button>
      </div>

      {/* Row 2: Airport field */}
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
        <Plane size={13} style={{ color: '#C9A84C', flexShrink: 0, marginRight: '6px' }} />
        <input
          type="text"
          value={airportValue}
          onChange={(e) => setAirportValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          placeholder="Airport or city"
          style={{
            flex: 1,
            minWidth: 0,
            textAlign: 'left',
            fontSize: '12px',
            color: '#1D215E',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: 0
          }}
        />
        {airportValue && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setAirportValue('')
            }}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '6px', display: 'flex', alignItems: 'center' }}
          >
            <X size={14} style={{ color: '#94A3B8' }} />
          </button>
        )}
      </button>

      {/* Row 3: Flight # */}
      <div style={{ display: 'flex', height: '40px', alignItems: 'center', borderRadius: '10px', border: '1px solid #E2E8F0', paddingLeft: '10px', paddingRight: '10px', background: 'white' }}>
        <span style={{ fontSize: '12px', fontWeight: 400, color: '#1D215E', flexShrink: 0 }}>Flight #</span>
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
            fontSize: '12px',
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
        <span style={{ flex: 1, textAlign: 'left', fontSize: '12px', color: date ? '#1D215E' : '#94A3B8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
        {/* Left: Passengers */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', gap: '4px', borderRight: '1px solid #E2E8F0' }}>
          <Users size={13} style={{ color: '#94A3B8', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{adults} Pax</span>
        </div>
        {/* Middle: Luggage */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', gap: '2px' }}>
          <BriefcaseBusiness size={13} style={{ color: '#94A3B8', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{cabinBags}</span>
          <Luggage size={13} style={{ color: '#94A3B8', flexShrink: 0, marginLeft: '4px' }} />
          <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{checkedBags}</span>
        </div>
        {/* Right: Chevron */}
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
            fontSize: '12px',
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

      {/* Direction & Service Sheet */}
      <BottomSheet 
        open={showDirectionServiceSheet} 
        onClose={() => setShowDirectionServiceSheet(false)}
        title="Direction & Service"
      >
        <div>
          {['arrival', 'departure', 'connection'].map(d => (
            <button
              key={d}
              onClick={() => {
                setDirection(d)
                setShowDirectionServiceSheet(false)
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '14px 20px',
                borderBottom: '1px solid #E2E8F0',
                background: direction === d ? '#FDF8E8' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                color: direction === d ? '#C9A84C' : '#1D215E',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => direction !== d && (e.currentTarget.style.background = '#F5F7FA')}
              onMouseLeave={(e) => (e.currentTarget.style.background = direction === d ? '#FDF8E8' : 'white')}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
          {['Meet & Greet', 'VIP Platinum', 'Hotel Transfer'].map(s => (
            <button
              key={s}
              onClick={() => {
                setService(s)
                setShowDirectionServiceSheet(false)
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '14px 20px',
                borderBottom: '1px solid #E2E8F0',
                background: service === s ? '#FDF8E8' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                color: service === s ? '#C9A84C' : '#1D215E',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => service !== s && (e.currentTarget.style.background = '#F5F7FA')}
              onMouseLeave={(e) => (e.currentTarget.style.background = service === s ? '#FDF8E8' : 'white')}
            >
              {s}
            </button>
          ))}
        </div>
      </BottomSheet>

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
