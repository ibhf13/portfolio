import { motion } from 'framer-motion'
import React from 'react'
import { ParticleConfig, Shape } from '../types/animatedBackground.types'

interface ParticleProps {
  config: ParticleConfig
}

const getParticleShape = (shape: Shape): string => {
  switch (shape) {
    case Shape.SQUARE:
      return '0%'
    case Shape.TRIANGLE:
      return '50% 0%, 0% 100%, 100% 100%'
    case Shape.HEXAGON:
      return '25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%'
    default:
      return '50%'
  }
}

const Particle: React.FC<ParticleProps> = ({ config }) => (
  <motion.div
    style={{
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${config.size}px`,
      height: `${config.size}px`,
      backgroundColor: config.color,
      opacity: config.opacity,
      clipPath: `polygon(${getParticleShape(config.shape)})`,
      filter: config.blur ? `blur(${config.blur}px)` : 'none',
    }}
    animate={{
      scale: config.animation.scale,
      x: config.animation.x,
      y: config.animation.y,
      rotate: config.animation.rotate,
    }}
    transition={{
      duration: config.animation.duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    }}
  />
)

export default Particle
