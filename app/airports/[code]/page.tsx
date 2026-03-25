import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAirport } from '@/lib/airports'
import { AirportHero } from '@/components/airport-hero'
import { AirportBenefitsBar } from '@/components/airport-benefits-bar'
import { AirportInfoSection } from '@/components/airport-info-section'
import { AirportServices } from '@/components/airport-services'
import { ReviewsSection } from '@/components/reviews-section'
import { FAQSection } from '@/components/faq-section'
import { RelatedAirports } from '@/components/related-airports'
import { CustomQuoteCTA } from '@/components/custom-quote-cta'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

interface AirportPageProps {
  params: Promise<{
    code: string
  }>
}

export async function generateMetadata({
  params,
}: AirportPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const airport = getAirport(resolvedParams.code.toUpperCase())

  if (!airport) {
    return {
      title: 'Airport Not Found',
    }
  }

  return {
    title: `${airport.name} (${airport.code}) | Airporteo`,
    description: `Premium airport concierge services at ${airport.name}. Meet & Greet, Fast Track, VIP services, and more.`,
  }
}

export async function generateStaticParams() {
  // Generate routes for all airports
  return [
    { code: 'bcn' },
    { code: 'lhr' },
    { code: 'cdg' },
    { code: 'jfk' },
    { code: 'dxb' },
    { code: 'sin' },
  ]
}

export default async function AirportPage({ params }: AirportPageProps) {
  const resolvedParams = await params
  const airport = getAirport(resolvedParams.code.toUpperCase())

  if (!airport) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AirportHero airport={airport} />
        
        {/* Intro Paragraph */}
        <section className="py-6 md:py-10 px-5 lg:px-8 bg-background">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Premium meet and greet and VIP concierge services at Barcelona El Prat Airport (BCN). Our dedicated team operates across Terminal 1 and Terminal 2, providing personal escort, fast track immigration, luggage assistance, and exclusive private tarmac transfers for arrivals, departures, and connections.
            </p>
          </div>
        </section>
        
        <AirportBenefitsBar />
        <AirportServices airport={airport} />
        <ReviewsSection />
        <AirportInfoSection airport={airport} />
        <FAQSection />
        <RelatedAirports currentAirportCode={airport.code} />
        <CustomQuoteCTA airportName={airport.name} />
      </main>

      <Footer />
    </div>
  )
}
