import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { AnimationType } from '@/styles/animations'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { WorkExperience } from '../types/workTimeline.types'

interface WorkDetailsCardProps {
    experience: WorkExperience
}

const WorkDetailsCard = ({ experience }: WorkDetailsCardProps) => {
    const theme = useTheme()
    const { itemVariants: variants } = useAnimatedSection({
        type: AnimationType.SlideInRight,
    })

    return (
        <motion.div
            variants={variants}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            tabIndex={0}
        >
            <Paper
                component="article"
                elevation={3}
                sx={{
                    p: theme.spacing(2),
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: theme.shadows[8],
                    },
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                        {experience.position}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {experience.company}
                    </Typography>
                    {experience.year && (
                        <Typography variant="body2" color="text.secondary">
                            {experience.year}
                        </Typography>
                    )}
                    <Typography variant="body2">
                        {experience.description}
                    </Typography>
                </Box>
            </Paper>
        </motion.div>
    )
}

export default WorkDetailsCard
