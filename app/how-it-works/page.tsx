import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">How Vertical Works</h1>
      <p className="text-xl">Growing your own fresh produce has never been easier. Follow these simple steps to start your vertical farming journey:</p>

      <ol className="space-y-8">
        <li>
          <h2 className="text-2xl font-bold mb-2">1. Choose Your System</h2>
          <p>Select the Vertical package that best fits your needs and space. We offer:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Starter kits for beginners</li>
            <li>Advanced systems for experienced growers</li>
            <li>Customizable packages for specific requirements</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">2. Order Online</h2>
          <p>Visit our user-friendly online store to place your order:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Browse detailed product descriptions</li>
            <li>Read customer reviews</li>
            <li>Choose from secure payment options</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">3. Quick and Easy Setup</h2>
          <p>Once your Vertical system arrives:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Follow our step-by-step installation guide</li>
            <li>Set up your base unit in your chosen location</li>
            <li>Install the custom PVC pipes</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">4. Select Your Crops</h2>
          <p>Choose from our wide variety of seed pods:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Leafy greens</li>
            <li>Herbs</li>
            <li>Vegetables</li>
            <li>Small fruits</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">5. Plant and Grow</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Insert your chosen seed pods into the system</li>
            <li>Add the pre-measured fertilizer pills</li>
            <li>Fill the water reservoir</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">6. Enjoy Automated Care</h2>
          <p>Let Vertical take care of the rest:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Automated watering system ensures optimal moisture</li>
            <li>Precise nutrient delivery for healthy growth</li>
            <li>Monitor root growth with our clear pipe option</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">7. Harvest and Enjoy</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Pick your produce at peak ripeness</li>
            <li>Enjoy fresh, nutritious food straight from your Vertical garden</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-bold mb-2">8. Easily Maintain and Replenish</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Replace seed pods as needed</li>
            <li>Refill fertilizer pills and water as indicated by the system</li>
            <li>Clean and maintain your Vertical unit with minimal effort</li>
          </ul>
        </li>
      </ol>

      <p className="text-xl mt-8">Start your vertical farming journey today and experience the joy of growing your own food!</p>

      <div className="mt-8 space-x-4">
        <Link href="/marketplace" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
          Shop Now
        </Link>
        <Link href="/contact" className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition-colors">
          Contact Support
        </Link>
      </div>
    </div>
  )
}

