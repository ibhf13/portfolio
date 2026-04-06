import { Box } from '@mui/material'
import React from 'react'
import { StarConfig } from '../types/animatedBackground.types'

interface StarProps {
  config: StarConfig
}

const Star: React.FC<StarProps> = ({ config }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: config.position.y,
        left: config.position.x,
        width: config.size,
        height: config.size,
        backgroundColor: config.color,
        borderRadius: '50%',
        animation: 'twinkle 1.5s infinite ease-in-out alternate',
        animationDelay: `${config.animationDelay}s`,
      }}
    />
  )
}

export default React.memo(Star)
