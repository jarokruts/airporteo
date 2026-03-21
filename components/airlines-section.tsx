import Image from 'next/image'

const airlines = [
  { name: 'Emirates', logo: '/images/emirates-logo.svg' },
  { name: 'Air Canada', logo: '/images/air-canada-logo.svg' },
  { name: 'KLM', logo: '/images/klm-logo.svg' },
  { name: 'Turkish Airlines', logo: '/images/turkish-airlines-logo.svg' },
  { name: 'Finnair', logo: '/images/finnair-logo.svg' },
  { name: 'British Airways', logo: '/images/british-airways-logo.svg' },
  { name: 'Singapore Airlines', logo: '/images/singapore-airlines-logo.svg' },
  { name: 'ANA', logo: '/images/ana-logo.svg' },
  { name: 'Air France', logo: '/images/air-france-logo.svg' },
  { name: 'Swissair', logo: '/images/swissair-logo.svg' },
  { name: 'Qatar Airways', logo: '/images/qatar-airways-logo.svg' },
  { name: 'Lufthansa', logo: '/images/lufthansa-logo.svg' },
  { name: 'Azul', logo: '/images/azul-logo.svg' },
]

export function AirlinesSection() {
  return (
    <section className="py-14 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Partnered with leading airlines worldwide
        </h2>
        <p className="text-muted-foreground">
          Trusted by major carriers to deliver premium airport services
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-12 pr-12">
          {[...airlines, ...airlines].map((airline, i) => (
            <div
              key={`${airline.name}-${i}`}
              className="flex shrink-0 items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={airline.logo}
                alt={airline.name}
                className="max-h-full max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
