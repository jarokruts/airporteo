'use client'

import { Service, getService } from '@/lib/services'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

interface RelatedServicesProps {
  relatedSlugs: string[]
}

export function RelatedServices({ relatedSlugs }: RelatedServicesProps) {
  const services = relatedSlugs.map(slug => getService(slug)).filter(Boolean) as Service[]

  if (services.length === 0) return null

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Our Other Services</h2>
          <p className="text-lg text-muted-foreground">Enhance your airport experience with our premium offerings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap

            return (
              <Link
                key={service.id}
                href={`/service/${service.slug}`}
                className="group p-6 border border-border rounded-xl hover:shadow-lg hover:border-[var(--gold)] transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="p-3 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <IconComponent size={24} style={{ color: service.color }} />
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--gold)]">Learn More</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
