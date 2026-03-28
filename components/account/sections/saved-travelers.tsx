'use client'

import { Plus } from '@phosphor-icons/react'

export function SavedTravelersSection() {
  const travelers = [
    {
      id: 1,
      initials: 'SR',
      name: 'Sarah Roberts',
      relationship: 'Wife',
      passport: 'UK Passport',
      dob: '15 May 1988',
      specialNeeds: null,
    },
    {
      id: 2,
      initials: 'JR',
      name: 'James Roberts',
      relationship: 'Son',
      passport: 'UK Passport',
      dob: '22 Sep 2015',
      specialNeeds: null,
    },
    {
      id: 3,
      initials: 'ER',
      name: 'Eleanor Roberts',
      relationship: 'Mother',
      passport: 'UK Passport',
      dob: '03 Jan 1955',
      specialNeeds: 'Wheelchair assistance',
    },
  ]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
        opacity: 0,
        transform: 'translateY(12px)',
        animation: 'fadeInUp 0.4s ease forwards',
      }}
    >
      {/* Traveler Cards */}
      {travelers.map((traveler) => (
        <div
          key={traveler.id}
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="hover:border-[rgba(0,0,0,0.12)] transition-colors"
        >
          {/* Avatar + Info */}
          <div className="flex gap-3 mb-4">
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(29,33,94,0.06)',
                color: '#1D215E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0,
              }}
            >
              {traveler.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a1a2e' }}>{traveler.name}</p>
              <p style={{ fontSize: '12px', color: 'rgba(26,26,46,0.55)' }}>
                {traveler.relationship} • {traveler.passport}
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(26,26,46,0.55)' }}>DOB: {traveler.dob}</p>
              {traveler.specialNeeds && (
                <p style={{ fontSize: '12px', color: '#d4a04a', marginTop: '4px' }}>
                  {traveler.specialNeeds}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto pt-4">
            <button
              style={{
                flex: 1,
                fontSize: '12px',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px',
                border: '1px solid rgba(0,0,0,0.07)',
                background: 'transparent',
                color: '#1a1a2e',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.02)]"
            >
              Edit
            </button>
            <button
              style={{
                flex: 1,
                fontSize: '12px',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px',
                border: '1px solid rgba(0,0,0,0.07)',
                background: 'transparent',
                color: '#1a1a2e',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="hover:border-[rgba(255,100,100,0.3)] hover:text-[#d9534f]"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Add Traveler Card */}
      <div
        style={{
          background: '#ffffff',
          border: '1px dashed rgba(0,0,0,0.07)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '180px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: 'rgba(26,26,46,0.35)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,160,74,0.2)'
          ;(e.currentTarget as HTMLDivElement).style.color = '#d4a04a'
          ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(212,160,74,0.08)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,0,0,0.07)'
          ;(e.currentTarget as HTMLDivElement).style.color = 'rgba(26,26,46,0.35)'
          ;(e.currentTarget as HTMLDivElement).style.background = '#ffffff'
        }}
      >
        <Plus size={20} style={{ marginBottom: '8px' }} />
        <span style={{ fontSize: '12px', fontWeight: 500 }}>Add Traveler</span>
      </div>

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
      `}</style>
    </div>
  )
}
