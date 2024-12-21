import deTranslations from '@/locales/Deutsch.json'
import enTranslations from '@/locales/English.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EN = 'en',
  DE = 'de',
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
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
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0]
    return browserLang === Language.DE ? Language.DE : Language.EN
  }

  const [language, setLanguage] = useState<Language>(getBrowserLanguage())

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(language)
    }
    changeLanguage()
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
