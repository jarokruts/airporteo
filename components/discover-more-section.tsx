'use client'

import Link from 'next/link'
import { Article, Star, ChatDots, ShieldCheck } from '@phosphor-icons/react'

const DISCOVER_CARDS = [
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

export function DiscoverMoreSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#F0F2F5' }}>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          Discover More About Airporteo
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {DISCOVER_CARDS.map((card, idx) => {
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
  )
}
