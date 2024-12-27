import { useTranslation } from '@/hooks/useCustomTranslation'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { Box, Chip, IconButton, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { ProjectDetailsProps } from '../types/project.types'
import ImageCarousel from './imageCarousel/ImageCarousel'


const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    const { t } = useTranslation()

    return (
        <>
            <Box display="flex" justifyContent="center" gap={2} pt={{ xs: 2, md: 0 }} mb={4}>
                {project.logo && (
                    <Box
                        component="img"
                        src={project.logo}
                        alt={t(project.title)}
                        sx={{ width: 60, height: 60, objectFit: 'contain' }}
                    />
                )}
                <Typography variant="h3">{t(project.title)}</Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="center" p={2} gap={2}>

                <Box display="flex" flexDirection="column" justifyContent="center" flex={1}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box display="flex" flexDirection="column" gap={2} pb={4}>
                            <Typography variant="h5" gutterBottom>
                                {t('projects.problemSolution')}
                            </Typography>
                            <Typography paragraph>{t(project.problem)}</Typography>
                            <Typography paragraph>{t(project.solution)}</Typography>
                        </Box>
                        <Typography variant="h5" gutterBottom>
                            {t('projects.techStack')}
                        </Typography>
                        <Box display="flex" gap={1} flexWrap="wrap" mb={4}>
                            {project.techStack.map((tech) => (
                                <Chip key={tech} label={tech} color="primary" />
                            ))}
                        </Box>

                    </motion.div>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="center" flex={1} >
                    <Box display="flex" flexDirection="column" justifyContent="center" flex={1} >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ImageCarousel images={project.screenshots} />
                        </motion.div>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" gap={2} >
                        {project.githubUrl && (
                            <IconButton
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                }}

                            >
                                <GitHubIcon />
                            </IconButton>
                        )}
                        {project.demoUrl && (
                            <IconButton
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live Demo"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                }}
                            >
                                <LaunchIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default ProjectDetails 