'use client'

import { useState } from 'react'
import { Airport } from '@/lib/airports'
import { ChevronDown } from 'lucide-react'

interface AirportTerminalsProps {
  airport: Airport
}

export function AirportTerminals({ airport }: AirportTerminalsProps) {
  const [expandedTerminal, setExpandedTerminal] = useState<number>(0)

  return (
    <section className="py-8 md:py-16 px-5 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Terminal Guide
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore terminals and airlines at {airport.name}
          </p>
        </div>

        {/* Terminals */}
        <div className="space-y-3 md:space-y-4">
          {airport.terminals.map((terminal, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden hover:border-gold transition-colors"
            >
              <button
                onClick={() => setExpandedTerminal(expandedTerminal === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-secondary/50 transition-colors"
              >
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{terminal.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {terminal.airlines.length} airlines • {terminal.facilities.length} facilities
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-gold transition-transform flex-shrink-0 ml-2 ${
                    expandedTerminal === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedTerminal === index && (
                <div className="border-t border-border px-4 md:px-6 py-4 md:py-6 bg-secondary/30">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Airlines */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Airlines</h4>
                      <div className="flex flex-wrap gap-2">
                        {terminal.airlines.map(airline => (
                          <span
                            key={airline}
                            className="px-2 md:px-3 py-1 rounded-full bg-gold/10 text-gold text-xs md:text-sm font-medium"
                          >
                            {airline}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Facilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {terminal.facilities.map(facility => (
                          <span
                            key={facility}
                            className="px-2 md:px-3 py-1 rounded-full bg-blue/10 text-blue text-xs md:text-sm font-medium"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
