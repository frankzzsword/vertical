'use client'

import { AnimatedHero } from '@/components/ui/animated-hero'
import { Timeline } from '@/components/ui/timeline'
import { ProductShowcase } from '@/components/ui/product-showcase'
import { Team } from '@/components/ui/team'
import { Footer } from '@/components/shared/Footer'
import { FloatingNav } from '@/components/ui/floating-nav'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Leaf, Droplets, Timer, Shield, Zap, Sprout } from 'lucide-react'
import Link from 'next/link'
import { TrackedLink } from '@/components/ui/tracked-link'

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Bold and Dynamic */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ opacity }} className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
            <Image
              src="/main.jpg"
              alt="Vertical farming"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.div 
              className="mb-16 relative"
              style={{ scale }}
            >
              <motion.p 
                className="text-green-400 text-xl mb-6 tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                The Future of Home Farming
              </motion.p>
              <motion.h1 
                className="text-8xl md:text-[12rem] font-bold mb-8 tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Vertical
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Bringing the power of smart farming into your home. Grow fresh, nutritious produce year-round with our innovative vertical growing system.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.p
            className="text-gray-400 text-sm mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-1 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section - Clean and Impactful */}
      <section id="products" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Revolutionizing<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Home Farming
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform any space into a thriving garden with our advanced vertical farming technology.
            </p>
          </motion.div>

          {/* New Bold Steps Preview */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                number: "01", 
                title: "Add Water", 
                desc: "Fill the reservoir",
                icon: <Droplets className="w-8 h-8 text-black" />
              },
              { 
                number: "02", 
                title: "Insert Pods", 
                desc: "Place your chosen plants",
                icon: <Sprout className="w-8 h-8 text-black" />
              },
              { 
                number: "03", 
                title: "Watch it Grow", 
                desc: "Automated care takes over",
                icon: <Timer className="w-8 h-8 text-black" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-0 
                              group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12 
                              hover:border-green-500/50 transition-all duration-500">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full 
                                flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <div className="text-8xl font-bold bg-gradient-to-r from-green-400/20 to-emerald-600/20 
                                bg-clip-text text-transparent mb-6 text-center">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-center group-hover:text-green-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xl text-center group-hover:text-white transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LED Technology Section */}
      <section id="led-technology" className="relative py-32 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
          {/* Animated grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${(i + 1) * 5}%`,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold">
                Advanced
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  LED Technology
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Our precision-engineered lighting system mimics natural sunlight for optimal plant growth.
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* LED Features Display */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {[
                    {
                      title: "Full Spectrum",
                      desc: "Optimized wavelength",
                      color: "from-blue-500 to-purple-500"
                    },
                    {
                      title: "Growth Zones",
                      desc: "Multi-zone lighting",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      title: "Smart Timing",
                      desc: "Auto day/night cycles",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      title: "Low Energy",
                      desc: "High efficiency LEDs",
                      color: "from-blue-400 to-cyan-500"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={`feature-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 
                                    group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />
                      <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10
                                    group-hover:border-white/20 transition-all duration-500">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} mb-4`} />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Pill Section */}
      <section id="eco-pill" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-green-500/30 rounded-full"
              style={{
                top: `${(i * 5)}%`,
                left: `${((i * 7) % 100)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              <div className="relative order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Image
                    src="/ecopill.jpg"
                    alt="Eco Fertilizer Pill"
                    width={600}
                    height={600}
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Floating specs */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { label: "Nitrogen", value: "14%" },
                      { label: "Phosphorus", value: "12%" },
                      { label: "Potassium", value: "14%" }
                    ].map((spec, index) => (
                      <div key={index} className="bg-black/60 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-green-400 font-bold">{spec.value}</div>
                        <div className="text-sm text-gray-400">{spec.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h2 className="text-5xl md:text-7xl font-bold">
                    Eco Fertilizer
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                      Pills
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300">
                    Revolutionary nutrient delivery system that provides complete plant nutrition in a single capsule.
                  </p>
                  
                  {/* Feature list */}
                  <div className="space-y-6">
                    {[
                      "Perfect nutrient balance for optimal growth",
                      "Zero waste, precise dosing every time",
                      "Biodegradable capsule design",
                      "Complete spectrum of micro and macro nutrients"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <p className="text-gray-300">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growing Pod Section */}
      <section id="growing-pod" className="relative py-32 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/5 to-black" />
          {/* Animated lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
              style={{
                top: `${(i + 1) * 10}%`,
                left: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="relative"
            >
                <div className="relative aspect-square">
              <Image
                src="/pods/Basil.jpg"
                alt="Growing Pod"
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Interactive Pod Features */}
                  <div className="absolute inset-0 p-8">
                    {[
                      { x: '20%', y: '20%', label: 'Rockwool Medium' },
                      { x: '80%', y: '40%', label: 'Growth Tracking Sensor' },
                      { x: '30%', y: '70%', label: 'Smart Watering Port' }
                    ].map((point, index) => (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{ left: point.x, top: point.y }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="relative group cursor-pointer">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/50 backdrop-blur-sm 
                                        group-hover:bg-emerald-400 transition-colors duration-300">
                            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30" />
                          </div>
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-300 whitespace-nowrap">
                            <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                              <p className="text-sm text-emerald-400">{point.label}</p>
                            </div>
                          </div>
              </div>
            </motion.div>
                    ))}
                  </div>
          </div>
              </motion.div>

          <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <motion.p 
                    className="text-emerald-400 text-lg mb-4 uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    Revolutionary Growing Medium
                  </motion.p>
                  <motion.h2 
                    className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
                    Smart
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
              Growing Pods
                    </span>
                  </motion.h2>
                </div>

            <p className="text-xl text-gray-300">
                  Experience the future of indoor farming with our intelligent growing pods. 
                  Precision-engineered for optimal growth and maximum yield.
                </p>

                {/* Pod Features */}
                <div className="grid gap-6">
                  {[
                    {
                      title: "Smart Monitoring",
                      desc: "Real-time growth tracking and nutrient monitoring",
                      icon: <Zap className="w-6 h-6 text-emerald-400" />
                    },
                    {
                      title: "Perfect Environment",
                      desc: "Optimized growing conditions for each plant type",
                      icon: <Leaf className="w-6 h-6 text-emerald-400" />
                    },
                    {
                      title: "Automated Care",
                      desc: "Set-and-forget system handles all maintenance",
                      icon: <Timer className="w-6 h-6 text-emerald-400" />
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={`feature-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center 
                                    group-hover:bg-emerald-500/20 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature.desc}
                        </p>
                      </div>
          </motion.div>
                  ))}
                </div>
        </motion.div>
      </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div 
            id="video-overlay" 
            className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-100 transition-opacity duration-1000" 
          />
          <video 
            id="promo-video"
            loop={false}
            playsInline
            muted
            onEnded={() => {
              const content = document.getElementById('video-content');
              const visionContent = document.getElementById('vision-content');
              if (content && visionContent) {
                content.style.display = 'none';
                visionContent.style.display = 'block';
                visionContent.style.opacity = '1';
              }
            }}
            className="w-full h-full object-cover opacity-60 transition-all duration-1000"
          >
            <source src="/verticalvision.webm" type="video/webm" />
          </video>
        </div>

        {/* Initial Content */}
        <motion.div 
          id="video-content"
          className="relative z-20 text-center max-w-7xl mx-auto px-4 opacity-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight"
              >
                The Future of Home Farming
              </motion.h2>
            </div>

            {/* Watch Now Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative inline-flex items-center gap-4"
              onClick={() => {
                const video = document.getElementById('promo-video') as HTMLVideoElement;
                const content = document.getElementById('video-content');
                const overlay = document.getElementById('video-overlay');
                
                if (video && content && overlay) {
                  video.muted = false;
                  video.currentTime = 0;
                  video.play();
                  
                  overlay.style.opacity = '0';
                  content.style.opacity = '0';
                  
                  setTimeout(() => {
                    overlay.style.display = 'none';
                    content.style.display = 'none';
                    video.style.opacity = '1';
                  }, 1000);
                }
              }}
            >
              <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full 
                             border border-white/20 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center 
                               group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-lg font-medium pr-4">Watch Video</span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Vision Content - Shows after video */}
        <motion.div
          id="vision-content"
          className="relative z-20 text-center max-w-7xl mx-auto px-4 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-16">
            {/* First Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                A Thing of Beauty!
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our core philosophy is that design and functionality should run in parallel, 
                coexisting to complement your space.
              </p>
            </motion.div>

            {/* Second Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-md border border-white/10">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Aesthetics + Function</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your home garden should not only look aesthetically beautiful in any space 
                    but also provide you with the best nutrition 365 days a year.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-md border border-white/10">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Market Gap</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We designed this because we couldn't find anything on the market that is 
                    aesthetically beautiful and functions seamlessly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Third Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Just the Beginning</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                What you see here is just the beginning and part of a bigger vision. 
                Since it comes in different shapes and sizes, you can grow your food on the floor, 
                on your wall, or on your ceiling.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section id="product-showcase" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
          {/* Dynamic background elements */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`showcase-particle-${i}`}
              className="absolute w-2 h-2 bg-green-500/30 rounded-full"
              style={{
                top: `${(i * 5)}%`,
                left: `${((i * 7) % 100)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                Product Line
              </span>
            </motion.h2>
          </motion.div>

          {/* Auto-sliding products with full-screen treatment */}
          <div className="relative h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden">
            {[
              {
                src: "/main.jpg",
                title: "Vertical One",
                desc: "Our flagship 12-pod home farming system",
                features: ["12-pod growing system", "Automated plant care", "Smart monitoring app"],
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                src: "/showcase2 sky model ceiling.jpg",
                title: "Sky Model",
                desc: "Future Concept: Overhead Garden System",
                features: ["Space-saving design", "Automated height adjustment", "Seamless integration"],
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                src: "/wall5.jpg",
                title: "Living Wall",
                desc: "Future Concept: Modular Wall System",
                features: ["Expandable design", "Integrated irrigation", "Architectural integration"],
                gradient: "from-purple-500/20 to-pink-500/20"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 16,
                  delay: index * 8,
                }}
              >
                <div className="relative h-full group">
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    className="object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-3xl" />
                  
                  {/* Glowing background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-2xl`} />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                        {product.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-center text-gray-300 mb-8">
                        {product.desc}
                      </p>
                      <div className="flex flex-wrap justify-center gap-6">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced slide indicators */}
          <div className="flex justify-center gap-4 mt-8">
            {[0, 1, 2].map((_, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="w-20 h-2 rounded-full bg-white/20 relative z-10"
                  animate={{
                    backgroundColor: ['rgba(255,255,255,0.2)', 'rgba(34,197,94,0.6)', 'rgba(255,255,255,0.2)']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 8,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Reimagined */}
      <section id="timeline" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          {/* Animated grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${(i + 1) * 5}%`,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Roadmap
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our journey to revolutionize home farming
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  date: "November 2024",
                  title: "Ideation & Brainstorming",
                  color: "from-teal-400 to-cyan-600"
                },
                {
                  date: "March 2025",
                  title: "First Prototype",
                  color: "from-green-400 to-emerald-600"
                },
                {
                  date: "September 2025",
                  title: "Market Launch",
                  color: "from-blue-400 to-indigo-600"
                },
                {
                  date: "November 2026",
                  title: "Launch Wall & Sky",
                  color: "from-purple-400 to-pink-600"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10
                                hover:border-purple-500/50 transition-colors">
                    <div className={`text-2xl font-bold mb-4 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                      {milestone.date}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {milestone.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Reimagined */}
      <section id="team" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
          {/* Animated orbs */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
                top: `${(i * 5)}%`,
                left: `${((i * 11) % 100)}%`,
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
              The Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovators shaping the future of vertical farming
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              {
                name: "Varun Mishra",
                image: "/varun.JPG",
                linkedin: "https://www.linkedin.com/in/varun-mishra-de",
                role: "Founder"
              },
              {
                name: "Ryan Westerveld",
                image: "/ryan.jpeg",
                linkedin: "https://www.linkedin.com/in/ryan-westerveld-16b2161b9",
                role: "Technology"
              },
              {
                name: "Nick Takkenberg",
                image: "/nick.jpeg",
                linkedin: "https://www.linkedin.com/in/nicktakkenberg",
                role: "Design"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="relative w-56 h-56 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-black rounded-full" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full p-1"
                    />
                    <TrackedLink
                      href={member.linkedin}
                      className="absolute bottom-0 right-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center
                               transform translate-x-2 translate-y-2 hover:bg-blue-700 transition-colors"
                      trackingData={{
                        memberName: member.name,
                        memberRole: member.role,
                        source: 'team_section'
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </TrackedLink>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl -z-10" />
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Minimalist Footer */}
      <footer className="relative py-20 overflow-hidden bg-black border-t border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/10 to-transparent" />
          {/* Animated lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`footer-line-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${(i + 1) * 25}%`,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)',
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + (i * 2),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8">
            <Link 
              href="/pods"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 rounded-full
                         hover:bg-green-500/20 transition-all duration-300"
            >
              <span className="text-green-400 group-hover:text-green-300 transition-colors">Explore Pods Marketplace</span>
              <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="space-y-4">
                <p className="text-gray-400 text-lg leading-relaxed">
                  <strong className="text-green-400">Vertical</strong> represents a vision for the future of home farming. 
                  This concept and website were crafted by Varun Mishra in collaboration with Ryan and Nick. 
                  Together we're working to bring this vision to life.
                </p>
              </div>

              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Vertical. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Navigation */}
      <FloatingNav />
    </main>
  )
}
