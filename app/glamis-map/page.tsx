"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave } from "@/components/ui/dividers"
import { ArrowLeft, ExternalLink, MapPin, Download, Code, Layers } from "lucide-react"
import Link from "next/link"

export default function GlamisMapPage() {
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
                Glamis Map
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                An interactive map for off-roaders exploring the Glamis Sand Dunes
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button size="lg" variant="ghost" asChild>
                  <a href="https://glamis-map.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a href="http://www.glamis.com">View Live Project</a>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/yourusername/glamis-map" target="_blank" rel="noopener noreferrer">
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Project Content */}
      <section className="section-padding bg-b relative">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="space-y-16">
            <AnimatedSection>
              <div className="space-y-6">
                <h2>Project Overview</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    A personal project born from my passion for off-roading in the Glamis Sand Dunes. I designed and built an interactive map using Mapbox, highlighting key landmarks like Oldsmobile Hill, China Wall, and Vendor Row.
                  </p>
                  <p>
                    The map features GPS coordinates, downloadable GPX files for navigation devices, and descriptive context for each spot.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Interactive Mapbox integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>GPS coordinates for all key locations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Downloadable GPX files for navigation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Responsive design for all devices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Layers className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Tech Stack</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Frontend</h4>
                        <p className="text-sm text-muted-foreground">Next.js, React, TypeScript, Tailwind CSS</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Mapping</h4>
                        <p className="text-sm text-muted-foreground">Mapbox GL JS, Turf.js</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Deployment</h4>
                        <p className="text-sm text-muted-foreground">Vercel</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-6">
                <h2>Project Impact</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    This project blends design, coding, and community — giving riders a tool to explore safely and learn about the history of the dunes.
                  </p>
                  <p>
                    It's also a proving ground where I experiment with Apple-inspired UI patterns, responsive layouts, and new features like routes and event overlays.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="pt-8">
                <Button asChild>
                  <a href="https://glamis-map.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Glamis Map
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
