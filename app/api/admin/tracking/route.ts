import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function GET() {
  try {
    // Test Redis connection
    await redis.ping()
    
    // Get all keys that start with 'track_'
    const keys = await redis.keys('track_*')
    
    if (!keys || !keys.length) {
      console.log('No tracking data found')
      return NextResponse.json([])
    }

    // Get all tracking data
    const trackingData = await Promise.all(
      keys.map(async (key) => {
        try {
          const data = await redis.get(key)
          return data ? JSON.parse(data as string) : null
        } catch (err) {
          console.error(`Error fetching data for key ${key}:`, err)
          return null
        }
      })
    )

    // Filter out null values and sort by timestamp in descending order
    const validData = trackingData
      .filter(data => data !== null)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    console.log(`Found ${validData.length} tracking entries`)
    return NextResponse.json(validData)
  } catch (error) {
    console.error('Failed to fetch tracking data:', error)
    return NextResponse.json({ error: 'Failed to fetch tracking data' }, { status: 500 })
  }
} 