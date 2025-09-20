// Project data
export const PROJECTS = {
  SELECTED_WORK: [
    {
      title: "ArcGIS Indoors Mobile",
      description: "Wayfinding and reservations at scale.",
      linkText: "View Design"
    },
    {
      title: "AI Itinerary", 
      description: "Plan a day, then navigate it.",
      linkText: "View Design"
    },
    {
      title: "Kiosk Experience",
      description: "Fast start for visitors and staff.",
      linkText: "View Design"
    }
  ],
  SIDE_PROJECTS: [
    {
      title: "Glamis Map",
      description: "Interactive map of the dunes with GPX and local history.",
      linkText: "View App"
    },
    {
      title: "CampBase",
      description: "Group camping planner with offline maps and shared tasks.",
      linkText: "View App"
    },
    {
      title: "Memory Map",
      description: "Photos tied to place and time with a QR print.",
      linkText: "View App"
    }
  ]
} as const

// Case studies data
export const CASE_STUDIES = [
  "Vision Pro space planning. Hands on assignment of people to places.",
  "Events on campus. From discovery to patterns and metrics.",
  "Wallet sign in for kiosks. Tap to identify, then act.",
  "Navigation improvements. Smoother routes and better context."
] as const

// Approach data
export const APPROACH = {
  HOW_I_WORK: [
    "Start with why it matters",
    "Build to learn, not to impress", 
    "Test early, iterate often",
    "Design systems that scale",
    "Measure what moves the needle"
  ],
  WHAT_I_BELIEVE: [
    "Clarity over cleverness",
    "Progress over perfection",
    "Data over assumptions", 
    "Stories over specifications",
    "Impact over output"
  ],
  HOW_I_SHARE: [
    "Design process workshops",
    "Team decision frameworks",
    "Navigation pattern research",
    "Spatial design insights",
    "Product strategy sessions"
  ]
} as const

// Social links
export const SOCIAL_LINKS = {
  TWITTER: {
    url: "https://twitter.com/luckyduner13",
    handle: "@luckyduner13",
    label: "Follow on Twitter"
  },
  GITHUB: {
    url: "https://github.com/aeveland", 
    handle: "GitHub",
    label: "View GitHub profile"
  }
} as const
