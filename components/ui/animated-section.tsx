"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  distance = 50
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`
      case 'down':
        return `translate3d(0, -${distance}px, 0)`
      case 'left':
        return `translate3d(${distance}px, 0, 0)`
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`
      default:
        return `translate3d(0, ${distance}px, 0)`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredChildrenProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggeredChildren({ 
  children, 
  className = '',
  staggerDelay = 100,
  direction = 'up'
}: StaggeredChildrenProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          delay={index * staggerDelay}
          direction={direction}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}
