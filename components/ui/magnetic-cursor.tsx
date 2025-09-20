"use client"

import { useEffect, useRef, useState } from 'react'

interface CursorState {
  x: number
  y: number
  isHovering: boolean
  hoverType: 'button' | 'link' | 'card' | null
}

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverType: null
  })

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let trailX = 0
    let trailY = 0

    // Smooth cursor following
    const updateCursor = () => {
      const ease = 0.15
      const trailEase = 0.08

      cursorX += (mouseX - cursorX) * ease
      cursorY += (mouseY - cursorY) * ease
      trailX += (mouseX - trailX) * trailEase
      trailY += (mouseY - trailY) * trailEase

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`
      }

      requestAnimationFrame(updateCursor)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }))

      // Check for magnetic elements
      const magneticElements = document.querySelectorAll('[data-magnetic]')
      let isNearMagnetic = false
      let magneticType: 'button' | 'link' | 'card' | null = null

      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        )

        const magneticRadius = 80 // Attraction radius
        const maxPull = 20 // Maximum pull distance

        if (distance < magneticRadius) {
          isNearMagnetic = true
          magneticType = element.getAttribute('data-magnetic') as 'button' | 'link' | 'card'

          // Calculate magnetic pull
          const pullStrength = Math.max(0, (magneticRadius - distance) / magneticRadius)
          const pullX = (centerX - e.clientX) * pullStrength * 0.3
          const pullY = (centerY - e.clientY) * pullStrength * 0.3

          // Apply magnetic effect to cursor
          mouseX = e.clientX + pullX
          mouseY = e.clientY + pullY

          // Apply magnetic effect to the element itself
          const elementPullX = (e.clientX - centerX) * pullStrength * 0.1
          const elementPullY = (e.clientY - centerY) * pullStrength * 0.1
          
          ;(element as HTMLElement).style.transform = 
            `translate3d(${elementPullX}px, ${elementPullY}px, 0) scale(${1 + pullStrength * 0.05})`
        } else {
          // Reset element position when not magnetic
          ;(element as HTMLElement).style.transform = 'translate3d(0, 0, 0) scale(1)'
        }
      })

      setCursorState(prev => ({
        ...prev,
        isHovering: isNearMagnetic,
        hoverType: magneticType
      }))
    }

    // Mouse enter/leave handlers for interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"]')) {
        setCursorState(prev => ({
          ...prev,
          isHovering: true,
          hoverType: target.tagName.toLowerCase() === 'button' ? 'button' : 'link'
        }))
      }
    }

    const handleMouseLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        hoverType: null
      }))
    }

    // Initialize
    updateCursor()

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.body.style.cursor = 'auto'

      // Reset all magnetic elements
      const magneticElements = document.querySelectorAll('[data-magnetic]')
      magneticElements.forEach((element) => {
        ;(element as HTMLElement).style.transform = 'translate3d(0, 0, 0) scale(1)'
      })
    }
  }, [])

  const getCursorSize = () => {
    switch (cursorState.hoverType) {
      case 'button':
        return 'w-12 h-12'
      case 'link':
        return 'w-8 h-8'
      case 'card':
        return 'w-16 h-16'
      default:
        return 'w-6 h-6'
    }
  }

  const getCursorColor = () => {
    switch (cursorState.hoverType) {
      case 'button':
        return 'bg-primary/30 border-primary'
      case 'link':
        return 'bg-blue-500/30 border-blue-500'
      case 'card':
        return 'bg-purple-500/20 border-purple-500'
      default:
        return 'bg-white/20 border-white/50'
    }
  }

  return (
    <>
      {/* Cursor Trail */}
      <div
        ref={trailRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ${
          cursorState.isHovering ? 'w-16 h-16 bg-primary/10' : 'w-8 h-8 bg-white/10'
        }`}
        style={{
          transform: `translate3d(${cursorState.x}px, ${cursorState.y}px, 0)`,
          marginLeft: '-50%',
          marginTop: '-50%',
        }}
      />

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full border-2 transition-all duration-200 ${getCursorSize()} ${getCursorColor()}`}
        style={{
          transform: `translate3d(${cursorState.x}px, ${cursorState.y}px, 0)`,
          marginLeft: '-50%',
          marginTop: '-50%',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Hover indicator */}
        {cursorState.isHovering && (
          <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
        )}
      </div>
    </>
  )
}

// Hook to add magnetic properties to elements
export function useMagnetic(type: 'button' | 'link' | 'card' = 'button') {
  return {
    'data-magnetic': type,
    style: { transition: 'transform 0.2s ease-out' }
  }
}
