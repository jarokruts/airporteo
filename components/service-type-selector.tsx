"use client"

import { AirplaneLanding, ArrowsDownUp } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

type ServiceType = "arrival" | "departure" | "connection"

interface ServiceTypeSelectorProps {
  value: ServiceType | null
  onChange: (value: ServiceType) => void
}

const services: { type: ServiceType; label: string; desc: string; icon: React.ElementType }[] = [
  {
    type: "arrival",
    label: "Arrival",
    desc: "Airport pickup",
    icon: AirplaneLanding,
  },
  {
    type: "departure",
    label: "Departure",
    desc: "Airport drop-off",
    icon: AirplaneLanding,
  },
  {
    type: "connection",
    label: "Connection",
    desc: "Terminal transfer",
    icon: ArrowsDownUp,
  },
]

export function ServiceTypeSelector({ value, onChange }: ServiceTypeSelectorProps) {
  return (
    <fieldset>
      <legend className="sr-only">Service type</legend>
      <div className="grid grid-cols-3 gap-3">
        {services.map(({ type, label, desc, icon: Icon }) => {
          const isSelected = value === type
          return (
            <button
              key={type}
              type="button"
              onClick={() => onChange(type)}
              className={cn(
                "group relative flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-200",
                isSelected
                  ? "border-blue bg-blue-light shadow-sm"
                  : "border-border bg-card hover:border-slate-light hover:bg-secondary"
              )}
              aria-pressed={isSelected}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-200",
                  isSelected
                    ? "bg-blue text-primary-foreground"
                    : "bg-secondary text-muted-foreground group-hover:text-foreground"
                )}
              >
                <Icon size={20} weight="light" />
              </div>
              <div className="text-center">
                <p
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    isSelected ? "text-blue" : "text-foreground"
                  )}
                >
                  {label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
              {isSelected && (
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue">
                  <svg className="h-3 w-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
