'use client'

import { Footer } from '@/components/shared/Footer'

export default function Legal() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-24">
        <h1 className="text-5xl font-bold mb-12 animate-fade-in-up">Legal Information</h1>
        
        <div className="space-y-8 text-gray-300">
          <section className="animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <p className="leading-relaxed">
              Vertical GmbH
              <br />
              Registered in Weiden, Germany
              <br />
              Registration Number: HRB XXXXX
              <br />
              VAT ID: DE XXXXXXXXX
            </p>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="leading-relaxed">
              By accessing and using our website and products, you agree to comply with and be bound by 
              these Terms of Service. Please read them carefully before using our services.
            </p>
          </section>

          <section className="animate-fade-in-up delay-400">
            <h2 className="text-2xl font-bold mb-4">Warranty Information</h2>
            <p className="leading-relaxed">
              Our products come with a 2-year limited warranty covering manufacturing defects. This 
              warranty gives you specific legal rights, and you may also have other rights which vary 
              by region.
            </p>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, designs, and intellectual property on this website are owned by Vertical GmbH. 
              Our innovative vertical farming technology is protected by multiple patents and trademarks.
            </p>
          </section>

          <section className="animate-fade-in-up delay-600">
            <h2 className="text-2xl font-bold mb-4">Shipping & Returns</h2>
            <p className="leading-relaxed">
              We offer shipping throughout the European Union. Returns are accepted within 14 days of 
              delivery, provided the product is in its original condition and packaging.
            </p>
          </section>

          <section className="animate-fade-in-up delay-700">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="leading-relaxed">
              For legal inquiries:
              <br />
              Email: legal@vertical.com
              <br />
              Address: Vertical GmbH, Weiden, Germany
              <br />
              Phone: +49 XXXXXXXXX
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
} 