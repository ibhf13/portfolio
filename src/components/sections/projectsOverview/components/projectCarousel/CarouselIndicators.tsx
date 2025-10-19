import { Box } from '@mui/material'

interface CarouselIndicatorsProps {
    totalPages: number
    currentPage: number
    onDotClick: (index: number) => void
}

const CarouselIndicators = ({ totalPages, currentPage, onDotClick }: CarouselIndicatorsProps) => {
    if (totalPages <= 1) return null

    return (
        <Box
            display="flex"
            justifyContent="center"
            gap={1}
            mt={4}
        >
            {Array.from({ length: totalPages }).map((_, index) => (
                <Box
                    key={index}
                    onClick={() => onDotClick(index)}
                    sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: index === currentPage ? 'primary.main' : 'grey.400',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            bgcolor: index === currentPage ? 'primary.dark' : 'grey.600',
                            transform: 'scale(1.2)',
                        },
                    }}
                    aria-label={`Go to page ${index + 1}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onDotClick(index)
                        }
                    }}
                />
            ))}
        </Box>
    )
}

export default CarouselIndicators

