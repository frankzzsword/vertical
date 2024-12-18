'use client'

import Image from 'next/image'
import { Footer } from '@/components/shared/Footer'

export default function Company() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/showcase2 sky model ceiling.jpg"
            alt="Vertical Company"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Our Company</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Building the future of sustainable farming
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Founded in Weiden, Germany, Vertical emerged from a vision to revolutionize how people 
                grow and consume food. Our journey began with a simple idea: make sustainable farming 
                accessible to everyone, regardless of space or expertise.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Today, we're proud to be at the forefront of vertical farming technology, combining 
                German engineering precision with innovative solutions for a sustainable future.
              </p>
            </div>
            <div className="relative h-[400px] animate-fade-in-up delay-200">
              <Image
                src="/showcase1.jpg"
                alt="Our Story"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4 animate-fade-in-up">
              <div className="text-5xl font-bold">90%</div>
              <p className="text-gray-400">Less Water Usage</p>
            </div>
            <div className="space-y-4 animate-fade-in-up delay-200">
              <div className="text-5xl font-bold">2x</div>
              <p className="text-gray-400">Faster Growth</p>
            </div>
            <div className="space-y-4 animate-fade-in-up delay-400">
              <div className="text-5xl font-bold">0</div>
              <p className="text-gray-400">Pesticides Used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-16 animate-fade-in-up">Headquartered in Weiden</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Located in the heart of Bavaria, our Weiden headquarters combines German engineering 
            tradition with modern innovation. From here, we're working to transform urban farming 
            across Europe and beyond.
          </p>
          <div className="relative h-[400px] rounded-3xl overflow-hidden animate-fade-in-up delay-400">
            <Image
              src="/showcase3.webp"
              alt="Weiden Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 