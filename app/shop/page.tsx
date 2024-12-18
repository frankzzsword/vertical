import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Vertical Base System',
    price: 999.99,
    image: '/baseproduct.jpg',
    description: 'The foundation of your indoor garden. Includes smart controller and LED lighting.',
  },
  {
    id: 2,
    name: 'Vertical Pro System',
    price: 1499.99,
    image: '/showcase1.jpg',
    description: 'Enhanced growing system with expanded capacity and premium features.',
  },
  {
    id: 3,
    name: 'Vertical Enterprise',
    price: 2999.99,
    image: '/showcase3.webp',
    description: 'Commercial-grade system for restaurants and small businesses.',
  },
  {
    id: 4,
    name: 'Vertical Ceiling Mount',
    price: 1299.99,
    image: '/showcase2 sky model ceiling.jpg',
    description: 'Space-saving ceiling mounted system for modern homes.',
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-24 text-center">
            Growing Systems
          </h1>

          <div className="grid md:grid-cols-2 gap-16">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[500px] mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">{product.name}</h2>
                  <p className="text-gray-400 text-lg">{product.description}</p>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-2xl">${product.price}</span>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                      Buy Now
                    </button>
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
    </div>
  )
} 