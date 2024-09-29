import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';
import { containerVariants, itemVariants } from './ProjectsAnimation';

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box component="section" id="projects" py={isMobile ? 4 : isTablet ? 6 : 8}>
      <Typography
        variant="h2"
        textAlign="center"
        mb={4}
        component={motion.h2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t('projects.title')}
      </Typography>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Grid container spacing={isMobile ? 2 : 4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProjectsOverview;
