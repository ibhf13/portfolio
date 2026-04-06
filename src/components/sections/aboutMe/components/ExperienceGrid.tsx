import { Box, useMediaQuery, useTheme } from '@mui/material'
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
            <Box
                sx={{
                    display: 'grid',
                    gap: spacing,
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(3, minmax(0, 1fr))',
                    },
                }}
            >
                {experiences.map((exp) => (
                    <ExperienceCard
                        key={exp.text}
                        {...exp}
                        isMobile={isMobile}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default ExperienceGrid
