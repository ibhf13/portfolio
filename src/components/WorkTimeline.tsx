import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useCustomTranslation';

const WorkTimeline: React.FC = () => {
  const { t } = useTranslation();

  const workExperience = [
    { year: '2023', position: t('workTimeline.positions.senior'), company: t('workTimeline.companies.techCorp') },
    { year: '2021', position: t('workTimeline.positions.frontend'), company: t('workTimeline.companies.webSolutions') },
    { year: '2019', position: t('workTimeline.positions.junior'), company: t('workTimeline.companies.startupXYZ') },
  ];

  return (
    <Box component="section" id="work-timeline" py={8}>
      <Typography variant="h2" textAlign="center" mb={4}>
        {t('workTimeline.title')}
      </Typography>
      <Timeline position="alternate">
        {workExperience.map((experience, index) => (
          <TimelineItem key={experience.year}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography variant="h6">{experience.year}</Typography>
                <Typography>{experience.position}</Typography>
                <Typography color="textSecondary">{experience.company}</Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkTimeline;
