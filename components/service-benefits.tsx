'use client'

import { Service } from '@/lib/services'
import { Check } from 'lucide-react'

interface ServiceBenefitsProps {
  service: Service
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose {service.name}?</h2>
          <p className="text-lg text-muted-foreground">Discover the key benefits that make our service exceptional</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={24} className="text-[var(--gold)]" />
                  </div>
                  <span className="text-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Included Features</h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={24} className="text-[var(--navy)]" />
                  </div>
                  <span className="text-foreground text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[var(--navy)]/5 to-[var(--gold)]/5 rounded-2xl border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-3">Who is this for?</h3>
          <p className="text-lg text-muted-foreground">{service.targetAudience}</p>
        </div>
      </div>
    </section>
  )
}
