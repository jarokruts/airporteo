"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  labels: string[]
}

export function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-0 w-full" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1
        const isComplete = step < currentStep
        const isActive = step === currentStep
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300",
                  isComplete && "bg-blue text-primary-foreground",
                  isActive && "bg-blue text-primary-foreground shadow-[0_0_0_4px_rgba(219,38,35,0.2)]",
                  !isComplete && !isActive && "bg-secondary text-muted-foreground"
                )}
              >
                {isComplete ? <Check className="h-4 w-4" /> : step}
              </div>
              <span
                className={cn(
                  "text-xs font-medium whitespace-nowrap transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {labels[i]}
              </span>
            </div>
            {i < totalSteps - 1 && (
              <div className="mx-2 flex-1 self-start mt-4">
                <div className="h-0.5 w-full rounded-full bg-secondary">
                  <div
                    className={cn(
                      "h-full rounded-full bg-blue transition-all duration-500",
                      isComplete ? "w-full" : "w-0"
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
