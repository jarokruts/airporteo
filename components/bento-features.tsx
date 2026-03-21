"use client"

import Image from "next/image"
import {
  Luggage,
  Zap,
  Car,
  Armchair,
  Globe,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    icon: Luggage,
    title: "Luggage Assistance",
    description: "Porters handle your bags from curb to gate, and track them through every step.",
    size: "large" as const,
    image: "/images/luggage-assist.jpg",
    imageAlt: "Professional porter handling premium luggage at the airport",
  },
  {
    icon: Zap,
    title: "Fast Track",
    description: "Skip the queues at security, immigration, and customs with priority clearance.",
    size: "small" as const,
  },
  {
    icon: Car,
    title: "Private Transfers",
    description: "Luxury chauffeur service from terminal to your destination, available worldwide.",
    size: "small" as const,
    image: "/images/private-transfer.jpg",
    imageAlt: "Luxury sedan with chauffeur at airport VIP pickup",
  },
  {
    icon: Armchair,
    title: "Lounge Access",
    description: "Relax in premium airport lounges with complimentary refreshments before your flight.",
    size: "small" as const,
    image: "/images/vip-lounge.jpg",
    imageAlt: "Luxurious VIP airport lounge with runway views",
  },
  {
    icon: Globe,
    title: "Multilingual Guides",
    description: "Concierge agents fluent in 20+ languages for seamless international travel.",
    size: "small" as const,
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "We monitor your flight status and adjust your service timing automatically. No missed connections.",
    size: "large" as const,
  },
]

export function BentoFeatures() {
  return (
    <section id="features" className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Airporteo</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Everything you need, nothing you don{"'"}t
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Six pillars of a stress-free airport experience, delivered by a dedicated concierge at every step.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon
            const isLarge = feature.size === "large"
            const hasImage = "image" in feature && feature.image

            return (
              <div
                key={feature.title}
                className={cn(
                  "group relative flex overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300",
                  "hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5",
                  isLarge && "md:col-span-2 lg:col-span-1",
                  idx === 0 && "md:col-span-2 lg:col-span-2",
                  idx === FEATURES.length - 1 && "md:col-span-2 lg:col-span-2",
                  // Image cards on large spans: side-by-side layout
                  hasImage && idx === 0 && "lg:flex-row",
                  // Cards with images but not the first large: stack vertically
                  hasImage && idx !== 0 && !isLarge && "flex-col",
                  // Non-image cards: column layout
                  !hasImage && "flex-col",
                )}
              >
                {/* Image area */}
                {hasImage && (
                  <div
                    className={cn(
                      "relative overflow-hidden flex-shrink-0",
                      // First large card: side image on desktop
                      idx === 0 && "h-48 w-full lg:h-auto lg:w-[45%]",
                      // Small cards with images: top image
                      idx !== 0 && !isLarge && "h-40 w-full",
                    )}
                  >
                    <Image
                      src={feature.image!}
                      alt={feature.imageAlt || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={idx === 0 ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                  </div>
                )}

                {/* Content area */}
                <div className={cn("relative flex flex-1 flex-col justify-center p-6", hasImage && idx === 0 && "lg:p-8")}>
                  {/* Subtle gradient accent on hover */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
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
