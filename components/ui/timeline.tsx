'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Lightbulb, Rocket, Target, Users, Award } from 'lucide-react'

export function Timeline() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const timelineEvents = [
    {
      date: 'September 2023',
      title: 'The Seed of Innovation',
      description: 'Born from a vision to revolutionize urban farming, our journey began with a simple idea: make growing food at home as easy as using a coffee machine.',
      icon: Lightbulb,
      highlight: 'First Concept'
    },
    {
      date: 'October 2023',
      title: 'Breaking New Ground',
      description: 'Developed our proprietary smart growing technology, combining IoT sensors with advanced hydroponics for optimal plant growth.',
      icon: Sprout,
      highlight: 'Tech Innovation'
    },
    {
      date: 'November 2023',
      title: 'Expanding Horizons',
      description: 'Evolved from a single product to a comprehensive ecosystem. Introduced Vertical Wall and Sky to address diverse market needs.',
      icon: Target,
      highlight: 'Product Line'
    },
    {
      date: 'December 2023',
      title: 'Building the Team',
      description: 'Assembled a world-class team of engineers, botanists, and designers to perfect our technology and user experience.',
      icon: Users,
      highlight: 'Team Growth'
    },
    {
      date: 'January 2024',
      title: 'Prototype Success',
      description: 'Successfully tested our first working prototype, achieving 95% water efficiency and 40% faster growth rates than traditional methods.',
      icon: Award,
      highlight: 'Milestone'
    },
    {
      date: 'Q2 2024',
      title: 'Launch & Beyond',
      description: 'Preparing for commercial launch while developing partnerships with leading sustainability and technology companies.',
      icon: Rocket,
      highlight: 'Future'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Our Journey to Innovation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to reality: Building the future of sustainable food production
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-16 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500 to-emerald-500" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <event.icon className="w-4 h-4 text-black" />
              </div>

              <div className="ml-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-green-400">{event.date}</span>
                  <span className="px-2 py-1 rounded-full bg-green-400/10 text-green-400 text-xs font-medium">
                    {event.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-400 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 