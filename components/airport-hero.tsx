'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Airport } from '@/lib/airports'
import { AirportBookingForm } from './airport-booking-form'
import { BookingWidget } from './booking-widget'

interface AirportHeroProps {
  airport: Airport
}

export function AirportHero({ airport }: AirportHeroProps) {
  return (
    <section className="relative w-full flex flex-col overflow-visible bg-navy">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcelona%20El%20Prat%20Airport%20-%20BCN-b9CStxmwiYZeutGCgay7n532qH2Pqr.jpg"
        alt={airport.name}
        fill
        className="object-cover"
        priority
      />

      {/* Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D215E]/70 via-[#1D215E]/75 to-[#1D215E]/85" />

      {/* Content Container */}
      <div className="relative z-10 flex items-start pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16 p-5 md:p-8 lg:p-12">
        <div className="mx-auto max-w-7xl w-full">
          
          {/* DESKTOP LAYOUT - Two Column */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* LEFT COLUMN - Airport Info */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm uppercase tracking-wide font-medium mb-6 md:mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="#" className="hover:text-white transition-colors">Airports</Link>
                <ChevronRight size={14} />
                <span className="text-blue font-semibold">{airport.code}</span>
              </div>

              {/* City Name - Georgia Serif */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {airport.city}
              </h1>

              {/* Badge + Airport Name - Horizontal Row */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="px-4 py-2 border-2 border-blue rounded-full flex-shrink-0">
                  <span className="text-white font-bold text-lg">{airport.code}</span>
                </div>
                <p className="text-white/80 text-sm md:text-base">
                  Josep Tarradellas Barcelona–El Prat Airport
                </p>
              </div>

              {/* Stats Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Passengers/Year</p>
                  <p className="text-white font-bold text-base md:text-lg">50M+</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Terminals</p>
                  <p className="text-white font-bold text-base md:text-lg">T1 & T2</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">To City Center</p>
                  <p className="text-white font-bold text-base md:text-lg">12 km</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-3 md:px-4 py-3 md:py-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1">Our Team</p>
                  <p className="text-white font-bold text-base md:text-lg">24/7</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Booking Form */}
            <div className="mt-8 md:mt-0">
              <AirportBookingForm airport={airport} />
            </div>
          </div>

          {/* MOBILE LAYOUT - Stacked */}
          <div className="md:hidden flex flex-col gap-4">
            
            {/* Airport Info - Stacked Vertically */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-wide font-medium mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={12} />
                <Link href="#" className="hover:text-white transition-colors">Airports</Link>
                <ChevronRight size={12} />
                <span className="text-blue font-semibold">{airport.code}</span>
              </div>

              {/* City Name */}
              <h1 className="text-4xl font-bold text-white leading-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {airport.city}
              </h1>

              {/* Badge + Airport Name - Stacked */}
              <div className="flex items-start gap-3 mb-4">
                <div className="px-3 py-1.5 border-2 border-blue rounded-full flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{airport.code}</span>
                </div>
                <p className="text-white/80 text-xs leading-snug">
                  Josep Tarradellas Barcelona–El Prat Airport
                </p>
              </div>

              {/* Stats Grid - 2x2 - Hidden on Mobile */}
              <div className="hidden md:grid grid-cols-2 gap-2">
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-2.5 py-2.5 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-0.5">Passengers/Year</p>
                  <p className="text-white font-bold text-sm">50M+</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-2.5 py-2.5 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-0.5">Terminals</p>
                  <p className="text-white font-bold text-sm">T1 & T2</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-2.5 py-2.5 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-0.5">To City Center</p>
                  <p className="text-white font-bold text-sm">12 km</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-lg px-2.5 py-2.5 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-0.5">Our Team</p>
                  <p className="text-white font-bold text-sm">24/7</p>
                </div>
              </div>
            </div>

            {/* Mobile Booking Form */}
            <div className="pt-2">
              <BookingWidget defaultAirport={{ code: airport.code, city: airport.city }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
