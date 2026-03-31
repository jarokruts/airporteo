import { BookingWidget } from "./booking-widget"
import { SolariBackground } from "./solari-background"
import { RotatingHeading } from "./rotating-heading"
import { Shield, Star, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative" style={{ backgroundColor: 'var(--hero-navy)' }}>
      <SolariBackground />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ── MOBILE LAYOUT ── */}
        <div className="block sm:hidden pt-4 pb-8 flex flex-col items-center">
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/40 overflow-visible w-full" style={{ position: 'relative', zIndex: 9999, isolation: 'isolate', borderRadius: '16px', WebkitMaskImage: 'radial-gradient(white, white)', WebkitBackfaceVisibility: 'hidden', MozBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
            <BookingWidget />
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden sm:flex flex-col gap-4 py-8">

          {/* Headline */}
          <div className="max-w-3xl">
            <RotatingHeading />
          </div>

          {/* Booking Widget */}
          <div className="w-full">
            <div className="overflow-visible rounded-2xl border border-white/10 bg-background shadow-2xl shadow-black/40">
              <div className="flex border-b border-border px-5 py-3.5 items-center justify-between">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Search for Your Airport Service</h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Instant confirmation in selected airports
                </div>
              </div>
              <BookingWidget />
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center pb-4">
            {[
              { value: "27K+", label: "Happy travellers" },
              { value: "200+", label: "Airports served" },
              { value: "4.9★", label: "Average rating" },
            ].map(({ value, label }) => (
              <div key={label} className="px-6 first:pl-0">
                <p className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>{value}</p>
                <p className="mt-0.5 text-xs text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
