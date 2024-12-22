import { useTranslation } from '@/hooks/useCustomTranslation'
import { Alert, Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Project } from '../constants/projectsData'

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate(`/project/${project.id}`)
    }
    const handleComingSoon = () => {
        return (
            <Alert severity="info">
                {t('projects.comingSoon')}
            </Alert>
        )
    }
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
                <Button variant="contained" color="primary" onClick={project.isAvailable ? handleLearnMore : handleComingSoon}>
                    {t('projects.learnMore')}
                </Button>
            </Box>
        </Card>
    )
}

export default ProjectCard
