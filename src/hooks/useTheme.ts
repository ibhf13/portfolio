import createAppTheme from '@/styles/theme'
import { DEFAULT_THEME_MODE, THEME_STORAGE_KEY, ThemeMode } from '@/types/theme.types'
import { useState } from 'react'

const getInitialThemeMode = (): ThemeMode => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  return (savedTheme === ThemeMode.LIGHT || savedTheme === ThemeMode.DARK) ? savedTheme : DEFAULT_THEME_MODE
}

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>(getInitialThemeMode)
  const [key, setKey] = useState(0)

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode: ThemeMode = prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
      localStorage.setItem(THEME_STORAGE_KEY, newMode)
      setKey((prevKey) => prevKey + 1)
      return newMode
    })
  }

  const theme = createAppTheme(mode)

  return { mode, theme, key, toggleTheme } as const
}
