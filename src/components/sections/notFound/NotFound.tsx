import Seo from '@/components/Seo'
import { useTranslation } from '@/hooks/useCustomTranslation'
import HomeIcon from '@mui/icons-material/Home'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { Box, Button, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <Container maxWidth="sm">
            <Seo
                title={`${t('notFound.title')} — ${t('seo.author')}`}
                description={t('notFound.description')}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'calc(100dvh - 80px)',
                    textAlign: 'center',
                    gap: 2,
                }}
            >
                <SearchOffIcon
                    aria-hidden="true"
                    sx={{
                        fontSize: 100,
                        color: 'primary.main',
                        mb: 2,
                    }}
                />
                <Typography
                    aria-hidden="true"
                    component={motion.div}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    sx={{
                        fontSize: { xs: '4rem', sm: '6rem' },
                        fontWeight: 'bold',
                        background: (theme) =>
                            `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 2,
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h4"
                    component={motion.h1}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    gutterBottom
                >
                    {t('notFound.title')}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    component={motion.p}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {t('notFound.description')}
                </Typography>
                <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    variant="contained"
                    size="large"
                    startIcon={<HomeIcon />}
                    onClick={handleGoHome}
                    sx={{
                        mt: 4,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                    }}
                >
                    {t('notFound.button')}
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound
