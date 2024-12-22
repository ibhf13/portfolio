import { Box, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { ExperienceCardProps } from '../types/aboutMe.types'

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    icon,
    years,
    text,
    isMobile,
}) => {
    const theme = useTheme()

    return (
        <Box
            textAlign="center"
            p={3}
            borderRadius={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                boxShadow: theme.shadows[3],
                border: `2px solid ${theme.palette.primary.main}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: theme.shadows[10],
                    border: `2px solid ${theme.palette.secondary.light}`,
                },
            }}
        >
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.2 }}
                style={{ color: theme.palette.primary.main }}
            >
                {icon}
            </motion.div>
            <Typography
                variant={isMobile ? 'h4' : 'h3'}
                fontWeight="bold"
                my={2}
                color="primary"
            >
                {years}+
            </Typography>
            <Typography variant="body1">{text}</Typography>
        </Box>
    )
}

export default ExperienceCard
