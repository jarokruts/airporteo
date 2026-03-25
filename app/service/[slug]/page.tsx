import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/services'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { ServiceHowItWorks } from '@/components/service-how-it-works'
import { ServiceBenefits } from '@/components/service-benefits'
import { ServicePricingCompact } from '@/components/service-pricing-compact'
import { ServiceFAQ } from '@/components/service-faq'
import { ServiceBooking } from '@/components/service-booking'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getService(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for could not be found.',
    }
  }

  return {
    title: `${service.name} | Airporteo`,
    description: service.longDescription,
    keywords: [service.name, 'airport service', 'concierge', 'fast track', 'meet and greet'],
    openGraph: {
      title: service.name,
      description: service.longDescription,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <ServiceHero service={service} />
        
        {/* Section 2: How It Works */}
        <ServiceHowItWorks service={service} />
        
        {/* Section 3: What's Included */}
        <ServiceBenefits service={service} />
        
        {/* Section 4: Pricing */}
        <ServicePricingCompact service={service} />
        
        {/* Section 5: FAQ */}
        <ServiceFAQ service={service} />
        
        {/* Section 6: Booking Form */}
        <ServiceBooking service={service} />
      </main>
      <Footer />
    </>
  )
}

