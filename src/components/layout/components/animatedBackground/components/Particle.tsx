import { motion } from 'framer-motion'
import React from 'react'
import { ParticleConfig, Shape } from '../types/animatedBackground.types'

interface ParticleProps {
  config: ParticleConfig
}

const shapeMap: Record<Shape, string> = {
  [Shape.SQUARE]: '0%',
  [Shape.TRIANGLE]: '50% 0%, 0% 100%, 100% 100%',
  [Shape.HEXAGON]: '25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%',
  [Shape.CIRCLE]: '50%'
}

const Particle: React.FC<ParticleProps> = ({ config }) => {
  const randomPosition = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        ...randomPosition,
        width: `${config.size}px`,
        height: `${config.size}px`,
        backgroundColor: config.color,
        opacity: config.opacity,
        clipPath: `polygon(${shapeMap[config.shape]})`,
        filter: config.blur ? `blur(${config.blur}px)` : 'none',
        willChange: 'transform',
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
}

export default React.memo(Particle)
