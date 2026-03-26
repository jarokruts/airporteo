'use client'

import { Service } from '@/lib/services'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceFAQProps {
  service: Service
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-5 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 md:mb-8">
          FAQs
        </h2>

        {/* Accordion */}
        <div className="space-y-0">
          {service.faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenId(openId === index ? null : index)}
                className="w-full flex items-center justify-between py-4 md:py-6 text-left transition-all hover:opacity-70"
              >
                <span className="text-sm md:text-base lg:text-lg font-medium text-foreground pr-3 md:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-foreground transition-transform duration-300",
                    openId === index && "rotate-180"
                  )}
                />
              </button>

              {/* Answer */}
              {openId === index && (
                <div className="pb-4 md:pb-6 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}

              {/* Dotted Divider */}
              {index < service.faqs.length - 1 && (
                <div className="border-b border-dotted border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
