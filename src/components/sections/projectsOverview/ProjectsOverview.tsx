import { useTranslation } from '@/hooks/useCustomTranslation'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { ProjectCarousel } from './components'
import projects from './constants/projectsData'

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      id="projects"
      aria-labelledby="projects-title"
      py={{ xs: 4, sm: 8 }}
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Typography id="projects-title" variant="h2" textAlign="center">
        {t('projects.title')}
      </Typography>
      <ProjectCarousel projects={projects} />
    </Box>
  )
}

export default ProjectsOverview
