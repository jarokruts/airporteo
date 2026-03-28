'use client'

import { X } from '@phosphor-icons/react'

export interface TocDrawerItem {
  id: string
  label: string
  level: number
}

interface TocDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: TocDrawerItem[]
}

export function TocDrawer({ isOpen, onClose, items }: TocDrawerProps) {
  const handleTocClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 50,
          top: 0,
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 51,
          background: '#ffffff',
          borderRadius: '16px 16px 0 0',
          maxHeight: '70vh',
          overflowY: 'auto',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            zIndex: 52,
          }}
        >
          <p
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#1D215E',
              margin: 0,
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Table of Contents
          </p>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#1D215E',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.05)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            }}
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* TOC Links */}
        <div style={{ padding: '24px' }}>
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => handleTocClick(item.id)}
              style={{
                display: 'block',
                width: '100%',
                padding: item.level === 2 ? '10px 12px' : '8px 12px 8px 32px',
                marginBottom: '8px',
                background: 'transparent',
                border: 'none',
                borderRadius: '6px',
                fontSize: item.level === 2 ? '14px' : '13px',
                fontWeight: 500,
                color: 'rgba(26,26,46,0.55)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-dm-sans)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(29,33,94,0.06)'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#1D215E'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(26,26,46,0.55)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
