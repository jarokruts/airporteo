'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Airport, getRelatedAirports } from '@/lib/airports'
import { MapPin, Star, ArrowRight } from 'lucide-react'

interface RelatedAirportsProps {
  currentAirportCode: string
}

export function RelatedAirports({ currentAirportCode }: RelatedAirportsProps) {
  const relatedAirports = getRelatedAirports(currentAirportCode, 5)

  return (
    <section className="py-8 md:py-16 px-5 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Other Popular Airports
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore our services at other major airports
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {relatedAirports.map(airport => (
            <Link
              key={airport.code}
              href={`/airports/${airport.code.toLowerCase()}`}
              className="group rounded-2xl overflow-hidden border border-border hover:border-gold transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-32 md:h-40 overflow-hidden bg-secondary">
                <Image
                  src={airport.image}
                  alt={airport.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase text-gold truncate">{airport.code}</p>
                    <h3 className="font-bold text-foreground text-xs md:text-sm mt-1 line-clamp-2">{airport.name}</h3>
                  </div>
                  <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>

                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <MapPin size={12} className="text-muted-foreground flex-shrink-0" />
                  <p className="text-xs text-muted-foreground truncate">{airport.city}</p>
                </div>

                <div className="flex items-center gap-1 pt-2 border-t border-border">
                  <Star size={12} className="text-gold fill-gold flex-shrink-0" />
                  <span className="text-xs font-bold text-foreground">{airport.rating}</span>
                  <span className="text-xs text-muted-foreground">({airport.reviews})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
