import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  icon: React.ReactNode;
  years: number;
  text: string;
  index: number;
  isMobile: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon,
  years,
  text,
  index,
  isMobile,
}) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Box
        textAlign="center"
        p={3}
        borderRadius={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[3],
          border: `2px solid ${theme.palette.primary.main}`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: theme.shadows[10],
            border: `2px solid ${theme.palette.primary.light}`,
          },
        }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          style={{ color: theme.palette.primary.main }}
        >
          {icon}
        </motion.div>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          fontWeight="bold"
          my={2}
          color="primary"
        >
          {years}+
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </motion.div>
  );
};

export default ExperienceCard;
