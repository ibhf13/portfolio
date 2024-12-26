import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledFormSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 0),
    },
}))

export const FormContainer = styled('form')(({ theme }) => ({
    maxWidth: 'sm',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '50%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}))