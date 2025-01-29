'use client'

import { useEffect } from 'react'
import { trackPageView } from '@/utils/analytics'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views when pathname changes
    trackPageView(pathname)
  }, [pathname])

  return null
} 