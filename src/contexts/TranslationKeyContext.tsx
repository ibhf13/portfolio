import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationKeyContextType {
  showKeys: boolean;
  setShowKeys: React.Dispatch<React.SetStateAction<boolean>>;
}

const TranslationKeyContext = createContext<TranslationKeyContextType | undefined>(undefined);

export const TranslationKeyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showKeys, setShowKeys] = useState(false);

  return (
    <TranslationKeyContext.Provider value={{ showKeys, setShowKeys }}>
      {children}
    </TranslationKeyContext.Provider>
  );
};

export const useTranslationKey = (): TranslationKeyContextType => {
  const context = useContext(TranslationKeyContext);
  if (context === undefined) {
    throw new Error('useTranslationKey must be used within a TranslationKeyProvider');
  }
  return context;
};
