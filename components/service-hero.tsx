'use client'

import { Service } from '@/lib/services'
import { ChevronRight } from 'lucide-react'

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-[var(--navy)] text-white" style={{ minHeight: '50vh' }}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20 h-full">
        <div className="grid md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center h-full">
          {/* Left Side (60%) */}
          <div className="flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm opacity-80">
              <a href="/" className="hover:opacity-100 transition-opacity">Home</a>
              <ChevronRight size={16} />
              <a href="/service" className="hover:opacity-100 transition-opacity">Services</a>
              <ChevronRight size={16} />
              <span className="font-medium">{service.name}</span>
            </div>

            {/* Service Name */}
            <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              {service.name}
            </h1>

            {/* One-liner Description */}
            <p className="text-lg md:text-xl opacity-60" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              {service.shortDescription}
            </p>

            {/* Pricing */}
            <div className="flex items-baseline gap-2">
              <span className="text-sm opacity-60">Starting from</span>
              <span className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair)' }}>
                ${service.pricing[0].price}
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-fit px-8 py-3 font-semibold rounded-full transition-all hover:shadow-lg"
              style={{
                backgroundColor: 'var(--gold)',
                color: 'white',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Book Now
            </button>
          </div>

          {/* Right Side (40%) - Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center"
              style={{ maxWidth: '300px' }}
            >
              <div className="text-center opacity-50">
                <div className="text-6xl mb-4">✈️</div>
                <p style={{ fontFamily: 'var(--font-dm-sans)' }}>Service Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
