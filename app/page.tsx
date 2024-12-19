'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Droplets, Timer } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showImages, setShowImages] = useState(false)
  const [showInitialContent, setShowInitialContent] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const images = [
    '/sky1.jpg',
    '/sky2.jpeg',
    '/wall2.jpg',
    '/wall5.jpg',
    '/black-background, green-herbs-in-the-center,-image-for-showcase.jpg',
    '/black-background, red-tomato-in-the-center,-image-for-showcase.jpg.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Hide initial content after 3 seconds
    const contentTimer = setTimeout(() => {
      setShowInitialContent(false)
    }, 3000)

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        setShowImages(true)
        setShowInitialContent(true)
        setHasInteracted(false)
      })
    }

    // Cleanup
    return () => {
      clearTimeout(contentTimer)
    }
  }, [])

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        setHasInteracted(true)
        videoRef.current.muted = false
        videoRef.current.play()
      }
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [hasInteracted])

  return (
    <main className="bg-black min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen">
        {/* Video Layer */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${showImages ? 'opacity-0' : 'opacity-100'}`}>
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            controls={false}
            muted
          >
            <source src="/verticalvision.webm" type="video/webm" />
          </video>
          {!hasInteracted && !showInitialContent && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-1000 ${
              showInitialContent ? 'opacity-0' : 'animate-fade-in-watch'
            }`}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center max-w-4xl">
                See the Future of Home Farming
              </h2>
              <button 
                onClick={() => {
                  if (videoRef.current) {
                    setHasInteracted(true)
                    videoRef.current.muted = false
                    videoRef.current.play()
                  }
                }}
                className="group relative px-12 py-6 overflow-hidden rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-size-200 hover:bg-right-bottom transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="text-black font-bold text-xl">Watch Now</span>
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />
        </div>

        {/* Image Carousel Layer */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showImages ? 'opacity-100' : 'opacity-0'}`}>
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
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
            </div>
          ))}
        </div>

        {/* Content Layer */}
        <div className={`relative z-20 container mx-auto px-4 h-full flex items-center justify-center transition-opacity duration-1000 ${showInitialContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 animate-fade-in">
              Vertical
            </h1>
            <p className="text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Growing food at home has never been easier
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-delay-2">
              <Link 
                href="/shop" 
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/pods" 
                className="border border-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Browse Pods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vertical One */}
            <Link href="/products/one" className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image
                  src="/black-background, green-herbs-in-the-center,-image-for-showcase.jpg"
                  alt="Vertical One"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Vertical One</h3>
                  <p className="text-gray-300">Perfect for homes</p>
                </div>
              </div>
            </Link>

            {/* Vertical Wall */}
            <Link href="/products/wall" className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image
                  src="/wall5.jpg"
                  alt="Vertical Wall"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Vertical Wall</h3>
                  <p className="text-gray-300">Transform your space</p>
                </div>
              </div>
            </Link>

            {/* Vertical Sky */}
            <Link href="/products/sky" className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image
                  src="/sky1.jpg"
                  alt="Vertical Sky"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Vertical Sky</h3>
                  <p className="text-gray-300">Maximize your space</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Smart Growing Technology
              </h2>
              <p className="text-xl text-gray-300">
                Experience the perfect blend of design and functionality. Our systems combine 
                elegant aesthetics with advanced growing technology.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/technology" 
                  className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/wall2.jpg"
                alt="Vertical Growing Technology"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future of Home Farming */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              The Future of Home Farming
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join us in revolutionizing how people grow and connect with their food. 
              Experience the perfect blend of technology and nature.
            </p>
            <Link 
              href="/shop" 
              className="bg-white text-black px-12 py-6 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInWatch {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-watch {
          animation: fadeInWatch 1s ease-out 1s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .bg-size-200 {
          background-size: 200% 200%;
          background-position: left bottom;
          transition: background-position 0.5s ease-in-out;
        }
        .hover\:bg-right-bottom:hover {
          background-position: right bottom;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  )
}

