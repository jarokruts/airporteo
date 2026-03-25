'use client'

import { Service } from '@/lib/services'
import { BookingWidget } from './booking-widget'

interface ServiceBookingProps {
  service: Service
}

export function ServiceBooking({ service }: ServiceBookingProps) {
  return (
    <section id="booking" className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Service</h2>
          <p className="text-lg text-muted-foreground">
            Secure your {service.name} booking in just a few clicks
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <BookingWidget />
        </div>

        {/* Booking Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">📅 Easy Booking</h3>
            <p className="text-sm text-muted-foreground">Book in advance or same-day with our flexible scheduling</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">💳 Secure Payment</h3>
            <p className="text-sm text-muted-foreground">Multiple payment options with secure encryption</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">📧 Instant Confirmation</h3>
            <p className="text-sm text-muted-foreground">Receive confirmation and details immediately via email</p>
          </div>
        </div>
      </div>
    </section>
  )
}
