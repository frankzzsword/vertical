'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Droplets, Timer } from 'lucide-react'

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const products = [
    {
      name: 'Vertical One',
      tagline: 'Smart Home Growing',
      description: 'Perfect for apartments and small spaces. Grow fresh herbs, vegetables, and microgreens with zero effort.',
      features: [
        { icon: Leaf, text: 'Smart Growth Technology' },
        { icon: Droplets, text: '95% Less Water Usage' },
        { icon: Timer, text: 'Harvest in 4-6 Weeks' }
      ],
      image: '/showcase1.webp',
      link: '/products/one'
    },
    {
      name: 'Vertical Wall',
      tagline: 'Living Art',
      description: 'Transform any wall into a stunning vertical garden. Perfect for restaurants, offices, and design-conscious homes.',
      features: [
        { icon: Leaf, text: 'Modular Design' },
        { icon: Droplets, text: 'Self-Watering System' },
        { icon: Timer, text: 'IoT Monitoring' }
      ],
      image: '/showcase4.webp',
      link: '/products/wall'
    },
    {
      name: 'Vertical Sky',
      tagline: 'Commercial Scale',
      description: 'Enterprise-grade vertical farming solution. Ideal for businesses, schools, and commercial applications.',
      features: [
        { icon: Leaf, text: 'Industrial Capacity' },
        { icon: Droplets, text: 'Advanced Analytics' },
        { icon: Timer, text: 'Climate Control' }
      ],
      image: '/showcase3.webp',
      link: '/products/sky'
    }
  ]

  return (
    <div className="min-h-screen bg-black relative py-24" ref={containerRef}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Revolutionary Growing Systems
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the perfect blend of technology and nature with our innovative vertical farming solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              style={{
                opacity,
                scale
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="aspect-[4/3] relative mb-8 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                <p className="text-green-400 text-lg mb-4">{product.tagline}</p>
                <p className="text-gray-400 mb-6">{product.description}</p>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.link}
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 