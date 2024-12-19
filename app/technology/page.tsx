'use client'

import Image from 'next/image'
import { Footer } from '@/components/shared/Footer'
import { Timer, Droplets, Leaf, Cpu, Zap, Gauge, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Technology() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Smart Control",
      icon: Cpu,
      description: "Advanced sensors and AI-driven monitoring for optimal growth"
    },
    {
      title: "Water Efficiency",
      icon: Droplets,
      description: "Revolutionary aeroponic system uses 90% less water"
    },
    {
      title: "Growth Speed",
      icon: Gauge,
      description: "Accelerated growth cycles with perfect conditions"
    }
  ]

  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-black to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-black via-transparent to-black" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Revolutionary
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-400">
                  Growing Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Our advanced aeroponic system combines smart technology with German engineering precision to revolutionize home farming.
              </p>
              <div className="flex gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`flex-1 p-4 rounded-2xl transition-all duration-300 ${
                        activeFeature === index 
                          ? 'bg-green-500 text-black' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${
                        activeFeature === index ? 'text-black' : 'text-green-400'
                      }`} />
                      <div className="text-sm font-medium">{feature.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent animate-pulse" />
                <Image
                  src="/baseunit.png"
                  alt="Vertical Base Unit"
                  fill
                  className="object-contain p-8 animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PVC System Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-black to-black opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-20">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Advanced PVC
                  <span className="block mt-2 text-green-400">Growing System</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Integration</h3>
                      <p className="text-gray-300">Seamlessly connects with our base unit for optimal nutrient delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <Timer className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
                      <p className="text-gray-300">German-engineered connections ensure perfect fit and zero leaks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <Leaf className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Optimal Growth</h3>
                      <p className="text-gray-300">Specialized design promotes healthy root development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:scale-125">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent animate-pulse" />
              <Image
                src="/pvcpipe.png"
                alt="PVC Growing System"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
              Growth
              <span className="block mt-2 text-green-400">Acceleration</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-green-400">90%</div>
                <div className="text-sm text-gray-400">Less Water Usage</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-green-400">2x</div>
                <div className="text-sm text-gray-400">Faster Growth</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-green-400">0</div>
                <div className="text-sm text-gray-400">Maintenance</div>
              </div>
            </div>
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