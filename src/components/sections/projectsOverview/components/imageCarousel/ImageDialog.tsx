import { Box, Dialog } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import CarouselImage from './CarouselImage'
import NavigationButtons from './NavigationButtons'

interface ImageDialogProps {
    open: boolean
    onClose: () => void
    currentImage: string
    currentIndex: number
    onPrevious: () => void
    onNext: () => void
}

const ImageDialog = ({
    open,
    onClose,
    currentImage,
    currentIndex,
    onPrevious,
    onNext,
}: ImageDialogProps) => (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth={false}
        PaperProps={{
            sx: {
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                maxWidth: '95vw',
                maxHeight: '95vh',
                position: 'relative',
            },
        }}
    >
        <Box position="relative" width="100%" height="100%">
            <AnimatePresence mode="wait">
                <CarouselImage
                    src={currentImage}
                    alt={`Screenshot ${currentIndex + 1}`}
                    isDialog
                />
            </AnimatePresence>
            <NavigationButtons
                onPrevious={onPrevious}
                onNext={onNext}
            />
        </Box>
    </Dialog>
)

export default ImageDialog 