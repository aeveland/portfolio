"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave, SmoothWaveAlt } from "@/components/ui/dividers"
import { ArrowLeft, ExternalLink, Clock, CheckCircle, Smartphone, WifiOff } from "lucide-react"
import Link from "next/link"

export default function ForeFlightLogbookPage() {
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
                ForeFlight Logbook
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Digital logbook designed for pilots who trust their records
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" variant="ghost" asChild>
                  <a href="https://apps.apple.com/us/app/foreflight-mobile-efb/id333252638" target="_blank" rel="noopener noreferrer">
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
                  <h2>Project Context</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      ForeFlight was expanding beyond flight planning into more tools that supported pilots' daily operations. A digital logbook was a natural extension, but it had to earn pilots' trust as they were accustomed to paper logs for official records.
                    </p>
                    <p>
                      The challenge was to create a digital experience that felt as reliable as paper while adding smart digital conveniences.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                      <div>
                        <h4 className="font-semibold mb-2">My Role</h4>
                        <p className="text-muted-foreground">Product Designer</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Timeframe</h4>
                        <p className="text-muted-foreground">2014-2015</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Platform</h4>
                        <p className="text-muted-foreground">iOS</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Category</h4>
                        <p className="text-muted-foreground">Aviation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                        ✈️
                      </div>
                      <p>ForeFlight Logbook</p>
                      <p className="text-sm">Flight logging interface</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Design Process */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection>
              <h2 className="text-center">My Contribution</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      I worked with engineers and product leads to design core flows for the logbook feature. My focus was on the iOS app experience — creating entry screens, interaction patterns, and layouts that made flight logging faster and less error-prone.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Clock className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Smart Entry</h4>
                            <p className="text-sm text-muted-foreground">Adaptive forms for VFR, IFR, PIC, and dual instruction</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Endorsements</h4>
                            <p className="text-sm text-muted-foreground">Secure on-device signatures for instructor approvals</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Smartphone className="w-4 h-4 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">At-a-Glance</h4>
                            <p className="text-sm text-muted-foreground">Quick views of currency status and flight totals</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <WifiOff className="w-4 h-4 text-amber-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Offline First</h4>
                            <p className="text-sm text-muted-foreground">Reliable logging even without internet connection</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">Challenges & Solutions</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <Card className="h-full bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <h4 className="font-semibold">Familiar Yet Better</h4>
                      <p className="text-sm text-muted-foreground">
                        Made digital input feel as intuitive as paper logs while adding smart defaults and validation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <Card className="h-full bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold">Contextual Fields</h4>
                      <p className="text-sm text-muted-foreground">
                        Showed only relevant fields based on flight type to prevent user overload
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <Card className="h-full bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h4 className="font-semibold">Always Available</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed for reliability with offline-first functionality and sync when back online
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Outcome */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">Outcome & Impact</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      The Logbook feature provided a clean, digital alternative to paper. It simplified entry, kept totals and currency status current, and reduced the risk of missing endorsements. It became a trusted tool for both new and experienced pilots.
                    </p>
                    
                    <div className="p-6 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-lg border border-blue-500/20 mt-6">
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>Reduced logbook entry time by 60% compared to paper</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>Eliminated common calculation errors in flight time tracking</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>Became an FAA-accepted method for logbook record keeping</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Reflection */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="space-y-6 text-center">
                <h2>Reflection</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Looking back, this was one of my early experiences designing for a professional audience with strict requirements. It taught me the balance between respecting existing workflows (paper logs) and introducing digital conveniences (smart defaults, validation, reports).
                  </p>
                  <p>
                    The project reinforced the importance of understanding domain-specific needs and building trust through thoughtful, reliable design.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Navigation */}
      <section className="section-padding bg-a">
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
