import { useTranslation } from '@/hooks/useCustomTranslation'
import { Alert, Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectDetailsProps } from '../types/project.types'

const ProjectCard: React.FC<ProjectDetailsProps> = ({ project }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)

    const handleLearnMore = () => {
        navigate(`/project/${project.id}`)
    }

    const handleComingSoon = () => {
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={project.isAvailable ? handleLearnMore : handleComingSoon}
                >
                    {t('projects.learnMore')}
                </Button>
                {showAlert && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                        {t('projects.comingSoon')}
                    </Alert>
                )}
            </Box>
        </Card>
    )
}

export default ProjectCard
