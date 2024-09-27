import React from 'react';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { calculateAge } from '../../utils/dateUtils';
import ProfileImage from './ProfileImage';
import ExperienceCard from './ExperienceCard';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
  const age: number = calculateAge(new Date('1994-01-01'));

  const experienceData = [
    { icon: <CodeIcon fontSize="large" />, years: 5, text: t('aboutMe.experiences.coding') },
    { icon: <SchoolIcon fontSize="large" />, years: 2, text: t('aboutMe.experiences.industry') },
    { icon: <EmojiEventsIcon fontSize="large" />, years: 4, text: t('aboutMe.experiences.projects') },
  ];

  const cardBackgroundColor = theme.palette.mode === 'light'
    ? 'rgba(255, 255, 255, 0.85)'
    : 'rgba(18, 18, 18, 0.85)';

  const cardBorderColor = theme.palette.mode === 'light'
    ? theme.palette.primary.main
    : theme.palette.primary.light;

  return (
    <Box position="relative" overflow="hidden" borderRadius={2}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <ProfileImage />
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div style={{ y }}>
              <Typography variant="h2" fontWeight="bold" mb={4}>
                {t('aboutMe.name')}
              </Typography>
              <Typography variant="h5" mb={2}>
                {t('aboutMe.subtitle', { age })}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('aboutMe.description', { age })}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('aboutMe.passion')}
              </Typography>
              <Typography variant="body1" mb={4}>
                {t('aboutMe.hobbies')}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Box p={4}>
          <Grid container spacing={4}>
            {experienceData.map((exp, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <ExperienceCard
                  icon={exp.icon}
                  years={exp.years}
                  text={exp.text}
                  index={index}
                  isMobile={isMobile}
                  backgroundColor={cardBackgroundColor}
                  borderColor={cardBorderColor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
