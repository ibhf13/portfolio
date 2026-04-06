import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { AnimationType } from '@/styles/animations'
import { useMediaQuery, useTheme } from '@mui/material'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useWorkExperienceData } from './useWorkExperienceData'

export const useWorkTimelineLogic = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const { itemVariants } = useAnimatedSection({ type: AnimationType.FadeInUp })
    const { containerVariants } = useAnimatedSection({
        type: AnimationType.SlideInRight,
        staggerChildren: 0.3,
        delay: 0.2,
    })

    const workExperience = useWorkExperienceData()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    useEffect(() => {
        controls.start('visible')
    }, [controls])

    return {
        isMobile,
        controls,
        ref,
        itemVariants,
        containerVariants,
        workExperience,
    }
} 