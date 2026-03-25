'use client'

import { Service } from '@/lib/services'
import { AirportBookingForm } from '@/components/airport-booking-form'

interface ServiceBookingFormProps {
  service: Service
  preSelectedService?: string
}

export function ServiceBookingForm({ service, preSelectedService }: ServiceBookingFormProps) {
  // Create a mock airport object without pre-filling
  const mockAirport = {
    code: '',
    name: '',
    city: '',
    country: '',
    description: '',
    longDescription: '',
    services: [],
    facilities: [],
    reviews: [],
    reviews_count: 0,
    rating: 0,
    featured: false,
  }

  return <AirportBookingForm airport={mockAirport} preSelectedService={preSelectedService} />
}
