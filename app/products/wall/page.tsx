'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/shared/Footer'
import { Leaf, Droplets, Timer, Zap, ArrowRight, Sparkles, Heart, Maximize2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function VerticalWall() {
  const [activeImage, setActiveImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  
  const images = [
    '/showcase4.webp',
    '/wall2.jpg',
    '/wallmounted.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isZoomed) {
        setActiveImage((prev) => (prev + 1) % images.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isZoomed])

  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-1000 ${
                activeImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={(e) => {
                if (isZoomed) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = (e.clientX - rect.left) / rect.width * 100
                  const y = (e.clientY - rect.top) / rect.height * 100
                  e.currentTarget.style.transformOrigin = `${x}% ${y}%`
                }
              }}
            >
              <Image
                src={image}
                alt={`Vertical Wall View ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                priority={index === 0}
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black transition-opacity duration-500 ${
                isZoomed ? 'opacity-0' : 'opacity-100'
              }`} />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-green-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">Professional Series - Updated</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold">Vertical Wall</h1>
                <p className="text-xl text-gray-300">
                  Transform any wall into a living garden. Our professional wall-mounted system 
                  combines elegant design with advanced growing technology for a stunning display 
                  that produces fresh food year-round.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">€499</span>
                  <Link 
                    href="/contact" 
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

      {/* Image Navigation Dots */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveImage(index)
                  setIsZoomed(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeImage === index ? 'bg-green-400 scale-125' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
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
                <h2 className="text-3xl font-bold">Professional Growing System</h2>
                <p className="text-xl text-gray-400">
                  The Vertical Wall is designed for enthusiasts and professionals who want to 
                  maximize their growing space with a stunning visual display.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">20 Growing Spots</h3>
                    <p className="text-gray-400">Double the capacity for a wider variety of plants and continuous harvests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Maximize2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Space Efficient</h3>
                    <p className="text-gray-400">Vertical design maximizes growing area while creating a stunning living wall display.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dual Zone Control</h3>
                    <p className="text-gray-400">Independent control for upper and lower growing zones for optimal conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Lighting</h3>
                    <p className="text-gray-400">Dual LED arrays provide perfect light distribution for all plant types.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl animate-pulse" />
              <Image
                src="/pvcpipe.png"
                alt="Vertical Wall Features"
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Vertical Wall?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The perfect solution for those who want to make a statement with their indoor garden
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Heart className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Premium Design</h3>
              <p className="text-gray-400">
                Sleek wall-mounted design that becomes a living piece of art in your space.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Sparkles className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Advanced Technology</h3>
              <p className="text-gray-400">
                Dual-zone control system for perfect growing conditions in each section.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <Leaf className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Expanded Capacity</h3>
              <p className="text-gray-400">
                20 growing spots for a diverse and abundant indoor garden.
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
                  <h3 className="text-2xl font-bold">Wall-Mount Design</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Height</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">180 cm</span>
                      <span className="text-xs text-gray-400">Adjustable</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Width</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">100 cm</span>
                      <span className="text-xs text-gray-400">Total</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Depth</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">30 cm</span>
                      <span className="text-xs text-gray-400">From Wall</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Weight</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">25 kg</span>
                      <span className="text-xs text-gray-400">Wall-Mounted</span>
                    </div>
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
                    <span>LED Arrays</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">2x 100W</span>
                      <span className="text-xs text-gray-400">Dual Zone</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Smart Pump</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">48W</span>
                      <span className="text-xs text-gray-400">Dual System</span>
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
                      <span className="text-green-400 font-medium">20</span>
                      <span className="text-xs text-gray-400">Dual Zones</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Water Tank</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">10L</span>
                      <span className="text-xs text-gray-400">Dual System</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Nutrient System</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">Dual Mix</span>
                      <span className="text-xs text-gray-400">Independent</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Growing Height</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">40 cm</span>
                      <span className="text-xs text-gray-400">Per Zone</span>
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
                      <span className="text-green-400 font-medium">Dual Zone</span>
                      <span className="text-xs text-gray-400">Independent</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <span>Monitoring</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-medium">Advanced</span>
                      <span className="text-xs text-gray-400">Per Zone</span>
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
              Everything you need to start growing, beautifully designed and simple to use
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
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">The Growing System</h3>
                  <p className="text-gray-400 mb-6">
                    A complete wall-mounted garden that sets up in minutes. Just mount, plug in, and start growing.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Wall Mount & Growing Unit</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Smart Control System</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>LED Growing Lights</span>
                    </div>
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
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-yellow-300 to-amber-400 bg-clip-text text-transparent">Growing Essentials</h3>
                  <p className="text-gray-400 mb-6">
                    Everything you need to start growing your first harvest right away.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Plant Pods</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Nutrients</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Simple Growing Guide</span>
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
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Wall?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Create a stunning living wall with the Vertical Wall system
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