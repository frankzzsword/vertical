'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Clock, Package, Zap, Leaf, Sprout, Play, ChevronUp } from 'lucide-react'

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(true)
  let scrollTimeout: NodeJS.Timeout

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero section
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true)
        setIsActive(true)
        
        // Clear the previous timeout
        if (scrollTimeout) clearTimeout(scrollTimeout)
        
        // Set a new timeout to reduce opacity after 5 seconds of no scrolling
        scrollTimeout = setTimeout(() => {
          setIsActive(false)
        }, 5000)
      } else {
        setIsVisible(false)
      }

      // Update active section based on scroll position
      const sections = [
        'hero',
        'products',
        'led-technology',
        'eco-pill',
        'growing-pod',
        'video-section',
        'product-showcase',
        'timeline',
        'team'
      ]
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'products', icon: Package, label: 'Products' },
    { id: 'led-technology', icon: Zap, label: 'LED Tech' },
    { id: 'eco-pill', icon: Leaf, label: 'Eco Pills' },
    { id: 'growing-pod', icon: Sprout, label: 'Growing Pod' },
    { id: 'video-section', icon: Play, label: 'Video' },
    { id: 'product-showcase', icon: Package, label: 'Product Line' },
    { id: 'timeline', icon: Clock, label: 'Timeline' },
    { id: 'team', icon: Users, label: 'Team' }
  ]

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Reset scroll position calculation
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Smooth scroll to element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Update active state
      setIsActive(true)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsActive(false)
      }, 5000)
    } else {
      console.log(`Section ${sectionId} not found`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
        y: isVisible ? 0 : 50
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 z-50"
      style={{
        translateX: '-50%'
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => {
        if (scrollTimeout) clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setIsActive(false)
        }, 5000)
      }}
    >
      <nav className="bg-black/80 backdrop-blur-lg rounded-full border border-white/10 p-2">
        <ul className="flex items-center gap-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`p-3 rounded-full transition-colors relative group ${
                  activeSection === id ? 'text-green-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
} 