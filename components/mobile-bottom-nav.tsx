"use client"

import { useState } from "react"
import { Home, CalendarCheck, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "home", label: "Home", icon: Home, href: "#hero" },
  { id: "bookings", label: "Bookings", icon: CalendarCheck, href: "#hero" },
  { id: "support", label: "Support", icon: Headphones, href: "#" },
]

export function MobileBottomNav() {
  const [active, setActive] = useState("home")

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg md:hidden"
      role="tablist"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around py-2">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id
          return (
            <a
              key={tab.id}
              href={tab.href}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className="flex flex-1 flex-col items-center gap-0.5 py-1"
            >
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200",
                  isActive ? "bg-blue/10" : "bg-transparent"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-200",
                    isActive ? "text-blue" : "text-muted-foreground"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-semibold transition-colors duration-200",
                  isActive ? "text-blue" : "text-muted-foreground"
                )}
              >
                {tab.label}
              </span>
            </a>
          )
        })}
      </div>

      {/* Safe area padding for notched devices */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
