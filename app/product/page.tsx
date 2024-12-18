'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Product() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/baseproduct.jpg"
            alt="Vertical Main Product"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-3xl">
            <h1 className="text-7xl md:text-9xl font-bold [text-shadow:_0_4px_24px_rgb(0_0_0_/_50%)]">Base Unit</h1>
            <p className="text-2xl text-gray-300 mt-4">Starting at €89</p>
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">Choose Your System</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Base System */}
            <div className="border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up">
              <div className="relative h-[400px]">
                <Image
                  src="/baseproduct.jpg"
                  alt="Base System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Base System</h3>
                <p className="text-gray-400">Perfect for beginners and small spaces</p>
                <div className="text-3xl font-bold">€89</div>
                <Link 
                  href="/shop"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Wall Mounted */}
            <div className="border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up delay-200">
              <div className="relative h-[400px]">
                <Image
                  src="/wallmounted.jpg"
                  alt="Wall Mounted"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Wall Mounted</h3>
                <p className="text-gray-400">Elegant solution for vertical spaces</p>
                <div className="text-3xl font-bold">€299</div>
                <Link 
                  href="/shop"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Vertical Sky */}
            <div className="border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up delay-400">
              <div className="relative h-[400px]">
                <Image
                  src="/showcase2 sky model ceiling.jpg"
                  alt="Vertical Sky"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Vertical Sky</h3>
                <p className="text-gray-400">Premium ceiling-mounted solution</p>
                <div className="text-3xl font-bold">€999</div>
                <Link 
                  href="/shop"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="md:col-span-3 border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up delay-600">
              <div className="relative h-[300px]">
                <Image
                  src="/showcase3.webp"
                  alt="Enterprise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-400">Custom solutions for restaurants and businesses</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Hub Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-5xl font-bold">Smart Control Hub</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Powers and manages the entire aeroponic system with precision. The base unit adapts to small or large setups, 
                making it perfect for any space.
              </p>
              <div className="space-y-4 pt-4">
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Automated Care</h3>
                  <p className="text-gray-400">AI-powered monitoring adjusts water, light, and nutrients in real-time</p>
                </div>
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">PVC Pipe Hub</h3>
                  <p className="text-gray-400">Designed to securely connect pipes in multiple configurations</p>
                </div>
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Customizable Setup</h3>
                  <p className="text-gray-400">Expand your garden with additional modules as needed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] animate-fade-in-up delay-200">
              <Image
                src="/showcase1.jpg"
                alt="Smart Hub"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growing System */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-6">Plug and Sprout™</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From seed to harvest, we make it simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="relative h-64 mb-6">
                <Image
                  src="/pod.jpg"
                  alt="Growing Pod"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold">1. Insert Pods</h3>
              <p className="text-gray-400">
                Our Rockwell-based pods retain shape until sprouting, providing the perfect growing medium
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-64 mb-6">
                <Image
                  src="/ecopill.jpg"
                  alt="Eco Fertilizer"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold">2. Add Eco-Fertilizer</h3>
              <p className="text-gray-400">
                One pill provides complete nutrition for maximum growth - no measuring needed
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="relative h-64 mb-6">
                <Image
                  src="/showcase3.webp"
                  alt="Growing Plants"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold">3. Watch It Grow</h3>
              <p className="text-gray-400">
                The smart system handles everything else - just harvest when ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom PVC Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] md:order-2">
              <Image
                src="/showcase2 sky model ceiling.jpg"
                alt="Custom PVC System"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-6 md:order-1">
              <h2 className="text-5xl font-bold">Custom PVC System</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Available in various colors and designs to fit your aesthetic and functional needs
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <span className="text-2xl">$</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Cost-Effective</h3>
                    <p className="text-gray-400">Affordable materials keep maintenance costs low</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    ★
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Durable</h3>
                    <p className="text-gray-400">Long-lasting and resistant to wear</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Easy Maintenance</h3>
                    <p className="text-gray-400">Simple to clean and replace parts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-8">Start Growing Today</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your space into a living garden with Vertical's breakthrough technology
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/shop" 
              className="inline-block bg-white text-black px-12 py-6 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Shop Now
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/pods" 
              className="inline-block border border-white px-12 py-6 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Browse Pods
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

