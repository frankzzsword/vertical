'use client'

import Image from 'next/image'
import { Footer } from '@/components/shared/footer'

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/showcase1.jpg"
            alt="About Vertical"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Revolutionizing home farming from Weiden, Germany
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                At Vertical, we're on a mission to transform how people grow and consume fresh food. 
                Founded in Weiden, Germany, we combine German engineering excellence with innovative 
                technology to bring sustainable farming solutions into every home.
              </p>
            </div>
            <div className="relative h-[400px] animate-fade-in-up delay-200">
              <Image
                src="/showcase2 sky model ceiling.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-8 rounded-2xl animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-400">
                We're committed to reducing water usage and environmental impact through innovative farming solutions.
              </p>
            </div>
            <div className="border border-white/10 p-8 rounded-2xl animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                Our German engineering background drives us to constantly push the boundaries of what's possible.
              </p>
            </div>
            <div className="border border-white/10 p-8 rounded-2xl animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-400">
                We believe in empowering people to grow their own food and build sustainable communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-16 animate-fade-in-up">Founded in Weiden</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Our journey began in Weiden, Germany, where we combined traditional German engineering 
            excellence with cutting-edge technology to create the future of home farming.
          </p>
          <div className="relative h-[400px] rounded-3xl overflow-hidden animate-fade-in-up delay-400">
            <Image
              src="/showcase3.webp"
              alt="Our Office"
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

