'use client'

import { Service } from '@/lib/services'
import { Clock, ShieldCheck, User, CalendarCheck } from '@phosphor-icons/react'

interface ServiceBenefitsProps {
  service: Service
}

const FAST_TRACK_BENEFITS = [
  {
    icon: Clock,
    title: 'Save up to 45 minutes',
    description: 'Skip the regular security and immigration queues. Our priority lanes get you through checkpoints in minutes, not hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Stress-free experience',
    description: 'No navigating confusing terminals or worrying about time. Your dedicated agent handles every step for you.',
  },
  {
    icon: User,
    title: 'Personal dedicated agent',
    description: 'A trained, multilingual professional meets you and stays with you throughout the entire airport process.',
  },
  {
    icon: CalendarCheck,
    title: 'Perfect for tight connections',
    description: 'When your layover is short, every minute counts. Fast track ensures you make your connecting flight without rushing.',
  },
]

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  // Show Fast Track specific benefits or generic benefits
  const isFastTrack = service.slug === 'fast-track'

  if (isFastTrack) {
    return (
      <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#F0F2F5' }}>
        <div className="mx-auto max-w-7xl">
          {/* Label */}
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1D215E] mb-3" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Benefits
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Why choose Fast Track at the airport?
          </h2>

          {/* Subtitle */}
          <p className="text-base text-muted-foreground mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Experience the ultimate in airport convenience and efficiency with our premium fast track service
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-5">
            {FAST_TRACK_BENEFITS.map((benefit, idx) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={idx}
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
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Generic benefits for other services
  const BENEFITS_PLACEHOLDER = {
    left: [
      'Personal meet & greet directly at aircraft door',
      'Dedicated escort through terminal to baggage claim',
      'Priority immigration processing',
      'Professional assistance with customs and arrival procedures',
    ],
    right: [
      'Expert baggage collection and porter services',
      'Personal escort to your waiting vehicle or transfer',
      'Real-time flight monitoring',
      'Multilingual agent support',
    ],
  }

  return (
    <section className="bg-[#F8F9FA] py-10 md:py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
          What&apos;s Included
        </h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            {BENEFITS_PLACEHOLDER.left.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={24} weight="light" style={{ color: 'var(--gold)' }} />
                </div>
                <p className="text-base text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {BENEFITS_PLACEHOLDER.right.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={24} weight="light" style={{ color: 'var(--gold)' }} />
                </div>
                <p className="text-base text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { CheckCircle } from '@phosphor-icons/react'
