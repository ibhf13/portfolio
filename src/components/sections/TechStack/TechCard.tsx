import React, { useState } from 'react';
import { Paper, Typography, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { TechCardProps } from './types';
import { cardVariants, iconVariants } from './TechStackAnimations';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { styled, useTheme } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease-in-out',
}));

const IconWrapper = styled(motion.div, {
    shouldForwardProp: (prop) => prop !== '$isActive' && prop !== '$bgcolor' && prop !== '$needsWhiteBg',
  })<{ $isActive: boolean; $bgcolor: string; $needsWhiteBg: boolean }>(({ $isActive, $bgcolor, $needsWhiteBg, theme }) => ({
    backgroundColor: $isActive ? $bgcolor : 'transparent',
    borderRadius: '50%',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    height: '64px',
    transition: 'background-color 0.3s ease-in-out',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90%',
      backgroundColor: $needsWhiteBg ? theme.palette.mode ==='dark' ? '#ffffff' : '#c2c9d6' : 'transparent',
      borderRadius: '50%',
      zIndex: 0,
    },
  }));

const TechIcon = styled('img')<{ isExpress: boolean; isActive: boolean; }>(
  ({ isExpress, isActive, }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: isExpress && isActive ? 'invert(1) brightness(2) contrast(150%)' : 'none',
    transition: 'filter 0.3s ease-in-out',
    position: 'relative',
    zIndex: 1,
  })
);

const TechCard: React.FC<TechCardProps> = ({ tech, index }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const needsWhiteBg = tech.name === 'MongoDB' || tech.name === 'Express';

  const handleCardStyle = {
    boxShadow: isActive ? `0 0 15px ${tech.color}` : theme.shadows[3],
    background: isActive
      ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${tech.color}22 100%)`
      : theme.palette.background.paper,
  };

  const handleActivation = (active: boolean) => () => setIsActive(active);

  return (
    <Tooltip title={t(`techStack.technologies.${tech.translationKey}.description`)}>
      <motion.div
        variants={cardVariants}
        custom={index}
        whileHover="hover"
        whileTap="tap"
        onHoverStart={handleActivation(true)}
        onHoverEnd={handleActivation(false)}
        onTapStart={handleActivation(true)}
        onTap={handleActivation(false)}
      >
        <StyledPaper elevation={3} sx={handleCardStyle}>
          <IconWrapper variants={iconVariants} $isActive={isActive} $bgcolor={tech.backgroundColor || tech.color} $needsWhiteBg={needsWhiteBg}>
            <TechIcon
              src={tech.icon}
              alt={`${tech.name} icon`}
              $isExpress={tech.name === 'Express'}
              $isActive={isActive}
              $needsWhiteBg={needsWhiteBg}
            />
          </IconWrapper>
          <Typography variant="body1" mt={2} textAlign="center" fontWeight="medium">
            {t(`techStack.technologies.${tech.translationKey}.name`)}
          </Typography>
        </StyledPaper>
      </motion.div>
    </Tooltip>
  );
};

export default TechCard;
