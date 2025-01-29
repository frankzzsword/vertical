'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Team() {
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

  const teamMembers = [
    {
      name: 'Varun Mishra',
      role: '',
      description: 'With a background in sustainable technology and business development, Varun leads our vision to revolutionize urban farming. His expertise in smart systems and passion for sustainability drives our innovation.',
      expertise: ['Smart Technology', 'Business Strategy', 'Sustainable Development'],
      image: '/team-placeholder.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'varun@vertical.com'
      }
    },
    {
      name: 'Ryan Westerveld',
      role: ' ',
      description: 'A technical innovator with deep expertise in IoT and agriculture technology. Ryan architects our smart growing systems, ensuring optimal performance and reliability.',
      expertise: ['IoT Systems', 'Agriculture Tech', 'Software Development'],
      image: '/team-placeholder.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ryan@vertical.com'
      }
    },
    {
      name: 'Nick Takkenberg',
      role: '',
      description: 'Bringing extensive experience in operations and supply chain management, Nick ensures smooth execution of our vision and builds strategic partnerships.',
      expertise: ['Operations', 'Supply Chain', 'Strategic Planning'],
      image: '/team-placeholder.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'nick@vertical.com'
      }
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
            Meet the Innovators
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate founders committed to revolutionizing how the world grows food
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="aspect-square relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-green-400 mb-4">{member.role}</div>
                <p className="text-gray-400 mb-6">{member.description}</p>
                
                {/* Expertise */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 