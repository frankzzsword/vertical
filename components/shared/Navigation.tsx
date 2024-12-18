'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { href: '/product', label: 'Product' },
    { href: '/technology', label: 'Technology' },
    { href: '/pods', label: 'Pods' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50">
          <span className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
            isMenuOpen ? 'text-black' : 'text-white'
          }`}>
            Vertical
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 p-2 md:hidden relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute inset-0 transform transition-all duration-300 ${
              isMenuOpen 
                ? 'rotate-45 translate-y-0 bg-black' 
                : '-translate-y-2 bg-white'
            } h-0.5 rounded-full`} />
            <span className={`absolute inset-0 transform transition-all duration-300 ${
              isMenuOpen 
                ? '-rotate-45 translate-y-0 bg-black' 
                : 'translate-y-2 bg-white'
            } h-0.5 rounded-full`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 transition-all duration-500 md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}>
          {/* Background with gradient */}
          <div className={`absolute inset-0 transition-transform duration-500 ease-out bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 ${
            isMenuOpen ? 'transform-none' : '-translate-y-full'
          }`} />
          
          {/* Menu Items */}
          <div className="relative h-full flex flex-col items-center justify-center p-4">
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-500 delay-${index * 100} ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-10 opacity-0'
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-3xl font-medium text-black hover:text-white transition-colors group"
                  >
                    {item.label}
                    <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
              
              {/* CTA Button */}
              <div className={`transform transition-all duration-500 delay-400 ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}>
                <Link
                  href="/pods"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-sm hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/pods" 
            className="text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </nav>
    </header>
  )
} 