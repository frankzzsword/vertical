import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Redis } from '@upstash/redis'

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const headersList = headers()
    
    // Get basic request information
    const userAgent = (await request.headers.get('user-agent')) || 'Unknown'
    const referer = (await request.headers.get('referer')) || 'Direct'
    const ip = (await request.headers.get('x-forwarded-for')) || 'Unknown'
    const acceptLanguage = (await request.headers.get('accept-language')) || 'Unknown'
    
    // Enrich the tracking data
    const trackingData = {
      ...data,
      timestamp: new Date().toISOString(),
      session: {
        entryPage: referer,
        language: acceptLanguage,
        timezone: new Date().getTimezoneOffset(),
        screenData: data.screenData || {},
        performance: data.performance || {},
        sessionDuration: data.sessionDuration || 0,
      },
      technical: {
        userAgent,
        browser: getBrowserInfo(userAgent),
        device: getDeviceInfo(userAgent),
        os: getOSInfo(userAgent),
        network: {
          effectiveType: data.networkType || 'unknown',
          downlink: data.networkSpeed || 'unknown',
        },
      },
      location: {
        ip,
        geolocation: await getGeolocation(ip),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      engagement: {
        clickTime: new Date().toISOString(),
        scrollDepth: data.scrollDepth || 0,
        timeOnPage: data.timeOnPage || 0,
        interactions: data.interactions || [],
      }
    }

    // Store in Upstash Redis
    const trackingId = `track_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    await redis.set(trackingId, JSON.stringify(trackingData))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
}

function getBrowserInfo(userAgent: string) {
  const browsers = {
    chrome: /chrome|chromium|crios/i,
    safari: /safari/i,
    firefox: /firefox|fxios/i,
    ie: /msie|trident/i,
    edge: /edge|edg/i,
    opera: /opera|opr/i,
    samsung: /samsungbrowser/i,
    uc: /ucbrowser/i,
  }

  for (const [browser, regex] of Object.entries(browsers)) {
    if (regex.test(userAgent)) return browser
  }
  return 'unknown'
}

function getDeviceInfo(userAgent: string) {
  const devices = {
    mobile: /mobile|android|iphone|ipod|webos|iemobile|opera mini/i,
    tablet: /ipad|tablet|playbook|silk/i,
    desktop: /windows|macintosh|linux/i,
    tv: /smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv/i,
    wearable: /glass|watch|pebble/i,
  }

  for (const [device, regex] of Object.entries(devices)) {
    if (regex.test(userAgent)) return device
  }
  return 'unknown'
}

function getOSInfo(userAgent: string) {
  const os = {
    windows: /windows nt/i,
    macos: /macintosh|mac os x/i,
    ios: /iphone|ipad|ipod/i,
    android: /android/i,
    linux: /linux/i,
    unix: /x11/i,
  }

  for (const [name, regex] of Object.entries(os)) {
    if (regex.test(userAgent)) return name
  }
  return 'unknown'
}

async function getGeolocation(ip: string) {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`)
    const data = await response.json()
    return {
      country: data.country_name,
      city: data.city,
      region: data.region,
      latitude: data.latitude,
      longitude: data.longitude,
      postal: data.postal,
      timezone: data.timezone,
      currency: data.currency,
      org: data.org,
    }
  } catch (error) {
    console.error('Geolocation error:', error)
    return null
  }
} 