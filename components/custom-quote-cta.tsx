'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CustomQuoteCTAProps {
  airportName: string
}

export function CustomQuoteCTA({ airportName }: CustomQuoteCTAProps) {
  return (
    <section className="py-8 md:py-16 px-5 lg:px-8 bg-gradient-to-r from-navy to-blue">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Our team can create a tailored service package for your specific needs at {airportName}.
            Contact us for personalized pricing and arrangements.
          </p>
          
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-navy bg-gold hover:bg-gold/90 transition-colors text-sm md:text-base"
          >
            Request Custom Quote
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
