'use client'

import { Service } from '@/lib/services'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Handshake, Car } from 'lucide-react'

interface ServiceHowItWorksProps {
  service: Service
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,'

interface FlipCharProps {
  char: string
  isGold: boolean
  charIndex: number
  resolveTime: number
  animationCycle: number
  lineIndex: number
}

const FlipChar = ({ char, isGold, charIndex, resolveTime, animationCycle, lineIndex }: FlipCharProps) => {
  const [displayChar, setDisplayChar] = useState(' ')

  useEffect(() => {
    setDisplayChar(' ')

    const flipInterval = setInterval(() => {
      setDisplayChar(CHARS[Math.floor(Math.random() * CHARS.length)])
    }, 80)

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
      key={`${animationCycle}-${lineIndex}-${charIndex}`}
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
        color: isGold ? '#B8913A' : '#ffffff',
        lineHeight: 1,
        whiteSpace: 'pre',
        overflow: 'hidden',
      }}
    >
      {displayChar}
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

export function ServiceHowItWorks({ service }: ServiceHowItWorksProps) {
  // Only show Solari board for Fast Track
  if (service.slug !== 'fast-track') {
    return (
      <section className="bg-white py-10 md:py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {[
              { number: 1, title: 'Book Online', description: 'Choose your airport, flight, and service. Instant confirmation.', icon: Calendar },
              { number: 2, title: 'We Assign Your Agent', description: 'A trained, multilingual agent is assigned to your flight.', icon: Users },
              { number: 3, title: 'Agent Meets You', description: 'Your agent waits at the aircraft door with a personalized name board.', icon: Handshake },
              { number: 4, title: 'Door-to-Door Escort', description: 'Escorted through immigration, baggage, and customs to your vehicle.', icon: Car },
            ].map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white mb-4" style={{ backgroundColor: 'var(--navy)' }}>
                    {step.number}
                  </div>
                  <Icon size={40} className="text-[var(--gold)] mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2 text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] text-center md:text-left" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Fast Track Solari Board
  const lines = [
    'STEP 1  BOOK ONLINE — CHOOSE YOUR AIRPORT, FLIGHT, AND SERVICE ',
    'STEP 2  WE ASSIGN YOUR AGENT — TRAINED, MULTILINGUAL PROFESSIONAL ',
    'STEP 3  AGENT MEETS YOU — AT THE AIRCRAFT DOOR WITH NAME BOARD ',
    'STEP 4  DOOR-TO-DOOR ESCORT — THROUGH IMMIGRATION, BAGGAGE, TO YOUR VEHICLE ',
  ]

  const [timings, setTimings] = useState<number[][]>([])
  const [animationCycle, setAnimationCycle] = useState(0)

  useEffect(() => {
    const generateTimings = () => {
      const newTimings = lines.map(line =>
        line.split('').map(() =>
          Math.random() * 2200 + 600
        )
      )
      setTimings(newTimings)
    }

    generateTimings()

    const loopTimer = setInterval(() => {
      setAnimationCycle(prev => prev + 1)
    }, 120000)

    return () => clearInterval(loopTimer)
  }, [])

  if (timings.length === 0) return null

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-background relative z-0">
      <div className="mx-auto max-w-7xl">
        <div
          className="rounded-lg p-6 md:p-8 border border-white/15 relative overflow-hidden space-y-4"
          style={{
            backgroundColor: '#1D215E',
          }}
        >
          {lines.map((line, lineIndex) => {
            const stepMatch = line.match(/^(STEP \d+) (.*)/)
            if (!stepMatch) return null

            const stepLabel = stepMatch[1]
            const stepText = stepMatch[2]

            return (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: lineIndex * 0.5, duration: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-0"
                style={{
                  lineHeight: '2rem',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                {stepLabel.split('').map((char, idx) => (
                  <FlipChar
                    key={`${animationCycle}-${lineIndex}-step-${idx}`}
                    char={char}
                    isGold={true}
                    charIndex={idx}
                    resolveTime={timings[lineIndex]?.[idx] || 1500}
                    animationCycle={animationCycle}
                    lineIndex={lineIndex}
                  />
                ))}
                {' '}
                {stepText.split('').map((char, idx) => (
                  <FlipChar
                    key={`${animationCycle}-${lineIndex}-text-${idx}`}
                    char={char}
                    isGold={false}
                    charIndex={stepLabel.length + idx}
                    resolveTime={(timings[lineIndex]?.[stepLabel.length + idx] || 1500) + 200}
                    animationCycle={animationCycle}
                    lineIndex={lineIndex}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
      `}</style>
    </section>
  )
}
