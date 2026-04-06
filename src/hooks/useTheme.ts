import createAppTheme from '@/styles/theme'
import { DEFAULT_THEME_MODE, THEME_STORAGE_KEY, ThemeMode } from '@/types/theme.types'
import { useCallback, useMemo, useState } from 'react'


const getInitialThemeMode = (): ThemeMode => {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    return (savedTheme === ThemeMode.LIGHT || savedTheme === ThemeMode.DARK) ? savedTheme : DEFAULT_THEME_MODE
  } catch {
    return DEFAULT_THEME_MODE
  }
}

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>(getInitialThemeMode)

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode: ThemeMode = prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT

      try {
        localStorage.setItem(THEME_STORAGE_KEY, newMode)
      } catch {
        // ignore (privacy mode / quota)
      }

      return newMode
    })
  }, [])

  const theme = useMemo(() => createAppTheme(mode), [mode])

  return { mode, theme, toggleTheme }
}
