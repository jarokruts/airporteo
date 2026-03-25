'use client'

import { Service } from '@/lib/services'
import { Check } from 'lucide-react'

interface ServiceBenefitsProps {
  service: Service
}

const BENEFITS_PLACEHOLDER = {
  left: [
    'Personal meet & greet directly at aircraft door',
    'Dedicated escort through terminal to baggage claim',
    'Priority immigration processing',
    'Professional assistance with customs and arrival procedures',
  ],
  right: [
    'Expert baggage collection and porter services',
    'Personal escort to your waiting vehicle or transfer',
    'Real-time flight monitoring',
    'Multilingual agent support',
  ],
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--navy)] mb-16" style={{ fontFamily: 'var(--font-playfair)' }}>
          What&apos;s Included
        </h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            {BENEFITS_PLACEHOLDER.left.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} style={{ color: 'var(--gold)' }} strokeWidth={3} />
                </div>
                <p className="text-base text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {BENEFITS_PLACEHOLDER.right.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check size={24} style={{ color: 'var(--gold)' }} strokeWidth={3} />
                </div>
                <p className="text-base text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
