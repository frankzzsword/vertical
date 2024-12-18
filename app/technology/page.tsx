'use client'

import Image from 'next/image'
import { Footer } from '@/components/shared/Footer'
import { Timer, Droplets, Leaf, Cpu } from 'lucide-react'

export default function Technology() {
  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
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
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300">Less Water Usage</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">2x</div>
                  <div className="text-gray-300">Faster Growth</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/showcase2 sky model ceiling.jpg"
                alt="Vertical Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Base Unit Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/showcase1.jpg"
                alt="Base Unit"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">Base Unit</h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-green-400" />
                    The Heart and Brain
                  </h3>
                  <p className="text-gray-300">Powers and manages the entire aeroponic system</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <Timer className="w-6 h-6 text-green-400" />
                    PVC Pipe Hub
                  </h3>
                  <p className="text-gray-300">Designed to securely connect pipes, available in multiple configurations</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-green-400" />
                    Customizable Sizes
                  </h3>
                  <p className="text-gray-300">Base units adapt to small or large setups to suit individual needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Comparison */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">Growth Comparison</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 text-center p-6 border-b border-white/10">
                <div className="text-gray-400">Plant Type</div>
                <div>Soil Based</div>
                <div className="text-green-400">Vertical Farming</div>
              </div>
              <div className="divide-y divide-white/10">
                <div className="grid grid-cols-3 p-6">
                  <div className="text-gray-400">Lettuce</div>
                  <div>50 Days</div>
                  <div className="text-green-400">30 Days</div>
                </div>
                <div className="grid grid-cols-3 p-6">
                  <div className="text-gray-400">Spinach</div>
                  <div>50 Days</div>
                  <div className="text-green-400">30 Days</div>
                </div>
                <div className="grid grid-cols-3 p-6">
                  <div className="text-gray-400">Herbs</div>
                  <div>60 Days</div>
                  <div className="text-green-400">25 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom PVC Pipes */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16">Custom PVC Pipes</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
                <p className="text-gray-300">Affordable materials that keep production and maintenance costs low</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Durable</h3>
                <p className="text-gray-300">Long-lasting and resistant to wear, ensuring reliability</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Customizable</h3>
                <p className="text-gray-300">Available in various colors and designs to fit aesthetic and functional needs</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/showcase3.webp"
                  alt="Black PVC Pipe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/showcase4.webp"
                  alt="White PVC Pipe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 