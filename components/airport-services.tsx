'use client'

import { Airport } from '@/lib/airports'
import { Check } from 'lucide-react'

interface AirportServicesProps {
  airport: Airport
}

export function AirportServices({ airport }: AirportServicesProps) {
  const arrivalServices = airport.services.filter(s => s.type === 'arrival')
  const departureServices = airport.services.filter(s => s.type === 'departure')
  const vipServices = airport.services.filter(s => s.type === 'vip')

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

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Arrival Services */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-5 md:mb-6">On Arrival</h3>
            <ul className="space-y-4">
              {arrivalServices.map(service => (
                <li key={service.id} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm md:text-base">{service.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
                    <p className="text-gold font-bold mt-2 text-sm md:text-base">${service.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Departure Services */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-5 md:mb-6">On Departure</h3>
            <ul className="space-y-4">
              {departureServices.map(service => (
                <li key={service.id} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm md:text-base">{service.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
                    <p className="text-gold font-bold mt-2 text-sm md:text-base">${service.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Services */}
          <div className="rounded-2xl border-2 border-gold bg-gradient-to-br from-navy/5 to-blue/5 p-6 md:p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-5 md:mb-6">VIP Experience</h3>
            <ul className="space-y-4">
              {vipServices.map(service => (
                <li key={service.id} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm md:text-base">{service.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
                    <p className="text-gold font-bold mt-2 text-sm md:text-base">${service.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
