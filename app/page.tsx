"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/ui/project-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section"
import dynamic from 'next/dynamic'

// Dynamically import the LightRays component with SSR disabled
const LightRays = dynamic(
  () => import("@/components/ui/LightRays").then(mod => mod.LightRays),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-a" />
  }
)

import { SmoothWave, SmoothWaveAlt, SmoothWaveDeep, SmoothWaveGentle, SmoothWaveComplex } from "@/components/ui/dividers"
import { ExternalLink, Twitter, Github, MapPin, Map as MapIcon, QrCode } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-a px-4 pt-32 md:pt-0">
        <LightRays />
        <div className="relative z-10 w-full text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">Andy Eveland</h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground">Product Designer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Designing clear, useful products for maps and location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('selected-work')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View Selected Work
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex justify-center pt-[300px]">
              <ScrollButton targetId="about" ariaLabel="Scroll to About section" />
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <h2>About</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p>
                I am a product designer with deep experience on iOS, Android, web, and Vision Pro. 
                I lead teams, ship real features, and keep the work practical. My focus is clear 
                communication, strong collaboration, and results.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="space-y-4">
                <h3>Callouts</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Indoor mapping and navigation</li>
                  <li>• AI assisted workflows</li>
                  <li>• Prototyping that answers real questions</li>
                </ul>
              </div>
            </AnimatedSection>

            <div className="text-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('selected-work')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View Selected Work
              </Button>
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto space-y-16">
            <AnimatedSection>
              <h2 className="pt-8 pb-4">Selected Work</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection delay={0}>
                <Link href="/arcgis-indoors">
                  <Card className="group hover:bg-card/80 transition-all duration-300 border-border/50 cursor-pointer overflow-hidden">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src="/ArcGISIndoors.jpg" 
                        alt="ArcGIS Indoors" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-4 pl-6 pr-4">
                        <div className="text-white">
                          <MapPin className="w-6 h-6 mb-1.5 text-blue-300" />
                          <span className="text-base font-semibold">ArcGIS Indoors</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pt-4">
                      <CardDescription>
                        Complete redesign transforming legacy app into modern indoor navigation platform.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <span className="text-primary hover:text-primary/80 inline-flex items-center text-sm transition-colors">
                        View Design <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <Link href="/arcgis-field-maps">
                  <Card className="group hover:bg-card/80 transition-all duration-300 border-border/50 cursor-pointer overflow-hidden">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src="/FieldMaps.jpg" 
                        alt="ArcGIS Field Maps" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-4 pl-6 pr-4">
                        <div className="text-white">
                          <MapPin className="w-6 h-6 mb-1.5 text-green-300" />
                          <span className="text-base font-semibold">ArcGIS Field Maps</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pt-4">
                      <CardDescription>
                        Designing accuracy-focused workflows for survey-grade data collection.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <span className="text-primary hover:text-primary/80 inline-flex items-center text-sm transition-colors">
                        View Design <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Link href="/foreflight-logbook">
                  <Card className="group hover:bg-card/80 transition-all duration-300 border-border/50 cursor-pointer overflow-hidden">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src="/ForeFlight.jpg" 
                        alt="ForeFlight Logbook" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-4 pl-6 pr-4">
                        <div className="text-white">
                          <MapPin className="w-6 h-6 mb-1.5 text-amber-300" />
                          <span className="text-base font-semibold">ForeFlight Logbook</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pt-4">
                      <CardDescription>
                        Digital logbook designed for pilots who trust their records.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <span className="text-primary hover:text-primary/80 inline-flex items-center text-sm transition-colors">
                        View Design <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            </div>

            <div className="text-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('case-studies')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
        <SmoothWave className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Case Studies Preview Section */}
      <section id="case-studies" className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2>Case Studies</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-border/30">
                <span className="text-lg">Vision Pro space planning. Hands on assignment of people to places.</span>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border/30">
                <span className="text-lg">AI Itinerary. Simplifying the workday experience.</span>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </div>
            </div>

            <div className="text-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('side-projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View Side Projects
              </Button>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="section-padding bg-a relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2>Side Projects</h2>
              <p className="text-lg max-w-3xl">
                Passion projects built in my spare time. These apps solve real problems I face in outdoor adventures and help me explore new design patterns and technical approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/glamis-map" className="block h-full group">
                <Card className="h-full hover:bg-card/80 transition-all duration-300 border-border/50 overflow-hidden bg-transparent">
                  <div className="relative w-full aspect-video overflow-hidden bg-black">
                    <img 
                      src="/GlamisMap.jpg" 
                      alt="Glamis Map" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end pb-4 pl-6 pr-4">
                      <div className="text-white">
                        <MapIcon className="w-6 h-6 mb-1.5 text-amber-300" />
                        <span className="text-base font-semibold">Glamis Map</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <CardDescription>
                      Interactive map of the dunes with GPX and local history.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-primary group-hover:text-primary/80 transition-colors">View Project</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/campbase" className="block h-full group">
                <Card className="h-full hover:bg-card/80 transition-all duration-300 border-border/50 overflow-hidden bg-transparent">
                  <div className="relative w-full aspect-video overflow-hidden bg-black">
                    <img 
                      src="/CampBase.jpg" 
                      alt="CampBase" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end pb-4 pl-6 pr-4">
                      <div className="text-white">
                        <MapPin className="w-6 h-6 mb-1.5 text-green-300" />
                        <span className="text-base font-semibold">CampBase</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <CardDescription>
                      Group camping planner with offline maps and shared tasks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-primary group-hover:text-primary/80 transition-colors">View Project</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/memory-map" className="block h-full group">
                <Card className="h-full hover:bg-card/80 transition-all duration-300 border-border/50 overflow-hidden bg-transparent">
                  <div className="relative w-full aspect-video overflow-hidden bg-black">
                    <img 
                      src="/MemoryMap.jpg" 
                      alt="Memory Map" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end pb-4 pl-6 pr-4">
                      <div className="text-white">
                        <QrCode className="w-6 h-6 mb-1.5 text-purple-300" />
                        <span className="text-base font-semibold">Memory Map</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <CardDescription>
                      Photos tied to place and time with a QR print.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-primary group-hover:text-primary/80 transition-colors">View Project</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('approach')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View My Approach
              </Button>
            </div>
          </div>
        </div>
        <SmoothWaveGentle className="absolute bottom-0" fill="hsl(var(--background-b))" />
      </section>

      {/* Approach Section */}
      <section id="approach" className="section-padding bg-b relative">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-6 text-center">
              <h2>My Approach</h2>
              <p className="text-xl max-w-4xl mx-auto">
                Great products start with understanding people. I turn complex problems into simple, delightful experiences that just work.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {/* How I Work */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">How I Work</h3>
                <div className="space-y-4">
                  <p className="text-lg">Start with why it matters</p>
                  <p className="text-lg">Build to learn, not to impress</p>
                  <p className="text-lg">Test early, iterate often</p>
                  <p className="text-lg">Design systems that scale</p>
                  <p className="text-lg">Measure what moves the needle</p>
                </div>
              </div>

              {/* What I Believe */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">What I Believe</h3>
                <div className="space-y-4">
                  <p className="text-lg">Clarity over cleverness</p>
                  <p className="text-lg">Progress over perfection</p>
                  <p className="text-lg">Data over assumptions</p>
                  <p className="text-lg">Stories over specifications</p>
                  <p className="text-lg">Impact over output</p>
                </div>
              </div>

              {/* How I Share */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">How I Share</h3>
                <div className="space-y-4">
                  <p className="text-lg">Design process workshops</p>
                  <p className="text-lg">Team decision frameworks</p>
                  <p className="text-lg">Navigation pattern research</p>
                  <p className="text-lg">Spatial design insights</p>
                  <p className="text-lg">Product strategy sessions</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                What's Next?
              </Button>
            </div>
          </div>
        </div>
        <SmoothWaveAlt className="absolute bottom-0" fill="hsl(var(--background-a))" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-a">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2>Get In Touch</h2>
            <p className="text-xl">
              Ready to build something great together?
            </p>
            
            <div className="pt-8 space-y-8">
              <Button 
                size="lg"
                onClick={() => {
                  // Construct email dynamically to avoid spam bots
                  const user = 'aeveland';
                  const domain = 'me.com';
                  const subject = encodeURIComponent('Portfolio Inquiry');
                  const body = encodeURIComponent('Hi Andy,\n\nI saw your portfolio and would like to discuss a potential collaboration.\n\nBest regards,');
                  window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
                }}
              >
                Start a Conversation
              </Button>
              
              <div className="flex justify-center items-center gap-6">
                <a 
                  href="https://twitter.com/luckyduner13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="text-sm">@luckyduner13</span>
                </a>
                
                <a 
                  href="https://github.com/aeveland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View GitHub profile"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
