'use client'

import { Service } from '@/lib/services'
import { ChevronRight } from 'lucide-react'
import { ServiceBookingForm } from '@/components/service-booking-form'

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-[var(--navy)] text-white" style={{ minHeight: '50vh' }}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20 h-full">
        <div className="grid md:grid-cols-[55%_45%] gap-8 md:gap-12 items-center h-full">
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
          </div>

          {/* Right Side (40%) - Booking Form */}
          <div className="hidden md:block">
            <ServiceBookingForm service={service} preSelectedService={service.name} />
          </div>
        </div>

        {/* Mobile Booking Form - Below content */}
        <div className="md:hidden mt-8">
          <ServiceBookingForm service={service} preSelectedService={service.name} />
        </div>
      </div>
    </section>
  )
}
