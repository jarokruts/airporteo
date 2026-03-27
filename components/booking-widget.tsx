"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { CaretDown, Envelope, Airplane, AirplaneIcon, AirplaneLanding, X, Spinner, Handshake, Crown, Car, CheckCircle, Calendar, Users, Baby, Suitcase, Briefcase, Minus, Plus, CaretLeft, CaretRight, ArrowsDownUp, Shield, Clock, Star, Backpack, AirplaneTakeoff } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

// CSS to prevent text overflow in inputs and buttons
const inputOverflowStyle = `
  input, button {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

// Bottom Sheet Component for mobile
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
      {/* Backdrop */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          transition: 'opacity 250ms ease-out'
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
          zIndex: 9999,
          animation: 'slideUp 250ms ease-out'
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
          <style>{`
            @keyframes slideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
          `}</style>
          {children}
        </div>
      </div>
    </div>
  )
}

// Sheet option row component
function SheetOption({ 
  icon, 
  label, 
  subtitle,
  selected, 
  onClick 
}: { 
  icon: React.ReactNode
  label: string
  subtitle?: string
  selected: boolean
  onClick: () => void 
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-4 px-5 h-14 text-[14px] font-medium transition-colors border-b border-[#E2E8F0] last:border-b-0",
        selected ? "bg-[#FDF8E8]" : "hover:bg-[#F5F7FA]"
      )}
    >
      <span className={cn("shrink-0", selected ? "text-[#B8913A]" : "text-[#94A3B8]")}>
        {icon}
      </span>
      <span className="flex-1 text-left">
        <span className={cn("block text-[14px] font-medium", selected ? "text-[#B8913A]" : "text-[#1D215E]")}>
          {label}
        </span>
        {subtitle && (
          <span className="block text-[11px] text-[#94A3B8] font-normal">{subtitle}</span>
        )}
      </span>
      {selected && <CheckCircle size={20} weight="light" className="h-5 w-5 text-[#B8913A]" />}
    </button>
  )
}

// Counter component for passengers/luggage
function SheetCounter({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 10 
}: { 
  label: string
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number 
}) {
  return (
    <div className="flex items-center justify-between px-5 h-14 border-b border-[#E2E8F0] last:border-b-0">
      <span className="text-[14px] font-medium text-[#1D215E]">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1D215E] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#B8913A] transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center text-[15px] font-semibold text-[#1D215E]">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1D215E] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#B8913A] transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

const AIRPORTS = [
  { code: "LHR", city: "London", name: "Heathrow", country: "United Kingdom" },
  { code: "LGW", city: "London", name: "Gatwick", country: "United Kingdom" },
  { code: "CDG", city: "Paris", name: "Charles de Gaulle", country: "France" },
  { code: "AMS", city: "Amsterdam", name: "Schiphol", country: "Netherlands" },
  { code: "FRA", city: "Frankfurt", name: "Frankfurt Airport", country: "Germany" },
  { code: "MAD", city: "Madrid", name: "Barajas", country: "Spain" },
  { code: "BCN", city: "Barcelona", name: "El Prat", country: "Spain" },
  { code: "FCO", city: "Rome", name: "Fiumicino", country: "Italy" },
  { code: "MUC", city: "Munich", name: "Munich Airport", country: "Germany" },
  { code: "ZRH", city: "Zurich", name: "Zurich Airport", country: "Switzerland" },
  { code: "DXB", city: "Dubai", name: "Dubai International", country: "United Arab Emirates" },
  { code: "DOH", city: "Doha", name: "Hamad International", country: "Qatar" },
  { code: "JFK", city: "New York", name: "John F. Kennedy", country: "United States" },
  { code: "LAX", city: "Los Angeles", name: "Los Angeles International", country: "United States" },
  { code: "SIN", city: "Singapore", name: "Changi", country: "Singapore" },
  { code: "BKK", city: "Bangkok", name: "Suvarnabhumi", country: "Thailand" },
  { code: "IST", city: "Istanbul", name: "Istanbul Airport", country: "Turkey" },
  { code: "MXP", city: "Milan", name: "Malpensa", country: "Italy" },
  { code: "ATH", city: "Athens", name: "Athens International", country: "Greece" },
]

const SERVICE_TYPES = [
  { value: "arrival", label: "Arrival" },
  { value: "departure", label: "Departure" },
  { value: "connection", label: "Connection" },
]

const SERVICE_OPTIONS = [
  "Meet & Greet",
  "VIP Platinum",
  "Hotel Transfer",
]

type Airport = (typeof AIRPORTS)[number]

interface BookingState {
  serviceType: string
  service: string
  airport: Airport | null
  flightNumber: string
  date: string | null
  email: string
  adults: number
  children: number
  infants: number
  cabinBags: number
  checkedBags: number
  travelClass: string
  connectionFlightNumber: string
  connectionDate: string | null
  addressValue: string
  booked: boolean
  booking: boolean
}

function AirportPill({ airport, onClear }: { airport: Airport; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-navy px-2.5 py-1 text-sm font-semibold text-primary-foreground">
      {airport.city} {airport.code}
      <button
        type="button"
        onClick={onClear}
        className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
        aria-label="Clear airport"
      >
        <X className="h-2.5 w-2.5" />
      </button>
    </span>
  )
}

function Dropdown({
  label,
  value,
  options,
  onChange,
  icon,
}: {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (v: string) => void
  icon?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const selected = options.find((o) => o.value === value)

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-[#1D215E] hover:bg-secondary transition-colors whitespace-nowrap"
      >
        {icon && <span className="text-muted-foreground">{icon}</span>}
        {selected?.label ?? label}
        <CaretDown weight="light" className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-[9999] mt-1.5 min-w-[160px] overflow-hidden rounded-xl border border-border bg-card shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => { onChange(o.value); setOpen(false) }}
              className={cn(
                "flex w-full items-center px-4 py-2.5 text-sm transition-colors hover:bg-secondary",
                value === o.value ? "font-semibold text-blue" : "text-foreground"
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Stepper({ value, onChange, min = 0, max = 9 }: { value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground text-base font-medium transition-colors hover:bg-border disabled:opacity-30"
        aria-label="Decrease"
      >
        <span className="leading-none">−</span>
      </button>
      <span className="w-4 text-center text-sm font-semibold text-foreground">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground text-base font-medium transition-colors hover:bg-border disabled:opacity-30"
        aria-label="Increase"
      >
        <span className="leading-none">+</span>
      </button>
    </div>
  )
}

const CLASS_OPTIONS = ["Economy", "Business", "First"]

function PassengersBagsDropdown({
  adults, children, infants, cabinBags, checkedBags, travelClass,
  onChange,
}: {
  adults: number; children: number; infants: number
  cabinBags: number; checkedBags: number
  travelClass: string
  onChange: (patch: Partial<BookingState>) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const totalPassengers = adults + children + infants

  const label = `${totalPassengers} ${totalPassengers === 1 ? "Passenger" : "Passengers"}`

  const rows = [
    {
      section: "Passengers",
      items: [
        { key: "adults", icon: <Users className="h-4 w-4" />, label: "Adults", hint: "Over 12", value: adults, min: 1 },
        { key: "children", icon: <Baby className="h-4 w-4" />, label: "Children", hint: "2 – 12", value: children, min: 0 },
        { key: "infants", icon: <Baby className="h-3.5 w-3.5 opacity-70" />, label: "Infants", hint: "Under 2", value: infants, min: 0 },
      ],
    },
    {
      section: "Bags",
      items: [
        { key: "cabinBags", icon: <Backpack weight="light" className="h-4 w-4" style={{ color: '#1D215E' }} />, label: "Cabin baggage", hint: "", value: cabinBags, min: 0 },
        { key: "checkedBags", icon: <Suitcase weight="light" className="h-4 w-4 opacity-70" style={{ color: '#1D215E' }} />, label: "Checked baggage", hint: "", value: checkedBags, min: 0 },
      ],
    },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
      >
        <Users className="h-3.5 w-3.5 text-muted-foreground" />
        {label}
        <span className="mx-1 h-3.5 w-px bg-border" />
        <Backpack weight="light" className="h-4 w-4 text-muted-foreground" style={{ color: '#1D215E' }} />
        <span className="font-semibold">{cabinBags}</span>
        <Suitcase weight="light" className="h-4 w-4 text-muted-foreground" style={{ color: '#1D215E' }} />
        <span className="font-semibold">{checkedBags}</span>
        <CaretDown weight="light" className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[9999] mt-1.5 rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150" style={{ minWidth: '380px' }}>
          {/* Two columns: Passengers and Luggage */}
          <div style={{ display: 'flex', paddingTop: '16px', paddingBottom: '16px' }}>
            {/* Left Column - Passengers */}
            <div style={{ flex: 1, paddingLeft: '16px', paddingRight: '12px' }}>
              <p className="mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">Passengers</p>
              <div className="space-y-3">
                {rows[0]?.items.map(({ key, icon, label, hint, value, min }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-muted-foreground">{icon}</span>
                      <div>
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        {hint && <span className="ml-1 text-xs text-muted-foreground">{hint}</span>}
                      </div>
                    </div>
                    <Stepper
                      value={value}
                      min={min}
                      onChange={(v) => onChange({ [key]: v } as Partial<BookingState>)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Divider */}
            <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '0 12px' }} />

            {/* Right Column - Luggage */}
            <div style={{ flex: 1, paddingLeft: '12px', paddingRight: '16px' }}>
              <p className="mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">Luggage</p>
              <div className="space-y-3">
                {rows[1]?.items.map(({ key, icon, label, hint, value, min }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-muted-foreground">{icon}</span>
                      <div>
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        {hint && <span className="ml-1 text-xs text-muted-foreground">{hint}</span>}
                      </div>
                    </div>
                    <Stepper
                      value={value}
                      min={min}
                      onChange={(v) => onChange({ [key]: v } as Partial<BookingState>)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div style={{ height: '1px', backgroundColor: '#E2E8F0' }} />

          {/* Class Selection - Full Width */}
          <div style={{ padding: '16px' }}>
            <p className="mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">Class</p>
            <div className="flex gap-2">
              {CLASS_OPTIONS.map((cls) => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => onChange({ travelClass: cls })}
                  style={{
                    borderRadius: '20px',
                    padding: '6px 16px',
                    fontSize: '13px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: travelClass === cls ? '#B8913A' : '#F5F7FA',
                    color: travelClass === cls ? 'white' : '#1D215E',
                    transition: 'background-color 200ms ease, color 200ms ease'
                  }}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Date Picker Bottom Sheet for mobile
function DatePickerBottomSheet({
  open,
  onClose,
  onConfirm,
  initialDate,
}: {
  open: boolean
  onClose: () => void
  onConfirm: (date: string) => void
  initialDate?: string
}) {
  const [displayMonth, setDisplayMonth] = useState(() => {
    if (initialDate) {
      const d = new Date(initialDate + "T00:00:00")
      return new Date(d.getFullYear(), d.getMonth(), 1)
    }
    return new Date()
  })
  const [selectedDate, setSelectedDate] = useState<string | null>(initialDate || null)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Get days for a month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 // Monday = 0

    const days = []
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    return days
  }

  const month1 = displayMonth
  const month2 = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1)

  const days1 = getDaysInMonth(month1)
  const days2 = getDaysInMonth(month2)

  const handlePrevMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1))
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const formatDisplayDate = (date: string) => {
    const d = new Date(date + "T00:00:00")
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const isDatePast = (date: Date) => {
    date.setHours(0, 0, 0, 0)
    return date < today
  }

  const isDateToday = (date: Date) => {
    date.setHours(0, 0, 0, 0)
    return date.getTime() === today.getTime()
  }

  const isDateSelected = (date: Date) => {
    const dateStr = formatDate(date)
    return dateStr === selectedDate
  }

  const renderMonth = (month: Date, days: (Date | null)[]) => (
    <div key={month.toISOString()} style={{ padding: '0 16px', boxSizing: 'border-box', width: '100%' }}>
      {/* Month header with navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <button
          type="button"
          onClick={handlePrevMonth}
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '1px solid #E2E8F0',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          <CaretLeft weight="light" className="h-4 w-4" style={{ color: '#1D215E' }} />
        </button>
        
        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1D215E', margin: 0, flex: 1, textAlign: 'center' }}>
          {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h4>

        <button
          type="button"
          onClick={handleNextMonth}
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '1px solid #E2E8F0',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          <CaretRight weight="light" className="h-4 w-4" style={{ color: '#1D215E' }} />
        </button>
      </div>

      {/* Day of week headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0', marginBottom: '12px' }}>
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div
            key={day}
            style={{
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 600,
              color: '#94A3B8',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '20px' }}>
        {days.map((date, idx) => {
          if (!date) {
            return <div key={`empty-${idx}`} style={{ height: '40px' }} />
          }

          const isPast = isDatePast(new Date(date))
          const isToday = isDateToday(new Date(date))
          const isSelected = isDateSelected(new Date(date))
          const dateStr = formatDate(date)

          return (
            <button
              key={dateStr}
              type="button"
              onClick={() => !isPast && setSelectedDate(dateStr)}
              disabled={isPast}
              style={{
                width: '100%',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: isToday ? '2px solid #1D215E' : 'none',
                background: isSelected ? '#B8913A' : isPast ? 'transparent' : 'transparent',
                color: isSelected ? 'white' : isPast ? '#CBD5E0' : '#1D215E',
                fontSize: '14px',
                fontWeight: isToday || isSelected ? 700 : 500,
                cursor: isPast ? 'default' : 'pointer',
                transition: 'background 200ms, color 200ms',
              }}
              onMouseEnter={(e) => {
                if (!isPast) {
                  e.currentTarget.style.background = '#F5F7FA'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )

  if (!open) return null

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      {/* Dark overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
        }}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          maxHeight: '90vh',
          overflow: 'hidden',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 250ms ease-out',
          padding: '0',
          boxSizing: 'border-box',
          overflowX: 'hidden',
          width: '100%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}</style>

        {/* Drag handle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '12px',
            paddingBottom: '8px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '4px',
              borderRadius: '2px',
              background: '#94A3B8',
            }}
          />
        </div>

        {/* Header */}
        <div
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid #E2E8F0',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1D215E',
              margin: '0 0 4px 0',
            }}
          >
            Select Date
          </h3>
          <p
            style={{
              fontSize: '12px',
              color: '#94A3B8',
              margin: 0,
            }}
          >
            Choose your service date
          </p>
        </div>

        {/* Calendar content - scrollable */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 16px',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          {renderMonth(month1, days1)}
          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: '#E2E8F0',
              margin: '0 20px 20px 20px',
            }}
          />
          {renderMonth(month2, days2)}
        </div>

        {/* Confirm button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            if (selectedDate) {
              onConfirm(selectedDate)
              onClose()
            }
          }}
          disabled={!selectedDate}
          style={{
            display: 'block',
            width: 'calc(100% - 32px)',
            margin: '0 16px 16px 16px',
            height: '48px',
            borderRadius: '10px',
            background: selectedDate ? '#B8913A' : 'rgba(184, 145, 58, 0.45)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '15px',
            border: 'none',
            cursor: selectedDate ? 'pointer' : 'not-allowed',
            boxSizing: 'border-box',
            flexShrink: 0
          }}
        >
          {selectedDate ? `Confirm — ${formatDisplayDate(selectedDate)}` : 'Select a date'}
        </button>
      </div>
    </div>,
    document.body
  )
}
function AirportSearchBottomSheet({
  open,
  onClose,
  onSelect,
}: {
  open: boolean
  onClose: () => void
  onSelect: (airport: Airport) => void
}) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  const filtered = query.trim() === ""
    ? AIRPORTS
    : AIRPORTS.filter(
        (a) =>
          a.city.toLowerCase().includes(query.toLowerCase()) ||
          a.code.toLowerCase().includes(query.toLowerCase()) ||
          a.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)

  if (!open) return null

  return createPortal(
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          maxHeight: "90vh",
          overflow: "hidden",
          zIndex: 9999,
          animation: "slideUp 250ms ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}</style>

        {/* Drag handle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "12px",
            paddingBottom: "8px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "4px",
              borderRadius: "2px",
              background: "#94A3B8",
            }}
          />
        </div>

        {/* Header with title */}
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "12px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1D215E",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Select Airport
          </h3>

          {/* Search input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "44px",
              borderRadius: "10px",
              border: "1.5px solid #E2E8F0",
              paddingLeft: "12px",
              paddingRight: "12px",
              background: "white",
              gap: "8px",
            }}
          >
            <Airplane
              weight="light"
              size={20}
              style={{ color: "#B8913A" }}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search airport or city..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "14px",
                color: "#1D215E",
              }}
            />
            {query && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setQuery("")
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0",
                }}
              >
                <X
                  className="h-4 w-4 shrink-0"
                  style={{ color: "#94A3B8" }}
                />
              </button>
            )}
          </div>
        </div>

        {/* Content - scrollable */}
        <div
          style={{
            overflowY: "auto",
            maxHeight: "calc(90vh - 160px)",
          }}
        >
          {query.trim() === "" && (
            <div
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "16px",
                marginBottom: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#94A3B8",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Trending Airports
              </p>
            </div>
          )}

          {filtered.length > 0 ? (
            filtered.map((airport) => (
              <button
                key={airport.code}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(airport)
                  onClose()
                }}
                style={{
                  width: "100%",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  gap: "12px",
                  borderBottom: "1px solid #E2E8F0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F5F7FA")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* Airport code badge */}
                <div
                  style={{
                    minWidth: "40px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#F5F7FA",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#1D215E",
                  }}
                >
                  {airport.code}
                </div>

                {/* City and country */}
                <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1D215E",
                      margin: "0",
                    }}
                  >
                    {airport.city}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#94A3B8",
                      margin: "0",
                    }}
                  >
                    {airport.country}
                  </p>
                </div>

                {/* Chevron right */}
<CaretDown
                  weight="light"
                  className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
                />
              </button>
            ))
          ) : (
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                fontSize: "14px",
                color: "#94A3B8",
              }}
            >
              No airports found
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

function AirportField({
  placeholder,
  value,
  onChange,
  onClear,
  label,
  containerStyle,
}: {
  placeholder: string
  value: Airport | null
  onChange: (a: Airport) => void
  onClear: () => void
  label: string | React.ReactNode
  containerStyle?: React.CSSProperties
}) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery("")
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const filtered = AIRPORTS.filter(
    (a) =>
      a.city.toLowerCase().includes(query.toLowerCase()) ||
      a.code.toLowerCase().includes(query.toLowerCase()) ||
      a.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <div
        className={cn(
          "flex cursor-text items-center gap-0.5 rounded-xl border-2 bg-card px-4 transition-colors",
          value ? "justify-center" : "",
          open ? "border-navy" : "border-border hover:border-slate-mid"
        )}
        style={{ height: '56px', ...containerStyle }}
        onClick={() => { if (!value) setOpen(true) }}
      >
        {!value && <span className="shrink-0 text-xs font-medium text-muted-foreground">{label}</span>}
        {value ? (
          <AirportPill airport={value} onClear={() => { onClear(); setQuery(""); }} />
        ) : (
          <input
            className="flex-1 min-w-0 bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground outline-none"
            placeholder={placeholder}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onFocus={() => setOpen(true)}
          />
        )}
      </div>
      {open && filtered.length > 0 && (
          <div className="absolute left-0 top-full z-[9999] mt-1.5 w-80 overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 py-2.5 border-b border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trending Airports</p>
          </div>
          {filtered.slice(0, 7).map((a) => (
            <button
              key={a.code}
              type="button"
              onMouseDown={() => { onChange(a); setOpen(false); setQuery("") }}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-xs font-bold text-navy">
                {a.code}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{a.city}</p>
                <p className="text-xs text-muted-foreground">{a.name}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function buildMonthGrid(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay() // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  // Convert Sunday=0 to Mon-based offset (Mon=0 … Sun=6)
  const offset = (firstDay === 0 ? 6 : firstDay - 1)
  const cells: (number | null)[] = Array(offset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

function MonthGrid({
  year, month, selected, today, onSelect,
}: {
  year: number; month: number; selected: string; today: string
  onSelect: (iso: string) => void
}) {
  const cells = buildMonthGrid(year, month)
  const monthName = new Date(year, month, 1).toLocaleString("default", { month: "long" })

  return (
    <div className="flex-1 min-w-0">
      <p className="mb-3 text-center text-sm font-bold text-foreground">
        <span className="rounded-lg bg-secondary px-3 py-1">{monthName} {year}</span>
      </p>
      <div className="grid grid-cols-7 gap-y-1">
        {DAYS.map((d) => (
          <div key={d} className="py-1 text-center text-xs font-medium text-muted-foreground">{d}</div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} />
          const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
          const isToday = iso === today
          const isSelected = iso === selected
          const isPast = iso < today
          return (
            <button
              key={iso}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(iso)}
              className={cn(
                "relative flex flex-col items-center justify-center rounded-lg py-1.5 text-sm font-semibold transition-colors",
                isPast && "cursor-not-allowed text-muted-foreground/30",
                !isPast && !isSelected && "hover:bg-secondary text-foreground",
                isSelected && "bg-blue text-primary-foreground",
                isToday && !isSelected && "bg-secondary",
              )}
            >
              {isToday && !isSelected && (
                <span className="absolute -top-0.5 text-[8px] font-medium text-muted-foreground leading-none">Today</span>
              )}
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DateField({ label, value, onChange, containerStyle }: { label: string; value: string | null; onChange: (v: string | null) => void; containerStyle?: React.CSSProperties }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const today = new Date().toISOString().split("T")[0]
  const now = new Date()
  const [viewYear, setViewYear] = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const next = viewMonth === 11 ? { year: viewYear + 1, month: 0 } : { year: viewYear, month: viewMonth + 1 }

  const displayValue = value && typeof value === 'string'
    ? new Date(value + "T00:00:00").toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    : ""

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-1 rounded-xl border-2 bg-card px-4 transition-colors hover:border-slate-mid",
          open ? "border-navy" : "border-border"
        )}
        style={{ height: '56px', ...containerStyle }}
        onClick={() => setOpen(v => !v)}
      >
        <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className={cn("text-sm font-medium", value ? "text-foreground" : "text-muted-foreground")}>
          {displayValue || label}
        </span>
      </div>

      {open && (
          <div className="absolute top-full left-0 z-[9999] mt-1.5 rounded-2xl border border-border bg-card p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
          style={{ minWidth: "560px" }}
        >
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevMonth}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary hover:bg-border transition-colors"
              aria-label="Previous month"
            >
              <CaretDown weight="light" className="h-4 w-4 -rotate-90" />
            </button>

            <div className="flex flex-1 gap-6">
              <MonthGrid year={viewYear} month={viewMonth} selected={value} today={today} onSelect={(iso) => { onChange(iso); setOpen(false) }} />
              <div className="w-px bg-border shrink-0" />
              <MonthGrid year={next.year} month={next.month} selected={value} today={today} onSelect={(iso) => { onChange(iso); setOpen(false) }} />
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary hover:bg-border transition-colors"
              aria-label="Next month"
            >
              <CaretDown weight="light" className="h-4 w-4 rotate-90" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function BookingWidget({ defaultAirport }: { defaultAirport?: { code: string; city: string } } = {}) {
  const router = useRouter()
  const [state, setState] = useState<BookingState>({
    serviceType: "arrival",
    service: "Meet & Greet",
    airport: defaultAirport || null,
    flightNumber: "",
    date: "",
    email: "",
    adults: 1,
    children: 0,
    infants: 0,
    cabinBags: 0,
    checkedBags: 0,
    travelClass: "Economy",
    connectionFlightNumber: "",
    connectionDate: "",
    addressValue: "",
    booked: false,
    booking: false,
  })

  const set = (patch: Partial<BookingState>) => setState((s) => ({ ...s, ...patch }))

  // Reset service when switching to Connection with Hotel Transfer selected
  useEffect(() => {
    if (state.serviceType === 'connection' && state.service === 'Hotel Transfer') {
      set({ service: '' })
    }
  }, [state.serviceType])

  // Reset address when service is not Hotel Transfer or journey type changes
  useEffect(() => {
    if (state.service !== 'Hotel Transfer' || state.serviceType === 'connection') {
      set({ addressValue: '' })
    }
  }, [state.service, state.serviceType])

  // Combined bottom sheet for both Direction and Service selection
  const [showAirportServiceSheet, setShowAirportServiceSheet] = useState(false)
  const [showPassengersSheet, setShowPassengersSheet] = useState(false)
  const [showDateSheet, setShowDateSheet] = useState(false)
  const [showAirportSearchSheet, setShowAirportSearchSheet] = useState(false)

  const handleBook = async () => {
    if (!state.airport || !state.date) return
    set({ booking: true })
    
    // Prepare booking data to pass to checkout
    const bookingData = {
      trip: {
        type: state.serviceType === 'connection' ? 'Connection' : 'Arrival',
        airport: `${state.airport.city} (${state.airport.code})`,
        arrivalFlight: state.flightNumber || '',
        departureFlight: state.connectionFlightNumber || '',
        date: new Date(state.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      },
      leadPassenger: {
        email: state.email,
        name: '',
        phone: '',
      },
      passengers: {
        adults: state.adults,
        children: state.children,
        infants: state.infants,
      },
      luggage: {
        checked: state.checked || 2,
        cabin: state.cabin || 1,
      },
      service: state.service,
    }
    
    // Store in sessionStorage to pass to checkout
    sessionStorage.setItem('bookingFormData', JSON.stringify(bookingData))
    
    // Redirect to checkout
    await new Promise((r) => setTimeout(r, 800))
    set({ booking: false })
    router.push('/checkout')
  }

  if (state.booked) {
    return (
      <div className="flex flex-col items-center gap-5 py-10 px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
          <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Booking Confirmed!</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Your {state.service} at {state.airport?.city} ({state.airport?.code}) has been booked.<br />
            A confirmation will be sent to your email.
          </p>
        </div>
        <div className="w-full max-w-xs rounded-xl border border-border bg-secondary/50 p-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Booking ref</span>
            <span className="font-bold text-foreground">APT-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Passengers</span>
            <span className="font-semibold text-foreground">{state.adults + state.children + state.infants}</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          {[{ icon: Shield, text: "Secure" }, { icon: Clock, text: "24/7 Support" }, { icon: Star, text: "4.9/5" }].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5"><Icon weight="light" className="h-3.5 w-3.5" />{text}</div>
          ))}
        </div>
        <button
          onClick={() => set({ booked: false, airport: null, date: "" })}
          className="text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
        >
          Book another service
        </button>
      </div>
    )
  }

  return (
    <>
      <style>{inputOverflowStyle}</style>
      <div className="md:hidden" style={{ padding: '0 4px', borderRadius: '16px' }}>
        {/* White card container - wraps all fields */}
        <div className="space-y-2" style={{ borderRadius: '16px', overflow: 'hidden', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>

            {/* Row 1: Arrival + Meet & Greet - Two containers in wrapper */}
            <div style={{ display: 'flex', height: '40px', borderRadius: '10px', border: '1.5px solid #E2E8F0', borderBottom: '1.5px solid #E2E8F0', overflow: 'visible', position: 'relative', zIndex: 2, marginBottom: '8px' }}>
              {/* Left container: Journey Type */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowAirportServiceSheet(true)
                }}
                style={{
                  all: 'unset',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  height: 'calc(100% - 0px)',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  userSelect: 'none',
                  pointerEvents: 'auto',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1D215E',
                  background: 'white',
                  transition: 'all 200ms',
                  zIndex: 10,
                  position: 'relative',
                  borderRadius: '10px 0 0 10px',
                  borderBottom: 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
              >
                <span>{state.serviceType === "arrival" ? "Arrival" : state.serviceType === "departure" ? "Departure" : "Connection"}</span>
                <CaretDown weight="light" className="h-3.5 w-3.5" style={{ color: '#94A3B8', marginLeft: '4px' }} />
              </button>

              {/* Vertical divider */}
              <div style={{ width: '1px', height: '100%', alignSelf: 'stretch', background: '#E2E8F0' }} />

              {/* Right container: Service */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowAirportServiceSheet(true)
                }}
                style={{
                  all: 'unset',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  height: 'calc(100% - 0px)',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  userSelect: 'none',
                  pointerEvents: 'auto',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1D215E',
                  background: 'white',
                  transition: 'all 200ms',
                  minWidth: '100px',
                  zIndex: 10,
                  position: 'relative',
                  borderRadius: '0 10px 10px 0',
                  borderBottom: 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{state.service}</span>
                <CaretDown weight="light" className="h-3.5 w-3.5" style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0 }} />
              </button>
            </div>

            {/* Row 2: Airport field - standalone full width */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowAirportSearchSheet(true)
              }}
              className="flex h-10 items-center rounded-[10px] border border-[#E2E8F0] px-2.5 focus-within:border-[#B8913A] transition-colors w-full"
              style={{ position: 'relative', zIndex: 1, marginTop: '0', background: 'white', cursor: 'pointer', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent', userSelect: 'none' }}
            >
              {state.serviceType === "connection" ? (
                <>
                  <AirplaneLanding weight="light" className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)', marginRight: '4px' }} />
                  <AirplaneTakeoff weight="light" className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)', marginRight: '8px' }} />
                </>
              ) : state.serviceType === "departure" ? (
                <AirplaneTakeoff weight="light" className="h-[13px] w-[13px] mr-1.5 shrink-0" style={{ color: 'var(--gold)' }} />
              ) : (
                <AirplaneLanding weight="light" className="h-[13px] w-[13px] mr-1.5 shrink-0" style={{ color: 'var(--gold)' }} />
              )}
              <span className="flex-1 min-w-0 text-left text-xs" style={{ color: state.airport ? '#1D215E' : '#94A3B8' }}>
                {state.airport ? `${state.airport.code} - ${state.airport.city}` : (state.serviceType === "connection" ? "Airport of service" : "Airport or city")}
              </span>
              {state.airport && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    set({ airport: null })
                  }}
                  className="ml-1.5 text-[#94A3B8] hover:text-[#1D215E] shrink-0 hidden"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </button>

            {/* Row 3: Flight # - splits into two fields for Connection */}
            {state.serviceType !== 'connection' ? (
              <div className="flex h-10 items-center rounded-[10px] border border-[#E2E8F0] px-2.5">
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#1D215E', flexShrink: 0, whiteSpace: 'nowrap', marginRight: '4px' }}>Flight #</label>
                <input
                  type="text"
                  value={state.flightNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                    set({ flightNumber: value })
                  }}
                  placeholder="e.g. BA206"
                  maxLength={6}
                  className="flex-1 min-w-0 bg-transparent text-[12px] text-[#1D215E] placeholder:text-[#94A3B8] outline-none"
                />
              </div>
            ) : (
              <>
                {/* Arriving flight # for Connection */}
                <div style={{position:'relative', display:'flex', alignItems:'center'}}>
                  <AirplaneLanding weight="light" size={16} color="#1D215E" style={{position:'absolute', left:'12px', zIndex:1}} />
                  <input
                    type="text"
                    value={state.flightNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                      set({ flightNumber: value })
                    }}
                    placeholder="Arrival Flight #"
                    maxLength={6}
                    style={{
                      width:'100%',
                      height:'40px',
                      paddingLeft:'36px',
                      border:'1.5px solid #E2E8F0',
                      borderRadius:'10px',
                      fontSize:'12px',
                      backgroundColor: 'white',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                
                {/* Departing flight # for Connection */}
                <div style={{position:'relative', display:'flex', alignItems:'center'}}>
                  <AirplaneTakeoff weight="light" size={16} color="#1D215E" style={{position:'absolute', left:'12px', zIndex:1}} />
                  <input
                    type="text"
                    value={state.connectionFlightNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                      set({ connectionFlightNumber: value })
                    }}
                    placeholder="Departure Flight #"
                    maxLength={6}
                    style={{
                      width:'100%',
                      height:'40px',
                      paddingLeft:'36px',
                      border:'1.5px solid #E2E8F0',
                      borderRadius:'10px',
                      fontSize:'12px',
                      backgroundColor: 'white',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </>
            )}

            {/* Conditional Address Field - Show for Hotel Transfer */}
            {state.service === 'Hotel Transfer' && state.serviceType !== 'connection' && (
              <div className="flex h-10 items-center rounded-[10px] border border-[#E2E8F0] px-2.5">
              <input
                type="text"
                value={state.addressValue}
                onChange={(e) => set({ addressValue: e.target.value.slice(0, 100) })}
                placeholder={state.serviceType === "arrival" ? "Drop off address" : "Pick up address"}
                  maxLength={100}
                  className="flex-1 min-w-0 bg-transparent text-[12px] text-[#1D215E] placeholder:text-[#94A3B8] outline-none"
                />
              </div>
            )}

            {/* Row 4: Select date - opens bottom sheet */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowDateSheet(true)
              }}
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
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              <Calendar className="h-[14px] w-[14px]" style={{ color: '#94A3B8', flexShrink: 0 }} />
              <span style={{ marginLeft: '6px', fontSize: '12px', color: '#1D215E', flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {state.date && typeof state.date === 'string' ? new Date(state.date + "T00:00:00").toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Select date"}
              </span>
              <CaretDown weight="light" className="h-3 w-3" style={{ color: '#94A3B8', marginLeft: '4px', flexShrink: 0 }} />
            </button>

            {/* Row 5: Passengers + Luggage - opens bottom sheet */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowPassengersSheet(true)
              }}
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
                overflow: 'visible',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                background: 'white',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F7FA')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', gap: '4px', borderRight: '1px solid #E2E8F0' }}>
                <Users className="h-[13px] w-[13px]" style={{ color: '#94A3B8', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{state.adults + state.children + state.infants} Pax</span>
              </div>
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', gap: '2px' }}>
                <Backpack weight="light" className="h-[13px] w-[13px]" style={{ color: '#94A3B8', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{state.cabinBags}</span>
                <Suitcase weight="light" className="h-[13px] w-[13px]" style={{ color: '#94A3B8', flexShrink: 0, marginLeft: '4px' }} />
                <span style={{ fontSize: '12px', color: '#1D215E', fontWeight: 500 }}>{state.checkedBags}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                <CaretDown weight="light" className="h-3 w-3" style={{ color: '#94A3B8' }} />
              </div>
            </button>

            {/* Row 6: Email field - standalone full width */}
            <div style={{ border: '1.5px solid #E2E8F0', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 12px', height: '40px' }}>
              <Envelope weight="light" className="mr-1.5 h-[13px] w-[13px] shrink-0 text-[#94A3B8]" />
              <input
                type="text"
                value={state.email}
                onChange={(e) => set({ email: e.target.value })}
                placeholder="your@email.com"
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                data-form-type="other"
                data-email-field="true"
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  background: 'transparent',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  width: '100%',
                  color: '#1D215E',
                  fontSize: '12px',
                  marginLeft: '8px',
                  padding: '0',
                  WebkitTextFillColor: '#1D215E'
                }}
              />
            </div>

            {/* CTA Button - Full width inside white card */}
            <div className="flex justify-center pt-2">
              {(() => {
                const isFormValid = Boolean(
                  state.airport &&
                  state.airport.code?.trim() !== '' &&
                  state.date &&
                  state.flightNumber &&
                  state.flightNumber.trim().length >= 2 &&
                  state.adults >= 1 &&
                  state.email &&
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())
                );
                
                const buttonColor = isFormValid ? '#B8913A' : 'rgba(184, 145, 58, 0.45)';

                return (
                  <button
                    type="button"
                    onClick={isFormValid ? handleBook : undefined}
                    disabled={
                      !state.airport ||
                      !state.flightNumber ||
                      !state.date ||
                      !state.email ||
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) ||
                      (state.serviceType === "connection" && (!state.connectionFlightNumber || !state.connectionDate)) ||
                      state.booking
                    }
                    className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full text-sm font-bold text-white transition-all active:scale-[0.98]"
                    style={{ 
                      backgroundColor: buttonColor,
                      transitionDuration: '300ms',
                      transitionProperty: 'background-color',
                      transitionTimingFunction: 'ease',
                      cursor: isFormValid ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {state.booking ? (
                      <><Spinner weight="light" className="h-4 w-4 animate-spin" /> Checking...</>
                    ) : (
                      <>Get a Quote</>
                    )}
                  </button>
                );
              })()}
            </div>
        </div>
      </div>

      {/* Tablet Layout - Portrait (768px-1023px) and Landscape (1024px-1179px) */}
      <div className="hidden md:block lg:hidden p-4" style={{ borderRadius: '16px', overflow: 'hidden', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {/* Row 1: Same as desktop */}
        <div className="flex flex-wrap items-center gap-1 w-full mb-3">
          <div style={{ height: '48px', border: '1.5px solid #E2E8F0', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingRight: '12px', boxSizing: 'border-box' }}>
            <Dropdown
              label="Service type"
              value={state.serviceType}
              onChange={(v) => set({ serviceType: v })}
              options={SERVICE_TYPES}
            />
          </div>
          <div className="h-4 w-px bg-border mx-1" />
          <div style={{ height: '48px', border: '1.5px solid #E2E8F0', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingRight: '12px', boxSizing: 'border-box' }}>
            <Dropdown
              label="Service"
              value={state.service}
              onChange={(v) => set({ service: v })}
              options={(state.serviceType === 'connection' 
                ? ['Meet & Greet', 'VIP Platinum'] 
                : SERVICE_OPTIONS
              ).map((s) => ({ value: s, label: s }))}
            />
          </div>
          <div className="h-4 w-px bg-border mx-1" />
          <div style={{ height: '48px', border: '1.5px solid #E2E8F0', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingRight: '12px', boxSizing: 'border-box' }}>
            <PassengersBagsDropdown
              adults={state.adults}
              children={state.children}
              infants={state.infants}
              cabinBags={state.cabinBags}
              checkedBags={state.checkedBags}
              travelClass={state.travelClass}
              onChange={set}
            />
          </div>
        </div>

        {/* Tablet Portrait: 2 rows with 2 fields each / Tablet Landscape: 1 row with 4 fields */}
        {/* Row 2A & 2B for portrait, combined Row 2 for landscape */}
        <div className="flex flex-col lg:flex-row gap-2 mb-3">
          <div className="flex gap-2 flex-1">
            {/* Field 1: Airport */}
            <div className="flex-1 min-w-0">
              <AirportField
                label={
                  state.serviceType === "connection" ? (
                    <Airplane weight="light" className="h-4 w-4" />
                  ) : state.serviceType === "departure" ? (
                    <AirplaneTakeoff weight="light" className="h-4 w-4" />
                  ) : (
                    <AirplaneLanding weight="light" className="h-4 w-4" />
                  )
                }
                placeholder={state.serviceType === "connection" ? "Airport" : "Airport or city"}
                value={state.airport}
                onChange={(a) => set({ airport: a })}
                onClear={() => set({ airport: null })}
                containerStyle={{
                  height: '48px',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box',
                  boxShadow: 'none'
                }}
              />
            </div>
            {/* Field 2: Flight # */}
            <div className="flex-1 min-w-0">
              {state.serviceType !== 'connection' ? (
                <div className="flex items-center rounded-[10px] border border-[#E2E8F0] px-4" style={{ height: '48px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
                  <input
                    type="text"
                    value={state.flightNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                      set({ flightNumber: value })
                    }}
                    placeholder="Flight #"
                    maxLength={6}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      backgroundColor: 'transparent',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#1D215E',
                      outline: 'none',
                      border: 'none'
                    }}
                  />
                </div>
              ) : (
                <div style={{position:'relative', display:'flex', alignItems:'center'}}>
                  <AirplaneLanding weight="light" size={16} color="#1D215E" style={{position:'absolute', left:'12px', zIndex:1}} />
                  <input
                    type="text"
                    value={state.flightNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                      set({ flightNumber: value })
                    }}
                    placeholder="Flight #"
                    maxLength={6}
                    style={{
                      width:'100%',
                      height:'48px',
                      paddingLeft:'36px',
                      paddingRight:'16px',
                      border:'1.5px solid #E2E8F0',
                      borderRadius:'10px',
                      fontSize:'14px',
                      fontWeight: 400,
                      color:'#1D215E',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Connection date row - only show for landscape when connection */}
        {state.serviceType === "connection" && (
          <div className="hidden lg:flex gap-2 mb-3">
            <div className="flex-1 min-w-0">
              <DateField
                label="Departure date"
                value={state.connectionDate}
                onChange={(v) => set({ connectionDate: v })}
                containerStyle={{
                  height: '48px',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box',
                  boxShadow: 'none'
                }}
              />
            </div>
            <div style={{position:'relative', display:'flex', alignItems:'center', flex: 1}}>
              <AirplaneLanding size={16} color="#1D215E" style={{position:'absolute', left:'12px', zIndex:1}} />
              <input
                type="text"
                value={state.connectionFlightNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                  set({ connectionFlightNumber: value })
                }}
                placeholder="Flight #"
                maxLength={6}
                style={{
                  width:'100%',
                  height:'48px',
                  paddingLeft:'36px',
                  paddingRight:'16px',
                  border:'1.5px solid #E2E8F0',
                  borderRadius:'10px',
                  fontSize:'14px',
                  fontWeight: 400,
                  color:'#1D215E',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div style={{flex: 2}}></div>
          </div>
        )}

        {/* Connection date/flight for portrait view */}
        {state.serviceType === "connection" && (
          <div className="flex gap-2 mb-3 lg:hidden">
            <div className="flex-1 min-w-0">
              <DateField
                label="Departure date"
                value={state.connectionDate}
                onChange={(v) => set({ connectionDate: v })}
                containerStyle={{
                  height: '48px',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box',
                  boxShadow: 'none'
                }}
              />
            </div>
            <div style={{position:'relative', display:'flex', alignItems:'center', flex: 1}}>
              <AirplaneLanding size={16} color="#1D215E" style={{position:'absolute', left:'12px', zIndex:1}} />
              <input
                type="text"
                value={state.connectionFlightNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                  set({ connectionFlightNumber: value })
                }}
                placeholder="Flight #"
                maxLength={6}
                style={{
                  width:'100%',
                  height:'48px',
                  paddingLeft:'36px',
                  paddingRight:'16px',
                  border:'1.5px solid #E2E8F0',
                  borderRadius:'10px',
                  fontSize:'14px',
                  fontWeight: 400,
                  color:'#1D215E',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        )}

        {/* Conditional Address Field */}
        {state.service === 'Hotel Transfer' && state.serviceType !== 'connection' && (
          <div className="mb-3">
            <input
              type="text"
              value={state.addressValue}
              onChange={(e) => set({ addressValue: e.target.value.slice(0, 100) })}
              placeholder={state.serviceType === "arrival" ? "Drop off address" : "Pick up address"}
              maxLength={100}
              style={{
                width: '50%',
                height: '48px',
                border: '1.5px solid #E2E8F0',
                borderRadius: '10px',
                padding: '0 16px',
                fontSize: '14px',
                color: '#1D215E',
                backgroundColor: '#FFFFFF',
                boxSizing: 'border-box',
                outline: 'none',
                boxShadow: 'none'
              }}
            />
          </div>
        )}

        {/* Get a Quote Button */}
        <button
          type="button"
          onClick={handleBook}
          disabled={
            !state.airport ||
            !state.flightNumber ||
            !state.date ||
            !state.email ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) ||
            (state.serviceType === "connection" && (!state.connectionFlightNumber || !state.connectionDate)) ||
            state.booking
          }
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: state.airport && state.flightNumber && state.date && state.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) && (state.serviceType !== "connection" || (state.connectionFlightNumber && state.connectionDate)) ? '#B8913A' : 'rgba(184, 145, 58, 0.45)',
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            cursor: state.airport && state.flightNumber && state.date && state.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) && (state.serviceType !== "connection" || (state.connectionFlightNumber && state.connectionDate)) ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background 300ms ease'
          }}
        >
          {state.booking ? (
            <><Spinner weight="light" className="h-5 w-5 animate-spin" /> Checking...</>
          ) : (
            <>Get a Quote</>
          )}
        </button>

        {/* Disclaimer */}
        <p className="text-right text-xs text-[#94A3B8] mt-3">
          By clicking "Get a Quote" you agree to our{" "}
          <a href="https://airporteo.com/terms" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">
            Terms & Conditions
          </a>
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block p-3 space-y-3">
        {/* Top filter row */}
        <div className="flex flex-wrap items-center gap-1 w-full">
          <Dropdown
            label="Service type"
            value={state.serviceType}
            onChange={(v) => set({ serviceType: v })}
            options={SERVICE_TYPES}
          />
          <div className="h-4 w-px bg-border mx-1" />
          <Dropdown
            label="Service"
            value={state.service}
            onChange={(v) => set({ service: v })}
            options={(state.serviceType === 'connection' 
              ? ['Meet & Greet', 'VIP Platinum'] 
              : SERVICE_OPTIONS
            ).map((s) => ({ value: s, label: s }))}
          />
          <div className="h-4 w-px bg-border mx-1" />
          <PassengersBagsDropdown
            adults={state.adults}
            children={state.children}
            infants={state.infants}
            cabinBags={state.cabinBags}
            checkedBags={state.checkedBags}
            travelClass={state.travelClass}
            onChange={set}
          />
        </div>

        {/* Main input row */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <div className="flex-1 min-w-0">
            <AirportField
            label={
              state.serviceType === "connection" ? (
                <Airplane weight="light" className="h-4 w-4" />
              ) : state.serviceType === "departure" ? (
                <AirplaneLanding className="h-4 w-4" />
              ) : (
                <AirplaneLanding className="h-4 w-4" />
              )
            }
                placeholder={state.serviceType === "connection" ? "Airport" : "Airport or city"}
            value={state.airport}
            onChange={(a) => set({ airport: a })}
              onClear={() => set({ airport: null })}
            />
          </div>

          {/* Flight # */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="relative flex h-14 min-w-0 w-full items-center gap-1 rounded-xl border-2 border-border bg-card px-4 focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(219,38,35,0.1)] transition-all hover:border-slate-mid">
              {state.serviceType === "connection" ? (
                <AirplaneLanding size={16} color="#1D215E" style={{ position: 'absolute', left: '12px', flexShrink: 0 }} />
              ) : null}
              <input
                type="text"
                value={state.flightNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                  set({ flightNumber: value })
                }}
                placeholder="Flight #"
                maxLength={6}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: 'transparent',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1D215E',
                  outline: 'none',
                  border: 'none',
                  paddingLeft: state.serviceType === "connection" ? '36px' : '0'
                }}
              />
            </div>
            {state.serviceType === "connection" && (
              <div className="relative flex h-14 min-w-0 w-full items-center gap-1 rounded-xl border-2 border-border bg-card px-4 focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(219,38,35,0.1)] transition-all hover:border-slate-mid">
                <AirplaneLanding size={16} color="#1D215E" style={{ position: 'absolute', left: '12px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={state.connectionFlightNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z0-9]/g, "").slice(0, 6)
                    set({ connectionFlightNumber: value })
                  }}
                placeholder="Flight #"
                  maxLength={6}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: 'transparent',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#1D215E',
                    outline: 'none',
                    border: 'none',
                    paddingLeft: '36px'
                  }}
                />
              </div>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <DateField
              label="dd/mm/yyyy"
              value={state.date}
              onChange={(v) => set({ date: v })}
            />
            {state.serviceType === "connection" && (
              <DateField
                label="dd/mm/yyyy"
                value={state.connectionDate}
                onChange={(v) => set({ connectionDate: v })}
              />
            )}
          </div>

          {/* Email */}
          <div style={{ border: '1.5px solid #E2E8F0', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 12px', height: '56px', minWidth: '0', flex: '1', gap: '8px' }}>
              <Envelope weight="light" className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="text"
              value={state.email}
              onChange={(e) => set({ email: e.target.value })}
              placeholder="Email"
              autoComplete="new-password"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-form-type="other"
              data-email-field="true"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                background: 'transparent',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                width: '100%',
                color: '#1D215E',
                fontSize: '14px',
                fontWeight: '500',
                padding: '0',
                WebkitTextFillColor: '#1D215E'
              }}
            />
          </div>

          <button
            type="button"
            onClick={handleBook}
            disabled={
              !state.airport ||
              !state.flightNumber ||
              !state.date ||
              !state.email ||
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email) ||
              (state.serviceType === "connection" && (!state.connectionFlightNumber || !state.connectionDate)) ||
              state.booking
            }
            className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl px-7 text-base font-bold text-primary-foreground shadow-lg transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none sm:w-auto w-full"
            style={{
              backgroundImage: 'linear-gradient(90deg, #B8913A, #B8913A)',
              boxShadow: '0 10px 25px rgba(161, 98, 7, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(161, 98, 7, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(161, 98, 7, 0.15)';
            }}
          >
            {state.booking ? (
              <><Spinner weight="light" className="h-5 w-5 animate-spin" /> Checking...</>
            ) : (
              <>Get a Quote</>
            )}
          </button>
        </div>

        {/* Conditional Address Field - Show for Hotel Transfer on separate row */}
        {state.service === 'Hotel Transfer' && state.serviceType !== 'connection' && (
          <div style={{ display: 'flex', marginTop: '8px' }}>
            <input
              type="text"
              value={state.addressValue}
              onChange={(e) => set({ addressValue: e.target.value.slice(0, 100) })}
              placeholder={state.serviceType === "arrival" ? "Drop off address" : "Pick up address"}
              maxLength={100}
              style={{
                width: 'calc(40% - 4px)',
                height: '48px',
                border: '1.5px solid #E2E8F0',
                borderRadius: '10px',
                padding: '0 16px',
                fontSize: '14px',
                color: '#1D215E',
                boxSizing: 'border-box'
              }}
            />
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-right text-xs text-muted-foreground mt-4">
          By clicking "Get a Quote" you agree to our{" "}
          <a href="https://airporteo.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-medium">
            Terms & Conditions
          </a>
        </p>
      </div>

      {/* Bottom Sheets for Mobile */}
      
      {/* Combined Airport Service Sheet - Journey Type + Service Selection */}
      {showAirportServiceSheet && createPortal(
        <div>
          {/* Dark overlay */}
          <div 
            onClick={() => setShowAirportServiceSheet(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 9998
            }} 
          />
          {/* Bottom sheet */}
          <BottomSheet 
            open={showAirportServiceSheet} 
            onClose={() => setShowAirportServiceSheet(false)} 
            title="Your Airport Service"
          >
            <div style={{ padding: '16px' }} onClick={(e) => e.stopPropagation()}>
              {/* SECTION 1: JOURNEY TYPE */}
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.08em' }}>
                  Journey Type
                </label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {[
                  { value: 'arrival', label: 'Arrival', desc: 'Incoming flight', icon: AirplaneLanding },
                  { value: 'departure', label: 'Departure', desc: 'Outgoing flight', icon: AirplaneTakeoff },
                  { value: 'connection', label: 'Connection', desc: 'Connecting flight', icon: ArrowsDownUp }
                ].map(({ value, label, desc, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => set({ serviceType: value })}
                    style={{
                      width: '100%',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 14px',
                      borderRadius: '10px',
                      border: state.serviceType === value ? '3px solid #B8913A' : '1.5px solid #E2E8F0',
                      background: state.serviceType === value ? '#FFFBF0' : 'white',
                      cursor: 'pointer',
                      transition: 'all 200ms',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      if (state.serviceType !== value) {
                        e.currentTarget.style.background = '#F5F7FA'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (state.serviceType !== value) {
                        e.currentTarget.style.background = 'white'
                      }
                    }}
                  >
                    <span style={{ color: '#B8913A', flexShrink: 0, display: 'flex' }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span style={{ flex: 1, marginLeft: '12px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: state.serviceType === value ? '#B8913A' : '#1D215E' }}>
                        {label}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>
                        {desc}
                      </div>
                    </span>
                    {state.serviceType === value && <CheckCircle weight="light" className="h-5 w-5" style={{ color: '#B8913A', flexShrink: 0 }} />}
                  </button>
                ))}
              </div>

              {/* DIVIDER */}
              <div style={{ height: '1px', background: '#E2E8F0', margin: '16px 0' }} />

              {/* SECTION 2: SELECT SERVICE */}
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.08em' }}>
                  Select Service
                </label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {(() => {
                  // Compute available services based on journey type
                  const availableServices = state.serviceType === 'connection'
                    ? ['Meet & Greet', 'VIP Platinum']
                    : ['Meet & Greet', 'VIP Platinum', 'Hotel Transfer']
                  
                  // Reset service if it's "Hotel Transfer" and user switches to "Connection"
                  if (state.serviceType === 'connection' && state.service === 'Hotel Transfer') {
                    set({ service: '' })
                  }
                  
                  return [
                    { value: 'Meet & Greet', label: 'Meet & Greet', desc: 'Personal airport escort', icon: Handshake },
                    { value: 'VIP Platinum', label: 'VIP Platinum', desc: 'Ultimate VIP experience', icon: Crown },
                    { value: 'Hotel Transfer', label: 'Hotel Transfer', desc: 'Door to door service', icon: Car }
                  ]
                    .filter(option => availableServices.includes(option.value))
                    .map(({ value, label, desc, icon: Icon }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => set({ service: value })}
                        style={{
                          width: '100%',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: state.service === value ? '3px solid #B8913A' : '1.5px solid #E2E8F0',
                          background: state.service === value ? '#FFFBF0' : 'white',
                          cursor: 'pointer',
                          transition: 'all 200ms',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => {
                          if (state.service !== value) {
                            e.currentTarget.style.background = '#F5F7FA'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (state.service !== value) {
                            e.currentTarget.style.background = 'white'
                          }
                        }}
                      >
                        <span style={{ color: '#B8913A', flexShrink: 0, display: 'flex' }}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span style={{ flex: 1, marginLeft: '12px' }}>
                          <div style={{ fontSize: '14px', fontWeight: 'bold', color: state.service === value ? '#B8913A' : '#1D215E' }}>
                            {label}
                          </div>
                          <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>
                            {desc}
                          </div>
                        </span>
                        {state.service === value && <CheckCircle weight="light" size={20} className="h-5 w-5" style={{ color: '#B8913A', flexShrink: 0 }} />}
                      </button>
                    ))
                })()}
              </div>

              {/* BOTTOM BUTTONS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowAirportServiceSheet(false)
                  }}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '10px',
                    border: '1.5px solid #1D215E',
                    background: 'white',
                    color: '#1D215E',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 200ms'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F5F7FA'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowAirportServiceSheet(false)
                  }}
                  disabled={!state.serviceType || !state.service}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '10px',
                    border: 'none',
                    background: (state.serviceType && state.service) ? '#B8913A' : 'rgba(184, 145, 58, 0.45)',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor: (state.serviceType && state.service) ? 'pointer' : 'not-allowed',
                    transition: 'background-color 300ms ease, box-shadow 300ms ease',
                    boxShadow: (state.serviceType && state.service) ? '0 4px 12px rgba(219, 38, 35, 0.4)' : 'none',
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </BottomSheet>
        </div>,
        document.body
      )}

      {/* Passengers & Luggage Sheet */}
      {showPassengersSheet && createPortal(
        <div>
          {/* Dark overlay */}
          <div 
            onClick={() => setShowPassengersSheet(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 9998
            }} 
          />
          {/* Bottom sheet */}
          <BottomSheet 
            open={showPassengersSheet} 
            onClose={() => setShowPassengersSheet(false)} 
            title="Passengers & Luggage"
          >
            <div className="py-2" onClick={(e) => e.stopPropagation()}>
              <SheetCounter
                label="Adults"
                value={state.adults}
                onChange={(v) => set({ adults: v })}
                min={1}
                max={10}
              />
              <SheetCounter
                label="Children (2-11)"
                value={state.children}
                onChange={(v) => set({ children: v })}
                min={0}
                max={10}
              />
              <SheetCounter
                label="Infants (0-2)"
                value={state.infants}
                onChange={(v) => set({ infants: v })}
                min={0}
                max={5}
              />
              <div className="h-3" />
              <SheetCounter
                label="Checked Bags"
                value={state.checkedBags}
                onChange={(v) => set({ checkedBags: v })}
                min={0}
                max={10}
              />
              <SheetCounter
                label="Cabin Bags"
                value={state.cabinBags}
                onChange={(v) => set({ cabinBags: v })}
                min={0}
                max={10}
              />
            </div>
            <div className="p-4 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  state.adults >= 1 && setShowPassengersSheet(false)
                }}
                disabled={state.adults < 1}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '10px',
                  border: 'none',
                  background: state.adults >= 1 ? '#B8913A' : 'rgba(184, 145, 58, 0.45)',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: state.adults >= 1 ? 'pointer' : 'default',
                  boxShadow: state.adults >= 1 ? '0 4px 12px rgba(219, 38, 35, 0.4)' : 'none',
                  transition: 'background 300ms ease, color 300ms ease, box-shadow 300ms ease',
                }}
              >
                Confirm
              </button>
            </div>
          </BottomSheet>
        </div>,
        document.body
      )}

      {/* Date Picker Bottom Sheet */}
      <DatePickerBottomSheet
        open={showDateSheet}
        onClose={() => setShowDateSheet(false)}
        onConfirm={(date) => set({ date })}
        initialDate={state.date && typeof state.date === 'string' ? state.date : undefined}
      />

      {/* Airport Search Sheet */}
      <AirportSearchBottomSheet
        open={showAirportSearchSheet}
        onClose={() => setShowAirportSearchSheet(false)}
        onSelect={(airport) => set({ airport })}
      />
    </>
  )
}
