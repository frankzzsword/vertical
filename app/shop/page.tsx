import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/shared/Footer'

const products = [
  {
    id: 1,
    name: 'Vertical One',
    price: 299,
    image: '/showcase1.jpg',
    description: 'The perfect entry into smart vertical farming. Designed for homes and small spaces.',
  },
  {
    id: 2,
    name: 'Vertical Wall',
    price: 499,
    image: '/showcase4.webp',
    description: 'Transform any wall into a living garden with our wall-mounted system.',
  },
  {
    id: 3,
    name: 'Vertical Sky',
    price: 999,
    image: '/showcase2 sky model ceiling.jpg',
    description: 'The ultimate ceiling-mounted growing system for modern homes.',
  }
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-24 text-center">
            Growing Systems
          </h1>

          <div className="grid md:grid-cols-3 gap-16">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[500px] mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-300 text-lg mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl">€{product.price}</span>
                      <Link 
                        href={`/products/${product.id === 1 ? 'one' : product.id === 2 ? 'wall' : 'sky'}`}
                        className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center space-y-8">
            <h2 className="text-4xl font-bold">Looking for Growing Pods?</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Check out our selection of herbs, vegetables, and curated packages.
            </p>
            <Link 
              href="/pods" 
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Shop Pods
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 