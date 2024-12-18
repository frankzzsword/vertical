'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Droplets, Timer } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTextFocused, setIsTextFocused] = useState(false)

  const images = [
    '/showcase1.jpg',
    '/showcase2 sky model ceiling.jpg',
    '/showcase3.webp',
    '/showcase4.webp'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTextFocused) {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isTextFocused])

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt="Vertical showcase"
                fill
                className="object-cover scale-105 transform"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Animated Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-emerald-500/20 to-green-500/20 animate-gradient-y" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            No Soil, No Pots,<br />No Water Schedule
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Transform your space into a living garden with our revolutionary vertical farming solutions
          </p>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors animate-fade-in-up delay-300 hover:scale-105 transform duration-300"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/verticalvision.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                The Future of
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-400">
                  Home Farming
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our revolutionary system combines German engineering with smart technology to bring sustainable farming into every home.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-5xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300">Less Water Usage</div>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-5xl font-bold text-green-400 mb-2">2x</div>
                  <div className="text-gray-300">Faster Growth</div>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-5xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-gray-300">Maintenance Needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            From Seed to Harvest, We Make it Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Add Water & Nutrients</h3>
              <p className="text-gray-400">Simply add water and our eco-friendly nutrient pill to the base unit</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Insert Growing Pods</h3>
              <p className="text-gray-400">Place your selected growing pods into the system</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Timer className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Watch & Harvest</h3>
              <p className="text-gray-400">Let our smart system handle the rest and enjoy fresh produce in weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Choose Your Growing Style
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/product#one" className="group">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/showcase2 sky model ceiling.jpg"
                  alt="One"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">One</h3>
                  <p className="text-gray-300 mb-4">Perfect for beginners</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">199€</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      10 Pods
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/product#wall" className="group">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/showcase1.jpg"
                  alt="Wall"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Wall</h3>
                  <p className="text-gray-300 mb-4">For the enthusiast</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">299€</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      20 Pods
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/product#sky" className="group">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/showcase3.webp"
                  alt="Sky"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Sky</h3>
                  <p className="text-gray-300 mb-4">The ultimate setup</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">999€</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      30 Pods
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            The Future of Growing
          </h2>
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-3 text-center p-6 border-b border-white/10">
              <div className="text-gray-400">Feature</div>
              <div>Traditional</div>
              <div className="text-green-400">Vertical</div>
            </div>
            <div className="divide-y divide-white/10">
              <div className="grid grid-cols-3 p-6">
                <div className="text-gray-400">Water Usage</div>
                <div>High</div>
                <div className="text-green-400">90% Less</div>
              </div>
              <div className="grid grid-cols-3 p-6">
                <div className="text-gray-400">Space Efficiency</div>
                <div>Low</div>
                <div className="text-green-400">High</div>
              </div>
              <div className="grid grid-cols-3 p-6">
                <div className="text-gray-400">Growth Rate</div>
                <div>50 Days</div>
                <div className="text-green-400">30 Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
        }
        @keyframes gradient-y {
          0%, 100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(50%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        .animate-gradient-y {
          animation: gradient-y 15s ease infinite;
        }
      `}</style>
    </main>
  )
}

