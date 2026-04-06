import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/manrope'

import emailjs from '@emailjs/browser'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EMAILJS_PUBLIC_KEY } from './components/sections/contactForm/constants/contactForm.constants'
import './firebase'

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
} else if (import.meta.env.DEV) {
  console.error('EMAILJS_PUBLIC_KEY is not set — contact form will not be functional.')
}

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error('Root element #root not found')
}

ReactDOM.createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
