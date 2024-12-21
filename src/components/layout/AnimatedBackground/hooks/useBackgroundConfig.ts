import { ThemeMode } from '@/types/theme.types'
import { useTheme } from '@mui/material'
import { useMemo } from 'react'
import { BackgroundConfig } from '../types/animatedBackground.types'
import backgroundConfigs from '../utils/backgroundObjectCreator'

const useBackgroundConfig = (sectionId: string): BackgroundConfig => {
  const theme = useTheme()
  const configFunction = backgroundConfigs[sectionId] || backgroundConfigs.aboutMe

  return useMemo(() => {
    const config = configFunction(theme)
    const opacity = theme.palette.mode === ThemeMode.DARK ? '33' : '4D'

    return {
      ...config,
      gradientColors: config.gradientColors.map((color: string) => `${color}${opacity}`),
      isLightMode: theme.palette.mode === ThemeMode.LIGHT
    }
  }, [configFunction, theme.palette.mode])
}

export default useBackgroundConfig
