'use client'

import { Heart, Zap, Handshake, Crown } from 'lucide-react'

export function AirportBenefitsBar() {
  const benefits = [
    {
      icon: Heart,
      title: 'Premium Meet & Greet',
      description: 'Personal escort service from gate to exit with dedicated concierge support'
    },
    {
      icon: Zap,
      title: 'Fast Track Immigration',
      description: 'Skip the queues with priority processing through customs and security'
    },
    {
      icon: Handshake,
      title: 'Personal Assistance',
      description: 'Expert guidance with luggage handling and complete navigation support'
    },
    {
      icon: Crown,
      title: 'VIP Tarmac Transfers',
      description: 'Exclusive private limousine service directly from aircraft to terminal'
    }
  ]

  return (
    <section className="bg-slate-100 py-8 md:py-12 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white rounded-lg">
                  <Icon size={40} className="text-navy-950 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
