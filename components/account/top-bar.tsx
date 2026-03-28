'use client'

import { Plus, List } from '@phosphor-icons/react'

interface AccountTopBarProps {
  title: string
  onMenuClick: () => void
}

export function AccountTopBar({ title, onMenuClick }: AccountTopBarProps) {
  return (
    <div
      style={{
        height: '64px',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '0 40px',
      }}
      className="sticky top-0 z-40 flex items-center justify-between px-10 md:px-6 sm:px-5"
    >
      {/* Left: Hamburger Menu (Mobile Only) */}
      <button
        onClick={onMenuClick}
        className="hidden lg:flex items-center justify-center"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '8px',
          background: 'transparent',
          cursor: 'pointer',
          marginRight: '16px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.12)'
          ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.02)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.07)'
          ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
        }}
      >
        <List size={20} weight="regular" />
      </button>

      {/* Center: Page Title */}
      <h1
        style={{
          fontSize: '20px',
          fontWeight: 700,
          fontFamily: 'var(--font-playfair)',
          color: '#1D215E',
          flex: 1,
        }}
        className="text-base md:text-lg"
      >
        {title}
      </h1>

      {/* Right: Book Service Button */}
      <button
        style={{
          background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
          color: '#1D215E',
          fontSize: '13px',
          fontWeight: 600,
          padding: '9px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(212,160,74,0.2)',
          whiteSpace: 'nowrap',
        }}
        className="text-xs md:text-sm px-3 md:px-5"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(212,160,74,0.3)'
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(212,160,74,0.2)'
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
        }}
      >
        <Plus size={16} weight="bold" />
        <span className="hidden sm:inline">Book Service</span>
        <span className="inline sm:hidden">Book</span>
      </button>
    </div>
  )
}
