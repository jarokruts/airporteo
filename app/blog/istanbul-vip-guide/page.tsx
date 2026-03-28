'use client'

import { useState } from 'react'
import { ArticleHero } from '@/components/blog/article-hero'
import { ArticleContent } from '@/components/blog/article-content'
import { ArticleToc, type TocItem } from '@/components/blog/article-toc'
import { ArticleCta } from '@/components/blog/article-cta'
import { ArticleShare } from '@/components/blog/article-share'
import { MobileTocBar } from '@/components/blog/mobile-toc-bar'
import { TocDrawer } from '@/components/blog/toc-drawer'
import { RelatedArticles } from '@/components/blog/related-articles'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ArticlePage() {
  const [tocDrawerOpen, setTocDrawerOpen] = useState(false)

  // TOC items matching the article sections
  const tocItems: TocItem[] = [
    { id: 'istanbul-begins-at-the-airport', label: 'Istanbul Begins at the Airport', level: 2 },
    { id: 'arrivals-that-set-the-tone', label: 'Arrivals That Set the Tone', level: 2 },
    { id: 'departures-without-the-countdown', label: 'Departures Without the Countdown', level: 2 },
    { id: 'connections', label: 'Connections Through the Busiest Crossroads', level: 2 },
    { id: 'vip-terminal-istanbul-airport', label: 'The VIP Terminal: A World Apart', level: 2 },
    { id: 'private-suites', label: 'Private Suites', level: 3 },
    { id: 'meeting-room', label: 'Meeting Room', level: 3 },
    { id: 'dining-spa-and-more', label: 'Dining, SPA & More', level: 3 },
    { id: 'cip-service-istanbul-airport', label: 'CIP Service Explained', level: 2 },
    { id: 'families-and-children', label: 'Families & Children', level: 2 },
    { id: 'cancellation-policy', label: 'Cancellation Policy', level: 2 },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions', level: 2 },
  ]

  return (
    <div style={{ background: '#f7f7fa', minHeight: '100vh' }}>
      <Navbar />

      {/* Article Hero */}
      <ArticleHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Istanbul Airport VIP Service', href: '/blog/istanbul-vip-guide' },
        ]}
        title="Istanbul Begins at the Airport: Your Complete VIP Service Guide"
        date="March 28, 2026"
        readTime="12 min read"
      />

      {/* Mobile TOC Bar - Visible only below 1000px */}
      <div style={{ display: 'none' }} className="lg:hidden">
        <MobileTocBar
          items={tocItems}
          isOpen={tocDrawerOpen}
          onOpen={() => setTocDrawerOpen(true)}
        />
      </div>

      {/* Mobile TOC Drawer */}
      <TocDrawer isOpen={tocDrawerOpen} onClose={() => setTocDrawerOpen(false)} items={tocItems} />

      {/* Main Content Area */}
      <main style={{ background: '#f7f7fa' }}>
        {/* Two-Column Layout Container */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '40px 24px 60px',
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '40px',
            alignItems: 'start',
          }}
          className="article-layout"
        >
          {/* Left: Article Content */}
          <ArticleContent />

          {/* Right: Sidebar - Sticky on desktop */}
          <aside
            style={{
              position: 'sticky',
              top: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              height: 'fit-content',
            }}
            className="sidebar"
          >
            <ArticleToc items={tocItems} />
            <ArticleCta />
            <ArticleShare />
          </aside>
        </div>

        {/* Mobile Sidebar Cards - Below article on tablets/mobile only */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 24px 60px',
            display: 'none',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="mobile-sidebar"
        >
          <ArticleCta />
          <ArticleShare />
        </div>

        {/* Responsive Styles */}
        <style>{`
          .article-layout {
            max-width: 1100px;
            margin: 0 auto;
            padding: 40px 24px 60px;
            display: grid;
            grid-template-columns: 1fr 280px;
            gap: 40px;
            align-items: start;
          }

          .sidebar {
            position: sticky;
            top: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: fit-content;
          }

          .mobile-sidebar {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px 60px;
            display: none;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          /* Desktop (1001px and up): Show sidebar on right, hide mobile cards */
          @media (min-width: 1001px) {
            .sidebar {
              display: flex;
            }
            .mobile-sidebar {
              display: none !important;
            }
          }

          /* Tablet & Mobile (1000px and below): Hide sidebar, show mobile cards in 2-column grid */
          @media (max-width: 1000px) {
            .article-layout {
              grid-template-columns: 1fr;
              padding: 32px 20px 48px;
              gap: 0;
            }
            .sidebar {
              display: none;
            }
            .mobile-sidebar {
              display: grid;
              padding: 0 20px 48px;
            }
          }

          /* Mobile (640px and below): Single column for sidebar cards */
          @media (max-width: 640px) {
            .article-layout {
              padding: 24px 16px 32px;
            }
            .mobile-sidebar {
              grid-template-columns: 1fr;
              padding: 0 16px 32px;
            }
          }
        `}</style>
      </main>

      {/* Related Articles Section */}
      <div
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          padding: '60px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <RelatedArticles />
        </div>
      </div>

      <Footer />
    </div>
  )
}
