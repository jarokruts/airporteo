import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/services'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { ServiceHowItWorks } from '@/components/service-how-it-works'
import { ServiceBenefits } from '@/components/service-benefits'
import { ServiceFAQ } from '@/components/service-faq'
import { PopularAirports } from '@/components/popular-airports'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
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
  const { slug } = await params
  const service = getService(slug)

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

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)

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
        
        {/* Section 4: FAQ */}
        <ServiceFAQ service={service} />
        
        {/* Section 5: Popular Airports */}
        <PopularAirports />
      </main>
      <Footer />
    </>
  )
}
