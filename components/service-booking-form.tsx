'use client'

import { Service } from '@/lib/services'
import { AirportBookingForm } from '@/components/airport-booking-form'

interface ServiceBookingFormProps {
  service: Service
  preSelectedService?: string
}

export function ServiceBookingForm({ service, preSelectedService }: ServiceBookingFormProps) {
  // No airport is pre-filled here, so airport selection is the required first step.
  return <AirportBookingForm preSelectedService={preSelectedService} />
}
