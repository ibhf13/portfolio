import React from 'react';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, Variants, useViewportScroll, useTransform } from 'framer-motion';
import { calculateAge } from '../../utils/dateUtils';
import ProfileImage from './ProfileImage';
import ExperienceCard from './ExperienceCard';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface Experience {
  icon: React.ReactNode;
  years: number;
  text: string;
}

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
  const age: number = calculateAge(new Date('1994-01-01'));

  const experienceData: Experience[] = [
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  return (
    <Box position="relative" overflow="hidden" borderRadius={2}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <ProfileImage />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <motion.div style={{ y }}>
                <motion.div variants={itemVariants}>
                  <Typography variant="h2" fontWeight="bold" mb={4}>
                    {t('aboutMe.name')}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography variant="h5" mb={2}>
                    {t('aboutMe.subtitle', { age })}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" paragraph>
                    {t('aboutMe.description', { age })}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" paragraph>
                    {t('aboutMe.passion')}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" mb={4}>
                    {t('aboutMe.hobbies')}
                  </Typography>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Box p={isMobile ? 2 : isTablet ? 3 : 4}>
          <Grid container spacing={isMobile ? 2 : isTablet ? 3 : 4}>
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
