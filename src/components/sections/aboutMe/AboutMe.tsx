import React from 'react';
import { Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { calculateAge } from '../../../utils/dateUtils';
import ProfileImage from './ProfileImage';
import ExperienceCard from './ExperienceCard';
import { containerVariants, itemVariants } from './AboutMeAnimations';
import { useExperienceData } from './AboutMeData';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
  const age: number = calculateAge(new Date('1994-01-01'));
  const experienceData = useExperienceData();

  return (
    <Box position="relative" overflow="hidden" borderRadius={2}>
      <Container maxWidth="lg" >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4} alignItems="center" pb={isMobile ? 9 :0}>
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
                <ExperienceCard {...exp} index={index} isMobile={isMobile} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
