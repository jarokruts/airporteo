"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe, DollarSign, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { SignInModal } from "@/components/signin-modal"

const LANGUAGES = [
  { code: "en", label: "GB English" },
  { code: "es", label: "ES Español" },
  { code: "ar", label: "AR العربية" },
  { code: "zh", label: "CN 普通话" },
  { code: "hi", label: "IN हिन्दी" },
]

const CURRENCIES = [
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "QAR", symbol: "﷼", label: "Qatari Riyal" },
  { code: "SAR", symbol: "﷼", label: "Saudi Riyal" },
  { code: "AED", symbol: "د.إ", label: "UAE Dirham" },
]

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

function TopBarDropdown({
  trigger,
  children,
}: {
  trigger: React.ReactNode
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        aria-expanded={open}
      >
        {trigger}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-150", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 mt-1 min-w-[160px] overflow-hidden rounded-xl border border-border bg-background shadow-xl transition-all duration-150",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  )
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Airport Services",
    href: "#services",
    children: [
      { label: "Meet & Greet", href: "#services" },
      { label: "Fast Track Lane", href: "#services" },
      { label: "Luggage Assistance", href: "#features" },
      { label: "Golf Cart & Buggy", href: "#services" },
      { label: "Special Needs", href: "#services" },
      { label: "Private Car Transfers", href: "#features" },
    ],
  },
  {
    label: "VIP Platinum",
    href: "#experience",
    children: [
      { label: "Premium VIP", href: "#experience" },
      { label: "VIP Terminal", href: "#experience" },
      { label: "VIP Lounge", href: "#experience" },
      { label: "VIP Exclusive Suite", href: "#experience" },
    ],
  },
  {
    label: "Airports",
    href: "#trust",
  },
  {
    label: "For Business",
    href: "#features",
    children: [
      { label: "Corporate Services", href: "#features" },
      { label: "Travel Agency", href: "#features" },
      { label: "Services for Groups", href: "#features" },
    ],
  },
]

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  if (!item.children) {
    return (
      <a
        href={item.href}
        className="text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white rounded-md px-2 py-1.5"
      >
        {item.label}
      </a>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white rounded-md px-2 py-1.5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="min-w-[220px] overflow-hidden rounded-xl border border-border bg-background shadow-lg shadow-foreground/5">
          <div className="p-1.5">
            {item.children.map((child) => (
              <a
                key={child.label}
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-gold"
              >
                {child.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileAccordionItem({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        {item.label}
      </a>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-0.5 pb-1 pl-3">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSigninOpen, setIsSigninOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0])
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0])

  function closeMobile() {
    setMobileOpen(false)
  }

  return (
    <>
      <nav style={{ backgroundColor: 'var(--hero-navy)' }} className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo - Left */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/images/airporteo-logo.svg"
            alt="Airporteo"
            className="h-48 w-48 object-contain"
          />
        </a>

        {/* Desktop Links - Center */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </div>

        {/* Desktop CTA + Language + Currency + Sign In - Right */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Language Selector */}
          <TopBarDropdown
            trigger={
              <>
                <Globe className="h-3.5 w-3.5" />
                <span className="text-xs">{selectedLang.code.toUpperCase()}</span>
              </>
            }
          >
            <div className="p-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setSelectedLang(lang)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary",
                    selectedLang.code === lang.code
                      ? "font-semibold text-blue"
                      : "text-foreground"
                  )}
                >
                  <span>{lang.label}</span>
                  {selectedLang.code === lang.code && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue" />
                  )}
                </button>
              ))}
            </div>
          </TopBarDropdown>

          {/* Currency Selector */}
          <TopBarDropdown
            trigger={
              <>
                <DollarSign className="h-3.5 w-3.5" />
                <span className="text-xs">{selectedCurrency.code}</span>
              </>
            }
          >
            <div className="p-1">
              {CURRENCIES.map((currency) => (
                <button
                  key={currency.code}
                  type="button"
                  onClick={() => setSelectedCurrency(currency)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary",
                    selectedCurrency.code === currency.code
                      ? "font-semibold text-blue"
                      : "text-foreground"
                  )}
                >
                  <span className="w-6 text-center font-medium text-muted-foreground">
                    {currency.symbol}
                  </span>
                  <span>{currency.code}</span>
                  <span className="text-xs text-muted-foreground">{currency.label}</span>
                  {selectedCurrency.code === currency.code && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue" />
                  )}
                </button>
              ))}
            </div>
          </TopBarDropdown>

          <div className="h-4 w-px bg-white/20" />

          <button
            type="button"
            onClick={() => setIsSigninOpen(true)}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogIn className="h-3.5 w-3.5" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[600px]" : "max-h-0 border-none"
        )}
      >
        <div className="flex flex-col gap-0.5 px-5 py-4">
          {NAV_ITEMS.map((item) => (
            <MobileAccordionItem
              key={item.label}
              item={item}
              onNavigate={closeMobile}
            />
          ))}
        </div>
      </div>
      </nav>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSigninOpen} onClose={() => setIsSigninOpen(false)} />
    </>
  )
}
