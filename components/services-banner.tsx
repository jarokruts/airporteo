'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    label: 'Meet & Greet',
    image: '/images/meet-greet-new.png',
    href: '/services/meet-greet',
  },
  {
    id: 2,
    label: 'Luggage Assist',
    image: '/images/luggage-new.png',
    href: '/services/luggage',
  },
  {
    id: 3,
    label: 'VIP Platinum',
    image: '/images/vip-platinum-new.png',
    href: '/services/vip-platinum',
    isSpecial: true,
  },
  {
    id: 4,
    label: 'Hotel Transfers',
    image: '/images/transfers-new.png',
    href: '/services/transfers',
  },
  {
    id: 5,
    label: 'Airport Buggy',
    image: '/images/buggy-new.png',
    href: '/services/airport-buggy',
  },
  {
    id: 6,
    label: 'Immigration Assist',
    image: '/images/immigration-new.png',
    href: '/services/immigration',
  },
]

export function ServicesBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="rounded-2xl p-6 md:p-12 flex flex-col lg:flex-row gap-6 md:gap-12 items-start lg:items-center"
          style={{
            background: 'linear-gradient(135deg, #F0F4F8 0%, #E8EDF5 100%)',
          }}
        >
          {/* Left Side */}
          <div className="max-w-xs flex-shrink-0">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#B8913A' }}
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
              className="hidden md:inline-flex mt-6 items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{
                backgroundColor: '#B8913A',
              }}
            >
              Explore all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right Side - Grid (Desktop) / Carousel (Mobile) */}
          <div className="flex-1 w-full">
            {/* Mobile Carousel */}
            <div
              className="md:hidden overflow-x-auto"
              style={{
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginRight: '-24px',
                paddingRight: '24px',
              } as any}
            >
              <div
                className="flex gap-4"
                style={{
                  width: 'fit-content',
                  paddingRight: '36px',
                }}
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group flex-shrink-0"
                    style={{
                      width: '120px',
                      scrollSnapAlign: 'start',
                    }}
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
                      <div className="relative w-16 h-16 mb-1">
                        <Image
                          src={service.image}
                          alt={service.label}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                      <p
                        className="text-xs font-semibold text-center line-clamp-2"
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

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4">
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

      <style jsx>{`
        div[style*="scrollBehavior"] {
          scrollbar-width: none;
        }
        div[style*="scrollBehavior"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
