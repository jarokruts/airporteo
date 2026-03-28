'use client'

import { FacebookLogo, XLogo, LinkedinLogo, Copy } from '@phosphor-icons/react'

export function ArticleShare() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  const shareLinks = [
    {
      name: 'Facebook',
      icon: FacebookLogo,
      href: `https://facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`,
    },
    {
      name: 'Twitter',
      icon: XLogo,
      href: `https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}`,
    },
    {
      name: 'LinkedIn',
      icon: LinkedinLogo,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`,
    },
  ]

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        padding: '18px 22px',
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
          marginBottom: '14px',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        Share this article
      </p>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        {shareLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(0,0,0,0.07)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: '#1D215E',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,160,74,0.2)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,160,74,0.08)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#d4a04a'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.07)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#1D215E'
            }}
          >
            <link.icon size={18} weight="fill" />
          </a>
        ))}

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.07)',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: '#1D215E',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,160,74,0.2)'
            ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,160,74,0.08)'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#d4a04a'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.07)'
            ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#1D215E'
          }}
        >
          <Copy size={18} weight="regular" />
        </button>
      </div>
    </div>
  )
}
