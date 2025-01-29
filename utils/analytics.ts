// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, any>
    ) => void
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
    })
  }
}

// Track events
export const trackEvent = ({
  category,
  action,
  label,
  value,
}: {
  category: string
  action: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track social interactions
export const trackSocialInteraction = ({
  network,
  action,
  target,
}: {
  network: string
  action: string
  target: string
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'social_interaction', {
      social_network: network,
      social_action: action,
      social_target: target,
    })
  }
}

// Track video interactions
export const trackVideoInteraction = ({
  action,
  label,
  value,
}: {
  action: 'play' | 'pause' | 'end'
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', `video_${action}`, {
      video_title: label,
      video_progress: value,
    })
  }
}

// Track user engagement
export const trackEngagement = ({
  scrollDepth,
  timeOnPage,
}: {
  scrollDepth: number
  timeOnPage: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'user_engagement', {
      scroll_depth: scrollDepth,
      time_on_page: timeOnPage,
    })
  }
}

// Track pod interactions in marketplace
export const trackPodInteraction = ({
  podName,
  action,
  price,
}: {
  podName: string
  action: 'view' | 'add_to_cart' | 'purchase'
  price: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      currency: 'EUR',
      value: price,
      items: [{
        item_id: podName,
        item_name: podName,
        price: price,
        currency: 'EUR',
      }]
    })
  }
} 