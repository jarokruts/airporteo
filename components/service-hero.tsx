'use client'

import { Service } from '@/lib/services'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  // Get the dynamic icon
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background to-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div
                className="p-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <IconComponent size={32} style={{ color: service.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--gold)]">Premium Service</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.name}</h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 bg-[var(--navy)] text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
                <ArrowRight size={20} />
              </button>
              <button
                className="px-6 py-3 border-2 border-[var(--navy)] text-[var(--navy)] font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold text-foreground">{service.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available at</p>
                <p className="font-semibold text-foreground">{service.pricing.length} Airports</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Perfect For</p>
                <p className="font-semibold text-foreground text-sm">{service.targetAudience.split(',')[0]}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-80 h-80 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <IconComponent size={120} style={{ color: service.color, opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
