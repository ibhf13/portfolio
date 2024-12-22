import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getRouterConfig } from './config/router'
import { LanguageProvider } from './contexts/LanguageContext'
import { TranslationKeyProvider } from './contexts/TranslationKeyContext'
import { useTheme } from './hooks/useTheme'

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const router = createBrowserRouter(
    getRouterConfig({ theme, toggleTheme })
  )

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </TranslationKeyProvider>
    </LanguageProvider>
  )
}

export default App
