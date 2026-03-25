'use client'

import { Airport } from '@/lib/airports'

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
    'Meet & Greet',
    'Fast Track',
    'Luggage Assistance',
    'Golf Cart & Buggy',
    'Special Needs'
  ]

  const departureServices = [
    'Meet & Greet',
    'Fast Track',
    'Luggage Assistance',
    'Golf Cart & Buggy',
    'Special Needs'
  ]

  const connectionServices = [
    'Meet & Greet',
    'Fast Track',
    'Luggage Assistance',
    'Golf Cart & Buggy'
  ]

  const vipServices = [
    'VIP Terminal',
    'VIP Tarmac',
    'VIP Lounge',
    'VIP Exclusive Suite'
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
          {/* Column 1: Arrival */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Arrival</h3>
            <ul className="space-y-3">
              {arrivalServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={handleServiceClick}
                    className="text-foreground text-sm hover:text-gold transition-colors text-left font-medium"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Departure */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Departure</h3>
            <ul className="space-y-3">
              {departureServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={handleServiceClick}
                    className="text-foreground text-sm hover:text-gold transition-colors text-left font-medium"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connection */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Connection</h3>
            <ul className="space-y-3">
              {connectionServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={handleServiceClick}
                    className="text-foreground text-sm hover:text-gold transition-colors text-left font-medium"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: VIP Platinum */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">VIP Platinum</h3>
            <ul className="space-y-3">
              {vipServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={handleServiceClick}
                    className="text-foreground text-sm hover:text-gold transition-colors text-left font-medium"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
