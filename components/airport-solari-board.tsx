'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,'

interface FlipCharProps {
  char: string
  charIndex: number
  resolveTime: number
  animationCycle: number
}

const FlipChar = ({ char, charIndex, resolveTime, animationCycle }: FlipCharProps) => {
  const [displayChar, setDisplayChar] = useState(' ')

  useEffect(() => {
    setDisplayChar(' ')

    // Start flipping immediately
    const flipInterval = setInterval(() => {
      setDisplayChar(CHARS[Math.floor(Math.random() * CHARS.length)])
    }, 80) // Flip every 80ms for mechanical feel

    // Resolve at randomized time
    const resolveTimer = setTimeout(() => {
      setDisplayChar(char)
      clearInterval(flipInterval)
    }, resolveTime)

    return () => {
      clearInterval(flipInterval)
      clearTimeout(resolveTimer)
    }
  }, [char, resolveTime, animationCycle])

  return (
    <motion.span
      key={`${animationCycle}-${charIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.05 }}
      className="relative inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: char === ' ' ? '0.5em' : '0.65em',
        height: '2rem',
        fontFamily: 'JetBrains Mono, Space Mono, monospace',
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#f8f9fa',
        lineHeight: 1,
        whiteSpace: 'pre',
        overflow: 'hidden',
      }}
    >
      {displayChar}
      {/* Horizontal split line across middle */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          top: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 10,
        }}
      />
    </motion.span>
  )
}

export function AirportSolariBoard() {
  const text = 'Premium meet and greet and VIP concierge services at Barcelona El Prat Airport (BCN). Our dedicated team operates across Terminal 1 and Terminal 2, providing personal escort, fast track immigration, luggage assistance, and exclusive private tarmac transfers for arrivals, departures, and connections.'

  const [timings, setTimings] = useState<number[]>([])
  const [animationCycle, setAnimationCycle] = useState(0)

  // Generate random resolve times for each character
  useEffect(() => {
    const generateTimings = () => {
      const newTimings = text.split('').map(() =>
        Math.random() * 2200 + 600 // Resolve between 600ms and 2800ms for slow, mechanical feel
      )
      setTimings(newTimings)
    }

    generateTimings()

    // Static display for 120 seconds, then trigger re-flip
    const loopTimer = setInterval(() => {
      setAnimationCycle(prev => prev + 1)
      generateTimings()
    }, 120000)

    return () => clearInterval(loopTimer)
  }, [])

  if (timings.length === 0) return null

  return (
    <section className="hidden md:block py-4 md:py-8 px-4 md:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* VIP Information Board - Slim and Professional */}
        <div
          className="rounded-lg p-6 border border-white/15 relative overflow-hidden"
          style={{
            backgroundColor: 'var(--navy)',
          }}
        >
          {/* Text content with split-flap mechanics */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-0"
            style={{
              lineHeight: '2rem',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            {text.split('').map((char, idx) => (
              <FlipChar
                key={`${animationCycle}-${idx}`}
                char={char}
                charIndex={idx}
                resolveTime={timings[idx] || 1500}
                animationCycle={animationCycle}
              />
            ))}
          </motion.div>
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
