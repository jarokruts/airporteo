import { Service } from '@/lib/services'
import { Calendar, Users, Handshake, Car } from 'lucide-react'

interface ServiceHowItWorksProps {
  service: Service
}

export function ServiceHowItWorks({ service }: ServiceHowItWorksProps) {
  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {[
            { number: 1, title: 'Book Online', description: 'Choose your airport, flight, and service. Instant confirmation.', icon: Calendar },
            { number: 2, title: 'We Assign Your Agent', description: 'A trained, multilingual agent is assigned to your flight.', icon: Users },
            { number: 3, title: 'Agent Meets You', description: 'Your agent waits at the aircraft door with a personalized name board.', icon: Handshake },
            { number: 4, title: 'Door-to-Door Escort', description: 'Escorted through immigration, baggage, and customs to your vehicle.', icon: Car },
          ].map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white mb-4" style={{ backgroundColor: 'var(--navy)' }}>
                  {step.number}
                </div>
                <Icon size={40} className="text-[var(--gold)] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2 text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
