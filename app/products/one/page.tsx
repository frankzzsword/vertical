'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedHero } from '@/components/ui/animated-hero'
import { Timeline } from '@/components/ui/timeline'
import { ProductShowcase } from '@/components/ui/product-showcase'
import { Team } from '@/components/ui/team'
import { Footer } from '@/components/shared/Footer'
import { FloatingNav } from '@/components/ui/floating-nav'

export default function VerticalOne() {
  return (
    <main className="bg-black min-h-screen">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Product Showcase */}
      <section id="features">
        <ProductShowcase />
      </section>

      {/* Timeline */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Team */}
      <section id="team">
        <Team />
      </section>

      {/* What's Included */}
      <section id="included" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to start growing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Complete System */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 overflow-hidden">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">The Complete System</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Vertical One Base Unit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Smart Controller</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>LED Growing Lights</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Nutrient Delivery System</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started Kit */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 overflow-hidden">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Getting Started Kit</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>4 Growing Pods</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Nutrient Solution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Growing Guide</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Mobile App Access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Growing?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers growing fresh, healthy produce at home
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-black px-12 py-6 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Buy Now
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/pods" 
              className="border border-white px-12 py-6 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Browse Pods
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </main>
  )
} 