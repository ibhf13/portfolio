// src/hooks/useCustomTranslation.ts

import { useTranslation as useI18nTranslation, TFunction } from 'react-i18next';
import { useTranslationKey } from '../contexts/TranslationKeyContext';
import { useCallback } from 'react';

interface CustomTFunction extends TFunction {
  (key: string, options?: Record<string, unknown>): string;
}

export const useTranslation = (): {
  t: CustomTFunction;
  i18n: unknown;
  showKeys: boolean;
  toggleShowKeys: () => void;
  [key: string]: unknown;
} => {
  const { t: i18nT, i18n, ...rest } = useI18nTranslation();
  const { showKeys, setShowKeys } = useTranslationKey();

  const customT: CustomTFunction = useCallback((key, options) => {
    if (showKeys) {
      return key;
    }
    const translated = i18nT(key, options);
    return translated;
  }, [showKeys, i18nT, i18n.language]);

  const toggleShowKeys = useCallback(() => {
    setShowKeys((prevShowKeys) => !prevShowKeys);
  }, [setShowKeys]);

  return { t: customT, i18n, showKeys, toggleShowKeys, ...rest };
};
