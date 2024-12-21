import backgroundConfigs from '@/components/common/AnimatedBackground/BackgroundConfig'
import { BackgroundConfig } from '@/components/common/AnimatedBackground/types'
import { ThemeMode } from '@/types/theme.types'
import { useTheme } from '@mui/material'
import { useMemo } from 'react'
const useBackgroundConfig = (sectionId: string): BackgroundConfig => {
  const theme = useTheme()
  const configFunction = backgroundConfigs[sectionId] || backgroundConfigs.aboutMe

  return useMemo(() => {
    const config = configFunction(theme)
    return {
      ...config,
      gradientColors: config.gradientColors.map(color =>
        theme.palette.mode === ThemeMode.DARK ? `${color}33` : `${color}4D`
      ),
    }
  }, [configFunction, theme])
}

export default useBackgroundConfig
