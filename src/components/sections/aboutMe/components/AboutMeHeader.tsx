import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import DynamicProfession from './DynamicProfession'

interface AboutMeHeaderProps {
    name: string
    age: number
}

const AboutMeHeader = ({ name, age }: AboutMeHeaderProps) => {
    const { t } = useTranslation()
    const { itemVariants } = useAnimatedSection({ type: AnimationType.FadeInUp })

    return (
        <>
            <motion.div variants={itemVariants}>
                <Typography variant="h2" fontWeight="bold" mb={4}>
                    {name}
                </Typography>
                <Box display="flex" flexDirection={'row'} flexWrap={'wrap'} alignItems="flex-start" gap={1} mb={2}>
                    <Typography variant="h5" >
                        {t('aboutMe.age', { age })}
                    </Typography>
                    <DynamicProfession />
                </Box>
            </motion.div>
        </>
    )
}

export default AboutMeHeader