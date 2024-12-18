'use client'

import { Footer } from '@/components/shared/Footer'

export default function Privacy() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-24">
        <h1 className="text-5xl font-bold mb-12 animate-fade-in-up">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section className="animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="leading-relaxed">
              At Vertical, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our products.
            </p>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email, shipping address)</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Device information and usage data</li>
              <li>Product interaction data to improve our services</li>
            </ul>
          </section>

          <section className="animate-fade-in-up delay-400">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfill your orders</li>
              <li>To communicate with you about your purchase</li>
              <li>To improve our products and services</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="animate-fade-in-up delay-500">
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to maintain the security of 
              your personal information. Your data is protected by industry-standard encryption and 
              stored on secure servers in the European Union.
            </p>
          </section>

          <section className="animate-fade-in-up delay-600">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="leading-relaxed">
              Under GDPR and other applicable privacy laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="animate-fade-in-up delay-700">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@vertical.com
              <br />
              Address: Vertical GmbH, Weiden, Germany
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
} 