import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Article, Star, ChatDots, ShieldCheck } from '@phosphor-icons/react'

export const metadata: Metadata = {
  title: 'About Us | Airporteo - Premium Airport Services',
  description: 'Learn about Airporteo, our mission to make airport experiences seamless, and how we serve travelers at 120+ airports worldwide with professional concierge services.',
  keywords: ['about airporteo', 'airport concierge', 'our mission', 'premium services'],
}

export default function AboutPage() {
  const discoverCards = [
    {
      icon: Article,
      title: 'Blog',
      description: 'Travel tips and airport insights',
      href: '#',
    },
    {
      icon: Star,
      title: 'Testimonials',
      description: 'What our travelers say',
      href: '#',
    },
    {
      icon: ChatDots,
      title: 'Contact Us',
      description: 'Get in touch with our team',
      href: '#',
    },
    {
      icon: ShieldCheck,
      title: 'Trust & Safety',
      description: 'Our commitment to you',
      href: '#',
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Strip */}
        <section className="relative w-full bg-[var(--navy)] text-white py-12 md:py-16 px-4 md:px-8 flex items-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/about-us-hero.jpg"
            alt="Modern airport terminal"
            fill
            className="absolute inset-0 object-cover"
            priority
          />
          
          {/* Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/75 to-[var(--navy)]/85" />
          
          {/* Content */}
          <div className="mx-auto max-w-7xl w-full relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-50" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link> / About Us
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
              About Us
            </h1>
          </div>
        </section>

        {/* Content Area */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="mx-auto max-w-2xl">
            {/* Who We Are */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: '1.8' }}>
                Airporteo is a global airport concierge service providing premium meet and greet, fast track, VIP, and luggage assistance at over 120 airports worldwide. We believe that the airport experience should be seamless, stress-free, and even enjoyable — whether you are a first-time traveler or a seasoned business executive.
              </p>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: '1.8' }}>
                To make every airport moment effortless. From the aircraft door to your waiting vehicle, our trained multilingual agents handle immigration, customs, security, and baggage — so you do not have to. We take the complexity out of airports and replace it with personal service.
              </p>
            </div>

            {/* How We Work */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                How We Work
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: '1.8' }}>
                We partner with certified local teams at every airport we serve. Each agent holds proper airport credentials, is background-checked, and trained in hospitality. When you book with Airporteo, we assign a dedicated agent to your flight who monitors it in real time and adjusts if anything changes.
              </p>
            </div>

            {/* Our Numbers */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Our Numbers
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: '1.8' }}>
                Over 27,000 happy travelers, 120+ airports served, 500+ trained agents worldwide, and an average rating of 4.9 out of 5 stars.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Contact
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: '1.8' }}>
                Have questions or need a custom arrangement? Reach us at support@airporteo.com or through the contact form on our website. Our team responds within 2 hours during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Discover More Section */}
        <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#F0F2F5' }}>
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
              Discover More About Airporteo
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {discoverCards.map((card, idx) => {
                const IconComponent = card.icon
                return (
                  <Link
                    key={idx}
                    href={card.href}
                    className="rounded-3xl p-6 md:p-8"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <IconComponent
                          size={28}
                          weight="light"
                          style={{ color: '#1D215E' }}
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {card.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
