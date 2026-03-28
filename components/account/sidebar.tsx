'use client'

import { CalendarBlank, ClockCounterClockwise, User, UsersThree, Bell, SignOut } from '@phosphor-icons/react'
import Image from 'next/image'

interface AccountSidebarProps {
  activeSection: 'upcoming' | 'past' | 'personal' | 'travelers' | 'notifications'
  setActiveSection: (section: 'upcoming' | 'past' | 'personal' | 'travelers' | 'notifications') => void
  sidebarOpen: boolean
}

const navItems = [
  { id: 'upcoming', label: 'Upcoming Bookings', icon: CalendarBlank, badge: '2' },
  { id: 'past', label: 'Past Bookings', icon: ClockCounterClockwise },
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'travelers', label: 'Saved Travelers', icon: UsersThree },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export function AccountSidebar({ activeSection, setActiveSection, sidebarOpen }: AccountSidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:relative w-[260px] h-screen flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#1D215E' }}
      >
        {/* Logo Area */}
        <div
          style={{
            padding: '28px 24px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Image
            src="/images/airporteo-logo.svg"
            alt="Airporteo"
            width={150}
            height={24}
            className="h-6 w-auto"
          />
        </div>

        {/* User Profile */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
          className="flex gap-3"
        >
          <div
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-[15px]"
            style={{
              background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
              color: '#1D215E',
            }}
          >
            MR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-[14px] truncate">Michael Roberts</p>
            <p className="text-[12px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>
              m.roberts@gmail.com
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '16px 12px', flex: 1, overflowY: 'auto' }} className="flex flex-col gap-0.5">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                style={{
                  padding: '11px 14px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(212, 160, 74, 0.15)' : 'transparent',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-white hover:bg-opacity-5 hover:text-white"
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'
                  }
                }}
              >
                <IconComponent
                  size={20}
                  weight="regular"
                  style={{ color: isActive ? '#d4a04a' : 'currentColor' }}
                />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      background: '#d4a04a',
                      color: '#1D215E',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Footer - Sign Out */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 12px' }}>
          <button
            style={{
              padding: '11px 14px',
              borderRadius: '8px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            className="hover:bg-opacity-8"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,100,100,0.08)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,200,200,0.8)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'
            }}
          >
            <SignOut size={20} weight="regular" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  )
}
