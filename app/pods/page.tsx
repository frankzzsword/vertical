'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'

const pods = [
  {
    id: 1,
    name: "Basil",
    image: "/pods/Basil.jpg",
    price: 1,
    rating: 4.8,
    category: "Herbs",
    growthTime: "3-4 weeks",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Bell Peppers",
    image: "/pods/BellPeppers.jpg",
    price: 1,
    rating: 4.7,
    category: "Vegetables",
    growthTime: "10-12 weeks",
    difficulty: "Medium"
  },
  {
    id: 3,
    name: "Broccoli Microgreens",
    image: "/pods/BroccoliMicrogreens.jpg",
    price: 1,
    rating: 4.9,
    category: "Greens",
    growthTime: "1-2 weeks",
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Cauliflower",
    image: "/pods/Cauliflower.jpg",
    price: 1,
    rating: 4.6,
    category: "Vegetables",
    growthTime: "10-12 weeks",
    difficulty: "Medium"
  },
  {
    id: 5,
    name: "Cherry Tomatoes",
    image: "/pods/CherryTomatoes.jpg",
    price: 1,
    rating: 4.9,
    category: "Vegetables",
    growthTime: "8-10 weeks",
    difficulty: "Medium"
  },
  {
    id: 6,
    name: "Cucumbers",
    image: "/pods/Cucumbers.jpg",
    price: 1,
    rating: 4.7,
    category: "Vegetables",
    growthTime: "6-8 weeks",
    difficulty: "Medium"
  },
  {
    id: 7,
    name: "Mint",
    image: "/pods/Mint.jpg",
    price: 1,
    rating: 4.8,
    category: "Herbs",
    growthTime: "3-4 weeks",
    difficulty: "Easy"
  },
  {
    id: 8,
    name: "Oregano",
    image: "/pods/Oregano.jpg",
    price: 1,
    rating: 4.7,
    category: "Herbs",
    growthTime: "3-4 weeks",
    difficulty: "Easy"
  },
  {
    id: 9,
    name: "Radish",
    image: "/pods/radish.jpg",
    price: 1,
    rating: 4.6,
    category: "Vegetables",
    growthTime: "3-4 weeks",
    difficulty: "Easy"
  },
  {
    id: 10,
    name: "Strawberries",
    image: "/pods/Strawberry.jpg",
    price: 1,
    rating: 4.9,
    category: "Fruits",
    growthTime: "8-10 weeks",
    difficulty: "Medium"
  },
  {
    id: 11,
    name: "String Beans",
    image: "/pods/StringBeans.jpg",
    price: 1,
    rating: 4.7,
    category: "Vegetables",
    growthTime: "6-8 weeks",
    difficulty: "Medium"
  },
  {
    id: 12,
    name: "Sunflower Shoots",
    image: "/pods/SunflowerShoots.jpg",
    price: 1,
    rating: 4.8,
    category: "Greens",
    growthTime: "1-2 weeks",
    difficulty: "Easy"
  },
  {
    id: 13,
    name: "Wasabi",
    image: "/pods/Wasabi.jpg",
    price: 1,
    rating: 4.9,
    category: "Herbs",
    growthTime: "4-6 weeks",
    difficulty: "Medium"
  }
]

const categories = ["All", "Herbs", "Vegetables", "Fruits", "Greens"]

export default function PodsMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredPod, setHoveredPod] = useState<number | null>(null)

  const filteredPods = selectedCategory === "All" 
    ? pods 
    : pods.filter(pod => pod.category === selectedCategory)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
          {/* Animated particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100, 0],
                opacity: [0, 1, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Pods
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore our collection of premium growing pods. Each pod is €1. This is just a concept marketplace to showcase our products. Start your indoor garden today with our selection of herbs, vegetables, fruits, and greens.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-black'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pods Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPods.map((pod) => (
              <motion.div
                key={pod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredPod(pod.id)}
                onHoverEnd={() => setHoveredPod(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10
                              group-hover:border-green-500/50 transition-all duration-500 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={pod.image}
                      alt={pod.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{pod.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span>{pod.rating}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">{pod.category}</div>
                        <div className="text-sm text-gray-400">Growth: {pod.growthTime}</div>
                        <div className="text-sm text-gray-400">Difficulty: {pod.difficulty}</div>
                      </div>
                      <div className="text-2xl font-bold text-green-400">€{pod.price}</div>
                    </div>

                    <button className="w-full py-4 px-6 bg-green-500 text-black rounded-xl font-medium
                                   hover:bg-green-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <span className="group-hover:scale-105 transition-transform">Add to Cart</span>
                      <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Footer */}
      <footer className="relative py-20 mt-32 overflow-hidden bg-black border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/10 to-transparent" />
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${(i + 1) * 25}%`,
                background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)',
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8">
            <Link 
              href="/"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 rounded-full
                       hover:bg-green-500/20 transition-all duration-300"
            >
              <span className="text-green-400 group-hover:text-green-300 transition-colors">Back to Home</span>
              <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                {new Date().getFullYear()} Vertical. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 