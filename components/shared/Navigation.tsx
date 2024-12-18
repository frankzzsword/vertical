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
      <div 
        className={`fixed inset-0 min-h-[100dvh] w-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 z-[9999] transition-all duration-300 md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-300 delay-${index * 75} ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between w-full text-4xl font-medium text-black hover:text-white transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
              
              <div className={`transform transition-all duration-300 delay-300 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <Link
                  href="/pods"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block w-full mt-8 px-8 py-4 bg-black text-white rounded-full text-2xl font-medium text-center hover:bg-white hover:text-black transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center z-[10000]">
            <span className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
              isMenuOpen ? 'text-black' : 'text-white'
            }`}>
              Vertical
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-[10000] p-2 md:hidden"
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
    </>
  )
} 