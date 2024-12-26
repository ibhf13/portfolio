import { Box, useTheme } from '@mui/material'
import React from 'react'
import { Star } from './components'
import { useBackgroundConfig } from './hooks'

interface AnimatedBackgroundProps {
  sectionId: string
  starCount?: number
  disableStars?: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  sectionId,
  starCount = 100,
  disableStars = false
}) => {
  const theme = useTheme()
  const config = useBackgroundConfig(sectionId)

  const stars = disableStars ? null : (
    Array.from({ length: starCount }, (_, index) => (
      <Star
        key={`star-${index}`}
        config={config.stars[index % config.stars.length]}
      />
    ))
  )

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
        '@keyframes twinkle': {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 }
        }
      }}
    >
      {stars}
    </Box>
  )
}

export default React.memo(AnimatedBackground)
