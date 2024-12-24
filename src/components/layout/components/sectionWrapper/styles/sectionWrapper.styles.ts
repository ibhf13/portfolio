import { alpha, Theme } from '@mui/material'
import { SectionStyleProps } from '../types/sectionWrapper.types'

export const getSectionStyles = (theme: Theme) => ({
    section: ({ fullHeight, customStyles }: SectionStyleProps) => ({
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        minHeight: fullHeight ? '100vh' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...customStyles,
    }),
    container: {
        position: 'relative',
        zIndex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: (isMobile: boolean, isTablet: boolean) => ({
        width: '100%',
        margin: '0 auto',
        padding: theme.spacing(isMobile ? 2 : isTablet ? 3 : 4),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
        boxShadow: theme.shadows[4],
    })
}) 