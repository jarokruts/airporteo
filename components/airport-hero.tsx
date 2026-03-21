'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin, Plane } from 'lucide-react'
import { useState } from 'react'
import { Airport } from '@/lib/airports'

interface AirportHeroProps {
  airport: Airport
}

export function AirportHero({ airport }: AirportHeroProps) {
  const [tripType, setTripType] = useState('arrival')
  const [serviceType, setServiceType] = useState('meet-greet')

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-navy">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcelona%20El%20Prat%20Airport%20-%20BCN-b9CStxmwiYZeutGCgay7n532qH2Pqr.jpg"
        alt={airport.name}
        fill
        className="object-cover"
        priority
      />

      {/* Navy Gradient Overlay - Heavier at bottom for form readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D215E]/70 via-[#1D215E]/75 to-[#1D215E]/85" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between p-5 md:p-8 lg:p-12">
        {/* Top Section - Breadcrumbs */}
        <div>
          <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm uppercase tracking-wide font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link href="/airports" className="hover:text-white transition-colors">Airports</Link>
            <ChevronRight size={16} />
            <span className="text-blue font-semibold">{airport.code}</span>
          </div>
        </div>

        {/* Middle Section - Airport Info */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* City Name and Badge */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {airport.city}
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-4 py-2 border-2 border-blue rounded-full">
                <span className="text-white font-bold text-lg">{airport.code}</span>
              </div>
              <p className="text-white/80 text-sm md:text-base">
                {airport.fullName || `${airport.name} Airport`}
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
            <div className="backdrop-blur-md bg-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 border border-white/10">
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide mb-1">Passengers/Year</p>
              <p className="text-white font-bold text-lg md:text-2xl">50M+</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 border border-white/10">
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide mb-1">Terminals</p>
              <p className="text-white font-bold text-lg md:text-2xl">T1 & T2</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 border border-white/10">
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide mb-1">To City Center</p>
              <p className="text-white font-bold text-lg md:text-2xl">12 km</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 border border-white/10">
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide mb-1">Our Team</p>
              <p className="text-white font-bold text-lg md:text-2xl">24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Booking Form */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 md:p-8 max-w-2xl">
          {/* Row 1: Trip Type */}
          <div className="mb-4 md:mb-6">
            <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-3">Service Type</p>
            <div className="flex gap-2 flex-wrap">
              {['arrival', 'departure', 'connection'].map(type => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    tripType === type
                      ? 'bg-blue text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Service Option */}
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10">
            <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-3">Service</p>
            <div className="flex gap-2 flex-wrap">
              {['meet-greet', 'vip-tarmac'].map(service => (
                <button
                  key={service}
                  onClick={() => setServiceType(service)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    serviceType === service
                      ? 'bg-gold text-navy'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {service === 'meet-greet' ? 'Meet & Greet' : 'VIP Tarmac'}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Airport Field */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 md:py-3">
              <Plane size={18} className="text-blue flex-shrink-0" />
              <input
                type="text"
                value={`${airport.city} ${airport.code}`}
                readOnly
                className="bg-transparent text-white text-sm md:text-base font-medium outline-none flex-1"
              />
            </div>

            {/* Flight Number */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 md:py-3">
              <Plane size={18} className="text-blue flex-shrink-0" />
              <input
                type="text"
                placeholder="e.g. BA 478"
                className="bg-transparent text-white placeholder:text-white/40 text-sm md:text-base outline-none flex-1"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 md:py-3">
              <input
                type="date"
                className="bg-transparent text-white text-sm md:text-base outline-none flex-1"
              />
            </div>

            {/* Passengers */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 md:py-3">
              <select className="bg-transparent text-white text-sm md:text-base outline-none flex-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <option key={n} value={n} className="text-navy">{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full mt-6 md:mt-8 px-6 py-3 md:py-4 bg-blue hover:bg-blue/90 text-white font-bold rounded-lg transition-colors text-sm md:text-base">
            Get a Quote
          </button>

          {/* Footer Text */}
          <p className="text-white/50 text-xs md:text-sm text-center mt-4">
            Instant confirmation available at {airport.city} {airport.code} · By clicking "Get a Quote" you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </section>
  )
}
