'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Globe, Monitor, User, Play, Timer } from 'lucide-react'

interface TrackingData {
  id: string
  type: string
  url: string
  timestamp: string
  userAgent: string
  browser: string
  device: string
  geolocation: {
    city: string
    country: string
    region: string
  }
  fingerprint: string
  memberName?: string
  memberRole?: string
  source?: string
  sessionData: {
    duration: number
    entryPage: string
    exitPage: string
    lastActive: string
    scrollDepth: number
    videoWatched: boolean
    videoWatchDuration: number
    videoCompletionRate: number
  }
  technical: {
    screenSize: string
    language: string
    timezone: string
    os: string
    network: string
  }
}

export default function AdminDashboard() {
  const [trackingData, setTrackingData] = useState<TrackingData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/tracking')
        if (!response.ok) throw new Error('Failed to fetch tracking data')
        const data = await response.json()
        setTrackingData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="text-red-500 text-center">
          Error: {error}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Analytics Dashboard
        </motion.h1>

        <div className="grid gap-8">
          {trackingData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {entry.type === 'linkedin_click' ? 'LinkedIn Profile View' : 'Website Visit'}
                  </h2>
                  <p className="text-gray-400">
                    {new Date(entry.timestamp).toLocaleString()}
                  </p>
                </div>
                {entry.memberName && (
                  <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full">
                    {entry.memberName} - {entry.memberRole}
                  </div>
                )}
              </div>

              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Location & Device Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>
                      {entry.geolocation.city}, {entry.geolocation.region}, {entry.geolocation.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-purple-400" />
                    <span>{entry.browser} on {entry.device}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-yellow-400" />
                    <span>ID: {entry.fingerprint.slice(0, 8)}</span>
                  </div>
                </div>

                {/* Session Data */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>Session Duration: {Math.round(entry.sessionData.duration / 1000)}s</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="w-5 h-5 text-orange-400" />
                    <span>Scroll Depth: {entry.sessionData.scrollDepth}%</span>
                  </div>
                  {entry.sessionData.videoWatched && (
                    <div className="flex items-center gap-3">
                      <Play className="w-5 h-5 text-red-400" />
                      <span>
                        Video Watched: {Math.round(entry.sessionData.videoCompletionRate * 100)}% 
                        ({Math.round(entry.sessionData.videoWatchDuration / 1000)}s)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Details */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
                  <div>Screen: {entry.technical.screenSize}</div>
                  <div>Language: {entry.technical.language}</div>
                  <div>Timezone: {entry.technical.timezone}</div>
                  <div>OS: {entry.technical.os}</div>
                  <div>Network: {entry.technical.network}</div>
                  <div>Source: {entry.source || 'Direct'}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 