'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/shared/Footer'
import { Leaf, Droplets, Timer, Zap, ArrowRight, Maximize2, Cloud } from 'lucide-react'

export default function VerticalSky() {
  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/showcase2 sky model ceiling.jpg"
            alt="Vertical Sky"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold">Vertical Sky</h1>
                <p className="text-xl text-gray-300">
                  The ultimate ceiling-mounted growing system. Experience the future of indoor farming 
                  with our most advanced and spacious solution.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">€999</span>
                  <Link 
                    href="/shop" 
                    className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                  >
                    Buy Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Key Features</h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">30 Growing Spots</h3>
                    <p className="text-gray-400">Maximum capacity for a complete indoor garden</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ceiling Integration</h3>
                    <p className="text-gray-400">Seamlessly integrates with any ceiling for a floating garden effect</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Triple Zone Control</h3>
                    <p className="text-gray-400">Independent control for optimal growing conditions in each section</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Lighting</h3>
                    <p className="text-gray-400">Commercial-grade LED array with spectrum control</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/pvcpipe.png"
                alt="Vertical Sky Features"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-4">Dimensions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Length: 200 cm</li>
                  <li>Width: 120 cm</li>
                  <li>Height: 40 cm</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-4">Power</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>LED Power: 300W</li>
                  <li>Pump Power: 72W</li>
                  <li>Voltage: 220-240V</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-4">Capacity</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Growing Spots: 30</li>
                  <li>Water Tank: 15L</li>
                  <li>Triple Nutrient Mixers</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-4">Smart Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>WiFi Connected</li>
                  <li>Mobile App Control</li>
                  <li>Triple Zone Management</li>
                  <li>Professional Analytics Suite</li>
                  <li>Remote Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need in one elegant device
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Complete System */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/30 to-emerald-500/30 blur-2xl rounded-full transform translate-x-16 -translate-y-16" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">Vertical Sky</h3>
                  <p className="text-gray-400 mb-6">
                    A complete ceiling garden that maximizes your space. As simple as installing a light fixture.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Ceiling Mount System</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>30 Plants Capacity</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Smart App Control</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-gray-400">Starting From</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">€999</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started Kit */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 blur-2xl rounded-full transform translate-x-16 -translate-y-16" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 7h-7m7 10h-7m7-5h-7M7 8a1 1 0 100-2 1 1 0 000 2zM7 13a1 1 0 100-2 1 1 0 000 2zM7 18a1 1 0 100-2 1 1 0 000 2z" />
                      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-yellow-300 to-amber-400 bg-clip-text text-transparent">Start Growing</h3>
                  <p className="text-gray-400 mb-6">
                    Begin your growing journey with everything you need to get started.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>First Set of Pods</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Nutrients Solution</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Growing Guide</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Experience the Future of Growing</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your ceiling into an advanced growing system with Vertical Sky
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/shop" 
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
    </main>
  )
} 