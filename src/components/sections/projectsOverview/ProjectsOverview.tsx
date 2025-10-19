import { useTranslation } from '@/hooks/useCustomTranslation'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { ProjectCarousel } from './components'
import projects from './constants/projectsData'

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box component="section" id="projects" py={isMobile ? 4 : 8} display="flex" flexDirection="column" gap={4}>
      <Typography variant="h2" textAlign="center">
        {t('projects.title')}
      </Typography>
      <ProjectCarousel projects={projects} />
    </Box>
  )
}

export default ProjectsOverview
