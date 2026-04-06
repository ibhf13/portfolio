import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

interface TranslationKeyContextType {
  showKeys: boolean
  toggleShowKeys: () => void
}

const TranslationKeyContext = createContext<TranslationKeyContextType | undefined>(undefined)

export const TranslationKeyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showKeys, setShowKeys] = useState(false)

  const toggleShowKeys = useCallback(() => {
    setShowKeys((prev) => !prev)
  }, [])

  const value = useMemo(() => ({ showKeys, toggleShowKeys }), [showKeys, toggleShowKeys])

  return (
    <TranslationKeyContext.Provider value={value}>
      {children}
    </TranslationKeyContext.Provider>
  )
}

export const useTranslationKey = (): TranslationKeyContextType => {
  const context = useContext(TranslationKeyContext)

  if (context === undefined) {
    throw new Error('useTranslationKey must be used within a TranslationKeyProvider')
  }

  return context
}
