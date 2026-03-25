'use client'

import { Service } from '@/lib/services'
import { Calendar, Users, Handshake, Car } from 'lucide-react'

interface ServiceHowItWorksProps {
  service: Service
}

const STEPS = [
  {
    number: 1,
    title: 'Book Online',
    description: 'Choose your airport, flight, and service. Instant confirmation.',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'We Assign Your Agent',
    description: 'A trained, multilingual agent is assigned to your flight.',
    icon: Users,
  },
  {
    number: 3,
    title: 'Agent Meets You',
    description: 'Your agent waits at the aircraft door with a personalized name board.',
    icon: Handshake,
  },
  {
    number: 4,
    title: 'Door-to-Door Escort',
    description: 'Escorted through immigration, baggage, and customs to your vehicle.',
    icon: Car,
  },
]

export function ServiceHowItWorks({ service }: ServiceHowItWorksProps) {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--navy)] mb-16" style={{ fontFamily: 'var(--font-playfair)' }}>
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col items-center md:items-start">
                {/* Step Number Circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white mb-4"
                  style={{ backgroundColor: 'var(--navy)' }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <Icon size={40} className="text-[var(--gold)] mb-4" strokeWidth={1.5} />

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2 text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {step.description}
                </p>

                {/* Divider for desktop (hide on last item) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-20 w-12 h-0.5 bg-gradient-to-r from-[var(--gold)] to-transparent" style={{ marginLeft: '2rem' }} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
