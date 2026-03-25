'use client'

import { Airport } from '@/lib/airports'
import { Check } from 'lucide-react'

interface AirportServicesProps {
  airport: Airport
}

export function AirportServices({ airport }: AirportServicesProps) {
  const handleServiceClick = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const arrivalServices = [
    'Personal meet & greet directly at aircraft door',
    'Dedicated escort through terminal to baggage claim',
    'Priority immigration processing',
    'Professional assistance with customs and arrival procedures',
    'Expert baggage collection and porter services',
    'Personal escort to your waiting vehicle or transfer'
  ]

  const departureServices = [
    'Curbside meet & greet at departure terminal entrance',
    'Complete check-in assistance and support',
    'Professional baggage handling from vehicle to counter',
    'Expert guidance through customs and departure formalities',
    'Priority fast track security access and processing',
    'Personal escort service to aircraft door with lounge option'
  ]

  const connectionServices = [
    'Aircraft door reception by dedicated connection specialist',
    'Priority escort through terminal for seamless connections',
    'Fast track immigration processing for international transit',
    'Professional baggage handling and connection coordination',
    'Expedited security screening for connecting flights',
    'Aircraft door escort with optional lounge access during layover'
  ]

  const vipServices = [
    'Dedicated Personal VIP Advisor to guide and assist you throughout',
    'Private lounge access for up to 3 hours',
    'Individual limousine transfer from/to the aircraft to/from the VIP terminal',
    'Assistance with checked luggage items',
    'Personal greeting at the aircraft',
    'Customs and passport control via premium fast-track lanes',
    'No airport crowds, no stress — just serenity, style, and Platinum service'
  ]

  return (
    <section className="py-8 md:py-16 px-5 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Services Available
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Choose from our premium concierge services tailored for your journey at {airport.name}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Column 1: On Arrival */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow min-h-96">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">On Arrival</h3>
            <ul className="space-y-3">
              {arrivalServices.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <Check size={20} className="text-[#B8913A] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: On Departure */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow min-h-96">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">On Departure</h3>
            <ul className="space-y-3">
              {departureServices.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <Check size={20} className="text-[#B8913A] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: On Connection */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow min-h-96">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">On Connection</h3>
            <ul className="space-y-3">
              {connectionServices.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <Check size={20} className="text-[#B8913A] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: VIP Platinum */}
          <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-[#B8913A] hover:shadow-lg transition-shadow min-h-96">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">VIP Platinum</h3>
            <ul className="space-y-3">
              {vipServices.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <Check size={20} className="text-[#B8913A] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
