import { useTheme } from '@mui/material'
import { useMemo } from 'react'
import { BackgroundConfig } from '../types/animatedBackground.types'
import { generateStars } from '../utils/starUtils'

const useBackgroundConfig = (sectionId: string, count = 30): BackgroundConfig => {
  const theme = useTheme()

  return useMemo(() => ({
    backgroundColor: theme.palette.sections[sectionId as keyof typeof theme.palette.sections] || theme.palette.background.default,
    stars: generateStars(count),
  }), [theme, sectionId, count])
}

export default useBackgroundConfig
