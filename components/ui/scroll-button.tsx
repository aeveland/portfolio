"use client"

import { useEffect, useState } from 'react'

interface ScrollButtonProps {
  targetId: string
  className?: string
  ariaLabel?: string
}

export function ScrollButton({ targetId, className = "", ariaLabel }: ScrollButtonProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    if (!isMounted) return
    document.getElementById(targetId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <button 
      onClick={handleClick}
      className={`animate-bounce hover:scale-110 transition-transform cursor-pointer ${className}`}
      aria-label={ariaLabel || `Scroll to ${targetId} section`}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-white/60"
      >
        <path 
          d="M7 10L12 15L17 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
