'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/product" className="hover:text-green-400 transition-colors">Features</Link></li>
                <li><Link href="/technology" className="hover:text-green-400 transition-colors">Technology</Link></li>
                <li><Link href="/product#specs" className="hover:text-green-400 transition-colors">Specifications</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-lg">Shop</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/shop" className="hover:text-green-400 transition-colors">Systems</Link></li>
                <li><Link href="/pods" className="hover:text-green-400 transition-colors">Pods</Link></li>
                <li><Link href="/shop#accessories" className="hover:text-green-400 transition-colors">Accessories</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
                <li><Link href="/company" className="hover:text-green-400 transition-colors">Company</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy</Link></li>
                <li><Link href="/legal" className="hover:text-green-400 transition-colors">Legal</Link></li>
                <li><Link href="/terms" className="hover:text-green-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Vertical
              </Link>
            </div>
            <p className="text-sm text-gray-400">© 2024 Vertical. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Headquartered in Weiden, Germany</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 