'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export interface BlogPost {
  id: number
  date: string
  title: string
  excerpt: string
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const delaySeconds = 0.05 + index * 0.05

  return (
    <Link href={`/blog/${post.slug}`}>
      <a
        className="block h-full bg-white rounded-xl overflow-hidden border transition-all duration-300"
        style={{
          border: '1px solid rgba(0,0,0,0.07)',
          cursor: 'pointer',
          animation: `fadeInUp 0.5s ease-out ${delaySeconds}s both`,
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.borderColor = 'rgba(0,0,0,0.13)'
          el.style.transform = 'translateY(-3px)'
          el.style.boxShadow = '0 8px 30px rgba(29,33,94,0.08)'
          const titleEl = el.querySelector('[data-blog-title]') as HTMLElement
          if (titleEl) titleEl.style.color = '#d4a04a'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.borderColor = 'rgba(0,0,0,0.07)'
          el.style.transform = 'translateY(0)'
          el.style.boxShadow = 'none'
          const titleEl = el.querySelector('[data-blog-title]') as HTMLElement
          if (titleEl) titleEl.style.color = '#1D215E'
        }}
      >
        {/* Featured Image */}
        <div className="relative w-full overflow-hidden bg-gray-200" style={{ aspectRatio: '16/10' }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: 'scale(1)' }}
            onMouseEnter={(e) => {
              const img = e.currentTarget as HTMLImageElement
              img.style.transform = 'scale(1.04)'
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget as HTMLImageElement
              img.style.transform = 'scale(1)'
            }}
          />
        </div>

        {/* Card Body */}
        <div
          className="flex flex-col flex-1"
          style={{ padding: '22px 24px 24px' }}
        >
          {/* Date */}
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              fontWeight: 500,
              uppercase: true,
              letterSpacing: '0.6px',
              color: 'rgba(26,26,46,0.35)',
              marginBottom: '10px',
            }}
          >
            {post.date}
          </p>

          {/* Title */}
          <h3
            data-blog-title
            className="transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '18px',
              fontWeight: 700,
              color: '#1D215E',
              lineHeight: '1.4',
              marginBottom: '12px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className="flex-1"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: 'rgba(26,26,46,0.55)',
              lineHeight: '1.6',
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{
              color: '#d4a04a',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.gap = '8px'
              const icon = el.querySelector('svg') as SVGElement
              if (icon) icon.style.transform = 'translateX(2px)'
              el.style.color = '#e8b65e'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.gap = '2px'
              const icon = el.querySelector('svg') as SVGElement
              if (icon) icon.style.transform = 'translateX(0)'
              el.style.color = '#d4a04a'
            }}
          >
            <span>Read more</span>
            <ArrowRight size={14} weight="bold" style={{ transition: 'transform 0.3s ease' }} />
          </div>
        </div>
      </a>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Link>
  )
}
