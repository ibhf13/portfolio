import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CarouselImage from './CarouselImage'
import ImageDialog from './ImageDialog'
import NavigationButtons from './NavigationButtons'

export interface ImageCarouselProps {
    images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <>
            <Box position="relative">
                <AnimatePresence mode="wait">
                    <CarouselImage
                        src={images[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1}`}
                        onClick={() => setIsDialogOpen(true)}
                    />
                </AnimatePresence>
                <NavigationButtons
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            </Box>

            <ImageDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                currentImage={images[currentIndex]}
                currentIndex={currentIndex}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </>
    )
}

export default ImageCarousel 