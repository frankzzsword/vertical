'use client'

import { Footer } from '@/components/shared/Footer'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Leaf, Droplets, Timer, Sprout, Zap, Cpu, Cloud, LineChart, Smartphone } from 'lucide-react'

export default function Technology() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/showcase2 sky model ceiling.jpg"
            alt="Vertical Technology"
            fill
            className="object-cover opacity-50"
            style={{ filter: 'brightness(0.5)' }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fade-in">
          <h1 className="text-7xl font-bold mb-8 animate-scale-bounce">
            Revolutionary
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-400">
              Growing Technology
            </span>
          </h1>
          <p className="text-2xl text-gray-300 animate-slide-up-delay">
            Discover the cutting-edge innovations powering our vertical farming solution
          </p>
        </div>
      </section>

      {/* Smart Growing System */}
      <section ref={ref1} className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">
                Smart Growing
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                  System
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Our AI-powered growing system optimizes every aspect of plant growth in real-time, ensuring perfect conditions 24/7.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Cpu className="w-8 h-8 text-green-400 animate-glow-pulse" />
                  <div>
                    <h3 className="font-semibold mb-2">AI Control</h3>
                    <p className="text-gray-400">Real-time monitoring and adjustment of growing conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cloud className="w-8 h-8 text-green-400 animate-glow-pulse" />
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Platform</h3>
                    <p className="text-gray-400">Remote management and data analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] animate-float">
              <Image
                src="/showcase1.jpg"
                alt="Smart Growing System"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hydroponic Technology */}
      <section ref={ref2} className="py-32 bg-gradient-to-b from-black to-green-950">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative h-[600px] order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 blur-3xl" />
              <Image
                src="/showcase3.webp"
                alt="Hydroponic System"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-5xl font-bold">
                Advanced
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                  Hydroponics
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Our precision hydroponic system delivers nutrients directly to plant roots, using 95% less water than traditional farming.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <Droplets className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-semibold mb-1">Water Efficiency</h3>
                    <p className="text-gray-400">95% less water usage than traditional farming</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <Timer className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-semibold mb-1">Rapid Growth</h3>
                    <p className="text-gray-400">30-50% faster growth cycles</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  <Sprout className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-semibold mb-1">Nutrient Optimization</h3>
                    <p className="text-gray-400">Precise nutrient delivery for optimal growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section ref={ref3} className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-5xl font-bold mb-8">
              Smart Features
            </h2>
            <p className="text-xl text-gray-300">
              Our system is packed with intelligent features that make growing your own food effortless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-green-400" />,
                title: "Energy Efficient",
                description: "Advanced LED lighting and power management systems reduce energy consumption",
                delay: 0
              },
              {
                icon: <LineChart className="w-12 h-12 text-green-400" />,
                title: "Growth Analytics",
                description: "Track your plants' growth and optimize conditions with detailed analytics",
                delay: 0.2
              },
              {
                icon: <Smartphone className="w-12 h-12 text-green-400" />,
                title: "Mobile Control",
                description: "Control and monitor your garden from anywhere with our mobile app",
                delay: 0.4
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 animate-scale-bounce`}
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section ref={ref4} className="py-32 bg-gradient-to-b from-green-950 to-black">
        <div className="container mx-auto px-4">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
            inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-5xl font-bold text-center mb-20">
              Innovation Timeline
            </h2>
            
            <div className="space-y-12">
              {[
                {
                  year: "2021",
                  title: "Initial Research",
                  description: "Development of core hydroponic technology and AI algorithms"
                },
                {
                  year: "2022",
                  title: "Prototype Testing",
                  description: "Successful testing of the first vertical farming prototype"
                },
                {
                  year: "2023",
                  title: "Smart System Launch",
                  description: "Introduction of cloud-based monitoring and control systems"
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  description: "Bringing sustainable farming technology to homes worldwide"
                }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex gap-8 items-start animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-32 pt-2">
                    <span className="text-2xl font-bold text-green-400">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-white/10">
                    <h3 className="text-2xl font-semibold mb-4">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 