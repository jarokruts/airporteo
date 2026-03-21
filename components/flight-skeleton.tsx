"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function FlightSkeleton() {
  return (
    <div className="space-y-4 rounded-xl border-2 border-border bg-card p-5" aria-busy="true" aria-label="Loading flight information">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-lg bg-secondary" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4 bg-secondary" />
          <Skeleton className="h-3 w-1/2 bg-secondary" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-16 bg-secondary" />
          <Skeleton className="h-3 w-24 bg-secondary" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Skeleton className="h-0.5 w-16 bg-secondary" />
          <Skeleton className="h-3 w-12 bg-secondary" />
        </div>
        <div className="flex-1 space-y-2 text-right">
          <Skeleton className="ml-auto h-5 w-16 bg-secondary" />
          <Skeleton className="ml-auto h-3 w-24 bg-secondary" />
        </div>
      </div>
      <Skeleton className="h-4 w-full bg-secondary" />
    </div>
  )
}
