import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../../../resources/images/Profile.jpg';

const ProfileImage: React.FC = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          width: 250,
          height: 250,
          margin: 'auto',
          borderRadius: '50%',
          border: `4px solid ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[10],
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Ibrahim Klusmann"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '100% 10%',
            transform: 'scale(1.4) translateX(-5%)',
          }}
        />
      </Box>
    </motion.div>
  );
};

export default ProfileImage;
