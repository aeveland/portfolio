"use client"

import { useEffect, useRef, useState } from 'react'

interface SoundSystemProps {
  enabled?: boolean
}

export function SoundSystem({ enabled = true }: SoundSystemProps) {
  const audioContextRef = useRef<AudioContext | null>(null)
  const ambientGainRef = useRef<GainNode | null>(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize Web Audio API
  useEffect(() => {
    if (!enabled) return

    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        ambientGainRef.current = audioContextRef.current.createGain()
        ambientGainRef.current.connect(audioContextRef.current.destination)
        ambientGainRef.current.gain.value = 0.1 // Low ambient volume
      } catch (error) {
        console.log('Web Audio API not supported')
      }
    }

    initAudio()

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [enabled])

  // Create ethereal Honda-like tones
  const createEtherealTone = (frequency: number, duration: number, volume: number = 0.3) => {
    if (!audioContextRef.current || !isEnabled) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    // Create complex waveform (similar to Honda's layered approach)
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
    
    // Add subtle frequency modulation for ethereal effect
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.frequency.value = 0.5 // Slow modulation
    lfoGain.gain.value = 2 // Subtle modulation depth
    lfo.connect(lfoGain)
    lfoGain.connect(oscillator.frequency)
    
    // Low-pass filter for smooth, warm sound
    filter.type = 'lowpass'
    filter.frequency.value = frequency * 2
    filter.Q.value = 1
    
    // Envelope for smooth attack and release
    gainNode.gain.setValueAtTime(0, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.1)
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

    // Connect the audio graph
    oscillator.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(ctx.destination)

    // Start and stop
    oscillator.start(ctx.currentTime)
    lfo.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + duration)
    lfo.stop(ctx.currentTime + duration)
  }

  // Ambient background drone (Honda-inspired)
  const startAmbientDrone = () => {
    if (!audioContextRef.current || !ambientGainRef.current || isPlaying) return

    const ctx = audioContextRef.current
    const gain = ambientGainRef.current
    
    // Create multiple layers for rich ambient sound
    const frequencies = [55, 110, 165, 220] // Low harmonics
    
    frequencies.forEach((freq, index) => {
      const oscillator = ctx.createOscillator()
      const oscGain = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      oscillator.type = 'sine'
      oscillator.frequency.value = freq
      
      // Different volumes for each layer
      oscGain.gain.value = 0.02 / (index + 1)
      
      // Low-pass filtering
      filter.type = 'lowpass'
      filter.frequency.value = freq * 3
      filter.Q.value = 0.5
      
      oscillator.connect(filter)
      filter.connect(oscGain)
      oscGain.connect(gain)
      
      oscillator.start()
      
      // Store reference for cleanup
      ;(oscillator as any)._cleanup = () => {
        try {
          oscillator.stop()
        } catch (e) {
          // Already stopped
        }
      }
    })
    
    setIsPlaying(true)
  }

  const stopAmbientDrone = () => {
    if (!audioContextRef.current) return
    
    // This is a simplified stop - in a real implementation you'd track oscillators
    setIsPlaying(false)
  }

  // Sound effects for different interactions
  const playHoverSound = () => {
    createEtherealTone(440, 0.2, 0.15) // A4 note, short duration
  }

  const playClickSound = () => {
    // Chord-like click (Honda uses harmonic clusters)
    createEtherealTone(523, 0.3, 0.2) // C5
    setTimeout(() => createEtherealTone(659, 0.25, 0.15), 50) // E5
    setTimeout(() => createEtherealTone(784, 0.2, 0.1), 100) // G5
  }

  const playScrollSound = () => {
    createEtherealTone(330, 0.4, 0.1) // E4, longer and quieter
  }

  // Attach sound events to interactive elements
  useEffect(() => {
    if (!isEnabled) return

    const handleButtonHover = () => playHoverSound()
    const handleButtonClick = () => playClickSound()
    const handleScroll = () => playScrollSound()

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('button')
    const links = document.querySelectorAll('a')
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonHover)
      button.addEventListener('click', handleButtonClick)
    })
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleButtonHover)
      link.addEventListener('click', handleButtonClick)
    })

    // Throttled scroll sound
    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 200)
    }
    
    window.addEventListener('scroll', throttledScroll)

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonHover)
        button.removeEventListener('click', handleButtonClick)
      })
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleButtonHover)
        link.removeEventListener('click', handleButtonClick)
      })
      
      window.removeEventListener('scroll', throttledScroll)
      clearTimeout(scrollTimeout)
    }
  }, [isEnabled])

  // Enable audio on first user interaction (required by browsers)
  useEffect(() => {
    const enableAudio = () => {
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume()
      }
      setIsEnabled(true)
    }

    document.addEventListener('click', enableAudio, { once: true })
    document.addEventListener('keydown', enableAudio, { once: true })

    return () => {
      document.removeEventListener('click', enableAudio)
      document.removeEventListener('keydown', enableAudio)
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => {
          if (isPlaying) {
            stopAmbientDrone()
          } else {
            startAmbientDrone()
          }
        }}
        className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-full p-3 hover:bg-black/30 transition-colors"
        aria-label={isPlaying ? "Mute ambient audio" : "Enable ambient audio"}
        disabled={!isEnabled}
      >
        {isPlaying ? (
          <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM16 8a1 1 0 011 1v2a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
            <path d="M18 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      {!isEnabled && (
        <div className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-sm text-white/70 text-xs px-3 py-2 rounded-lg whitespace-nowrap">
          Click anywhere to enable audio
        </div>
      )}
    </div>
  )
}
