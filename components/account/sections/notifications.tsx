'use client'

import { useState } from 'react'

export function NotificationsSection() {
  const [toggles, setToggles] = useState({
    bookingConfirmations: true,
    serviceReminders: true,
    greeterDetails: true,
    invoicesReceipts: true,
    promotionalOffers: false,
    newsletter: false,
  })

  const toggleItem = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const notificationItems = [
    {
      key: 'bookingConfirmations',
      label: 'Booking Confirmations',
      description: 'Receive confirmation when a booking is accepted',
    },
    {
      key: 'serviceReminders',
      label: 'Service Reminders',
      description: 'Get a reminder 24 hours before your service',
    },
    {
      key: 'greeterDetails',
      label: 'Greeter Details',
      description: 'Receive greeter name and contact before arrival',
    },
    {
      key: 'invoicesReceipts',
      label: 'Invoices & Receipts',
      description: 'Get invoice emailed after each completed service',
    },
    {
      key: 'promotionalOffers',
      label: 'Promotional Offers',
      description: 'Special deals and seasonal discounts',
    },
    {
      key: 'newsletter',
      label: 'Newsletter',
      description: 'Monthly travel tips and new airport coverage',
    },
  ]

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(12px)',
        animation: 'fadeInUp 0.4s ease forwards',
      }}
    >
      {/* Toggle Rows */}
      {notificationItems.map((item, idx) => (
        <div
          key={item.key}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 28px',
            borderBottom: idx < notificationItems.length - 1 ? '1px solid rgba(29,33,94,0.06)' : 'none',
          }}
        >
          {/* Left: Label + Description */}
          <div className="flex-1 min-w-0">
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a2e', marginBottom: '4px' }}>
              {item.label}
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(26,26,46,0.55)' }}>{item.description}</p>
          </div>

          {/* Right: Toggle Switch */}
          <button
            onClick={() => toggleItem(item.key as keyof typeof toggles)}
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '12px',
              border: 'none',
              background: toggles[item.key as keyof typeof toggles] ? '#d4a04a' : 'rgba(0,0,0,0.07)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.25s ease',
              flexShrink: 0,
              marginLeft: '16px',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: toggles[item.key as keyof typeof toggles] ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#ffffff',
                transition: 'all 0.25s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
              }}
            />
          </button>
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
      `}</style>
    </div>
  )
}
