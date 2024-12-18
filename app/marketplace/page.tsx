import Link from 'next/link'

export default function Marketplace() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Vertical Marketplace</h1>
      <p className="text-xl">Welcome to our online store, where you can find everything you need to start and maintain your vertical garden.</p>

      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Vertical Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded">
                <h4 className="font-bold">Base Unit (Small)</h4>
                <p>Perfect for apartments or small spaces</p>
                <p className="text-lg font-bold mt-2">$199.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="border p-4 rounded">
                <h4 className="font-bold">Base Unit (Medium)</h4>
                <p>Ideal for families or enthusiasts</p>
                <p className="text-lg font-bold mt-2">$299.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="border p-4 rounded">
                <h4 className="font-bold">Base Unit (Large)</h4>
                <p>For serious home farmers</p>
                <p className="text-lg font-bold mt-2">$399.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">2. Seed Pods</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Leafy Greens</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Lettuce Mix (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$12.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Spinach (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$12.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Kale (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$12.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Herbs</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Basil (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$14.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Cilantro (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$14.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Mint (6 pods)</h5>
                    <p className="text-lg font-bold mt-2">$14.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Vegetables</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Cherry Tomatoes (4 pods)</h5>
                    <p className="text-lg font-bold mt-2">$16.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Bell Peppers (4 pods)</h5>
                    <p className="text-lg font-bold mt-2">$16.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Cucumbers (4 pods)</h5>
                    <p className="text-lg font-bold mt-2">$16.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Fruits</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h5 className="font-bold">Strawberries (4 pods)</h5>
                    <p className="text-lg font-bold mt-2">$18.99</p>
                    <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">3. Accessories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded">
                <h4 className="font-bold">Fertilizer Pills (60 count)</h4>
                <p className="text-lg font-bold mt-2">$24.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="border p-4 rounded">
                <h4 className="font-bold">Replacement PVC Pipes (Set of 4)</h4>
                <p className="text-lg font-bold mt-2">$39.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="border p-4 rounded">
                <h4 className="font-bold">LED Grow Light Extension</h4>
                <p className="text-lg font-bold mt-2">$79.99</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <Link href="/cart" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
          View Cart
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Checkout Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Review your cart</li>
          <li>Enter shipping information</li>
          <li>Choose shipping method:
            <ul className="list-disc list-inside ml-8">
              <li>Standard (5-7 business days)</li>
              <li>Express (2-3 business days)</li>
            </ul>
          </li>
          <li>Enter payment information:
            <ul className="list-disc list-inside ml-8">
              <li>Credit/Debit Card</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
            </ul>
          </li>
          <li>Review and place your order</li>
        </ol>
        <Link href="/checkout" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
          Proceed to Checkout
        </Link>
      </section>

      <p className="mt-8">
        Need help choosing the right products? <Link href="/contact" className="text-green-600 hover:underline">Contact our support team</Link>
      </p>
    </div>
  )
}

