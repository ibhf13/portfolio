import { useTheme } from '@mui/material'
import { useMemo } from 'react'
import { BackgroundConfig } from '../types/animatedBackground.types'
import { generateStars } from '../utils/starUtils'

const useBackgroundConfig = (sectionId: string): BackgroundConfig => {
  const theme = useTheme()

  return useMemo(() => ({
    backgroundColor: theme.palette.sections[sectionId as keyof typeof theme.palette.sections] || theme.palette.background.default,
    stars: generateStars(150)
  }), [theme.palette.mode, sectionId])
}

export default useBackgroundConfig
