'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrambleCharProps {
  char: string
  index: number
}

const ScrambleChar = ({ char, index }: ScrambleCharProps) => {
  const [displayChar, setDisplayChar] = useState(char)
  const [isScrambling, setIsScrambling] = useState(true)
  
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  useEffect(() => {
    if (!isScrambling) return

    const scrambleDuration = 1200 // 1.2 seconds
    const startTime = Date.now() + index * 30 // 30ms stagger per character
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      
      if (elapsed < scrambleDuration) {
        // Still scrambling - pick random character
        setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
      } else {
        // Done scrambling - lock to final character
        setDisplayChar(char)
        setIsScrambling(false)
        clearInterval(interval)
      }
    }, 60) // Update every 60ms

    return () => clearInterval(interval)
  }, [char, index, isScrambling])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.01, duration: 0.1 }}
      className="inline-block"
    >
      {displayChar}
    </motion.span>
  )
}

export function AirportSolariBoard() {
  const text = 'Premium meet and greet and VIP concierge services at Barcelona El Prat Airport (BCN). Our dedicated team operates across Terminal 1 and Terminal 2, providing personal escort, fast track immigration, luggage assistance, and exclusive private tarmac transfers for arrivals, departures, and connections.'

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* VIP Information Board */}
        <div 
          className="rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/20 relative overflow-hidden"
          style={{
            backgroundColor: '#0a192f',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Text content - clean and readable */}
          <motion.p 
            className="font-mono text-sm md:text-base lg:text-lg leading-relaxed tracking-normal text-center"
            style={{
              color: '#d4af37',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.5px'
            }}
          >
            {text.split('').map((char, idx) => (
              <ScrambleChar 
                key={idx}
                char={char}
                index={idx}
              />
            ))}
          </motion.p>
        </div>
      </div>

      {/* Load JetBrains Mono font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
      `}</style>
    </section>
  )
}
