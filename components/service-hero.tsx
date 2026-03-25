'use client'

import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react'
import { Service } from '@/lib/services'
import { ServiceBookingForm } from '@/components/service-booking-form'

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative w-full flex flex-col overflow-visible bg-[var(--navy)]">
      {/* Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/75 to-[var(--navy)]/85" />

      {/* Content Container */}
      <div className="relative z-10 flex items-start pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16 p-5 md:p-8 lg:p-12">
        <div className="mx-auto max-w-7xl w-full">
          
          {/* DESKTOP LAYOUT - Two Column (50/50) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* LEFT COLUMN - Service Info */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm uppercase tracking-wide font-medium mb-6 md:mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <CaretRight size={14} weight="light" />
                <Link href="/service" className="hover:text-white transition-colors">Services</Link>
                <CaretRight size={14} weight="light" />
                <span className="text-[var(--gold)] font-semibold">{service.name}</span>
              </div>

              {/* Service Name - Georgia Serif (matching airport) */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {service.name}
              </h1>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
                {service.shortDescription}
              </p>

              {/* Stats Grid - 2x2 (matching airport) */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Price/Person</p>
                  <p className="text-white font-bold text-base md:text-lg">from $45</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Duration</p>
                  <p className="text-white font-bold text-base md:text-lg">20+ minutes</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Available At</p>
                  <p className="text-white font-bold text-base md:text-lg">50+ airports</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Support</p>
                  <p className="text-white font-bold text-base md:text-lg">24/7</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Booking Form */}
            <div className="mt-8 md:mt-0">
              <ServiceBookingForm service={service} preSelectedService={service.name} />
            </div>
          </div>

          {/* MOBILE LAYOUT - Stacked (matching airport mobile) */}
          <div className="md:hidden flex flex-col gap-4">
            
            {/* Service Info - Stacked Vertically */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-wide font-medium mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <CaretRight size={12} weight="light" />
                <Link href="/service" className="hover:text-white transition-colors">Services</Link>
                <CaretRight size={12} weight="light" />
                <span className="text-[var(--gold)] font-semibold">{service.name}</span>
              </div>

              {/* Service Name */}
              <h1 className="text-4xl font-bold text-white leading-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {service.name}
              </h1>

              {/* Description */}
              <p className="text-white/80 text-xs leading-snug mb-4">
                {service.shortDescription}
              </p>
            </div>

            {/* Mobile Booking Form */}
            <div className="pt-2">
              <ServiceBookingForm service={service} preSelectedService={service.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
