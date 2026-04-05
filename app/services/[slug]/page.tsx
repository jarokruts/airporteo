import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceBookingForm } from '@/components/service-booking-form'
import { DiscoverMoreSection } from '@/components/discover-more-section'
import { ReviewsSection } from '@/components/reviews-section'

const SERVICES = {
  'meet-and-greet': {
    name: 'Meet & Greet',
    slug: 'meet-and-greet',
    description: 'Your personal assistant from aircraft door to arrivals hall',
    longDescription: 'Our Meet & Greet service provides you with a personal assistant who will meet you at the aircraft door and escort you through the terminal, handling your luggage and guiding you to baggage claim or your transportation.',
    price: 45,
    duration: '30-60 minutes',
    color: '#3F5CA6',
    icon: 'Handshake',
  },
  'fast-track': {
    name: 'Fast Track',
    slug: 'fast-track',
    description: 'Skip the queues at security and immigration',
    longDescription: 'Skip lengthy queues at security checkpoints and immigration with our Fast Track lane access. Enjoy expedited processing and get to your departure gate faster.',
    price: 35,
    duration: '15-30 minutes',
    color: '#D4A574',
    icon: 'Zap',
  },
  'luggage': {
    name: 'Luggage Assistance',
    slug: 'luggage',
    description: 'Professional baggage handling and storage',
    longDescription: 'We handle your luggage with professional care, from check-in to baggage claim. Let us manage the heavy lifting while you relax.',
    price: 25,
    duration: 'Varies',
    color: '#6B7280',
    icon: 'Suitcase',
  },
  'buggy': {
    name: 'Golf Cart & Buggy',
    slug: 'buggy',
    description: 'Electric cart terminal transport for comfort',
    longDescription: 'For travelers with mobility concerns or those with minimal time, our golf cart service provides comfortable and quick transport through the terminal.',
    price: 30,
    duration: '10-20 minutes',
    color: '#059669',
    icon: 'Car',
  },
  'special': {
    name: 'Special Needs',
    slug: 'special',
    description: 'Accessibility and mobility support services',
    longDescription: 'We provide comprehensive accessibility support including wheelchair assistance, mobility aids, and specialized assistance for travelers with disabilities.',
    price: 40,
    duration: 'Varies',
    color: '#F59E0B',
    icon: 'Heart',
  },
  'transfers': {
    name: 'Private Car Transfers',
    slug: 'transfers',
    description: 'Luxury transportation to and from airport',
    longDescription: 'Premium private car service connecting you directly between the airport and your destination. Professional drivers, comfortable vehicles, and reliable service.',
    price: 85,
    duration: 'Varies by destination',
    color: '#8B5CF6',
    icon: 'Car',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES[slug as keyof typeof SERVICES]
  
  return {
    title: `${service?.name} | Airporteo`,
    description: service?.longDescription || 'Premium airport service',
    keywords: [service?.name || 'service', 'airport', 'concierge'],
  }
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES[slug as keyof typeof SERVICES]

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service not found</h1>
            <p className="text-gray-600">The service you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="relative w-full flex flex-col overflow-visible pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/services-hero-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/75 to-[var(--navy)]/85"></div>
          
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Text & Info */}
              <div className="flex flex-col text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {service.name}
                </h1>
                
                <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Info Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">Duration: {service.duration}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">Starting from ${service.price}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-[var(--gold)] flex-shrink-0">✓</span>
                    <p className="text-white/90 text-sm">Available at 200+ airports worldwide</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div>
                <ServiceBookingForm service={service} preSelectedService={service.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Discover More Section */}
        <DiscoverMoreSection />
      </main>
      <Footer />
    </>
  )
}
