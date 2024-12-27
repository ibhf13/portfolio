import deTranslations from '@/locales/Deutsch.json'
import enTranslations from '@/locales/English.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EN = 'EN',
  DE = 'DE',
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LANGUAGE_STORAGE_KEY = 'preferredLanguage'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      EN: { translation: enTranslations },
      DE: { translation: deTranslations },
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    fallbackLng: Language.DE,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
    nsSeparator: ':',
  })

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (savedLanguage && Object.values(Language).includes(savedLanguage as Language)) {
      return savedLanguage as Language
    }

    const browserLang = navigator.language.split('-')[0].toUpperCase()

    return browserLang === Language.DE ? Language.DE : Language.EN
  }

  const [language, setLanguage] = useState<Language>(getInitialLanguage())

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(language)
    }

    changeLanguage()
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
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
