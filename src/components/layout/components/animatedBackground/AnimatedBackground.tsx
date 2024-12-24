import { Box, useTheme } from '@mui/material'
import React from 'react'
import { Star } from './components'
import { useBackgroundConfig } from './hooks'

interface AnimatedBackgroundProps {
  sectionId: string
  backgroundColor?: string
  backgroundImage?: string
  particleCount?: number
  starCount?: number
  disableParticles?: boolean
  disableStars?: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  sectionId,
  starCount = 100,
  disableStars = false
}) => {
  const theme = useTheme()
  const config = useBackgroundConfig(sectionId)

  const stars = React.useMemo(() => {
    if (disableStars) return null
    return Array.from({ length: starCount }, (_, index) => (
      <Star
        key={`star-${index}`}
        config={config.stars[index % config.stars.length]}
      />
    ))
  }, [starCount, config.stars, disableStars])

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${config.gradientColors.join(', ')})`,
        opacity: 0.7,
        transition: theme.transitions.create('background', {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      {stars}
    </Box>
  )
}

export default React.memo(AnimatedBackground)
