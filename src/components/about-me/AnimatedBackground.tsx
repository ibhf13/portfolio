import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      position="absolute"
      top={80} // Increased this value to add space below the header
      left={16}
      right={16}
      bottom={16}
      zIndex={0}
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.common.white}88, ${theme.palette.grey[100]}88)`,
        borderRadius: '16px', // Added border radius for a softer look
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}09, ${theme.palette.primary.main}00)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}09, ${theme.palette.secondary.main}00)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
