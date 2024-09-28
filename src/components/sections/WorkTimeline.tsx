import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Grid, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { useInView } from 'react-intersection-observer';

interface WorkExperience {
  position: string;
  company: string;
  description: string;
  logo: string;
  year?: string;
}

const WorkTimeline: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const workExperience: WorkExperience[] = [
    {
      position: t('workTimeline.positions.frontend'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.frontend'),
      logo: "",
      year: '2023 - Heute',
    },
    {
      position: t('workTimeline.positions.vb'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.vb'),
      logo: "",
      year: '2023',
    },
    {
      position: t('workTimeline.positions.support'),
      company: t('workTimeline.companies.concentrix'),
      description: t('workTimeline.description.support'),
      logo: "",
      year: '2019-2021',
    },
    {
      position: "Student",
      company: t('workTimeline.companies.uos'),
      description: t('workTimeline.description.student'),
      logo: "",
      year: '2018-2023',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    }
  };

  const getImageSize = () => {
    if (isMobile) return 60;
    if (isTablet) return 70;
    return 80;
  };

  return (
    <Box
      component="section"
      id="workTimeline"
      py={isMobile ? 4 : isTablet ? 6 : 8}
      sx={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h2" textAlign="center" mb={6} fontWeight="bold">
          {t('workTimeline.title')}
        </Typography>
      </motion.div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Timeline  position={isMobile ? "right" : "alternate"}
  sx={{
    ...(isMobile && {
      [`& .MuiTimelineItem-root:before`]: {
        flex: 0,
        padding: 0,
      },
    }),
  }}>
          {workExperience.map((experience, index) => (
            <TimelineItem key={`${experience.position}-${index}`}>
              <TimelineSeparator>
                {index !== 0 && <TimelineConnector />}
                <motion.div variants={dotVariants}>
                  <TimelineDot
                    sx={{
                      boxShadow: 3,
                      p: 0,
                      border: `2px solid ${theme.palette.primary.main}`,
                      overflow: 'hidden',
                      width: getImageSize(),
                      height: getImageSize(),
                    }}
                  >
                    <motion.img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    />
                  </TimelineDot>
                </motion.div>
                {index !== workExperience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: theme.spacing(2),
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: theme.shape.borderRadius,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          <Typography variant="h6" color="primary" fontWeight="bold">
                            {experience.position}
                          </Typography>
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {experience.company}
                          </Typography>
                        </motion.div>
                      </Grid>
                      {experience.year && (
                        <Grid item xs={12}>
                          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Typography variant="body2" color="textSecondary">
                              {experience.year}
                            </Typography>
                          </motion.div>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <Typography variant="body2">
                            {experience.description}
                          </Typography>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Box>
  );
};

export default WorkTimeline;
