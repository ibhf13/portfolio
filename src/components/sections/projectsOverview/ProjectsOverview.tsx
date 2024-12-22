import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { ProjectCard } from './components'
import projects from './constants/projectsData'

const ProjectsOverview: React.FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { itemVariants } = useAnimatedSection({ type: AnimationType.Slide })

  return (
    <Box component="section" id="projects" py={isMobile ? 4 : 8} display="flex" flexDirection="column" gap={4}>
      <Typography variant="h2" textAlign="center">
        {t('projects.title')}
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProjectsOverview
