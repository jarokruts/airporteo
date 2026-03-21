'use client'

import { getAirport } from '@/lib/airports'
import { notFound } from 'next/navigation'
import { AirportHero } from '@/components/airport-hero'

interface AirportPageProps {
  params: Promise<{ code: string }>
}

export default async function AirportPage({ params }: AirportPageProps) {
  const { code } = await params
  const airport = getAirport(code.toUpperCase())

  if (!airport) {
    notFound()
  }

  return (
    <main>
      <AirportHero airport={airport} />
      {/* Additional sections will be added here */}
    </main>
  )
}
