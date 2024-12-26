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
        boxShadow: `0 0 ${config.size}px ${config.color}`,
        animation: 'twinkle 1.5s infinite ease-in-out alternate',
      }}
    />
  )
}

export default React.memo(Star)
