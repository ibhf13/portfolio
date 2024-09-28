import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Timeline } from '@mui/lab';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { WorkExperience } from './types';
import { workExperience } from './WorkTimelineData';
import { containerVariants } from './WorkTimelineAnimation';
import TimelineItem from './TimelineItem';

export interface WorkExperience {
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
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            ...(isMobile && {
              [`& .MuiTimelineItem-root:before`]: {
                flex: 0,
                padding: 0,
              },
            }),
          }}
        >
          {workExperience.map((experience: WorkExperience, index: number) => (
            <TimelineItem
              key={`${experience.position}-${index}`}
              experience={experience}
              index={index}
              totalItems={workExperience.length}
            />
          ))}
        </Timeline>
      </motion.div>
    </Box>
  );
};

export default WorkTimeline;
