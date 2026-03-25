'use client'

import { Service } from '@/lib/services'

interface ServicePricingCompactProps {
  service: Service
}

export function ServicePricingCompact({ service }: ServicePricingCompactProps) {
  const basePrice = service.pricing[0]?.price || 45

  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        {/* Pricing */}
        <div className="mb-8">
          <p className="text-sm md:text-base text-[var(--muted-foreground)] mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Starting from
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair)' }}>
              ${basePrice}
            </span>
          </div>
          <p className="text-sm md:text-base text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            per person
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 font-semibold rounded-full transition-all hover:shadow-lg mb-6"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'white',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Book Now
        </button>

        {/* Fine Print */}
        <p className="text-xs md:text-sm text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          Final price depends on airport and service options. Get an instant quote above.
        </p>
      </div>
    </section>
  )
}
