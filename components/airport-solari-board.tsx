'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrambleCharProps {
  char: string
  index: number
  randomLockTime: number
}

const ScrambleChar = ({ char, index, randomLockTime }: ScrambleCharProps) => {
  const [displayChar, setDisplayChar] = useState(char === ' ' ? ' ' : 'A')
  const [isLocked, setIsLocked] = useState(false)
  
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

  useEffect(() => {
    if (isLocked) return

    // Start scrambling immediately
    const scrambleInterval = setInterval(() => {
      if (char === ' ') {
        setDisplayChar(' ')
      } else {
        setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
      }
    }, 50) // Update every 50ms for fast scrambling effect

    // Lock to final character at randomLockTime
    const lockTimer = setTimeout(() => {
      setDisplayChar(char)
      setIsLocked(true)
      clearInterval(scrambleInterval)
    }, randomLockTime)

    return () => {
      clearInterval(scrambleInterval)
      clearTimeout(lockTimer)
    }
  }, [char, randomLockTime, isLocked])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.1 }}
      className="inline-block"
    >
      {displayChar}
    </motion.span>
  )
}

export function AirportSolariBoard() {
  const text = 'Premium meet and greet and VIP concierge services at Barcelona El Prat Airport (BCN). Our dedicated team operates across Terminal 1 and Terminal 2, providing personal escort, fast track immigration, luggage assistance, and exclusive private tarmac transfers for arrivals, departures, and connections.'

  // Generate random lock times for each character (distributed across 3-4 seconds)
  const [lockTimes, setLockTimes] = useState<number[]>([])

  useEffect(() => {
    const times = text.split('').map(() => 
      Math.random() * 3500 + 500 // Random between 500ms and 4000ms
    )
    setLockTimes(times)
  }, [])

  if (lockTimes.length === 0) return null

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* VIP Information Board */}
        <div 
          className="rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
          style={{
            backgroundColor: '#1D215E',
          }}
        >
          {/* Text content - clean and readable with proper spacing */}
          <motion.p 
            className="font-mono text-sm md:text-base lg:text-lg leading-relaxed tracking-normal text-center whitespace-pre-wrap break-words"
            style={{
              color: '#f8f9fa',
              fontFamily: 'JetBrains Mono, Space Mono, monospace',
              letterSpacing: '0.3px',
              wordSpacing: '0.25em',
            }}
          >
            {text.split('').map((char, idx) => (
              <ScrambleChar 
                key={idx}
                char={char}
                index={idx}
                randomLockTime={lockTimes[idx] || 2000}
              />
            ))}
          </motion.p>
        </div>
      </div>

      {/* Load fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
      `}</style>
    </section>
  )
}
