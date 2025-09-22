"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave, SmoothWaveAlt } from "@/components/ui/dividers"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArcGISFieldMapsPage() {
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
                ArcGIS Field Maps
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Designing accuracy-focused workflows for survey-grade data collection
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" variant="ghost">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <a href="https://apps.apple.com/us/app/arcgis-field-maps/id1515671684">View Live Project</a>
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
                  <h2>Project Overview</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      ArcGIS Field Maps evolved from a simple data capture tool into a comprehensive solution for survey-grade accuracy in mobile environments. The challenge was making advanced geodesy workflows accessible to field workers without deep GIS expertise.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                      <div>
                        <h4 className="font-semibold mb-2">My Role</h4>
                        <p className="text-muted-foreground">Lead UX Designer</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Timeline</h4>
                        <p className="text-muted-foreground">18 months</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Team</h4>
                        <p className="text-muted-foreground">PM, Engineers, Geodesy Experts</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Platform</h4>
                        <p className="text-muted-foreground">iOS, Android</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                        📱
                      </div>
                      <p>Hero Image Placeholder</p>
                      <p className="text-sm">Replace with project screenshot</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">The Challenge</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      ArcGIS Field Maps started as a way for crews to capture and edit GIS data in the field. Over time, the demands grew: utilities, natural resource agencies, and survey teams needed survey-grade accuracy in a mobile app.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Configuring external GNSS receivers, applying grid transformations, and supporting real-time corrections like RTK introduced complexity far beyond the typical "blue dot on a map."
                    </p>
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/20">
                      <p className="text-lg font-medium">
                        <strong>The challenge:</strong> make these advanced geodesy workflows usable by anyone in the field, without requiring deep GIS knowledge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* My Role */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                        🎯
                      </div>
                      <p>Role & Responsibilities</p>
                      <p className="text-sm">Replace with process diagram</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h2>My Role</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      I led design for GNSS receiver setup, grid transformations, and local RTK UX. I also worked closely with the team on core collection workflows: point capture, line creation, offset streaming, and averaging.
                    </p>
                    <p>
                      My focus was on simplifying complex configuration tasks into guided, mobile-friendly flows while ensuring accuracy-critical details were not lost.
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>GNSS receiver setup and status UX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Grid transformation workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>RTK correction management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span>Point and line collection flows</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Process */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimatedSection>
              <h2 className="text-center">Process</h2>
            </AnimatedSection>
            
            <div className="space-y-12">
              {/* Research */}
              <AnimatedSection delay={200}>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🔍</span>
                        </div>
                        <h3>Research and Validation</h3>
                      </div>
                      <div className="space-y-4 text-lg pl-16">
                        <p>Partnered with product managers and geodesy experts to understand the requirements for high-accuracy workflows.</p>
                        <p>Reviewed how competitors and dedicated survey devices handled these features.</p>
                        <p>Interviewed field users to understand pain points around configuring external receivers and applying transformations.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Design */}
              <AnimatedSection delay={400}>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">✏️</span>
                        </div>
                        <h3>Interaction Design</h3>
                      </div>
                      <div className="space-y-4 text-lg pl-16">
                        <p>Created UX flows for connecting GNSS receivers and exposing their status.</p>
                        <p>Designed a structured way for users to apply grid transformations and manage RTK corrections without being overwhelmed.</p>
                        <p>Prototyped offset, streaming, and averaging workflows to balance flexibility with simplicity.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Collaboration */}
              <AnimatedSection delay={600}>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🤝</span>
                        </div>
                        <h3>Collaboration and Iteration</h3>
                      </div>
                      <div className="space-y-4 text-lg pl-16">
                        <p>Worked closely with engineers to align on what was technically feasible in the mobile environment.</p>
                        <p>Iterated on early flows after feedback from field testers who worked under real-world conditions (low connectivity, time pressure).</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* The Solution */}
      <section className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto space-y-16">
            <AnimatedSection>
              <h2 className="text-center">The Solution</h2>
            </AnimatedSection>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white/60">
                          <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                            📡
                          </div>
                          <p className="text-sm">Receiver Config</p>
                        </div>
                      </div>
                      <h4 className="font-semibold">Receiver Configuration</h4>
                      <p className="text-muted-foreground">
                        A clear, step-by-step setup for external GNSS receivers, showing accuracy status, battery, and connection health.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white/60">
                          <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                            🗺️
                          </div>
                          <p className="text-sm">Grid & RTK</p>
                        </div>
                      </div>
                      <h4 className="font-semibold">Grid Transformations and RTK</h4>
                      <p className="text-muted-foreground">
                        A simplified UX for applying local grid transformations and connecting to RTK networks. Users could set these once and trust Field Maps to keep corrections active.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white/60">
                          <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                            📍
                          </div>
                          <p className="text-sm">Collection</p>
                        </div>
                      </div>
                      <h4 className="font-semibold">Point and Line Collection</h4>
                      <p className="text-muted-foreground">
                        Improved workflows for capturing single points, streaming positions for lines, and using offsets. Averaging multiple fixes gave users confidence in accuracy without slowing them down.
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

      {/* The Impact */}
      <section className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-center">The Impact</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold">Expanded Use Cases</h4>
                  <p className="text-muted-foreground">
                    Field Maps became viable not only for basic data capture but for survey-grade workflows, reducing the need for dedicated hardware.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="font-semibold">Industry Adoption</h4>
                  <p className="text-muted-foreground">
                    Utilities, transportation, and natural resource agencies could standardize on a single app across crews.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold">Confidence in Accuracy</h4>
                  <p className="text-muted-foreground">
                    By simplifying the complexity of geodesy, we helped ensure that data collected in the field aligned with enterprise GIS standards.
                  </p>
                </div>
              </AnimatedSection>
            </div>
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
