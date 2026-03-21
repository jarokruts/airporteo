"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Globe, DollarSign, UserPlus, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCurrency, CURRENCIES } from "./currency-context"

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh", label: "普通话", flag: "🇨🇳" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
]

function Dropdown({
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
        className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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

export function TopBar() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0])
  const { selectedCurrency, setSelectedCurrency } = useCurrency()

  return (
    <div className="relative z-50 w-full bg-navy border-b border-white/10">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Left: Language + Currency */}
        <div className="flex items-center gap-1">
          {/* Language */}
          <Dropdown
            trigger={
              <>
                <Globe className="h-3.5 w-3.5" />
                <span>{selectedLang.flag} {selectedLang.code.toUpperCase()}</span>
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
                      ? "font-semibold text-gold"
                      : "text-foreground"
                  )}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {selectedLang.code === lang.code && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </Dropdown>

          <span className="text-white/20 select-none">|</span>

          {/* Currency */}
          <Dropdown
            trigger={
              <>
                <DollarSign className="h-3.5 w-3.5" />
                <span>{selectedCurrency.code}</span>
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
                      ? "font-semibold text-gold"
                      : "text-foreground"
                  )}
                >
                  <span className="w-6 text-center font-medium text-muted-foreground">
                    {currency.symbol}
                  </span>
                  <span>{currency.code}</span>
                  <span className="text-xs text-muted-foreground">{currency.label}</span>
                  {selectedCurrency.code === currency.code && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </Dropdown>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogIn className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-gold px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-gold/80"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Register</span>
          </button>
        </div>

      </div>
    </div>
  )
}
