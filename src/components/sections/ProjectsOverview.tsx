import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useCustomTranslation';

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      image: 'https://via.placeholder.com/300x200',
      description: t('projects.items.ecommerce.description')
    },
    {
      title: t('projects.items.taskManagement.title'),
      image: 'https://via.placeholder.com/300x200',
      description: t('projects.items.taskManagement.description')
    },
    {
      title: t('projects.items.socialMedia.title'),
      image: 'https://via.placeholder.com/300x200',
      description: t('projects.items.socialMedia.description')
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box component="section" id="projects" py={isMobile ? 4 : isTablet ? 6 : 8}>
      <Typography variant="h2" textAlign="center" mb={4} component={motion.h2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {t('projects.title')}
      </Typography>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Grid container spacing={isMobile ? 2 : 4}>
          <AnimatePresence>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button variant="contained" color="primary">
                        {t('projects.learnMore')}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProjectsOverview;
