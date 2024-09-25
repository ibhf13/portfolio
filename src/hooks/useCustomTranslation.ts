import { useTranslation as useI18nTranslation, TFunction } from 'react-i18next';
import { useTranslationKey } from '../contexts/TranslationKeyContext';
import { useCallback } from 'react';

interface CustomTFunction extends TFunction {
  (key: string, options?: Record<string, unknown>): string;
}

export const useTranslation = (): {
  t: CustomTFunction;
  showKeys: boolean;
  toggleShowKeys: () => void;
  [key: string]: unknown;
} => {
  const { t: i18nT, ...rest } = useI18nTranslation();
  const { showKeys, setShowKeys } = useTranslationKey();

  const customT: CustomTFunction = useCallback((key, options) => {
    if (showKeys) {
      // Return the full key path
      return key;
    }
    return i18nT(key, options);
  }, [showKeys, i18nT]);

  const toggleShowKeys = useCallback(() => {
    setShowKeys((prevShowKeys) => !prevShowKeys);
  }, [setShowKeys]);

  return { t: customT, showKeys, toggleShowKeys, ...rest };
};
