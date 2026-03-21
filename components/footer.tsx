import Image from "next/image"

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Arrival Concierge", href: "#services" },
      { label: "Departure Assist", href: "#services" },
      { label: "Transit Connect", href: "#services" },
      { label: "Private Transfers", href: "#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Live Chat", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/images/airporteo-logo.svg"
                alt="Airporteo logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain mix-blend-screen"
              />
              <span className="text-lg font-bold tracking-tight text-primary-foreground">Airporteo</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-light">
              Premium airport concierge services at 120+ airports worldwide. Making every airport moment seamless since 2018.
            </p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-primary-foreground">{group.heading}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-light transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-light">
            {"\u00A9"} {new Date().getFullYear()} Airporteo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-light transition-colors hover:text-primary-foreground">Privacy</a>
            <a href="#" className="text-sm text-slate-light transition-colors hover:text-primary-foreground">Terms</a>
            <a href="#" className="text-sm text-slate-light transition-colors hover:text-primary-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
