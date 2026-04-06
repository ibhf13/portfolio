import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface CarouselControlsProps {
    onNext: () => void
    onPrevious: () => void
    showControls: boolean
}

const CarouselControls = ({ onNext, onPrevious, showControls }: CarouselControlsProps) => {
    const theme = useTheme()

    if (!showControls) return null

    const isLight = theme.palette.mode === 'light'

    const buttonStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: isLight ? theme.palette.primary.main : theme.palette.background.paper,
        color: isLight ? theme.palette.primary.contrastText : theme.palette.primary.main,
        boxShadow: theme.shadows[3],
        zIndex: 10,
        '&:hover': {
            bgcolor: isLight ? theme.palette.primary.dark : theme.palette.background.default,
        },
    }

    return (
        <>
            <IconButton
                onClick={onPrevious}
                sx={{ ...buttonStyles, left: { xs: -12, md: 8 } }}
                aria-label="Previous projects"
            >
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                onClick={onNext}
                sx={{ ...buttonStyles, right: { xs: -12, md: 8 } }}
                aria-label="Next projects"
            >
                <ArrowForwardIcon />
            </IconButton>
        </>
    )
}

export default CarouselControls
