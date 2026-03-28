'use client'

import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export function ArticleCta() {
  return (
    <div
      style={{
        background: '#1D215E',
        borderRadius: '14px',
        padding: '24px 22px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Gold Glow in Top-Right Corner */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,160,74,0.15), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: '#d4a04a',
            marginBottom: '8px',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Book now
        </p>

        {/* Heading */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          Need VIP Service at Istanbul Airport?
        </h3>

        {/* Body Text */}
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '18px',
            fontFamily: 'var(--font-dm-sans)',
            lineHeight: 1.6,
          }}
        >
          Get a quote for meet & greet, fast track, VIP terminal, or transfers.
        </p>

        {/* Button */}
        <Link
          href="https://airporteo.com/airport/istanbul-international-ist/"
          className="inline-flex items-center gap-2 transition-all"
          style={{
            background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
            color: '#1D215E',
            fontSize: '13px',
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(212,160,74,0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(212,160,74,0.3)'
            ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px rgba(212,160,74,0.2)'
            ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
          }}
        >
          Request a Quote
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    </div>
  )
}
