'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const stats = [
    { label: 'Market Size', value: '$180B', subtext: 'By 2030' },
    { label: 'Growth Rate', value: '24.8%', subtext: 'CAGR' },
    { label: 'Sustainability', value: '95%', subtext: 'Water Saved' }
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/verticalvision.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">
              The Future of Food
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Revolutionary vertical farming technology bringing fresh, sustainable produce to every home
            </p>
            <div className="flex justify-center gap-6">
              <Link 
                href="/products/one"
                className="bg-gradient-to-r from-green-400 to-emerald-600 text-black px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Discover Vertical One
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#products"
                className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                View All Products
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className="text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 