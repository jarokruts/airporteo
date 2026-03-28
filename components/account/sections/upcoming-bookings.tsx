'use client'

import { Clock, User, Suitcase } from '@phosphor-icons/react'

export function UpcomingBookingsSection() {
  const bookings = [
    {
      id: 1,
      airport: 'LHR',
      airportName: 'London Heathrow',
      terminal: 'T5',
      date: '28 Mar 2026',
      time: '14:30',
      flight: 'BA206',
      passengers: 2,
      bags: 3,
      services: ['Meet & Greet', 'Fast Track', 'Porter'],
      status: 'today',
      isToday: true,
    },
    {
      id: 2,
      airport: 'DXB',
      airportName: 'Dubai International',
      terminal: 'T3',
      date: '15 Apr 2026',
      time: '08:15',
      flight: 'EK073',
      passengers: 1,
      bags: 2,
      services: ['VIP Suite', 'Fast Track', 'Transfer'],
      status: 'confirmed',
      isToday: false,
    },
  ]

  return (
    <div className="space-y-4">
      {bookings.map((booking, idx) => (
        <div
          key={booking.id}
          style={{
            background: '#ffffff',
            border: booking.isToday ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(0,0,0,0.07)',
            borderLeft: booking.isToday ? '3px solid #d4a04a' : '3px solid transparent',
            borderRadius: '12px',
            padding: '24px 28px',
            opacity: 0,
            transform: 'translateY(12px)',
            animation: `fadeInUp 0.4s ease forwards`,
            animationDelay: `${idx * 0.1}s`,
          }}
          className="hover:border-[rgba(0,0,0,0.12)] transition-colors"
        >
          {/* Header Row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '4px' }}>
                {booking.airport} {booking.airportName} — Meet & Greet
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>
                {booking.date} • Flight {booking.flight}
              </p>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: booking.status === 'today' ? '6px 12px' : '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                background:
                  booking.status === 'today'
                    ? 'rgba(212,160,74,0.08)'
                    : booking.status === 'confirmed'
                      ? 'rgba(26,138,92,0.08)'
                      : 'rgba(198,125,32,0.08)',
                color:
                  booking.status === 'today'
                    ? '#d4a04a'
                    : booking.status === 'confirmed'
                      ? '#1a8a5c'
                      : '#c67d20',
                border:
                  booking.status === 'today'
                    ? '1px solid rgba(212,160,74,0.2)'
                    : booking.status === 'confirmed'
                      ? '1px solid rgba(26,138,92,0.15)'
                      : '1px solid rgba(198,125,32,0.15)',
                animation:
                  booking.status === 'today'
                    ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    : 'none',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'currentColor',
                }}
              />
              {booking.status === 'today' ? 'Today' : booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
            </div>
          </div>

          {/* Body - Booking Details */}
          <div className="flex gap-8 flex-col lg:flex-row" style={{ gap: '32px' }}>
            {/* Left: Route Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '80px' }} className="lg:flex-col flex-row">
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a2e', letterSpacing: '1px' }}>
                  {booking.airport}
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(26,26,46,0.55)', marginTop: '2px' }}>
                  {booking.airportName}
                </p>
                <p style={{ fontSize: '10px', color: 'rgba(26,26,46,0.35)', marginTop: '2px', fontWeight: 500 }}>
                  {booking.terminal}
                </p>
              </div>
              <div 
                style={{ 
                  width: '2px',
                  height: '40px',
                  background: 'rgba(29,33,94,0.1)',
                }}
                className="hidden lg:block"
              />
              <div 
                style={{ 
                  height: '2px',
                  width: '40px',
                  background: 'rgba(29,33,94,0.1)',
                }}
                className="lg:hidden"
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#1a1a2e',
                }}
              />
            </div>

            {/* Right: Details Column */}
            <div className="flex-1" style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
              {/* Meta Row */}
              <div className="flex flex-wrap gap-2 lg:gap-6" style={{ gap: '8px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: 'rgba(26,26,46,0.35)' }} />
                  <span style={{ fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>Arrival {booking.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={16} style={{ color: 'rgba(26,26,46,0.35)' }} />
                  <span style={{ fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>
                    {booking.passengers} Passenger{booking.passengers > 1 ? 's' : ''}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Suitcase size={16} style={{ color: 'rgba(26,26,46,0.35)' }} />
                  <span style={{ fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>
                    {booking.bags} Bag{booking.bags > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2">
                {booking.services.map((service) => (
                  <span
                    key={service}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(29,33,94,0.06)',
                      color: '#1D215E',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2 flex-wrap">
                {booking.isToday ? (
                  <>
                    <button
                      style={{
                        background: '#1D215E',
                        color: '#ffffff',
                        fontSize: '13px',
                        fontWeight: 600,
                        padding: '9px 18px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      className="hover:opacity-90 flex-1 sm:flex-none"
                    >
                      Contact Greeter
                    </button>
                    <button
                      style={{
                        background: 'transparent',
                        color: '#1D215E',
                        fontSize: '13px',
                        fontWeight: 600,
                        padding: '9px 18px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0,0,0,0.07)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      className="hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.02)] flex-1 sm:flex-none"
                    >
                      View Details
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      style={{
                        background: 'transparent',
                        color: '#1D215E',
                        fontSize: '13px',
                        fontWeight: 600,
                        padding: '9px 18px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0,0,0,0.07)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      className="hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.02)] flex-1 sm:flex-none"
                    >
                      Modify Booking
                    </button>
                    <button
                      style={{
                        background: 'transparent',
                        color: '#1D215E',
                        fontSize: '13px',
                        fontWeight: 600,
                        padding: '9px 18px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0,0,0,0.07)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      className="hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.02)] flex-1 sm:flex-none"
                    >
                      View Details
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
