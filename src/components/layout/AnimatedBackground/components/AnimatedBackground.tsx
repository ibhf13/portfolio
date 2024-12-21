import { Box, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import useBackgroundConfig from '../hooks/useBackgroundConfig'
import Particle from './Particle'
import Star from './Star'

interface AnimatedBackgroundProps {
  sectionId: string
  backgroundColor?: string
  backgroundImage?: string
  particleCount?: number
  starCount?: number
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  sectionId,
  backgroundColor = 'transparent',
  backgroundImage,
  particleCount = 50,
  starCount = 100
}) => {
  const theme = useTheme()
  const config = useBackgroundConfig(sectionId)

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, index) => (
      <Particle key={`particle-${index}`} config={config.particles[index % config.particles.length]} />
    ))
  }, [config.particles, particleCount])

  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, index) => (
      <Star key={`star-${index}`} config={config.stars[index % config.stars.length]} />
    ))
  }, [config.stars, starCount])

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${config.gradientColors.join(', ')})`,
          opacity: 0.7,
          transition: theme.transitions.create('background', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      />
      <Box
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

export default AnimatedBackground
