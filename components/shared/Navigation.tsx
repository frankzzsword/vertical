'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronRight, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Dark overlay */}
        <div 
          className={`fixed inset-0 min-h-[100dvh] w-full bg-black transition-all duration-500 ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        />
        
        {/* Menu content */}
        <div 
          className={`fixed inset-0 min-h-[100dvh] w-full z-[70] transition-all duration-500 ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col bg-black">
            {/* Logo section at top */}
            <div className="flex items-center justify-between px-6 h-24 border-b border-white/10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:rotate-90 transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center items-center py-12">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/vertical-logo.png"
                  alt="Vertical Logo"
                  className="w-48 h-auto"
                />
              </Link>
            </div>

            {/* Menu items */}
            <div className="flex-1 overflow-y-auto px-6 py-12">
              <div className="w-full max-w-md mx-auto space-y-6">
                {menuItems.map((item, index) => (
                  <div
                    key={item.href}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`transform transition-all duration-500 ${
                      isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between w-full p-4 text-2xl font-medium text-white hover:bg-white/5 rounded-xl transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-6 h-6 text-green-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button at bottom */}
            <div className="px-6 py-8 border-t border-white/10">
              <div 
                style={{ transitionDelay: '400ms' }}
                className={`transform transition-all duration-500 ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <Link
                  href="/shop"
                  className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center z-[80]">
            <span className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Vertical
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="z-[80] p-3 md:hidden relative group"
            aria-label="Open menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full transition-all duration-300 group-hover:w-4/5" />
              <span className="w-4/5 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full transition-all duration-300 group-hover:w-full" />
              <span className="w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full transition-all duration-300 group-hover:w-4/5" />
            </div>
          </button>

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
              href="/shop" 
              className="text-sm bg-gradient-to-r from-green-400 to-emerald-600 text-black px-6 py-2.5 rounded-full hover:from-green-500 hover:to-emerald-700 transition-all hover:scale-105 transform font-medium"
            >
              Buy Now
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navigation 