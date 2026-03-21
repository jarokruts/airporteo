"use client"

import { useState, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ReactNode
  error?: string
}

export function FloatingInput({
  label,
  icon,
  error,
  className,
  value,
  onFocus,
  onBlur,
  ...props
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value !== undefined && value !== ""

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex items-center rounded-xl border-2 bg-card transition-all duration-200",
          isFocused
            ? "border-blue shadow-[0_0_0_3px_rgba(219,38,35,0.1)]"
            : "border-border hover:border-slate-light",
          error && "border-destructive",
          className
        )}
      >
        {icon && (
          <span className="pointer-events-none absolute left-4 text-slate-mid transition-colors duration-200">
            {icon}
          </span>
        )}
        <input
          {...props}
          value={value}
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          className={cn(
            "peer w-full rounded-xl bg-transparent px-4 pb-2 pt-6 text-foreground outline-none placeholder:text-transparent text-base",
            icon && "pl-12"
          )}
          placeholder={label}
        />
        <label
          className={cn(
            "pointer-events-none absolute left-4 transition-all duration-200 text-slate-mid",
            icon && "left-12",
            isFocused || hasValue
              ? "top-2 text-xs font-medium"
              : "top-1/2 -translate-y-1/2 text-base",
            isFocused && "text-blue"
          )}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-destructive pl-1">{error}</p>
      )}
    </div>
  )
}
