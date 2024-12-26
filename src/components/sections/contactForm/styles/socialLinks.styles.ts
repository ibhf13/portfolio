import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledIcon = styled('img')<{ $isGitHub?: boolean }>(({ theme, $isGitHub }) => ({
    width: '32px',
    height: '32px',
    transition: 'all 0.3s ease',
    ...$isGitHub && {
        filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0.2)',
    },
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: '50%',
    boxShadow: theme.shadows[4],
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'translateY(-8px) scale(1.1)',
        boxShadow: `0 12px 20px -5px ${theme.palette.primary.main}40`,
        '& .MuiSvgIcon-root, & img': {
            filter: 'brightness(1.2)',
        },
    },
})) 