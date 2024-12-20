import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useTranslationKey } from '../contexts/TranslationKeyContext';
import { useCallback } from 'react';
import { TFunction } from 'i18next';

export const useTranslation = (): {
  t: TFunction;
  i18n: unknown;
  showKeys: boolean;
  toggleShowKeys: () => void;
  [key: string]: unknown;
} => {
  const { t: i18nT, i18n, ...rest } = useI18nTranslation();
  const { showKeys, setShowKeys } = useTranslationKey();

  const customT = useCallback((key: string, options?: Record<string, unknown>) => {
    if (showKeys) {
      return key;
    }
    return i18nT(key, options);
  }, [showKeys, i18nT]) as TFunction;

  const toggleShowKeys = useCallback(() => {
    setShowKeys((prevShowKeys) => !prevShowKeys);
  }, [setShowKeys]);

  return { t: customT, i18n, showKeys, toggleShowKeys, ...rest };
};
