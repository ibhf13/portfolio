import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { Variants } from 'framer-motion'

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
    customVariants
}: UseAnimatedSectionProps = {}) => {
    const baseVariants = getAnimationVariant(type)

    const containerVariants: Variants = {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            transition: {
                when: "beforeChildren",
                staggerChildren,
                delayChildren: delay,
            }
        }
    }

    return {
        containerVariants: customVariants || containerVariants,
        itemVariants: baseVariants
    }
} 