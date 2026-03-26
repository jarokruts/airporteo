import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getAllServices } from '@/lib/services'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium Airport Services | Fast Track & Meet & Greet',
  description: 'Explore our range of premium airport concierge services including Fast Track immigration, Meet & Greet, and VIP Platinum experiences at major European airports.',
  keywords: ['airport services', 'fast track', 'meet and greet', 'VIP service', 'concierge'],
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-16 px-4 md:px-8 bg-gradient-to-b from-[var(--navy)] to-[var(--navy)]/90 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Airport Services
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Experience seamless, luxurious airport journeys with our comprehensive concierge services across Europe's leading airports
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-16 px-4 md:px-8 bg-background">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => {
                const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap

                return (
                  <Link
                    key={service.id}
                    href={`/service/${service.slug}`}
                    className="group flex flex-col h-full"
                  >
                    <div className="flex-1 p-8 bg-white rounded-2xl border border-border hover:border-[var(--gold)] hover:shadow-xl transition-all duration-300">
                      {/* Icon */}
                      <div
                        className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <IconComponent size={32} style={{ color: service.color }} />
                      </div>

                      {/* Content */}
                      <h2 className="text-2xl font-bold text-foreground mb-3">{service.name}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Quick Facts */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold text-foreground">Duration:</span>
                          <span className="text-muted-foreground">{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold text-foreground">Airports:</span>
                          <span className="text-muted-foreground">{service.pricing.length} locations</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold text-foreground">From:</span>
                          <span className="text-[var(--gold)] font-semibold">
                            {service.pricing[0].currency} {Math.min(...service.pricing.map(p => p.price))}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-[var(--gold)] font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by thousands of travelers worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-xl border border-border text-center">
                <div className="mb-4 text-4xl">✈️</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Global Coverage</h3>
                <p className="text-muted-foreground text-sm">Services at 6+ major European airports</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border text-center">
                <div className="mb-4 text-4xl">⏱️</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Time-Saving</h3>
                <p className="text-muted-foreground text-sm">Save 30+ minutes on immigration</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border text-center">
                <div className="mb-4 text-4xl">🔒</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground text-sm">Professional, trusted staff</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-border text-center">
                <div className="mb-4 text-4xl">💬</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">Always available when you need us</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-16 px-4 md:px-8 bg-[var(--navy)] text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Airport Experience?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Book your service today and enjoy seamless, stress-free airport travel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/service/fast-track"
                className="px-8 py-4 bg-[var(--gold)] text-[var(--navy)] font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Explore Services
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[var(--gold)] text-[var(--gold)] font-semibold rounded-lg hover:bg-[var(--gold)]/10 transition-all"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
