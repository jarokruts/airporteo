'use client'

import { useState, useEffect } from 'react'

export interface TocItem {
  id: string
  label: string
  level: number
}

interface ArticleTocProps {
  items: TocItem[]
}

export function ArticleToc({ items }: ArticleTocProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map(item => document.getElementById(item.id)).filter(Boolean)
      
      for (const heading of headings) {
        if (heading) {
          const rect = heading.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveId(heading.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleTocClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        padding: '20px 22px',
      }}
    >
      {/* Title */}
      <p
        style={{
          fontSize: '13px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          color: 'rgba(26,26,46,0.35)',
          marginBottom: '16px',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        In this article
      </p>

      {/* TOC Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => handleTocClick(item.id)}
            style={{
              padding: item.level === 2 ? '6px 12px' : '4px 12px 4px 24px',
              borderRadius: '6px',
              background: activeId === item.id ? 'rgba(29,33,94,0.06)' : 'transparent',
              border: activeId === item.id ? '0 solid transparent' : 'none',
              borderLeft: activeId === item.id ? '2px solid #d4a04a' : 'none',
              fontSize: item.level === 2 ? '13px' : '12px',
              fontWeight: activeId === item.id ? 600 : 500,
              color: activeId === item.id ? '#1D215E' : 'rgba(26,26,46,0.55)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left',
              fontFamily: 'var(--font-dm-sans)',
            }}
            onMouseEnter={(e) => {
              if (activeId !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(29,33,94,0.04)'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#1D215E'
              }
            }}
            onMouseLeave={(e) => {
              if (activeId !== item.id) {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,46,0.55)'
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
