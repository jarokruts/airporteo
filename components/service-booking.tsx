'use client'

import { Service } from '@/lib/services'
import { BookingWidget } from './booking-widget'

interface ServiceBookingProps {
  service: Service
}

export function ServiceBooking({ service }: ServiceBookingProps) {
  return (
    <section id="booking" className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Book Your Service
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Secure your {service.name} booking in just a few clicks
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <BookingWidget />
        </div>

        {/* Booking Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              📅 Easy Booking
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Book in advance or same-day with our flexible scheduling
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              💳 Secure Payment
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Multiple payment options with secure encryption
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              📧 Instant Confirmation
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Receive confirmation and details immediately via email
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
