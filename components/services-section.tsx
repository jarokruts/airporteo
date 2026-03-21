"use client"

import Image from "next/image"
import { PlaneLanding, PlaneTakeoff, ArrowLeftRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    icon: PlaneLanding,
    title: "Arrival Service",
    description: "Your personal concierge greets you at the gate, expedites immigration and customs, and escorts you to your transport.",
    features: ["Gate greeting", "Immigration fast-track", "Luggage assistance", "Transport coordination"],
    price: "From €49",
    image: "/images/arrival-service.png",
    imageAlt: "Business professionals arriving at airport terminal with luggage",
  },
  {
    icon: PlaneTakeoff,
    title: "Departure Service",
    description: "Breeze through check-in, security, and passport control with priority access. Relax in a private lounge before your flight.",
    features: ["Priority check-in", "Fast-track security", "Lounge access", "Gate escort"],
    price: "From €45",
    image: "/images/airport-departure.png",
    imageAlt: "Airport concierge assisting a traveler at check-in desk",
  },
  {
    icon: ArrowLeftRight,
    title: "Connection Service",
    description: "Seamless terminal transfers with a dedicated assistant. Never miss a tight connection, even across terminals.",
    features: ["Terminal transfer", "Priority re-screening", "Flight monitoring", "Lounge access"],
    price: "From €79",
    image: "/images/connection-service.png",
    imageAlt: "Airport concierge professionals greeting travelers in terminal lounge",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Premium assistance at every stage
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300",
                  "hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
                )}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                  {/* Icon badge on image */}
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-card/95 backdrop-blur-sm text-gold shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                  {/* Features */}
                  <ul className="mt-5 flex-1 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-lg font-bold text-foreground">{service.price}</span>
                    <a
                      href="#hero"
                      className="flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold/80"
                    >
                      Book now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
