"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave } from "@/components/ui/dividers"
import { ArrowLeft, Map, QrCode, Image, BookOpen, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function MemoryMapPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-a">
        <div className="relative z-10 container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection>
              <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Memory Map
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Where physical maps become living records of personal history
              </p>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Project Content */}
      <section className="section-padding bg-b relative">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Placeholder Image Section */}
            <AnimatedSection>
              <div className="relative w-full aspect-video bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="text-center p-8 max-w-2xl mx-auto z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 mb-6">
                    <MapPin className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Memory Map Preview</h3>
                  <p className="text-muted-foreground">Interactive memory mapping interface coming soon</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-6">
                <h2>Project Overview</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    An early concept exploring how maps can hold more than geography. Each framed map carries a QR code that opens a private digital archive where photos, stories, and milestones are tied to the exact places they happened.
                  </p>
                  <p>
                    Over time, the map evolves into a living record of personal history — a mix of physical artifact and growing memory capsule.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-amber-500/20 rounded-lg">
                        <Map className="w-6 h-6 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>QR codes link physical maps to digital memories</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Location-based memory organization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Private, personal digital archive</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Timeline view of memories</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-rose-500/20 rounded-lg">
                        <QrCode className="w-6 h-6 text-rose-400" />
                      </div>
                      <h3 className="text-xl font-semibold">How It Works</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-rose-500/10 rounded-md mt-0.5">
                          <QrCode className="w-4 h-4 text-rose-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Scan</h4>
                          <p className="text-sm text-muted-foreground">Use your phone to scan the QR code on your framed map</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-amber-500/10 rounded-md mt-0.5">
                          <Image className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Add Memories</h4>
                          <p className="text-sm text-muted-foreground">Upload photos and stories tied to specific locations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-purple-500/10 rounded-md mt-0.5">
                          <Clock className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Watch It Grow</h4>
                          <p className="text-sm text-muted-foreground">Your map becomes a living record of your personal journey</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="pt-8">
                <Button asChild variant="outline">
                  <Link href="/" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
