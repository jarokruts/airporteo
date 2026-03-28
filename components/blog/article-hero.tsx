'use client'

import Link from 'next/link'
import { CalendarBlank, Clock } from '@phosphor-icons/react'

interface ArticleHeroProps {
  breadcrumbs: { label: string; href: string }[]
  title: string
  date: string
  readTime: string
}

export function ArticleHero({ breadcrumbs, title, date, readTime }: ArticleHeroProps) {
  return (
    <div style={{ background: '#1D215E', padding: '48px 40px 44px' }} className="w-full">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center flex-wrap gap-1">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <Link href={crumb.href}>
                <a
                  className="transition-colors"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    color: idx === breadcrumbs.length - 1 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    if (idx !== breadcrumbs.length - 1) {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#d4a04a'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (idx !== breadcrumbs.length - 1) {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'
                    }
                  }}
                >
                  {crumb.label}
                </a>
              </Link>
              {idx < breadcrumbs.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>/</span>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '34px',
            fontWeight: 700,
            lineHeight: 1.3,
            maxWidth: '780px',
          }}
        >
          {title}
        </h1>

        {/* Meta Row */}
        <div
          className="flex gap-4 flex-wrap"
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '13px',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            <CalendarBlank size={14} style={{ color: 'rgba(255,255,255,0.35)' }} />
            {date}
          </div>
          <div
            className="flex items-center gap-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '13px',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            <Clock size={14} style={{ color: 'rgba(255,255,255,0.35)' }} />
            {readTime}
          </div>
        </div>
      </div>

      {/* Gold Decorative Line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,160,74,0.25), transparent)',
          marginTop: '24px',
        }}
      />

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 640px) {
          .article-hero {
            padding: 36px 20px 32px;
          }
          .article-hero h1 {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  )
}
