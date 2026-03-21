'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Plane } from 'lucide-react'
import { useState } from 'react'
import { Airport } from '@/lib/airports'

interface AirportHeroProps {
  airport: Airport
}

export function AirportHero({ airport }: AirportHeroProps) {
  const [tripType, setTripType] = useState('arrival')
  const [serviceType, setServiceType] = useState('meet-greet')
  const [flightNumber, setFlightNumber] = useState('')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState('1')

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-navy">
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
      <div className="relative z-10 flex items-center h-full p-5 md:p-8 lg:p-12">
        <div className="mx-auto max-w-7xl w-full">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                {airport.city}
              </h1>

              {/* Badge + Subtitle */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="px-4 py-2 border-2 border-blue rounded-full">
                    <span className="text-white font-bold text-lg">{airport.code}</span>
                  </div>
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

            {/* RIGHT COLUMN - Compact Booking Form */}
            <div className="mt-8 md:mt-0">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 shadow-xl">
                {/* Form Title */}
                <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-5">Book Your Service</h3>

                {/* Service Type Toggles */}
                <div className="mb-4">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-2.5">Trip Type</p>
                  <div className="flex gap-2">
                    {['arrival', 'departure'].map(type => (
                      <button
                        key={type}
                        onClick={() => setTripType(type)}
                        className={`flex-1 px-3 py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
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

                {/* Service Toggles */}
                <div className="mb-5 pb-5 border-b border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-2.5">Service</p>
                  <div className="flex gap-2">
                    {['meet-greet', 'vip'].map(service => (
                      <button
                        key={service}
                        onClick={() => setServiceType(service)}
                        className={`flex-1 px-3 py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                          serviceType === service
                            ? 'bg-gold text-navy'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {service === 'meet-greet' ? 'Meet & Greet' : 'VIP'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields - Stacked */}
                <div className="space-y-3">
                  {/* Airport - Pre-filled and locked */}
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">Airport</label>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
                      <Plane size={16} className="text-blue flex-shrink-0" />
                      <input
                        type="text"
                        value={`${airport.city} ${airport.code}`}
                        readOnly
                        className="bg-transparent text-white text-sm font-medium outline-none flex-1"
                      />
                    </div>
                  </div>

                  {/* Flight Number */}
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">Flight #</label>
                    <input
                      type="text"
                      placeholder="e.g. BA 478"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder:text-white/40 text-sm outline-none focus:border-blue transition-colors"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-blue transition-colors"
                    />
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">Passengers</label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-blue transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n} className="text-navy">{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-5 px-4 py-3 bg-blue hover:bg-blue/90 text-white font-bold rounded-lg transition-colors text-sm">
                  Get a Quote
                </button>

                {/* Footer Text */}
                <p className="text-white/40 text-xs text-center mt-3">
                  Instant confirmation at {airport.code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
