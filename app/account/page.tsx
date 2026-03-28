'use client'

import { useState } from 'react'
import { AccountSidebar } from '@/components/account/sidebar'
import { AccountTopBar } from '@/components/account/top-bar'
import { UpcomingBookingsSection } from '@/components/account/sections/upcoming-bookings'
import { PastBookingsSection } from '@/components/account/sections/past-bookings'
import { PersonalInfoSection } from '@/components/account/sections/personal-info'
import { SavedTravelersSection } from '@/components/account/sections/saved-travelers'
import { NotificationsSection } from '@/components/account/sections/notifications'

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState<'upcoming' | 'past' | 'personal' | 'travelers' | 'notifications'>('upcoming')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sectionTitles = {
    upcoming: 'Upcoming Bookings',
    past: 'Past Bookings',
    personal: 'Personal Information',
    travelers: 'Saved Travelers',
    notifications: 'Notifications',
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f7f7fa' }}>
      {/* Dark overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AccountSidebar
        activeSection={activeSection}
        setActiveSection={(section) => {
          setActiveSection(section)
          setSidebarOpen(false)
        }}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Bar */}
        <AccountTopBar
          title={sectionTitles[activeSection]}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#f7f7fa' }}>
          <div style={{ padding: '32px 40px 60px' }} className="lg:p-8 md:px-6 md:py-8 sm:p-5">
            {activeSection === 'upcoming' && <UpcomingBookingsSection />}
            {activeSection === 'past' && <PastBookingsSection />}
            {activeSection === 'personal' && <PersonalInfoSection />}
            {activeSection === 'travelers' && <SavedTravelersSection />}
            {activeSection === 'notifications' && <NotificationsSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
