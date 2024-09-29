import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { useTranslation } from '../../../hooks/useCustomTranslation';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={t(project.title)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t(project.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(project.description)}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" color="primary">
          {t('projects.learnMore')}
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
