'use client'

import { getAirport } from '@/lib/airports'
import { AirportHero } from '@/components/airport-hero'
import { useParams } from 'next/navigation'

export default function AirportPage() {
  const params = useParams()
  const code = (params?.code as string)?.toUpperCase()
  const airport = code ? getAirport(code) : null

  if (!airport) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Airport not found</h1>
          <p className="text-muted-foreground">The airport code you're looking for doesn't exist.</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <AirportHero airport={airport} />
      {/* Additional sections will be added here */}
    </main>
  )
}
