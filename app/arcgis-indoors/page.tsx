"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave, SmoothWaveAlt } from "@/components/ui/dividers"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArcGISIndoorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-a">
        <div className="relative z-10 container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection>
              <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ArcGIS Indoors
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Complete end-to-end redesign transforming a legacy app into a modern, scalable indoor navigation platform
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" variant="ghost" asChild>
                  <a href="https://apps.apple.com/us/app/arcgis-indoors/id6741082549" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="space-y-6">
                  <h2>Complete Redesign</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      I led the end-to-end redesign of the ArcGIS Indoors mobile app, transforming it from version 1.0 into a modern, reliable product with new frameworks, a rebuilt architecture, and an entirely new user experience.
                    </p>
                    <p>
                      Indoors 1.0 had limitations in both UI and technical architecture. My role was to re-envision the product with a stronger design system, scalable workflows, and a simpler experience for users navigating complex facilities.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                      <div>
                        <h4 className="font-semibold mb-2">My Role</h4>
                        <p className="text-muted-foreground">Lead UX Designer</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Scope</h4>
                        <p className="text-muted-foreground">Complete Redesign</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Platforms</h4>
                        <p className="text-muted-foreground">iOS, Android, Kiosk</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Framework</h4>
                        <p className="text-muted-foreground">Calcite Design System</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="/appOverview.png" 
                    alt="ArcGIS Indoors App Overview" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Core Workflows */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="/CoreWorkflows.png" 
                    alt="Core Workflows" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h2>Core Workflows</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      I redesigned the Explore panel, search, and info cards so users can quickly find people, workspaces, meeting rooms, and points of interest.
                    </p>
                    <p>
                      Action buttons like directions, 360° photos, and launch actions were rebuilt with clear fallback states and flexible configuration.
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Redesigned Explore panel and search</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Enhanced info cards with rich actions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span>360° photos and launch integrations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Fallback states and error handling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Reservations */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">Reservations</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      A major part of the redesign was workspace and meeting room reservations. I created a new interaction model that supports availability callouts, reservation status updates, and integration with Microsoft 365 accounts.
                    </p>
                    <p className="text-lg leading-relaxed">
                      The design also accounts for multiple assignments, error handling, and edge cases so the experience feels consistent even in complex enterprise setups.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📅</span>
                        </div>
                        <h4 className="font-semibold">Availability</h4>
                        <p className="text-sm text-muted-foreground">Real-time status and booking callouts</p>
                      </div>
                      
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🔗</span>
                        </div>
                        <h4 className="font-semibold">Integration</h4>
                        <p className="text-sm text-muted-foreground">Microsoft 365 account sync</p>
                      </div>
                      
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <h4 className="font-semibold">Edge Cases</h4>
                        <p className="text-sm text-muted-foreground">Multiple assignments and error handling</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Kiosk and Mobile Alignment */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="space-y-6">
                  <h2>Kiosk and Mobile Alignment</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      I extended patterns from the mobile app into the Indoors Kiosk, creating a consistent design language across platforms.
                    </p>
                    <p>
                      Both apps now share navigation patterns, events, and space reservation workflows, giving users a seamless experience whether they are on a large screen in a lobby or on their phone.
                    </p>
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
                      <p className="font-medium">
                        <strong>Unified Experience:</strong> Consistent design language across mobile and kiosk platforms ensures users feel familiar with both interfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="/Cross-PlatformDesign.jpg" 
                    alt="Cross-Platform Design" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Architecture and Design Systems */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection>
              <h2 className="text-center">Architecture and Design Systems</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Beyond the UI, I collaborated with the team on the structural redesign of the app:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🎨</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Design System Integration</h4>
                          <p className="text-muted-foreground">Defined new UX patterns based on Calcite Design System and modern iOS/Android frameworks</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Workflow Simplification</h4>
                          <p className="text-muted-foreground">Simplified complex workflows like reservations and search into clear steps</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">📋</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Documentation & Error Handling</h4>
                          <p className="text-muted-foreground">Documented fallback logic and error handling to prevent dead ends in user flows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Impact */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">Impact</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold">Modernized Platform</h4>
                  <p className="text-muted-foreground">
                    The redesign modernized ArcGIS Indoors from the ground up, addressing both architecture and UX to deliver a product that feels consistent, fast, and intuitive.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold">Future-Ready Scale</h4>
                  <p className="text-muted-foreground">
                    The new app is positioned to scale with future enterprise needs, from navigation to workspace management, while maintaining a clean and user-friendly design.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={600}>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-8 rounded-lg border border-indigo-500/20 text-center">
                <p className="text-lg font-medium">
                  <strong>Complete Transformation:</strong> From legacy limitations to modern, scalable enterprise solution with unified cross-platform experience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-b">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link href="/">
                  <Button variant="ghost" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </Link>
                <Link href="/#selected-work">
                  <Button size="lg">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
