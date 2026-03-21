import { BookingWidget } from "./booking-widget"
import { SolariBackground } from "./solari-background"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative"
      style={{ 
        backgroundImage: 'linear-gradient(180deg, #1D215E 0%, #2A2F6E 100%)',
        minHeight: '600px'
      }}
    >
      <SolariBackground />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ── MOBILE LAYOUT ── */}
        <div className="block sm:hidden pt-8 pb-8 flex flex-col items-center gap-6">
          {/* Section Label */}
          <div 
            className="uppercase text-xs font-semibold tracking-wider"
            style={{ color: '#3F5CA6', letterSpacing: '0.15em' }}
          >
            Premium Airport Services
          </div>

          {/* Headline */}
          <h1 
            className="text-3xl font-medium leading-tight text-center text-white"
            style={{ fontSize: '32px' }}
          >
            Navigate airports without the stress
          </h1>

          {/* Stats row */}
          <div 
            className="flex items-center justify-center gap-6 pt-4"
            style={{ borderTop: '1px solid #3F5CA6' }}
          >
            <div className="text-center">
              <p className="text-lg font-semibold text-white">27,000+</p>
              <p className="text-xs text-white/60 mt-1">travelers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-white">120+</p>
              <p className="text-xs text-white/60 mt-1">airports</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-white">4.9<Star className="h-3.5 w-3.5 inline ml-1" style={{ color: '#CA8A04', fill: '#CA8A04' }} /></p>
              <p className="text-xs text-white/60 mt-1">rating</p>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="w-full pt-4">
            <div 
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="p-4 border-b" style={{ borderColor: '#E2E8F0' }}>
                <h2 className="text-sm font-medium" style={{ color: '#1D215E' }}>Book your service</h2>
              </div>
              <div className="p-4">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden sm:grid grid-cols-2 gap-12 items-center py-16">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8">
            {/* Section Label */}
            <div 
              className="uppercase text-xs font-semibold tracking-wider w-fit"
              style={{ color: '#3F5CA6', letterSpacing: '0.15em' }}
            >
              Premium Airport Services
            </div>

            {/* Headline */}
            <h1 
              className="text-white font-medium leading-tight"
              style={{ fontSize: '40px' }}
            >
              Navigate airports without the stress
            </h1>

            {/* Stats row */}
            <div 
              className="space-y-3 pt-4"
              style={{ borderTop: '1px solid #3F5CA6' }}
            >
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-sm">27,000+ travelers</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-sm">120+ airports</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-sm">4.9</span>
                <Star className="h-4 w-4" style={{ color: '#CA8A04', fill: '#CA8A04' }} />
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <div 
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="p-6 border-b" style={{ borderColor: '#E2E8F0' }}>
                <h2 className="text-base font-medium" style={{ color: '#1D215E' }}>Book your service</h2>
              </div>
              <div className="p-6">
                <style>{`
                  [data-booking-widget] input {
                    background-color: #F8FAFC !important;
                    border-color: #E2E8F0 !important;
                    border-radius: 4px !important;
                  }
                `}</style>
                <BookingWidget />
              </div>
              <div className="px-6 pb-6">
                <button 
                  className="w-full py-3 rounded-lg font-medium text-white transition-all"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #A16207, #CA8A04)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Get instant quote
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
