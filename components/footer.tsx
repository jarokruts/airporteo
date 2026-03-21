import Image from "next/image"
import { Facebook, MessageCircle, Instagram, Send } from "lucide-react"

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
    <footer className="border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex">
              <Image
                src="/images/airporteo-logo.svg"
                alt="Airporteo logo"
                width={140}
                height={140}
                className="h-32 w-32 object-contain mix-blend-screen"
              />
            </a>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-light">
              Premium airport concierge services at 120+ airports worldwide. Making every airport moment seamless since 2018.
            </p>
            {/* Social Media Icons */}
            <div className="mt-2 flex gap-3">
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

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-primary-foreground">{group.heading}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-light transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 md:flex-row">
          <p className="text-xs text-slate-light">
            {"\u00A9"} 2026 Airporteo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-light transition-colors hover:text-primary-foreground">Privacy</a>
            <a href="#" className="text-xs text-slate-light transition-colors hover:text-primary-foreground">Terms</a>
            <a href="#" className="text-xs text-slate-light transition-colors hover:text-primary-foreground">AML Policy</a>
            <a href="#" className="text-xs text-slate-light transition-colors hover:text-primary-foreground">GDPR</a>
            <a href="#" className="text-xs text-slate-light transition-colors hover:text-primary-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
