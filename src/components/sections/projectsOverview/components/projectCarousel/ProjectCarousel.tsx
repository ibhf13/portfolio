import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Project } from '../../types/project.types'
import ProjectCard from '../ProjectCard'
import CarouselControls from './CarouselControls'
import CarouselIndicators from './CarouselIndicators'

interface ProjectCarouselProps {
    projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right'>('right')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3
    const totalPages = Math.ceil(projects.length / cardsToShow)

    const handleNext = () => {
        setDirection('right')
        setCurrentIndex((prev) => (prev + 1) % totalPages)
    }

    const handlePrevious = () => {
        setDirection('left')
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left')
        setCurrentIndex(index)
    }

    // Get the visible projects for the current page
    const startIndex = currentIndex * cardsToShow
    const visibleProjects = projects.slice(startIndex, startIndex + cardsToShow)

    const animationVariant = direction === 'left'
        ? getAnimationVariant(AnimationType.SlideInLeft)
        : getAnimationVariant(AnimationType.SlideInRight)

    return (
        <Box position="relative" width="100%">
            <Box
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    minHeight: { xs: '450px', md: '500px' },
                }}
            >
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={animationVariant}
                        style={{
                            display: 'flex',
                            gap: isMobile ? '16px' : '32px',
                            justifyContent: 'center',
                            padding: '0 16px',
                        }}
                    >
                        {visibleProjects.map((project) => (
                            <Box
                                key={project.id}
                                sx={{
                                    flex: `0 0 ${100 / cardsToShow}%`,
                                    maxWidth: { xs: '100%', md: '400px' },
                                }}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Box>

            <CarouselControls
                onNext={handleNext}
                onPrevious={handlePrevious}
                showControls={totalPages > 1}
            />

            <CarouselIndicators
                totalPages={totalPages}
                currentPage={currentIndex}
                onDotClick={handleDotClick}
            />
        </Box>
    )
}

export default ProjectCarousel

