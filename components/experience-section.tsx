import Image from "next/image"
import { Users, ShieldCheck, Globe, ArrowRight } from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Dedicated Personnel",
    description: "Every service is delivered by a professionally trained agent assigned exclusively to you.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted & Certified",
    description: "All staff are airport-certified, background-checked, and trained to five-star hospitality standards.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "From London Heathrow to Dubai International, our agents know every terminal like the back of their hand.",
  },
]

export function ExperienceSection() {
  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Image Collage */}
          <div className="relative flex-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Large VIP lounge image */}
              <div className="col-span-2 relative h-64 lg:h-80 overflow-hidden rounded-2xl">
                <Image
                  src="/images/vip-lounge.jpg"
                  alt="Premium VIP airport lounge with elegant seating and runway views"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    First-class treatment
                  </span>
                </div>
              </div>

              {/* Personnel at work */}
              <div className="relative h-40 lg:h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/service-arrival.jpg"
                  alt="Concierge personnel greeting travelers at the airport"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Luxury transport */}
              <div className="relative h-40 lg:h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/private-transfer.jpg"
                  alt="Luxury chauffeur service at airport VIP terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>

            {/* Floating stats badge */}
            <div className="absolute -bottom-4 -right-2 lg:-right-6 z-10 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-navy/10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10">
                  <Users className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Trained concierge agents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 lg:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold" style={{ letterSpacing: '0.1em', fontSize: '13px' }}>The Airporteo Experience</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Your personal team, at every airport
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Behind every seamless journey is a dedicated professional who knows the airport inside out. Our concierge agents are trained to deliver white-glove service from the moment you land.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-5">
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#hero"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/80"
            >
              Book Your Concierge
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
