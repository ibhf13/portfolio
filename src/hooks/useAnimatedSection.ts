import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { Variants } from 'framer-motion'
import { useMemo } from 'react'

interface UseAnimatedSectionProps {
    type?: AnimationType
    delay?: number
    staggerChildren?: number
    customVariants?: Variants
}

export const useAnimatedSection = ({
    type = AnimationType.FadeInUp,
    delay = 0.3,
    staggerChildren = 0.2,
    customVariants,
}: UseAnimatedSectionProps = {}) => {
    return useMemo(() => {
        const baseVariants = getAnimationVariant(type)

        const visible = (baseVariants.visible ?? {}) as Record<string, unknown>
        const baseTransition = (visible.transition ?? {}) as Record<string, unknown>

        const containerVariants: Variants = {
            ...baseVariants,
            visible: {
                ...visible,
                transition: {
                    ...baseTransition,
                    when: 'beforeChildren',
                    staggerChildren,
                    delayChildren: delay,
                },
            },
        }

        return {
            containerVariants: customVariants ?? containerVariants,
            itemVariants: customVariants ?? baseVariants,
        }
    }, [type, delay, staggerChildren, customVariants])
}
