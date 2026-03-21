'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    label: 'Meet & Greet',
    image: '/images/meet-greet.png',
    href: '/services/meet-greet',
  },
  {
    id: 2,
    label: 'Luggage',
    image: '/images/luggage.png',
    href: '/services/luggage',
  },
  {
    id: 3,
    label: 'VIP Platinum',
    image: '/images/vip-platinum.png',
    href: '/services/vip-platinum',
    isSpecial: true,
  },
  {
    id: 4,
    label: 'Transfers',
    image: '/images/transfers.png',
    href: '/services/transfers',
  },
  {
    id: 5,
    label: 'Airport Buggy',
    image: '/images/buggy.png',
    href: '/services/airport-buggy',
  },
  {
    id: 6,
    label: 'Immigration',
    image: '/images/immigration.png',
    href: '/services/immigration',
  },
]

export function ServicesBanner() {
  return (
    <section className="py-12 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="rounded-2xl p-12 flex flex-col lg:flex-row gap-12 items-start lg:items-center"
          style={{
            background: 'linear-gradient(135deg, #F0F4F8 0%, #E8EDF5 100%)',
          }}
        >
          {/* Left Side */}
          <div className="max-w-xs flex-shrink-0">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#CA8A04' }}
            >
              Our services
            </p>
            <h2
              className="mt-3 text-3xl font-semibold leading-tight"
              style={{ color: '#1D215E' }}
            >
              Everything for a stress-free journey.
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: '#64748B' }}
            >
              From the moment you land to your final destination. Personal assistance at every step of your airport experience.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(90deg, #A16207 0%, #CA8A04 100%)',
              }}
            >
              Explore all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right Side - Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group"
                >
                  <div
                    className={`rounded-2xl p-3 h-32 flex flex-col items-center justify-center transition-all hover:shadow-lg hover:-translate-y-1 ${
                      service.isSpecial ? 'shadow-md' : 'bg-white shadow-sm'
                    }`}
                    style={
                      service.isSpecial
                        ? {
                            background: 'linear-gradient(135deg, #1D215E 0%, #3F5CA6 100%)',
                          }
                        : {}
                    }
                  >
                    <div className="relative w-20 h-20 mb-2">
                      <Image
                        src={service.image}
                        alt={service.label}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                    <p
                      className="text-xs font-semibold text-center"
                      style={{
                        color: service.isSpecial ? '#CA8A04' : '#1D215E',
                      }}
                    >
                      {service.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
