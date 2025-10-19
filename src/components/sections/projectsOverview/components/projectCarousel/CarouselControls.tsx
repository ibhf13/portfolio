import { useTheme } from '@/hooks/useTheme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconButton } from '@mui/material'

interface CarouselControlsProps {
    onNext: () => void
    onPrevious: () => void
    showControls: boolean
}

const CarouselControls = ({ onNext, onPrevious, showControls }: CarouselControlsProps) => {
    const theme = useTheme()

    if (!showControls) return null

    const buttonStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: theme.theme.palette.background.paper,
        zIndex: 10,
        '&:hover': {
            bgcolor: theme.theme.palette.background.default,
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

