import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const StyledSection = styled('section')(({ theme }) => ({
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 0),
    },
}))

export const StyledPaper = styled(Paper)(() => ({
    padding: '16px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
}))

export const IconWrapper = styled(motion.div, {
    shouldForwardProp: (prop) => !['isActive', 'bgcolor', 'needsWhiteBg'].includes(prop as string),
})<{ isActive: boolean; bgcolor: string; needsWhiteBg: boolean }>(
    ({ isActive, bgcolor, needsWhiteBg, theme }) => ({
        backgroundColor: isActive ? bgcolor : 'transparent',
        borderRadius: '50%',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        height: '64px',
        transition: 'background-color 0.3s ease-in-out',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            backgroundColor: needsWhiteBg
                ? theme.palette.mode === 'dark'
                    ? '#ffffff'
                    : '#c2c9d6'
                : 'transparent',
            borderRadius: '50%',
            zIndex: 0,
        },
    })
)

export const TechIcon = styled('img', {
    shouldForwardProp: (prop) => !['isExpress', 'isActive'].includes(prop as string),
})<{ isExpress: boolean; isActive: boolean }>(
    ({ isExpress, isActive }) => ({
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        filter: isExpress && isActive ? 'brightness(2) contrast(150%)' : 'none',
        transition: 'filter 0.3s ease-in-out',
        position: 'relative',
        zIndex: 1,
    })
)
