import { BookingWidget } from "./booking-widget"
import { SolariBackground } from "./solari-background"
import { RotatingHeading } from "./rotating-heading"
import { Shield, Star, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative" style={{ backgroundColor: 'var(--hero-navy)' }}>
      <SolariBackground />
      <div className="relative mx-auto max-w-7xl">

        {/* ── MOBILE LAYOUT ── */}
        <div className="block sm:hidden pt-4 pb-8 px-1 flex flex-col items-center">
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/40 overflow-visible w-full" style={{ position: 'relative', zIndex: 9999, isolation: 'isolate', borderRadius: '16px', WebkitMaskImage: 'radial-gradient(white, white)', WebkitBackfaceVisibility: 'hidden', MozBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
            <BookingWidget />
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden sm:flex flex-col gap-4 py-8 px-5 lg:px-8">

          {/* Headline */}
          <div className="max-w-3xl">
            <RotatingHeading />
          </div>

          {/* Booking Widget */}
          <div className="w-full" style={{ maxWidth: '100%' }}>
            <div className="overflow-visible rounded-2xl border border-white/10 bg-background shadow-2xl shadow-black/40">
              <div className="flex border-b border-border px-5 py-3.5 items-center justify-between">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Search for Your Airport Service</h2>
                <div className="inline-flex items-center gap-2" style={{ background: 'rgba(184, 145, 58, 0.1)', padding: 'var(--space-2) var(--space-4)', borderRadius: '999px' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" stroke="#1D215E" strokeWidth="1.5" fill="none"/>
                    <path d="M5.5 8L7 9.5L10.5 5.5" stroke="#1D215E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#1D215E' }}>Instant confirmation in selected airports</span>
                </div>
              </div>
              <BookingWidget />
            </div>
          </div>

          {/* Stats row - with improved integration */}
          <div className="flex items-center pt-var(--space-12) border-t border-white/10" style={{ paddingTop: 'var(--space-12)' }}>
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
