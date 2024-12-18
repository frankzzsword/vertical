'use client'

import Image from 'next/image'
import { ArrowRight, Droplets, Timer, Sprout, Leaf } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/shared/Footer'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTextFocused, setIsTextFocused] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Calculate distance from center
      const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
      )

      // If mouse is within 200px of center, show text
      setIsTextFocused(distance < 200)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isTextFocused ? 'opacity-0' : 'opacity-100'
        }`}>
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

        {/* Content */}
        <div className={`relative z-10 w-full transition-opacity duration-500 ${
          isTextFocused ? 'opacity-100' : 'opacity-90'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center min-h-screen py-20">
              <div className="text-center max-w-[1400px] mx-auto">
                {/* Text and CTA */}
                <div className="space-y-12">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 blur-3xl -z-10 opacity-50" />
                  
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-slide-up [text-shadow:_0_4px_24px_rgb(0_0_0_/_50%)]">
                    The Future of
                    <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 [text-shadow:_none]">
                      Home Farming
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto animate-slide-up-delay [text-shadow:_0_2px_12px_rgb(0_0_0_/_50%)]">
                    Transform any wall into a living garden with our revolutionary vertical farming system
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex justify-center gap-4 md:gap-8 pt-8 animate-slide-up-delay-2">
                    <Link
                      href="/product"
                      className="group relative px-8 md:px-12 py-4 md:py-5 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-base md:text-lg font-medium">
                        Discover More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                    <Link
                      href="/pods"
                      className="px-8 md:px-12 py-4 md:py-5 border-2 border-white/80 text-base md:text-lg font-medium rounded-full hover:bg-white/10 transition-all hover:border-white hover:scale-105 hover:shadow-xl hover:shadow-white/20"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="text-center space-y-4 animate-on-scroll">
              <div className="flex justify-center">
                <Droplets className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold">90% Less Water</h3>
              <p className="text-xl text-gray-400">
                Our advanced hydroponic system uses up to 90% less water than traditional soil-based farming
              </p>
            </div>
            <div className="text-center space-y-4 animate-on-scroll">
              <div className="flex justify-center">
                <Timer className="w-16 h-16 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold">2x Faster Growth</h3>
              <p className="text-xl text-gray-400">
                Optimized nutrient delivery means your plants grow twice as fast - herbs ready in just 25 days
              </p>
            </div>
            <div className="text-center space-y-4 animate-on-scroll">
              <div className="flex justify-center">
                <Sprout className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold">Plug and Sprout</h3>
              <p className="text-xl text-gray-400">
                Just insert the growing pods and add water - our smart system handles the rest
              </p>
            </div>
          </div>

          {/* Growing System Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="text-6xl font-bold">
                Revolutionary
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Growing System
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Vertical reimagines home farming with breakthrough technology that makes growing your own food effortless.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6 animate-on-scroll">
                  <div className="w-16 h-16 rounded-full border-2 border-green-400 flex items-center justify-center text-2xl font-bold text-green-400">1</div>
                  <p className="text-xl">Insert growing pods</p>
                </div>
                <div className="flex items-center gap-6 animate-on-scroll">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-400 flex items-center justify-center text-2xl font-bold text-emerald-400">2</div>
                  <p className="text-xl">Add water and eco fertilizer pill</p>
                </div>
                <div className="flex items-center gap-6 animate-on-scroll">
                  <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center text-2xl font-bold text-green-500">3</div>
                  <p className="text-xl">Watch your garden grow</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] animate-on-scroll">
              <Image 
                src="/pod.jpg"
                alt="Vertical Pod System"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Eco-Fertilizer Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] animate-on-scroll">
              <Image 
                src="/ecopill.jpg"
                alt="Eco-Fertilizer Pill"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8 animate-on-scroll">
              <div className="flex items-center gap-4">
                <Leaf className="w-12 h-12 text-green-400" />
                <h2 className="text-6xl font-bold">Eco-Fertilizer</h2>
              </div>
              <p className="text-xl text-gray-400">
                One pill provides complete nutrition for maximum growth - no measuring needed. Our specially formulated eco-fertilizer ensures optimal nutrient delivery for healthy, vibrant plants.
              </p>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Perfect nutrient balance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Zero waste packaging
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Long-lasting formula
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Easy one-step application
                </li>
              </ul>
            </div>
          </div>
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-6 animate-on-scroll">
            <h2 className="text-5xl md:text-7xl font-bold">
              Reimagine Your Space
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform any wall into a living garden
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up delay-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-6 py-4 bg-black border-2 border-white/10 rounded-xl focus:outline-none focus:border-white/20 text-white placeholder-gray-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-6 py-4 bg-black border-2 border-white/10 rounded-xl focus:outline-none focus:border-white/20 text-white placeholder-gray-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={6}
                className="w-full px-6 py-4 bg-black border-2 border-white/10 rounded-xl focus:outline-none focus:border-white/20 text-white placeholder-gray-500 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-white text-black px-12 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease-out;
        }

        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

