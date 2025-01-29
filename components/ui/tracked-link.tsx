'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { trackEvent, trackSocialInteraction, trackVideoInteraction, trackEngagement } from '@/utils/analytics'

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  trackingData?: Record<string, any>
}

export function TrackedLink({ href, children, className, trackingData }: TrackedLinkProps) {
  const [scrollDepth, setScrollDepth] = useState(0)
  const [startTime] = useState(Date.now())
  const [videoData, setVideoData] = useState({
    watched: false,
    duration: 0,
    completionRate: 0
  })

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100
      const newScrollDepth = Math.min(Math.round(scrolled), 100)
      
      if (newScrollDepth > scrollDepth) {
        setScrollDepth(newScrollDepth)
        // Track engagement when scroll depth increases
        trackEngagement({
          scrollDepth: newScrollDepth,
          timeOnPage: Math.round((Date.now() - startTime) / 1000)
        })
      }
    }

    // Track video interaction
    const video = document.getElementById('promo-video') as HTMLVideoElement
    if (video) {
      const handleVideoPlay = () => {
        trackVideoInteraction({
          action: 'play',
          label: 'Promo Video'
        })

        const handleVideoEnd = () => {
          const duration = video.duration
          const completionRate = Math.round((video.currentTime / duration) * 100)
          
          setVideoData({
            watched: true,
            duration: video.currentTime,
            completionRate: completionRate / 100
          })

          trackVideoInteraction({
            action: 'end',
            label: 'Promo Video',
            value: completionRate
          })
        }

        video.addEventListener('ended', handleVideoEnd)
        return () => video.removeEventListener('ended', handleVideoEnd)
      }

      video.addEventListener('play', handleVideoPlay)
      return () => video.removeEventListener('play', handleVideoPlay)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDepth, startTime])

  const handleClick = () => {
    // Track LinkedIn profile clicks
    if (trackingData?.memberName) {
      trackSocialInteraction({
        network: 'LinkedIn',
        action: 'Profile Click',
        target: `${trackingData.memberName} - ${trackingData.memberRole}`,
      })

      // Track additional data as a separate event
      trackEvent({
        category: 'Team',
        action: 'Profile View',
        label: trackingData.memberName,
        value: scrollDepth,
      })

      // Track final engagement metrics
      trackEngagement({
        scrollDepth,
        timeOnPage: Math.round((Date.now() - startTime) / 1000)
      })
    }

    // Track video engagement if video was watched
    if (videoData.watched) {
      trackVideoInteraction({
        action: 'end',
        label: 'Promo Video',
        value: Math.round(videoData.completionRate * 100)
      })
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
} 