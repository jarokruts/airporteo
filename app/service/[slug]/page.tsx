import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/services'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { ServiceBenefits } from '@/components/service-benefits'
import { ServicePricing } from '@/components/service-pricing'
import { ServiceFAQ } from '@/components/service-faq'
import { ServiceBooking } from '@/components/service-booking'
import { RelatedServices } from '@/components/related-services'

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
    title: `${service.name} | Airport Concierge Services`,
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
        <ServiceHero service={service} />
        <ServiceBenefits service={service} />
        <ServicePricing service={service} />
        <ServiceFAQ service={service} />
        <ServiceBooking service={service} />
        <RelatedServices relatedSlugs={service.relatedServices} />
      </main>
      <Footer />
    </>
  )
}
