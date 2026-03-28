'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function BlogPagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div
      className="flex items-center justify-center gap-1.5 flex-wrap"
      style={{
        marginTop: '48px',
      }}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center transition-all duration-200"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.07)',
          background: '#ffffff',
          color: 'rgba(26,26,46,0.55)',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.3 : 1,
          pointerEvents: currentPage === 1 ? 'none' : 'auto',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            const el = e.currentTarget as HTMLButtonElement
            el.style.borderColor = 'rgba(0,0,0,0.13)'
            el.style.color = '#1D215E'
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.borderColor = 'rgba(0,0,0,0.07)'
          el.style.color = 'rgba(26,26,46,0.55)'
        }}
      >
        <CaretLeft size={16} weight="bold" />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="transition-all duration-200"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: page === currentPage ? '1px solid #1D215E' : '1px solid rgba(0,0,0,0.07)',
            background: page === currentPage ? '#1D215E' : '#ffffff',
            color: page === currentPage ? '#ffffff' : 'rgba(26,26,46,0.55)',
            cursor: 'pointer',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '14px',
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            if (page !== currentPage) {
              el.style.borderColor = 'rgba(0,0,0,0.13)'
              el.style.color = '#1D215E'
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            if (page !== currentPage) {
              el.style.borderColor = 'rgba(0,0,0,0.07)'
              el.style.color = 'rgba(26,26,46,0.55)'
            }
          }}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center transition-all duration-200"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.07)',
          background: '#ffffff',
          color: 'rgba(26,26,46,0.55)',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.3 : 1,
          pointerEvents: currentPage === totalPages ? 'none' : 'auto',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            const el = e.currentTarget as HTMLButtonElement
            el.style.borderColor = 'rgba(0,0,0,0.13)'
            el.style.color = '#1D215E'
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.borderColor = 'rgba(0,0,0,0.07)'
          el.style.color = 'rgba(26,26,46,0.55)'
        }}
      >
        <CaretRight size={16} weight="bold" />
      </button>
    </div>
  )
}
