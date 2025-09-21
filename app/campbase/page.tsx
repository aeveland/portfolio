"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SmoothWave } from "@/components/ui/dividers"
import { ArrowLeft, ExternalLink, Users, Calendar, MapPin, ListChecks, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CampBasePage() {
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
                CampBase
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                A tool for friends to plan camping and off-road trips
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
              <div className="relative w-full aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="text-center p-8 max-w-2xl mx-auto z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">CampBase Preview</h3>
                  <p className="text-muted-foreground">Interactive trip planning interface coming soon</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-6">
                <h2>Project Overview</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    CampBase makes group trips easier by giving friends a shared place to set dates, assign tasks, 
                    track things to buy, and share locations. Tasks and shopping lists can also suggest products 
                    and services, helping crews get what they need without extra hassle.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-green-500/20 rounded-lg">
                        <Users className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Shared trip planning and coordination</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Task assignment and progress tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Collaborative shopping lists with product suggestions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Location sharing and offline maps</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Trip Planning</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Date Coordination</h4>
                        <p className="text-sm text-muted-foreground">Find the best dates that work for everyone in your group</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Packing Lists</h4>
                        <p className="text-sm text-muted-foreground">Collaborative checklists for gear and supplies</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Meal Planning</h4>
                        <p className="text-sm text-muted-foreground">Organize meals and assign cooking responsibilities</p>
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
