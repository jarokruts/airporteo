'use client'

import { Airport } from '@/lib/airports'
import { CheckCircle } from '@phosphor-icons/react'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface AirportServicesProps {
  airport: Airport
}

type TabType = 'arrival' | 'departure' | 'connection' | 'vip'

export function AirportServices({ airport }: AirportServicesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('arrival')

  const tabContents: Record<TabType, string[]> = {
    arrival: [
      'Personal meet & greet directly at aircraft door',
      'Dedicated escort through terminal to baggage claim',
      'Priority immigration processing',
      'Professional assistance with customs and arrival procedures',
      'Expert baggage collection and porter services',
      'Personal escort to your waiting vehicle or transfer'
    ],
    departure: [
      'Curbside meet & greet at departure terminal entrance',
      'Complete check-in assistance and support',
      'Professional baggage handling from vehicle to counter',
      'Expert guidance through customs and departure formalities',
      'Priority fast track security access and processing',
      'Personal escort service to aircraft door with lounge option'
    ],
    connection: [
      'Aircraft door reception by dedicated connection specialist',
      'Priority escort through terminal for seamless connections',
      'Fast track immigration processing for international transit',
      'Professional baggage handling and connection coordination',
      'Expedited security screening for connecting flights',
      'Aircraft door escort with optional lounge access during layover'
    ],
    vip: [
      'Dedicated Personal VIP Advisor to guide and assist you throughout',
      'Private lounge access for up to 3 hours',
      'Individual limousine transfer from/to the aircraft to/from the VIP terminal',
      'Assistance with checked luggage items',
      'Personal greeting at the aircraft',
      'Customs and passport control via premium fast-track lanes',
      'No airport crowds, no stress — just serenity, style, and Platinum service'
    ]
  }

  const tabs = [
    { id: 'arrival', label: 'Arrival' },
    { id: 'departure', label: 'Departure' },
    { id: 'connection', label: 'Connection' },
    { id: 'vip', label: 'VIP Platinum' }
  ]

  return (
    <section className="py-8 md:py-16 px-1 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Services Available
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Choose from our premium concierge services tailored for your journey at {airport.name}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-0 mb-0 overflow-x-auto md:overflow-x-visible -mx-5 md:mx-0 px-5 md:px-0">
          <div className="flex gap-0 w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              const isVIP = tab.id === 'vip'
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className="flex-1 px-3 md:px-6 py-3 md:py-4 text-xs md:text-base font-semibold transition-all duration-200 border-b"
                  style={{
                    backgroundColor: isActive 
                      ? (isVIP ? 'var(--gold)' : 'var(--navy)')
                      : 'white',
                    color: isActive
                      ? 'white'
                      : (isVIP ? 'var(--gold)' : 'var(--navy)'),
                    borderRadius: isActive ? '12px 12px 0 0' : '0',
                    border: isActive 
                      ? 'none' 
                      : '1px solid var(--border)',
                    borderTop: isActive ? 'none' : '1px solid var(--border)',
                    borderLeft: isActive ? 'none' : '1px solid var(--border)',
                    borderRight: isActive ? 'none' : '1px solid var(--border)',
                    borderBottom: isActive ? 'none' : '1px solid var(--border)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div
          className="rounded-b-xl border border-t-0 border-border bg-white p-8 flex flex-col"
          style={{
            borderTop: activeTab === 'vip' ? '4px solid var(--gold)' : 'none',
            minHeight: '400px',
          }}
        >
          <ul className="space-y-4 flex-1">
            {tabContents[activeTab].map((service, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckCircle size={20} weight="light" className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm md:text-base leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>

          {/* Action Footer */}
          <div className="mt-auto pt-6 border-t border-border flex flex-col md:flex-row gap-4 md:gap-3 items-center md:justify-center">
            <button
              onClick={() => {
                const heroForm = document.getElementById('hero-form') || document.getElementById('hero')
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 py-3 text-sm md:text-base font-semibold text-white transition-all duration-200 rounded-lg border-b-2 border-b-transparent hover:border-b-[var(--gold)]"
              style={{
                backgroundColor: 'var(--navy)',
              }}
            >
              Get a Detailed Quote
            </button>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors duration-200"
            >
              <MessageCircle size={18} className="text-green-500" />
              Chat with an Agent Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
