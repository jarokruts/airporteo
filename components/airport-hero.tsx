'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin, Star } from 'lucide-react'
import { Airport } from '@/lib/airports'

interface AirportHeroProps {
  airport: Airport
}

export function AirportHero({ airport }: AirportHeroProps) {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={airport.image}
        alt={airport.name}
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5 md:p-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-white text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight size={16} />
          <Link href="/airports" className="hover:underline">Airports</Link>
          <ChevronRight size={16} />
          <span className="font-semibold">{airport.code}</span>
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          {/* Airport Badge */}
          <div className="flex items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} className="text-gold" />
                <span className="text-white text-sm font-semibold">{airport.city}, {airport.country}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {airport.name}
              </h1>
              <p className="text-white/80 text-lg mt-2">
                IATA Code: <span className="font-bold text-gold">{airport.code}</span>
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 md:gap-8">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg px-4 py-2">
              <div className="flex items-center gap-1 mb-1">
                <Star size={16} className="text-gold fill-gold" />
                <span className="text-white font-bold">{airport.rating}</span>
              </div>
              <p className="text-white/80 text-xs">{airport.reviews.toLocaleString()} reviews</p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white font-bold text-sm">Open Hours</p>
              <p className="text-white/80 text-xs">{airport.hours.arrival}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
