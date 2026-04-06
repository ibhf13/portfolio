import { useTranslationKey } from '@/contexts/TranslationKeyContext'
import type { TFunction } from 'i18next'
import { useCallback } from 'react'
import { useTranslation as useI18nTranslation } from 'react-i18next'

interface CustomTranslationReturn {
  t: TFunction
  i18n: ReturnType<typeof useI18nTranslation>['i18n']
  ready: boolean
  showKeys: boolean
  toggleShowKeys: () => void
}

export const useTranslation = (): CustomTranslationReturn => {
  const { t: i18nT, i18n, ready } = useI18nTranslation()
  const { showKeys, toggleShowKeys } = useTranslationKey()

  const customT = useCallback(
    (key: string, options?: Record<string, unknown>) => (showKeys ? key : i18nT(key, options)),
    [showKeys, i18nT]
  ) as unknown as TFunction

  return { t: customT, i18n, ready, showKeys, toggleShowKeys }
}
