import { useTranslation } from '@/hooks/useCustomTranslation';
import { Alert, Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ProjectDetailsProps } from '../types/project.types';

const ProjectCard: React.FC<ProjectDetailsProps> = ({ project }) => {
    const { t } = useTranslation()
    const [showAlert, setShowAlert] = useState(false)
    const alertTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => () => {
        if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current)
    }, [])

    const handleComingSoon = () => {
        setShowAlert(true)
        if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current)
        alertTimeoutRef.current = setTimeout(() => setShowAlert(false), 3000)
    }

    const buttonLabel = project.isAvailable
        ? t('projects.learnMore')
        : t('projects.comingSoon')

    return (
        <Card
            sx={{
                width: { xs: '100%', md: '400px' },
                height: { xs: '100%', md: '400px' },
                overflow: 'hidden',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={t(project.title)}
                loading="lazy"
                sx={{
                    objectFit: 'contain',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? theme.palette.primary.light : 'transparent',
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {t(project.title)}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {t(project.description)}
                </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
                {project.isAvailable ? (
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to={`/project/${encodeURIComponent(project.id)}`}
                    >
                        {buttonLabel}
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleComingSoon}
                    >
                        {buttonLabel}
                    </Button>
                )}
                {showAlert && (
                    <Alert severity="info" role="status" sx={{ mt: 2 }}>
                        {t('projects.comingSoon')}
                    </Alert>
                )}
            </Box>
        </Card>
    )
}

export default ProjectCard
