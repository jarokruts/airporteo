import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BookingWidget } from '@/components/booking-widget'
import { DiscoverMoreSection } from '@/components/discover-more-section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Airport Services | Airporteo',
  description: 'Explore premium airport concierge services at 120+ airports worldwide. Fast Track, Meet & Greet, VIP Platinum, and more.',
  keywords: ['airport services', 'fast track', 'meet and greet', 'VIP service', 'airport concierge'],
}

const SERVICES = [
  {
    id: 1,
    name: 'Meet & Greet',
    tagline: 'Your personal assistant from aircraft door to arrivals hall',
    description: 'Our professional Meet & Greet service provides seamless airport support. A dedicated assistant meets you at the aircraft door and accompanies you through immigration, baggage claim, and customs.',
    price: 45,
    image: '/images/service-meet-greet.jpg',
    slug: 'meet-and-greet',
  },
  {
    id: 2,
    name: 'Fast Track',
    tagline: 'Skip the queues at security and immigration',
    description: 'Bypass long queues and fast-track through security screening and immigration control. Experience expedited processing so you can reach your destination faster.',
    price: 35,
    image: '/images/service-fast-track.jpg',
    slug: 'fast-track',
  },
  {
    id: 3,
    name: 'Luggage Assistance',
    tagline: 'Professional handling from curb to carousel',
    description: 'Our luggage experts handle your bags with care from airport curb to your destination. Professional packing, handling, and delivery support included.',
    price: 20,
    image: '/images/service-luggage.jpg',
    slug: 'luggage-assistance',
  },
  {
    id: 4,
    name: 'Hotel Transfer',
    tagline: 'Private chauffeur from terminal to your destination',
    description: 'Comfortable, private transportation in luxury vehicles. Professional drivers ensure safe, timely arrival to your hotel or residence with complimentary luggage handling.',
    price: 80,
    image: '/images/service-transfer.jpg',
    slug: 'hotel-transfer',
  },
  {
    id: 5,
    name: 'Airport Buggy',
    tagline: 'Electric cart transport across the terminal',
    description: 'Navigate large airports effortlessly with our electric buggy service. Perfect for travelers with limited mobility or those wanting to conserve energy.',
    price: 30,
    image: '/images/service-buggy.jpg',
    slug: 'airport-buggy',
  },
  {
    id: 6,
    name: 'VIP Platinum',
    tagline: 'The ultimate private airport experience',
    description: 'Our premium offering includes dedicated VIP advisor, private lounge access, individual limousine transfer, personal greeting, and premium fast-track lanes through customs.',
    price: 150,
    image: '/images/service-vip.jpg',
    slug: 'vip-platinum',
    isVIP: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero - Two Columns */}
        <section className="bg-[var(--navy)] text-white py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
              {/* Left Column */}
              <div>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-8 text-sm opacity-75">
                  <Link href="/" className="hover:opacity-100">Home</Link>
                  <span>/</span>
                  <span>Services</span>
                </div>

                {/* Heading */}
                <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Every journey starts with your airport
                </h1>

                {/* Paragraph */}
                <p className="text-base md:text-lg opacity-90 mb-12 leading-relaxed">
                  Services, availability, and pricing are unique to each airport. Start by selecting your airport and flight — we'll show you exactly what's available, from fast track lanes to private VIP terminals.
                </p>

                {/* Three Info Points */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl text-[var(--gold)]">✈️</span>
                    </div>
                    <div>
                      <p className="font-semibold">120+ airports worldwide, each with its own service set</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl text-[var(--gold)]">⚡</span>
                    </div>
                    <div>
                      <p className="font-semibold">Real-time availability based on your flight and terminal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl text-[var(--gold)]">👑</span>
                    </div>
                    <div>
                      <p className="font-semibold">From express fast track to full VIP Platinum experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking Form */}
              <div>
                <BookingWidget />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Text Strip */}
        <section className="bg-[var(--light-gray)] py-12 px-4 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm md:text-base text-[var(--gray-text)] leading-relaxed">
              Airporteo provides premium airport concierge services at over 120 airports worldwide — including meet and greet, fast track security, VIP terminal access, luggage assistance, private transfers, and electric buggy transport. Every airport offers a unique combination of services depending on terminal layout, local regulations, and available facilities. Select your airport to see real-time availability, pricing, and service options tailored to your specific journey.
            </p>
          </div>
        </section>

        {/* Section 3: Service Cards Grid */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/service/${service.slug}`}
                  className="group flex flex-col h-full"
                >
                  <div className="flex flex-col h-full bg-white rounded-xl border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-gray-400 text-4xl">✈</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* VIP Badge */}
                      {service.isVIP && (
                        <div className="mb-3 inline-flex w-fit px-2 py-1 bg-[var(--gold)]/10 rounded text-xs font-semibold text-[var(--gold)]">
                          VIP
                        </div>
                      )}

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
                        {service.name}
                      </h3>

                      {/* Tagline */}
                      <p className={`text-sm font-semibold mb-3 ${service.isVIP ? 'text-[var(--gold)]' : 'text-[var(--blue)]'}`}>
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[var(--gray-text)] mb-6 flex-1 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Price and Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                        <span className="text-sm font-semibold text-[var(--gray-text)]">
                          Starting from <span className="text-[var(--gold)]">${service.price}</span>
                        </span>
                        <div className="flex items-center gap-1 text-[var(--gold)] font-semibold group-hover:gap-2 transition-all">
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
        <section className="bg-[var(--light-gray)] py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              Not sure which service is right?
            </h2>
            <p className="text-base md:text-lg text-[var(--gray-text)] mb-10">
              Tell us about your trip details, and our travel experts will provide personalized recommendations to match your journey perfectly.
            </p>
            <button className="px-8 py-4 bg-[var(--gold)] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
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
