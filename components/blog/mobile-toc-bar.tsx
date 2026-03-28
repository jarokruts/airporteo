'use client'

import { List, X } from '@phosphor-icons/react'

export interface MobileTocItem {
  id: string
  label: string
  level: number
}

interface MobileTocBarProps {
  items: MobileTocItem[]
  isOpen: boolean
  onOpen: () => void
}

export function MobileTocBar({ items, isOpen, onOpen }: MobileTocBarProps) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#1D215E',
          fontFamily: 'var(--font-dm-sans)',
          margin: 0,
        }}
      >
        Table of Contents
      </p>

      <button
        onClick={onOpen}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#1D215E',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          fontWeight: 600,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = '#d4a04a'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = '#1D215E'
        }}
      >
        Open
        <List size={16} weight="regular" />
      </button>
    </div>
  )
}
