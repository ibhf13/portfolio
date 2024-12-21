import { motion } from 'framer-motion'
import React from 'react'
import useStarAnimation from '../hooks/useStarAnimation'
import { StarConfig } from '../types/animatedBackground.types'
import { createStarShape } from '../utils/starUtils'

interface StarProps {
  config: StarConfig
}

const Star: React.FC<StarProps> = ({ config }) => {
  const starGlowAnimation = useStarAnimation()

  return (
    <motion.svg
      width={config.size * 2}
      height={config.size * 2}
      viewBox={`-${config.size} -${config.size} ${config.size * 2} ${config.size * 2}`}
      style={{
        position: 'absolute',
        top: config.position.y,
        left: config.position.x,
      }}
      animate={starGlowAnimation}
    >
      <motion.path
        d={createStarShape(config.size)}
        fill={config.color}
        filter={`drop-shadow(0 0 ${config.size / 2}px ${config.color})`}
      />
    </motion.svg>
  )
}

export default Star
