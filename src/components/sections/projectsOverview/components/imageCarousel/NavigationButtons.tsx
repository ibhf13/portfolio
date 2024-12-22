import { useTheme } from '@/hooks/useTheme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconButton } from '@mui/material'

interface NavigationButtonsProps {
    onPrevious: () => void
    onNext: () => void
}

const NavigationButtons = ({ onPrevious, onNext }: NavigationButtonsProps) => {
    const theme = useTheme()

    const buttonStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: theme.theme.palette.background.paper,
        '&:hover': {
            bgcolor: theme.theme.palette.background.default,
        },
    }

    return (
        <>
            <IconButton
                onClick={onPrevious}
                sx={{ ...buttonStyles, left: 8 }}
            >
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                onClick={onNext}
                sx={{ ...buttonStyles, right: 8 }}
            >
                <ArrowForwardIcon />
            </IconButton>
        </>
    )
}

export default NavigationButtons 