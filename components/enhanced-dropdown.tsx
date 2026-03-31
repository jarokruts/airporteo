'use client'

import { Handshake, AirplaneLanding, Suitcase, Car, Users, Gift, Crown, Star, Coffee, Shield, Building, Airplane } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface DropdownItemConfig {
  label: string
  description: string
  href: string
  icon: React.ReactNode
}

interface EnhancedDropdownProps {
  items: DropdownItemConfig[]
  isOpen: boolean
}

export function EnhancedDropdownContent({ items, isOpen }: EnhancedDropdownProps) {
  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 w-max',
        isOpen
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-1 opacity-0'
      )}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 p-2">
        {items.map((item, index) => (
          <div key={item.label}>
            <a
              href={item.href}
              className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
            >
              {/* Icon */}
              <div className="flex-shrink-0 pt-0.5 text-[#1D215E]">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-base text-[#1D215E]">{item.label}</div>
                <div className="text-sm text-[#6B7280]">{item.description}</div>
              </div>
            </a>

            {/* Separator - hide on last item */}
            {index < items.length - 1 && (
              <div className="my-1 border-t border-gray-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export const AIRPORT_SERVICES_ITEMS: DropdownItemConfig[] = [
  {
    label: 'Meet & Greet',
    description: 'Personal welcome and escort service',
    href: '#services',
    icon: <Handshake size={24} weight="thin" />
  },
  {
    label: 'Fast Track',
    description: 'Skip security and immigration queues',
    href: '#services',
    icon: <AirplaneLanding size={24} weight="thin" />
  },
  {
    label: 'Luggage Assistance',
    description: 'Professional baggage handling',
    href: '#features',
    icon: <Suitcase size={24} weight="thin" />
  },
  {
    label: 'Hotel Transfer',
    description: 'Private chauffeur to your destination',
    href: '#features',
    icon: <Car size={24} weight="thin" />
  },
  {
    label: 'Special Needs',
    description: 'Accessibility and mobility support',
    href: '#services',
    icon: <Gift size={24} weight="thin" />
  },
  {
    label: 'Airport Buggy',
    description: 'Electric cart terminal transport',
    href: '#services',
    icon: <Users size={24} weight="thin" />
  },
]

export const VIP_PLATINUM_ITEMS: DropdownItemConfig[] = [
  {
    label: 'VIP Terminal',
    description: 'Private terminal, zero crowds',
    href: '#experience',
    icon: <Crown size={24} weight="thin" />
  },
  {
    label: 'VIP Tarmac',
    description: 'Limousine to aircraft steps',
    href: '#experience',
    icon: <Airplane size={24} weight="thin" />
  },
  {
    label: 'VIP Lounge',
    description: 'Premium lounge up to 3 hours',
    href: '#experience',
    icon: <Coffee size={24} weight="thin" />
  },
  {
    label: 'VIP Exclusive Suite',
    description: 'Ultimate privacy and luxury',
    href: '#experience',
    icon: <Shield size={24} weight="thin" />
  },
]

export const FOR_BUSINESS_ITEMS: DropdownItemConfig[] = [
  {
    label: 'Corporate Services',
    description: 'Solutions for business travel',
    href: '#features',
    icon: <Building size={24} weight="thin" />
  },
  {
    label: 'Travel Agency',
    description: 'Partner with Airporteo',
    href: '#features',
    icon: <Airplane size={24} weight="thin" />
  },
  {
    label: 'Services for Groups',
    description: 'Group bookings and events',
    href: '#features',
    icon: <Users size={24} weight="thin" />
  },
]
