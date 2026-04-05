'use client'

import { Service } from '@/lib/services'

interface ServicePricingCompactProps {
  service: Service
}

export function ServicePricingCompact({ service }: ServicePricingCompactProps) {
  return (
    <section className="bg-white py-10 md:py-16 px-1 md:px-8">
      <div className="mx-auto max-w-7xl text-center">
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
          Get an instant quote or contact us for custom packages
        </p>
      </div>
    </section>
  )
}
