import Image from "next/image"
import { Facebook, MessageCircle, Instagram, Send } from "lucide-react"
import { SolariBackground } from "./solari-background"

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Meet and Greet", href: "#services" },
      { label: "VIP Platinum", href: "#services" },
      { label: "Private Car Transfers", href: "#services" },
      { label: "Golf Cart and Buggy", href: "#services" },
      { label: "Luggage Assistance", href: "#services" },
      { label: "Fast Track Service", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Reviews", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Live Chat", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1D215E] text-white relative overflow-hidden">
      <SolariBackground />
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 relative z-10">
        {/* Main Footer Content - Desktop only (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-4 gap-12 items-start">
          {/* Left Column - Brand (30% width) - Hidden on mobile, shown on desktop */}
          <div>
            <a href="#" className="inline-block">
              <Image
                src="/images/airporteo-logo.svg"
                alt="Airporteo logo"
                width={120}
                height={120}
                className="h-28 w-28 object-contain"
              />
            </a>
            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium airport concierge services at 120+ airports worldwide. Making every airport moment seamless since 2018.
            </p>
            {/* Social Icons */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Right Columns - Links (3 columns, equal width ~23% each) */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-base font-semibold text-white" style={{ fontSize: '15px' }}>
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label} style={{ lineHeight: '2' }}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition-colors hover:text-white whitespace-nowrap"
                      style={{ fontSize: '14px' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile-only content - shown on mobile, hidden on desktop */}
        <div className="md:hidden flex flex-col px-0">
          {/* 2-Column Link Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* LEFT COLUMN - Services & Support */}
            <div className="text-left">
              {/* Services Section */}
              <div className="mb-8">
                <h3 className="font-semibold text-white text-base mb-3">Services</h3>
                <ul className="space-y-2">
                  {FOOTER_LINKS[0].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white text-sm"
                        style={{ fontSize: '14px', lineHeight: '2' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="font-semibold text-white text-base mb-3">Support</h3>
                <ul className="space-y-2">
                  {FOOTER_LINKS[2].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white text-sm"
                        style={{ fontSize: '14px', lineHeight: '2' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN - Company & Legal */}
            <div className="text-left">
              {/* Company Section */}
              <div className="mb-8">
                <h3 className="font-semibold text-white text-base mb-3">Company</h3>
                <ul className="space-y-2">
                  {FOOTER_LINKS[1].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white text-sm"
                        style={{ fontSize: '14px', lineHeight: '2' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="font-semibold text-white text-base mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white text-sm"
                      style={{ fontSize: '14px', lineHeight: '2' }}
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white text-sm"
                      style={{ fontSize: '14px', lineHeight: '2' }}
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white text-sm"
                      style={{ fontSize: '14px', lineHeight: '2' }}
                    >
                      AML Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white text-sm"
                      style={{ fontSize: '14px', lineHeight: '2' }}
                    >
                      GDPR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white text-sm"
                      style={{ fontSize: '14px', lineHeight: '2' }}
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '24px' }} />

          {/* Social Icons Row - Centered */}
          <div className="flex gap-6 justify-center mb-6">
            <a
              href="#"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="#"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="Telegram"
            >
              <Send size={24} />
            </a>
          </div>

          {/* Copyright Line - Centered */}
          <p className="text-center text-sm text-gray-400">
            {"\u00A9"} 2026 Airporteo. All rights reserved.
          </p>
        </div>

        {/* Bottom Bar - Desktop only */}
        <div 
          className="hidden md:flex mt-8 items-center justify-between gap-4"
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px'
          }}
        >
          <p className="text-sm text-gray-400">
            {"\u00A9"} 2026 Airporteo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">AML Policy</a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">GDPR</a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
