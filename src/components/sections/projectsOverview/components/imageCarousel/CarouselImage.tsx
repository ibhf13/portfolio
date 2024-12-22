import { motion } from 'framer-motion'

export interface CarouselImageProps {
    src: string
    alt: string
    isDialog?: boolean
    onClick?: () => void
}

const CarouselImage = ({ src, alt, isDialog, onClick }: CarouselImageProps) => {
    const isGif = src.toLowerCase().endsWith('.gif')

    return (
        <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
            style={{
                width: '100%',
                height: 'auto',
                borderRadius: 8,
                cursor: isDialog ? 'default' : 'pointer',
                maxHeight: isDialog ? '90vh' : 'unset',
                objectFit: 'contain',
                // Specific handling for GIFs to maintain animation
                imageRendering: isGif ? 'auto' : 'crisp-edges',
            }}
        />
    )
}

export default CarouselImage 