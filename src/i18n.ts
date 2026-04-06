import deTranslations from '@/locales/Deutsch.json'
import enTranslations from '@/locales/English.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EN = 'EN',
  DE = 'DE',
}

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
    fallbackLng: Language.EN,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
    nsSeparator: ':',
  })
  .catch((err) => {
    if (import.meta.env.DEV) console.error('i18n init failed', err)
  })

export default i18n
