"use client"

import { useEffect, useRef, useState } from 'react'

interface ParticleSystemProps {
  className?: string
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

export function ParticleSystem({ className = "" }: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)
  const [currentSection, setCurrentSection] = useState('hero')

  // Color schemes for different sections
  const sectionColors = {
    hero: ['#4f46e5', '#7c3aed', '#ec4899'],
    about: ['#06b6d4', '#0891b2', '#0e7490'],
    'selected-work': ['#f59e0b', '#d97706', '#b45309'],
    'case-studies': ['#10b981', '#059669', '#047857'],
    'side-projects': ['#8b5cf6', '#7c3aed', '#6d28d9'],
    approach: ['#ef4444', '#dc2626', '#b91c1c'],
    contact: ['#ec4899', '#db2777', '#be185d']
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const maxParticles = 50

    // Resize canvas
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    // Create particle
    const createParticle = (x: number, y: number) => {
      const colors = sectionColors[currentSection as keyof typeof sectionColors] || sectionColors.hero
      const color = colors[Math.floor(Math.random() * colors.length)]
      
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color,
        life: 0,
        maxLife: Math.random() * 120 + 60
      }
    }

    // Update particles
    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        
        // Age particle
        particle.life++
        
        // Remove old particles
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1)
          continue
        }

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx += (dx / distance) * force * 0.1
          particle.vy += (dy / distance) * force * 0.1
        }

        // Scroll influence
        const scrollInfluence = scrollRef.current * 0.001
        particle.vy += scrollInfluence

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Fade out over time
        particle.opacity = (1 - particle.life / particle.maxLife) * 0.8

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      }
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 10
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw connections to nearby particles
        particles.forEach(otherParticle => {
          if (particle === otherParticle) return
          
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (80 - distance) / 80 * 0.3
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
        
        ctx.restore()
      })
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      drawParticles()
      animationId = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      
      // Create particles on mouse move
      if (particles.length < maxParticles && Math.random() < 0.3) {
        particles.push(createParticle(mouseRef.current.x, mouseRef.current.y))
      }
    }

    // Scroll handler
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      
      // Detect current section
      const sections = ['hero', 'about', 'selected-work', 'case-studies', 'side-projects', 'approach', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(sectionId)
            break
          }
        }
      }
    }

    // Initialize
    resize()
    animate()

    // Add some initial particles
    for (let i = 0; i < 10; i++) {
      particles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ))
    }

    // Event listeners
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentSection])

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}
