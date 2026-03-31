'use client'

import { useState, useEffect } from 'react'

const rotatingWords = ['in Comfort', 'in Style', 'in Luxury', 'with Ease', 'Like a VIP', 'Without Queues', 'with Confidence', 'Fast']

export function RotatingHeading() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsTransitioning(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white lg:text-3xl">
      Navigate Airports{' '}
      <span
        style={{
          color: '#B8913A',
          display: 'inline-block',
          minWidth: '120px',
          textAlign: 'left',
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
        }}
      >
        {rotatingWords[currentWordIndex]}
      </span>
    </h1>
  )
}
