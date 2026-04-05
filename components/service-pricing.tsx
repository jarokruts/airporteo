'use client'

import { Service } from '@/lib/services'

interface ServicePricingProps {
  service: Service
}

export function ServicePricing({ service }: ServicePricingProps) {
  return (
    <section className="py-10 md:py-16 px-1 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pricing Across Airports</h2>
          <p className="text-lg text-muted-foreground">Transparent pricing for our services worldwide</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--navy)] text-white">
                <th className="px-6 py-4 text-left font-semibold">Airport</th>
                <th className="px-6 py-4 text-left font-semibold">Code</th>
                <th className="px-6 py-4 text-right font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {service.pricing.map((pricing, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-medium text-foreground">{pricing.airport}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--gold)]/10 rounded-lg font-semibold text-[var(--navy)]">
                      {pricing.airportCode}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-lg font-bold text-[var(--gold)]">
                      {pricing.currency} {pricing.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid gap-4">
          {service.pricing.map((pricing, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg border border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-foreground">{pricing.airport}</p>
                  <p className="text-sm text-muted-foreground">{pricing.airportCode}</p>
                </div>
                <span className="text-lg font-bold text-[var(--gold)]">
                  {pricing.currency} {pricing.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Note:</span> Prices are per person and may vary based on service timing and seasonal demand. Group discounts available upon request.
          </p>
        </div>
      </div>
    </section>
  )
}
