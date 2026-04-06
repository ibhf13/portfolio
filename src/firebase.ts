import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
}

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.appId)

export let firebaseApp: FirebaseApp | null = null
export let analytics: Analytics | null = null

if (isConfigured) {
  firebaseApp = initializeApp(firebaseConfig)

  if (typeof window !== 'undefined' && import.meta.env.PROD) {
    isSupported()
      .then((ok) => {
        if (ok && firebaseApp) {
          analytics = getAnalytics(firebaseApp)
        }
      })
      .catch(() => {
        // analytics not supported in this environment — silently ignore
      })
  }
} else if (import.meta.env.DEV) {
  console.warn('[firebase] config missing — analytics disabled')
}

export const trackPageView = (path: string) => {
  if (!analytics) return

  logEvent(analytics, 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : path,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
  })
}

export const trackEvent = (name: string, params?: Record<string, unknown>) => {
  if (!analytics) return

  logEvent(analytics, name, params)
}
