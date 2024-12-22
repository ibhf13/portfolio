import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface AboutMeDescriptionProps {
    age: number
}

const AboutMeDescription = ({ age }: AboutMeDescriptionProps) => {
    const { t } = useTranslation()
    const { itemVariants } = useAnimatedSection({ type: AnimationType.SlideInLeft })

    return (
        <>
            <motion.div variants={itemVariants}>
                <Typography variant="body1" paragraph>
                    {t('aboutMe.description', { age })}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('aboutMe.passion')}
                </Typography>
                <Typography variant="body1" mb={4}>
                    {t('aboutMe.hobbies')}
                </Typography>
            </motion.div>
        </>
    )
}

export default AboutMeDescription
