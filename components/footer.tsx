'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  EnvelopeSimple,
  ChatCircleDots,
  MapPin,
  Clock,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  ArrowUpRight,
  ArrowUp,
  AirplaneTilt,
  Star,
} from '@phosphor-icons/react'

const CONTACT_ITEMS = [
  { icon: EnvelopeSimple, text: 'info@airporteo.com' },
  { icon: ChatCircleDots, text: 'Live Chat & WhatsApp' },
  { icon: MapPin, text: '200+ Airports Worldwide' },
  { icon: Clock, text: '24 / 7 Customer Support' },
]

const SERVICES = [
  'Meet & Greet',
  'Fast Track',
  'VIP Lounge Access',
  'Airport Transfers',
  'Porter Assistance',
  'VIP Exclusive Suite',
]

const SERVICES_SOLUTIONS = [
  'For Corporations',
  'For Elderly Travelers',
]

const TOP_AIRPORTS = [
  'London Heathrow (LHR)',
  'Dubai (DXB)',
  'Frankfurt (FRA)',
  'Paris CDG',
  'JFK New York',
  'Singapore Changi',
  'Doha Hamad (DOH)',
  'All Airports →',
]

const ABOUT_LINKS = [
  'About Airporteo',
  'How It Works',
  'Blog',
  'FAQ',
  'Press',
]

const ABOUT_PARTNERS = [
  'Become a Partner',
  'Affiliate Program',
]

const LEGAL_LINKS = [
  'Privacy Policy',
  'Terms & Conditions',
  'AML Policy',
  'GDPR',
  'Cookies',
  'Sitemap',
]

const SOCIAL_ICONS = [
  { icon: FacebookLogo, label: 'Facebook', href: '#' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
  { icon: XLogo, label: 'X', href: '#' },
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: YoutubeLogo, label: 'YouTube', href: '#' },
  { icon: WhatsappLogo, label: 'WhatsApp', href: '#' },
]

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#1D215E] text-white overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,160,74,0.3)] to-transparent" />

      {/* Radial glow effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(212,160,74,0.04) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        {/* Top Bar */}
        <div className="pt-12 pb-10 md:pb-10 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center md:flex-row flex-col">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/airporteo-logo.svg"
              alt="Airporteo Logo"
              width={208}
              height={32}
              className="h-8 w-auto"
              style={{ filter: 'brightness(1) invert(0)' }}
            />
          </div>

          {/* Rating Badges - Center on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center order-3 md:order-2 w-full md:w-auto">
            {/* Google Badge */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-[12px] border transition-colors"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="700" fill="#d4a04a">G</text>
              </svg>
              <div className="flex flex-col gap-1">
                <span style={{ fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }} className="font-medium">
                  Google rating
                </span>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} weight="fill" className="text-[#f5c518]" />
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>Based on 120+ reviews</span>
              </div>
            </div>

            {/* Trustpilot Badge */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-[12px] border transition-colors"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <Star size={24} weight="fill" className="text-[#00b67a] flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span style={{ fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }} className="font-medium">
                  Trustpilot rating
                </span>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>4.8</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-[18px] h-[18px] bg-[#00b67a] rounded-[2px] flex items-center justify-center">
                        <Star size={10} weight="fill" className="text-white" />
                      </div>
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>Based on 25 reviews</span>
              </div>
            </div>
          </div>

          {/* CTA Button - Right on desktop, full width on mobile */}
          <button
            className="group px-7 py-3.5 rounded-full border-[1.5px] text-[14px] font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 order-2 md:order-3 w-full md:w-auto"
            style={{
              color: '#d4a04a',
              borderColor: 'rgba(212, 160, 74, 0.5)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 160, 74, 0.15)'
              e.currentTarget.style.borderColor = '#d4a04a'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212,160,74,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(212, 160, 74, 0.5)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Book VIP Service now
            <ArrowUpRight size={16} weight="regular" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Card Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {/* Contact Us Card */}
          <div
            className="rounded-[14px] p-7 md:p-7 border transition-all hover:shadow-lg"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.1s',
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }} className="mb-4 pb-3 border-b border-[rgba(255,255,255,0.08)]">
              Contact Us
            </h3>
            <div className="space-y-3">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(212, 160, 74, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 160, 74, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 160, 74, 0.15)'
                    }}
                  >
                    <item.icon size={16} weight="regular" className="text-[#d4a04a]" />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }} className="hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Card */}
          <div
            className="rounded-[14px] p-7 md:p-7 border transition-all hover:shadow-lg"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.2s',
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }} className="mb-4 pb-3 border-b border-[rgba(255,255,255,0.08)]">
              Our Services
            </h3>
            <div className="space-y-2 mb-4">
              {SERVICES.map((service, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}
                  className="block hover:text-white hover:pl-1 transition-all"
                >
                  {service}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
              <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#d4a04a' }}>
                Solutions
              </span>
              <div className="space-y-2 mt-3">
                {SERVICES_SOLUTIONS.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}
                    className="block hover:text-white hover:pl-1 transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Top Airports Card */}
          <div
            className="rounded-[14px] p-7 md:p-7 border transition-all hover:shadow-lg"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.3s',
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }} className="mb-4 pb-3 border-b border-[rgba(255,255,255,0.08)]">
              Top Airports
            </h3>
            <div className="space-y-2">
              {TOP_AIRPORTS.map((airport, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}
                  className="block hover:text-white hover:pl-1 transition-all"
                >
                  {airport}
                </a>
              ))}
            </div>
          </div>

          {/* About Us Card */}
          <div
            className="rounded-[14px] p-7 md:p-7 border transition-all hover:shadow-lg"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.4s',
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }} className="mb-4 pb-3 border-b border-[rgba(255,255,255,0.08)]">
              About Us
            </h3>
            <div className="space-y-2 mb-4">
              {ABOUT_LINKS.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}
                  className="block hover:text-white hover:pl-1 transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
              <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#d4a04a' }}>
                Partners
              </span>
              <div className="space-y-2 mt-3">
                {ABOUT_PARTNERS.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.7)' }}
                    className="block hover:text-white hover:pl-1 transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 md:flex md:items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0 border-t border-[rgba(255,255,255,0.08)]">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-7 text-center md:text-left">
            {LEGAL_LINKS.map((link, i) => (
              <a
                key={i}
                href="#"
                style={{ fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.55)' }}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center md:justify-end">
            {SOCIAL_ICONS.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-full flex items-center justify-center border transition-all hover:-translate-y-0.5"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 160, 74, 0.4)'
                  const icon = e.currentTarget.querySelector('svg')
                  if (icon) icon.style.color = '#d4a04a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  const icon = e.currentTarget.querySelector('svg')
                  if (icon) icon.style.color = 'white'
                }}
              >
                <social.icon size={18} weight="regular" className="text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Row */}
        <div className="py-5 md:flex md:items-center md:justify-between flex-col md:flex-row gap-4 md:gap-0 border-t border-[rgba(255,255,255,0.04)] text-center md:text-left">
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
            © 2026 Airporteo Tourism W.L.L. — All rights reserved
          </p>
          <div className="flex items-center justify-center md:justify-end gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} weight="fill" className="text-[#f5c518]" />
            ))}
            <a href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }} className="hover:text-white transition-colors ml-2">
              Reviews on Trustpilot & Google
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
            boxShadow: '0 4px 20px rgba(212, 160, 74, 0.35)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(212, 160, 74, 0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 160, 74, 0.35)'
          }}
        >
          <ArrowUp size={20} weight="regular" />
        </button>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  )
}
