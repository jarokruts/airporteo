import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceBookingForm } from '@/components/service-booking-form'
import { DiscoverMoreSection } from '@/components/discover-more-section'
import { ServicesSolariBoard } from '@/components/services-solari-board'
import Link from 'next/link'
import { getAllServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Airport Services | Airporteo',
  description: 'Explore premium airport concierge services at 120+ airports worldwide. Fast Track, Meet & Greet, VIP Platinum, and more.',
  keywords: ['airport services', 'fast track', 'meet and greet', 'VIP service', 'airport concierge'],
}

export default function ServicesPage() {
  const services = getAllServices()
  
  // Create a service object for the hero with empty airport field
  const heroService = {
    name: 'Our Services',
    slug: 'services',
    shortDescription: 'Services, availability, and pricing are unique to each airport. Start by selecting your airport and flight — we\'ll show you exactly what\'s available, from fast track lanes to private VIP terminals.',
    description: 'Services, availability, and pricing are unique to each airport. Start by selecting your airport and flight — we\'ll show you exactly what\'s available, from fast track lanes to private VIP terminals.',
    icon: 'Plane',
    color: '#3F5CA6',
    duration: 'Varies by service',
    pricing: [{ currency: '$', price: 35 }],
    airports: [],
  }

  return (
    <>
      <Navbar />
      <main>
        <section 
          className="relative w-full flex flex-col overflow-visible pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/services-hero-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Gradient overlay shadow matching Barcelona airport page */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/75 to-[var(--navy)]/85"></div>
          
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Text & Info */}
              <div className="flex flex-col text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Services
                </h1>
                
                <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                  Services, availability, and pricing are unique to each airport. Start by selecting your airport and flight — we'll show you exactly what's available, from fast track lanes to private VIP terminals.
                </p>

                {/* Info Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">120+ airports worldwide with service combinations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">Real-time availability based on your flight details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">From express fast track to full VIP Platinum experience</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div>
                <ServiceBookingForm service={heroService} preSelectedService="Services" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Solari Board */}
        <ServicesSolariBoard />

        {/* Section 3: Service Cards Grid */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Meet & Greet',
                  description: 'Your personal assistant from aircraft door to arrivals hall',
                  price: 45,
                  slug: 'meet-and-greet',
                  isVIP: false
                },
                {
                  name: 'Fast Track',
                  description: 'Skip the queues at security and immigration',
                  price: 35,
                  slug: 'fast-track',
                  isVIP: false
                },
                {
                  name: 'Luggage Assistance',
                  description: 'Professional handling from curb to carousel',
                  price: 20,
                  slug: 'luggage-assistance',
                  isVIP: false
                },
                {
                  name: 'Hotel Transfer',
                  description: 'Private chauffeur from terminal to your destination',
                  price: 80,
                  slug: 'hotel-transfer',
                  isVIP: false
                },
                {
                  name: 'Airport Buggy',
                  description: 'Electric cart transport across the terminal',
                  price: 30,
                  slug: 'airport-buggy',
                  isVIP: false
                },
                {
                  name: 'VIP Platinum',
                  description: 'The ultimate private airport experience',
                  price: 150,
                  slug: 'vip-platinum',
                  isVIP: true
                }
              ].map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full"
                >
                  <div className={`flex flex-col h-full bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 ${service.isVIP ? 'border-[#B8913A]' : 'border-[#E2E5EB]'}`}>
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-gray-400 text-4xl">✈</span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      {service.isVIP && (
                        <div className="mb-3 inline-flex w-fit px-2 py-1 bg-[#B8913A]/10 rounded text-xs font-semibold text-[#B8913A]">
                          VIP
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-[#1D215E] mb-2">
                        {service.name}
                      </h3>

                      <p className={`text-sm font-semibold mb-3 ${service.isVIP ? 'text-[#B8913A]' : 'text-[#3F5CA6]'}`}>
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E2E5EB] mt-auto">
                        <span className="text-sm font-semibold text-[#6B7280]">
                          From <span className="text-[#B8913A]">${service.price}</span>
                        </span>
                        <div className="flex items-center gap-1 text-[#B8913A] font-semibold group-hover:gap-2 transition-all">
                          Learn more
                          <span className="text-lg">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: "Not Sure?" CTA */}
        <section className="bg-[#F0F2F5] py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D215E] mb-4">
              Not sure which service is right?
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] mb-10">
              Tell us about your trip details, and our travel experts will provide personalized recommendations to match your journey perfectly.
            </p>
            <button className="px-8 py-4 bg-[#B8913A] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Get a Recommendation
            </button>
          </div>
        </section>

        {/* Section 5: Discover More */}
        <div className="bg-white">
          <DiscoverMoreSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
