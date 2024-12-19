'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'

export default function Product() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/baseproduct.jpg"
            alt="Vertical One"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-3xl">
            <h1 className="text-7xl md:text-9xl font-bold [text-shadow:_0_4px_24px_rgb(0_0_0_/_50%)]">Vertical One</h1>
            <p className="text-2xl text-gray-300 mt-4">Starting at €299</p>
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">Choose Your System</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vertical One */}
            <div className="border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up">
              <div className="relative h-[400px]">
                <Image
                  src="/baseproduct.jpg"
                  alt="Vertical One"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Vertical One</h3>
                <p className="text-gray-400">Perfect for beginners and small spaces. Includes smart controller and LED lighting.</p>
                <div className="text-3xl font-bold">€299</div>
                <Link 
                  href="/products/one"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Vertical Wall */}
            <div className="border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 animate-fade-in-up delay-200">
              <div className="relative h-[400px]">
                <Image
                  src="/showcase4.webp"
                  alt="Vertical Wall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Vertical Wall</h3>
                <p className="text-gray-400">Enhanced growing system with expanded capacity and premium features.</p>
                <div className="text-3xl font-bold">€499</div>
                <Link 
                  href="/products/wall"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Learn More
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
                <p className="text-gray-400">Premium ceiling-mounted solution for modern homes.</p>
                <div className="text-3xl font-bold">€999</div>
                <Link 
                  href="/products/sky"
                  className="block text-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Learn More
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
                Every Vertical system comes with our advanced Smart Control Hub, powering and managing the entire aeroponic system with German precision engineering.
              </p>
              <div className="space-y-4 pt-4">
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">AI-Powered Care</h3>
                  <p className="text-gray-400">Smart monitoring adjusts water, light, and nutrients in real-time</p>
                </div>
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Mobile Control</h3>
                  <p className="text-gray-400">Monitor and control your system from anywhere with our mobile app</p>
                </div>
                <div className="border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Expandable</h3>
                  <p className="text-gray-400">Start small and expand your garden as needed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] animate-fade-in-up delay-200">
              <Image
                src="/baseunit.png"
                alt="Smart Hub"
                fill
                className="object-contain rounded-3xl"
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

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-8">Start Growing Today</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your space into a living garden with Vertical's breakthrough technology
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/products/one" 
              className="inline-block bg-white text-black px-12 py-6 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Explore Products
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
      <Footer />
    </div>
  )
}

