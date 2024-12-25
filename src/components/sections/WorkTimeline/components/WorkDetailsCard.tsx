import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { AnimationType } from '@/styles/animations'
import { Grid, Paper, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { WorkExperience } from '../types/workTimeline.types'


const WorkDetailsCard = ({ experience }: { experience: WorkExperience }) => {
    const theme = useTheme()
    const { itemVariants: variants } = useAnimatedSection({
        type: AnimationType.SlideInRight,
    })


    return (
        <motion.div variants={variants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Paper
                elevation={3}
                sx={{
                    p: theme.spacing(2),
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: theme.shadows[8],
                    },
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                            {experience.position}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {experience.company}
                        </Typography>
                    </Grid>
                    {experience.year && (
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary">
                                {experience.year}
                            </Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            {experience.description}
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </motion.div>
    )
}

export default WorkDetailsCard 