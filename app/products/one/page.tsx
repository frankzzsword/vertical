'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/shared/Footer'
import { Leaf, Droplets, Timer, Zap, ArrowRight, Sparkles, Heart } from 'lucide-react'
import { useState } from 'react'

export default function VerticalOne() {
  const [activeImage, setActiveImage] = useState(0)
  const images = [
    '/showcase1.jpg',
    '/showcase3.webp',
    '/showcase4.webp'
  ]

  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Vertical One View ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-green-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">New Generation</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold">Vertical One</h1>
                <p className="text-xl text-gray-300">
                  Experience the future of home farming with our most elegant and compact solution. 
                  German engineering meets smart technology for effortless growing.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">€299</span>
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

      {/* Image Navigation */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${
                  activeImage === index ? 'ring-2 ring-green-400' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <Image
                  src={image}
                  alt={`View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Smart Growing Made Simple</h2>
                <p className="text-xl text-gray-400">
                  The Vertical One combines elegant design with cutting-edge technology to bring 
                  the future of farming into your home. Perfect for beginners and enthusiasts alike.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">10 Growing Spots</h3>
                    <p className="text-gray-400">Perfect for a variety of herbs, vegetables, and small fruits. Create your own personal garden.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Watering</h3>
                    <p className="text-gray-400">AI-driven watering system ensures optimal moisture levels and nutrient delivery at all times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growth Monitoring</h3>
                    <p className="text-gray-400">Track your plants' progress in real-time with advanced sensors and mobile app integration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium LED Lighting</h3>
                    <p className="text-gray-400">Energy-efficient LED array provides optimal spectrum for faster growth and better yields.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl animate-pulse" />
              <Image
                src="/baseunit.png"
                alt="Vertical One Features"
                fill
                className="object-contain p-8 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vertical One?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The perfect blend of design and functionality, bringing smart farming technology into your home
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Heart className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">German Engineering</h3>
              <p className="text-gray-400">
                Built with precision and quality in mind, ensuring reliable performance and longevity.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Sparkles className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Smart Technology</h3>
              <p className="text-gray-400">
                AI-powered monitoring and control system takes the guesswork out of growing.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Leaf className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Sustainable Growing</h3>
              <p className="text-gray-400">
                Uses 90% less water than traditional farming while producing higher yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Engineering Excellence</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every detail crafted with German precision for optimal growing performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.3 7l8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Compact Design</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Height</span>
                    <span className="text-green-400 font-medium">150 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Width</span>
                    <span className="text-green-400 font-medium">60 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Depth</span>
                    <span className="text-green-400 font-medium">30 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Weight</span>
                    <span className="text-green-400 font-medium">15 kg</span>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Power & Efficiency</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>LED Array</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">100W</span>
                      <span className="text-xs text-gray-400">Full Spectrum</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Smart Pump</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">24W</span>
                      <span className="text-xs text-gray-400">Ultra Quiet</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Power Supply</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">220-240V</span>
                      <span className="text-xs text-gray-400">EU Standard</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Energy Rating</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">A+</span>
                      <span className="text-xs text-gray-400">Eco-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 19V5" />
                      <path d="M5 12l7-7 7 7" />
                      <path d="M3 21h18" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Growing Capacity</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Growing Spots</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">10</span>
                      <span className="text-xs text-gray-400">Modular Design</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Water Tank</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">5L</span>
                      <span className="text-xs text-gray-400">Smart Refill Alert</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Nutrient System</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">Integrated</span>
                      <span className="text-xs text-gray-400">Auto-Mix</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Growing Height</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">30 cm</span>
                      <span className="text-xs text-gray-400">Per Level</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Smart Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Connectivity</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">WiFi + BLE</span>
                      <span className="text-xs text-gray-400">Dual Band</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Control</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">Mobile App</span>
                      <span className="text-xs text-gray-400">iOS & Android</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Monitoring</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">Real-time</span>
                      <span className="text-xs text-gray-400">AI-Powered</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Updates</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">OTA</span>
                      <span className="text-xs text-gray-400">Auto-Install</span>
                    </div>
                  </div>
                </div>
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
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">Vertical One</h3>
                  <p className="text-gray-400 mb-6">
                    A complete growing system that works right out of the box. As simple as plugging in your smartphone.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Plug & Grow System</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>10 Plants Capacity</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Smart App Control</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-gray-400">Starting From</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">€299</div>
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
          <h2 className="text-4xl font-bold mb-8">Ready to Start Growing?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers growing fresh, healthy produce at home
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

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
} 