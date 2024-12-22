import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { SPACING } from '../constants/aboutMe.constants'
import { ExperienceItem } from '../types/aboutMe.types'
import ExperienceCard from './ExperienceCard'

interface ExperienceGridProps {
    experiences: ExperienceItem[]
}

const ExperienceGrid = ({ experiences }: ExperienceGridProps) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const spacing = isMobile ? SPACING.MOBILE : isTablet ? SPACING.TABLET : SPACING.DESKTOP

    return (
        <Box p={spacing}>
            <Grid container spacing={spacing}>
                {experiences.map((exp, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <ExperienceCard
                            {...exp}
                            isMobile={isMobile}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ExperienceGrid
