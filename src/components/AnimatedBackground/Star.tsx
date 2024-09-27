import React from 'react';
import { motion } from 'framer-motion';
import { StarConfig } from './types';
import useStarAnimation from '../../hooks/useStarAnimation';

interface StarProps {
  config: StarConfig;
}

const createStarShape = (size: number): string => {
  const innerRadius = size / 2;
  const outerRadius = size;
  const points = 5;
  let path = `M ${outerRadius} 0 `;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / points;
    const x = radius * Math.sin(angle);
    const y = -radius * Math.cos(angle);
    path += `L ${x} ${y} `;
  }

  path += 'Z';
  return path;
};

const Star: React.FC<StarProps> = ({ config }) => {
  const starGlowAnimation = useStarAnimation();

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
  );
};

export default Star;
