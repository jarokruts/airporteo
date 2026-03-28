'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

interface RelatedArticleCardProps {
  date: string
  title: string
  slug: string
  image: string
}

const RelatedArticleCard = ({ date, title, slug, image }: RelatedArticleCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block h-full transition-all duration-300"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'block',
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget as HTMLAnchorElement
        card.style.borderColor = 'rgba(0,0,0,0.12)'
        card.style.transform = 'translateY(-3px)'
        card.style.boxShadow = '0 8px 30px rgba(29,33,94,0.08)'
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget as HTMLAnchorElement
        card.style.borderColor = 'rgba(0,0,0,0.07)'
        card.style.transform = 'translateY(0)'
        card.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          background: '#f0f0f0',
        }}
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img') as HTMLImageElement
          if (img) {
            img.style.transform = 'scale(1.04)'
          }
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img') as HTMLImageElement
          if (img) {
            img.style.transform = 'scale(1)'
          }
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px' }}>
        {/* Date */}
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'rgba(26,26,46,0.35)',
            fontFamily: 'var(--font-dm-sans)',
            margin: '0 0 8px',
            fontWeight: 600,
          }}
        >
          {date}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '16px',
            fontWeight: 700,
            color: '#1D215E',
            margin: '0 0 12px',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLHeadingElement).style.color = '#d4a04a'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLHeadingElement).style.color = '#1D215E'
          }}
        >
          {title}
        </h3>

        {/* Read More */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#d4a04a',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Read more
          <ArrowRight size={12} weight="bold" />
        </div>
      </div>
    </Link>
  )
}

export function RelatedArticles() {
  const relatedArticles = [
    {
      date: 'March 15, 2026',
      title: 'Sun, Samba & Seamless Travel: VIP Services in South America',
      slug: 'vip-services-south-america',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    },
    {
      date: 'February 28, 2026',
      title: 'Navigating Dubai International Airport: A Complete VIP Guide',
      slug: 'dubai-vip-guide',
      image: 'https://images.unsplash.com/photo-1541599810657-cd13b4904fa7?w=800&h=500&fit=crop',
    },
    {
      date: 'January 18, 2026',
      title: 'Traveling with Elderly Parents: How Airport Assistance Helps',
      slug: 'elderly-travel-assistance',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    },
  ]

  return (
    <section
      style={{
        paddingTop: '0',
        paddingBottom: '20px',
        marginTop: '0',
        marginBottom: '0',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '22px',
          fontWeight: 700,
          color: '#1D215E',
          marginTop: '0',
          marginBottom: '12px',
          textAlign: 'left',
        }}
      >
        Related Articles
      </h2>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {relatedArticles.map((article, idx) => (
          <RelatedArticleCard
            key={idx}
            date={article.date}
            title={article.title}
            slug={article.slug}
            image={article.image}
          />
        ))}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1000px) {
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
