'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogHero } from '@/components/blog/hero'
import { BlogCard, type BlogPost } from '@/components/blog/card'
import { BlogPagination } from '@/components/blog/pagination'

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    date: 'March 28, 2026',
    title: 'Where East Meets West at 30,000 Feet: VIP Airport Services at Istanbul Airport',
    excerpt: 'Istanbul Airport is one of the largest in the world. Here\'s how VIP terminal access, CIP service, and meet & greet make it feel manageable.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=375&fit=crop',
    slug: 'istanbul-airport-vip-services',
  },
  {
    id: 2,
    date: 'March 15, 2026',
    title: 'Sun, Samba & Seamless Travel: VIP Airport Services in Rio, Buenos Aires & South America',
    excerpt: 'South America\'s biggest airports can be overwhelming after a long flight. Here\'s how Airporteo turns arrivals and connections into a calm experience.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=375&fit=crop',
    slug: 'south-america-airport-services',
  },
  {
    id: 3,
    date: 'February 28, 2026',
    title: 'Navigating Dubai International Airport: A Complete Guide to VIP Services at DXB',
    excerpt: 'With three terminals and 90 million annual passengers, DXB is a place where meet & greet and fast track genuinely save hours.',
    image: 'https://images.unsplash.com/photo-1436744274629-12d9f6f35e0d?w=600&h=375&fit=crop',
    slug: 'dubai-airport-vip-guide',
  },
  {
    id: 4,
    date: 'February 12, 2026',
    title: 'London Heathrow VIP Services: What to Expect at Every Terminal',
    excerpt: 'Heathrow has five terminals spread across a massive campus. Terminal-by-terminal breakdown of what Airporteo covers at LHR.',
    image: 'https://images.unsplash.com/photo-1531234046690-00569ee0ceac?w=600&h=375&fit=crop',
    slug: 'london-heathrow-vip-services',
  },
  {
    id: 5,
    date: 'January 30, 2026',
    title: 'Flying into Tokyo: VIP Airport Assistance at Narita and Haneda',
    excerpt: 'Two airports, two very different experiences. How to choose and what VIP services are available at each Tokyo gateway.',
    image: 'https://images.unsplash.com/photo-1517245386807-1b47b6b49024?w=600&h=375&fit=crop',
    slug: 'tokyo-airport-assistance',
  },
  {
    id: 6,
    date: 'January 18, 2026',
    title: 'Traveling with Elderly Parents: How Airport Assistance Makes the Difference',
    excerpt: 'Long walks, confusing signage, and heavy luggage. Why families increasingly book meet & greet for their elderly relatives.',
    image: 'https://images.unsplash.com/photo-1533631757417-2a8aa0ab7056?w=600&h=375&fit=crop',
    slug: 'elderly-travel-airport-assistance',
  },
  {
    id: 7,
    date: 'January 5, 2026',
    title: 'Frankfurt Airport Connections: How to Make a Tight Layover Work',
    excerpt: 'FRA is a major European hub with notoriously tight connection times. A practical guide to navigating it with VIP assistance.',
    image: 'https://images.unsplash.com/photo-1552236338-a2c80369b988?w=600&h=375&fit=crop',
    slug: 'frankfurt-airport-layover',
  },
  {
    id: 8,
    date: 'December 20, 2025',
    title: 'Singapore Changi: Why the World\'s Best Airport Still Benefits from VIP Service',
    excerpt: 'Changi consistently wins best airport awards. But even the best airports have immigration queues and long walks between terminals.',
    image: 'https://images.unsplash.com/photo-1567538166555-beef7bae4601?w=600&h=375&fit=crop',
    slug: 'singapore-changi-vip-service',
  },
  {
    id: 9,
    date: 'December 8, 2025',
    title: 'Corporate Travel Made Simple: How Airporteo Supports Business Teams Worldwide',
    excerpt: 'Centralized booking, volume invoicing, and dedicated account management for companies with frequent travel needs.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=375&fit=crop',
    slug: 'corporate-travel-solutions',
  },
  {
    id: 10,
    date: 'November 25, 2025',
    title: 'JFK, Newark & LaGuardia: A Guide to VIP Services at New York\'s Three Airports',
    excerpt: 'New York\'s airports are a world of their own. Terminal guides, transfer tips, and how VIP assistance works at each one.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=375&fit=crop',
    slug: 'new-york-airports-guide',
  },
  {
    id: 11,
    date: 'November 10, 2025',
    title: 'Fast Track Explained: What It Is, Where It Works, and When You Actually Need It',
    excerpt: 'Fast Track is one of the most searched airport terms. Here\'s what it covers at different airports and when it makes a real difference.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=375&fit=crop',
    slug: 'fast-track-explained',
  },
  {
    id: 12,
    date: 'October 28, 2025',
    title: 'Paris CDG: The Airport That Confuses Everyone (and How to Fix That)',
    excerpt: 'Charles de Gaulle is famously confusing. Three terminals, multiple satellite buildings, and a bus between them. VIP service changes everything.',
    image: 'https://images.unsplash.com/photo-1493514789560-586cb221d7f7?w=600&h=375&fit=crop',
    slug: 'paris-cdg-airport-guide',
  },
]

const POSTS_PER_PAGE = 12

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE)
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE
  const endIdx = startIdx + POSTS_PER_PAGE
  const currentPosts = BLOG_POSTS.slice(startIdx, endIdx)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f7f7fa' }}>
      <Navbar />

      {/* Hero Section */}
      <BlogHero
        heading="Travel Insights & Airport Guides"
        subtitle="Tips, guides, and insider knowledge on VIP airport services, destinations, and how to travel smarter."
      />

      {/* Blog Grid Section */}
      <main className="flex-1 w-full mx-auto max-w-7xl">
        <div
          className="blog-grid"
          style={{
            display: 'grid',
            gap: '24px',
            padding: '40px 24px 60px',
            maxWidth: '100%',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {currentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-center px-4 pb-12">
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <Footer />

      {/* Responsive Grid Styles */}
      <style>{`
        /* Desktop — 3 columns (1024px and up) */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 24px;
          padding: 40px 24px 60px;
          max-width: 100%;
          margin: 0 auto;
          width: 100%;
        }

        /* Tablet — 2 columns (641px to 900px) */
        @media screen and (max-width: 900px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px;
          }
        }

        /* Mobile — 1 column (640px and below) */
        @media screen and (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
            padding: 32px 16px 48px;
          }
        }
      `}</style>
    </div>
  )
}
