'use client'

import { Footer } from '@/components/shared/Footer'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-black to-black" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-6 animate-scale-bounce">
              Let's Get In
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-400">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in">
              Have questions about our vertical farming solutions? We're here to help you transform your space into a thriving garden.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section ref={ref} className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-gray-400">
                  Reach out to us through any of these channels. We're always ready to discuss how we can help you grow.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+4917613420040" className="text-lg hover:text-green-400 transition-colors">
                      +49 176 1342 0040
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:varunmisra@gmail.com" className="text-lg hover:text-green-400 transition-colors">
                      varunmisra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-lg">
                      Bürgermeister-Prechtl-Straße 1
                      <span className="block text-gray-400">92637 Weiden in der Oberpfalz</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-black font-medium py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5026766242386!2d12.159699776891715!3d49.6745645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a03c9c6c42c4a5%3A0x41db728f061d730a!2sB%C3%BCrgermeister-Prechtl-Stra%C3%9Fe%201%2C%2092637%20Weiden%20in%20der%20Oberpfalz%2C%20Germany!5e0!3m2!1sen!2sus!4v1710154844049!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

