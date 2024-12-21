import { Box, useTheme } from '@mui/material'
import React from 'react'
import { BACKGROUND_Z_INDEX } from '../constants'
import useBackgroundConfig from '../hooks/useBackgroundConfig'
import Particle from './Particle'
import Star from './Star'

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
  backgroundColor = 'transparent',
  backgroundImage,
  particleCount = 50,
  starCount = 100,
  disableParticles = false,
  disableStars = false
}) => {
  const theme = useTheme()
  const config = useBackgroundConfig(sectionId)


  const particles = React.useMemo(() => {
    if (disableParticles) return null
    return Array.from({ length: particleCount }, (_, index) => (
      <Particle
        key={`particle-${index}`}
        config={config.particles[index % config.particles.length]}
      />
    ))
  }, [particleCount, config.particles, disableParticles])

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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: BACKGROUND_Z_INDEX,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: theme.transitions.create(['background-color', 'background-image'], {
            duration: theme.transitions.duration.standard,
          }),
        }}
      />
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
      />
      <Box
        component="div"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {particles}
        {stars}
      </Box>
    </Box>
  )
}

export default React.memo(AnimatedBackground)
