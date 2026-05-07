"use client"

import { AirplaneLanding, Airplane, AirplaneTakeoff } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

type ServiceType = "arrival" | "departure" | "connection"

interface ServiceTypeSelectorProps {
  value: ServiceType | null
  onChange: (value: ServiceType) => void
}

// Custom component for connection service (two planes)
function ConnectionIcon({ size = 20, weight = "light" }: { size?: number; weight?: string }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      <AirplaneLanding size={size} weight={weight as any} />
      <AirplaneTakeoff size={size} weight={weight as any} />
    </div>
  )
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
    icon: AirplaneTakeoff,
  },
  {
    type: "connection",
    label: "Connection",
    desc: "Terminal transfer",
    icon: ConnectionIcon,
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
              aria-pressed={isSelected}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                borderRadius: '12px',
                border: isSelected ? '1px solid #21245b' : '1px solid #E5E7EB',
                background: isSelected ? '#21245b' : 'transparent',
                cursor: 'pointer',
                transition: 'all 200ms ease-in-out',
                position: 'relative',
                boxShadow: isSelected ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(184, 145, 58, 0.08)'
                  e.currentTarget.style.borderColor = '#C9AF5A'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #B8913A'
                e.currentTarget.style.outlineOffset = '2px'
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none'
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '44px',
                  width: '44px',
                  borderRadius: '8px',
                  background: isSelected ? '#FFFFFF' : '#f0f1f8',
                  color: isSelected ? '#21245b' : '#6b6e94',
                  transition: 'all 200ms ease-in-out'
                }}
              >
                <Icon size={20} weight="light" />
              </div>
              
              {/* Text container */}
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: 'var(--font-body)',
                    fontWeight: '600',
                    lineHeight: 'var(--font-body-line-height)',
                    color: isSelected ? '#FFFFFF' : '#1D215E',
                    margin: 0,
                    transition: 'color 200ms ease-in-out'
                  }}
                >
                  {label}
                </p>
                <p 
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.4',
                    color: isSelected ? 'rgba(255, 255, 255, 0.8)' : '#6b6e94',
                    margin: '4px 0 0 0',
                    transition: 'color 200ms ease-in-out'
                  }}
                >
                  {desc}
                </p>
              </div>
              
              {/* Bottom border accent for selected */}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#B8913A',
                    borderRadius: '0 0 12px 12px'
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
