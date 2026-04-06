import { Box, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Star } from './components'
import { useBackgroundConfig } from './hooks'

interface AnimatedBackgroundProps {
  sectionId: string
  starCount?: number
  disableStars?: boolean
}

const DEFAULT_STAR_COUNT = 30

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  sectionId,
  starCount = DEFAULT_STAR_COUNT,
  disableStars = false
}) => {
  const theme = useTheme()
  const config = useBackgroundConfig(sectionId, starCount)

  const stars = useMemo(() => (
    disableStars ? null : config.stars.map((starConfig, index) => (
      <Star key={`star-${index}`} config={starConfig} />
    ))
  ), [disableStars, config.stars])

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: theme.palette.sections[sectionId as keyof typeof theme.palette.sections] || theme.palette.sections.aboutMe,
        opacity: 0.7,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      {stars}
    </Box>
  )
}

export default React.memo(AnimatedBackground)
