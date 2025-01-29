import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import { v4 as uuidv4 } from 'uuid'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const headers = request.headers
    const id = uuidv4()

    // Basic tracking data
    const trackingData = {
      id,
      type: data.type || 'page_view',
      url: data.url || request.url,
      timestamp: new Date().toISOString(),
      userAgent: headers.get('user-agent'),
      browser: getBrowserInfo(headers.get('user-agent') || ''),
      device: getDeviceInfo(headers.get('user-agent') || ''),
      geolocation: await getGeolocation(headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''),
      fingerprint: data.fingerprint,
      memberName: data.memberName,
      memberRole: data.memberRole,
      source: data.source,
      
      // Enhanced session data
      sessionData: {
        duration: data.sessionDuration || 0,
        entryPage: data.entryPage || request.headers.get('referer'),
        exitPage: data.exitPage,
        lastActive: new Date().toISOString(),
        scrollDepth: data.scrollDepth || 0,
        videoWatched: data.videoWatched || false,
        videoWatchDuration: data.videoWatchDuration || 0,
        videoCompletionRate: data.videoCompletionRate || 0
      },

      // Technical data
      technical: {
        screenSize: data.screenSize || 'unknown',
        language: headers.get('accept-language') || 'unknown',
        timezone: data.timezone || 'unknown',
        os: getOSInfo(headers.get('user-agent') || ''),
        network: data.connection || 'unknown'
      }
    }

    console.log('Storing tracking data:', { id, type: trackingData.type })
    
    // Store in Redis with 30-day expiration
    await redis.setex(`track_${id}`, 60 * 60 * 24 * 30, JSON.stringify(trackingData))

    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
}

function getBrowserInfo(userAgent: string): string {
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Chrome')) return 'Chrome'
  if (userAgent.includes('Safari')) return 'Safari'
  if (userAgent.includes('Edge')) return 'Edge'
  if (userAgent.includes('Opera')) return 'Opera'
  return 'Unknown'
}

function getDeviceInfo(userAgent: string): string {
  if (userAgent.includes('Mobile')) return 'Mobile'
  if (userAgent.includes('Tablet')) return 'Tablet'
  return 'Desktop'
}

function getOSInfo(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows'
  if (userAgent.includes('Mac')) return 'macOS'
  if (userAgent.includes('Linux')) return 'Linux'
  if (userAgent.includes('Android')) return 'Android'
  if (userAgent.includes('iOS')) return 'iOS'
  return 'Unknown'
}

async function getGeolocation(ip: string) {
  if (!ip || ip === 'Unknown') {
    return {
      city: 'Unknown',
      country: 'Unknown',
      region: 'Unknown'
    }
  }

  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const data = await response.json()
    return {
      city: data.city || 'Unknown',
      country: data.country || 'Unknown',
      region: data.regionName || 'Unknown'
    }
  } catch (error) {
    console.error('Geolocation error:', error)
    return {
      city: 'Unknown',
      country: 'Unknown',
      region: 'Unknown'
    }
  }
} 