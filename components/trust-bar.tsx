"use client"

const AIRLINE_NAMES = [
  "British Airways",
  "Lufthansa",
  "Emirates",
  "Air France",
  "KLM",
  "Singapore Airlines",
  "Qatar Airways",
  "Delta",
  "United",
  "Swiss",
  "Turkish Airlines",
  "Cathay Pacific",
]

function AirlineLogoPill({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-primary-foreground">
        {initials}
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}

export function TrustBar() {
  return (
    <section id="trust" className="overflow-hidden border-b border-border bg-secondary/50 py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Partnered with leading airlines worldwide
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-secondary/50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-secondary/50 to-transparent" />

        <div className="flex animate-marquee gap-4">
          {[...AIRLINE_NAMES, ...AIRLINE_NAMES].map((name, i) => (
            <AirlineLogoPill key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
