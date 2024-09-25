import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useCustomTranslation';

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <Box component="section" id="projects" py={8}>
      <Typography variant="h2" textAlign="center" mb={4}>
        {t('projects.title')}
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
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
      </Grid>
    </Box>
  );
};

export default ProjectsOverview;
