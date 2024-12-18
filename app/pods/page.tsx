'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/shared/Footer'
import { Leaf, Carrot, Apple, ShoppingCart } from 'lucide-react'

type PackSize = 5 | 10 | 30

export default function Pods() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPackSize, setSelectedPackSize] = useState<PackSize>(5)
  const [hoveredPod, setHoveredPod] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Pods', icon: Leaf },
    { id: 'vegetables', name: 'Vegetables', icon: Carrot },
    { id: 'fruits', name: 'Fruits', icon: Apple },
  ]

  const pods = [
    { id: 1, name: 'Cherry Tomatoes', category: 'vegetables', image: '/pods/CherryTomatoes.jpg', price: 4.99 },
    { id: 2, name: 'Basil', category: 'vegetables', image: '/pods/Basil.jpg', price: 4.99 },
    { id: 3, name: 'String Beans', category: 'vegetables', image: '/pods/StringBeans.jpg', price: 4.99 },
    { id: 4, name: 'Strawberry', category: 'fruits', image: '/pods/Strawberry.jpg', price: 5.99 },
    { id: 5, name: 'Bell Peppers', category: 'vegetables', image: '/pods/BellPeppers.jpg', price: 4.99 },
    { id: 6, name: 'Mint', category: 'vegetables', image: '/pods/Mint.jpg', price: 4.99 },
    { id: 7, name: 'Cucumber', category: 'vegetables', image: '/pods/Cucumbers.jpg', price: 4.99 },
    { id: 8, name: 'Broccoli Microgreens', category: 'vegetables', image: '/pods/BroccoliMicrogreens.jpg', price: 4.99 },
    { id: 9, name: 'Radish', category: 'vegetables', image: '/pods/radish.jpg', price: 4.99 },
    { id: 10, name: 'Cauliflower', category: 'vegetables', image: '/pods/Cauliflower.jpg', price: 4.99 },
    { id: 11, name: 'Oregano', category: 'vegetables', image: '/pods/Oregano.jpg', price: 4.99 },
    { id: 12, name: 'Wasabi', category: 'vegetables', image: '/pods/Wasabi.jpg', price: 4.99 },
    { id: 13, name: 'Sunflower Shoots', category: 'vegetables', image: '/pods/SunflowerShoots.jpg', price: 4.99 },
  ]

  const filteredPods = selectedCategory === 'all' 
    ? pods 
    : pods.filter(pod => pod.category === selectedCategory)

  return (
    <main className="bg-black min-h-screen pt-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Premium Growing Pods
          </h1>
        </div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar - Categories & Pack Size */}
          <div className="lg:col-span-1 mb-8 lg:mb-0 px-4 lg:px-0">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 sticky top-24 lg:top-32">
              {/* Categories */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-3 px-3 md:px-4 py-3 rounded-xl transition-all ${
                          selectedCategory === category.id
                            ? 'bg-green-500 text-black'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm md:text-base">{category.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Pack Size */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Pack Size</h2>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 30].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedPackSize(size as PackSize)}
                      className={`px-3 md:px-4 py-2 rounded-xl transition-all text-sm md:text-base ${
                        selectedPackSize === size
                          ? 'bg-green-500 text-black'
                          : 'border border-white/20 hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-400 mt-2">Pods per pack</p>
              </div>
            </div>
          </div>

          {/* Grid of Pods */}
          <div className="lg:col-span-3 px-4 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredPods.map((pod) => (
                <div
                  key={pod.id}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-3 md:p-4 hover:bg-white/10 transition-all duration-300"
                  onMouseEnter={() => setHoveredPod(pod.id)}
                  onMouseLeave={() => setHoveredPod(null)}
                >
                  <div className="relative aspect-square mb-3 md:mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={pod.image}
                      alt={pod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredPod === pod.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <button className="bg-green-500 text-black px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform text-sm md:text-base">
                        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-base md:text-lg font-medium">{pod.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base text-gray-400">
                        Pack of {selectedPackSize}
                      </span>
                      <span className="text-sm md:text-base text-green-400 font-medium">
                        €{(pod.price * selectedPackSize).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 