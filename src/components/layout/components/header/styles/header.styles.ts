import { Theme } from '@mui/material'
import { HEADER_HEIGHT, MOBILE_DRAWER_WIDTH } from '../constants/header.constants'

export const getHeaderStyles = (theme: Theme) => ({
    navButton: {
        mx: 1,
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '2px',
            bottom: 0,
            left: '50%',
            backgroundColor: theme.palette.primary.main,
            transition: 'all 0.3s ease-in-out',
        },
        '&:hover::after': {
            width: '100%',
            left: '0%',
        },
    },
    logo: {
        height: HEADER_HEIGHT,
        cursor: 'pointer',
        objectFit: 'contain',
    },
    mobileDrawer: {
        width: MOBILE_DRAWER_WIDTH,
        backgroundColor: theme.palette.background.paper
    }
})
