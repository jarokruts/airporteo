'use client'

import Image from 'next/image'

interface BlogHeroProps {
  label?: string
  heading: string
  subtitle: string
}

export function BlogHero({ label = 'Airporteo Blog', heading, subtitle }: BlogHeroProps) {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        position: 'relative',
        padding: '56px 40px 52px',
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/blog-hero.jpg"
        alt="Aircraft at airport terminal"
        fill
        className="absolute inset-0 object-cover"
        priority
      />
      
      {/* Navy Gradient Overlay - Shadow Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(29, 33, 94, 0.75) 0%, rgba(29, 33, 94, 0.7) 50%, rgba(29, 33, 94, 0.8) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Label */}
        <div className="text-center mb-6">
          <p
            className="uppercase tracking-widest text-[#d4a04a]"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
            }}
          >
            {label}
          </p>
        </div>

        {/* Heading */}
        <h1
          className="text-center text-white"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          {heading}
        </h1>

        {/* Subtitle */}
        <p
          className="text-center mx-auto"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '540px',
            lineHeight: '1.6',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Decorative Gold Line */}
      <div
        className="mt-8 relative z-10"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,160,74,0.25), transparent)',
        }}
      />

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 560px) {
          .blog-hero-root {
            padding: 40px 24px 36px;
          }
          .blog-hero-heading {
            font-size: 24px;
          }
          .blog-hero-subtitle {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
