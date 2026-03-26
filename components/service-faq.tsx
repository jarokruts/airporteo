'use client'

import { Service } from '@/lib/services'
import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'

interface ServiceFAQProps {
  service: Service
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Find answers to common questions about our service
          </p>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {faq.question}
                </span>
                <CaretDown
                  size={24}
                  weight="light"
                  className="text-[var(--gold)] flex-shrink-0 transition-transform"
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: 'var(--gold)'
                  }}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-border">
                  <p className="text-foreground leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[var(--navy)] to-[var(--navy)]/80 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Still have questions?
          </h3>
          <p className="mb-6 opacity-90" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Our customer support team is available 24/7 to help you
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[var(--gold)] text-[var(--navy)] font-semibold rounded-lg hover:shadow-lg transition-all"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
