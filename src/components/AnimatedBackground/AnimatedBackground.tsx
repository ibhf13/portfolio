import React from 'react';
import { Box } from '@mui/material';
import useBackgroundConfig from '../../hooks/useBackgroundConfig';
import Particle from './Particle';
import Star from './Star';

interface AnimatedBackgroundProps {
  sectionId: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  sectionId,
  backgroundColor = 'transparent',
  backgroundImage
}) => {
  const config = useBackgroundConfig(sectionId);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '100%',
        width: '90%',
        maxWidth: '90%',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Background layer */}
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
        }}
      />

      {/* Gradient layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${config.gradientColors.join(', ')})`,
        }}
      />

      {/* Particles and stars layer */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {config.particles.map((particleConfig, index) => (
          <Particle key={`particle-${index}`} config={particleConfig} />
        ))}
        {config.stars.map((starConfig, index) => (
          <Star key={`star-${index}`} config={starConfig} />
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedBackground;
