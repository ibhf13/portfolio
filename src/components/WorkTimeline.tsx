import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useCustomTranslation';

// Import company logos
//import concentrixLogo from '../resources/company-logos/concentrix.png';
//import e3dcLogo from '../resources/company-logos/e3dc.png';
//import uosLogo from '../resources/company-logos/uos.png';

interface WorkExperience {
  year: string;
  position: string;
  company: string;
  description: string;
  logo: string;
}

const WorkTimeline: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const workExperience: WorkExperience[] = [
    {
      year: '2023',
      position: t('workTimeline.positions.frontend'),
      company: t('workTimeline.companies.concentrix'),
      description: t('workTimeline.description.frontend'),
      logo: "" ,
    },
    {
      year: '2021',
      position: t('workTimeline.positions.vb'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.vb'),
      logo: "",
    },
    {
      year: '2019',
      position: t('workTimeline.positions.support'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.support'),
      logo: "",
    },
    {
      year: '2015-2019',
      position: "Student",
      company: t('workTimeline.companies.uos'),
      description: t('workTimeline.description.student'),
      logo: "",
    },
  ];

  return (
    <Box component="section" id="workTimeline" py={8}>
      <Typography variant="h2" textAlign="center" mb={6} fontWeight="bold">
        {t('workTimeline.title')}
      </Typography>
      <Timeline position={isMobile ? "right" : "alternate"}>
        {workExperience.map((experience, index) => (
          <TimelineItem key={experience.year}>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDot
                  sx={{
                    boxShadow: 3,
                    p: 0,
                    border: `2px solid ${theme.palette.primary.main}`,
                    overflow: 'hidden',
                  }}
                >
                  <motion.img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: 'cover',
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {experience.year}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {experience.position}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {experience.company}
                </Typography>
                <Typography variant="body2">
                  {experience.description}
                </Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkTimeline;
