"use client"

import React from 'react'

interface DividerProps {
  className?: string
  fill?: string
}

export const SmoothWave: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 120" className="w-full h-auto">
      <path
        d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SmoothWaveAlt: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 100" className="w-full h-auto">
      <path
        d="M0,50 C200,10 400,90 600,40 C800,10 1000,80 1200,30 L1200,100 L0,100 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SmoothWaveDeep: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 140" className="w-full h-auto">
      <path
        d="M0,70 C150,20 350,120 600,50 C850,10 1050,100 1200,40 L1200,140 L0,140 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SmoothWaveGentle: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 80" className="w-full h-auto">
      <path
        d="M0,40 C400,80 800,0 1200,40 L1200,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SmoothWaveComplex: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 110" className="w-full h-auto">
      <path
        d="M0,55 C100,15 200,95 400,45 C500,25 600,85 800,35 C900,15 1100,75 1200,45 L1200,110 L0,110 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const ShallowSlope: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 60" className="w-full h-auto">
      <path
        d="M0,60 L1200,0 L1200,60 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SoftNoiseEdge: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 80" className="w-full h-auto">
      <path
        d="M0,40 C50,45 100,35 150,42 C200,48 250,32 300,38 C350,44 400,36 450,41 C500,46 550,34 600,39 C650,44 700,36 750,42 C800,48 850,32 900,38 C950,44 1000,36 1050,41 C1100,46 1150,34 1200,39 L1200,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SubtlePeak: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 100" className="w-full h-auto">
      <path
        d="M0,100 L600,20 L1200,100 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const ShallowWave: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 80" className="w-full h-auto">
      <path
        d="M0,40 C400,80 800,0 1200,40 L1200,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const TornPaperEdge: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 100" className="w-full h-auto">
      <path
        d="M0,50 C20,45 40,55 60,48 C80,52 100,44 120,49 C140,46 160,54 180,47 C200,51 220,43 240,48 C260,45 280,53 300,46 C320,50 340,42 360,47 C380,44 400,52 420,45 C440,49 460,41 480,46 C500,43 520,51 540,44 C560,48 580,40 600,45 C620,42 640,50 660,43 C680,47 700,39 720,44 C740,41 760,49 780,42 C800,46 820,38 840,43 C860,40 880,48 900,41 C920,45 940,37 960,42 C980,39 1000,47 1020,40 C1040,44 1060,36 1080,41 C1100,38 1120,46 1140,39 C1160,43 1180,35 1200,40 L1200,100 L0,100 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const WaveWithCrest: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 120" className="w-full h-auto">
      <path
        d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,40 L1200,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SmoothArc: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 100" className="w-full h-auto">
      <path
        d="M0,100 Q600,0 1200,100 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const JaggedNoise: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 120" className="w-full h-auto">
      <path
        d="M0,60 L50,40 L100,70 L150,30 L200,65 L250,35 L300,75 L350,25 L400,60 L450,45 L500,80 L550,20 L600,55 L650,50 L700,85 L750,15 L800,65 L850,40 L900,75 L950,30 L1000,60 L1050,45 L1100,70 L1150,35 L1200,55 L1200,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const ShallowSine: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 60" className="w-full h-auto">
      <path
        d="M0,30 C150,10 150,50 300,30 C450,10 450,50 600,30 C750,10 750,50 900,30 C1050,10 1050,50 1200,30 L1200,60 L0,60 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const WavyRibbon: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 100" className="w-full h-auto">
      <path
        d="M0,50 C100,20 200,80 300,50 C400,20 500,80 600,50 C700,20 800,80 900,50 C1000,20 1100,80 1200,50 L1200,100 L0,100 Z"
        fill={fill}
      />
    </svg>
  </div>
)

export const SoftWave: React.FC<DividerProps> = ({ className = "", fill = "currentColor" }) => (
  <div className={`w-full ${className}`}>
    <svg viewBox="0 0 1200 90" className="w-full h-auto">
      <path
        d="M0,45 C300,90 900,0 1200,45 L1200,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  </div>
)
