import i18n, { Language } from '@/i18n'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LANGUAGE_STORAGE_KEY = 'preferredLanguage'

const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (savedLanguage && Object.values(Language).includes(savedLanguage as Language)) {
      return savedLanguage as Language
    }
  } catch {
    // ignore
  }

  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0].toUpperCase()

    return browserLang === Language.DE ? Language.DE : Language.EN
  }

  return Language.EN
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export { Language }

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language).catch((err) => {
        if (import.meta.env.DEV) console.error('changeLanguage failed', err)
      })
    }
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage: handleSetLanguage }),
    [language, handleSetLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
