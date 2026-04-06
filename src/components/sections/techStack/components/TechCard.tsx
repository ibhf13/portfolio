import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Tooltip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconWrapper, StyledPaper, TechIcon } from '../styles/techStack.styles'
import { TechCardProps } from '../types/techStack.types'

const TechCard = ({ tech, index }: TechCardProps) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const [isActive, setIsActive] = useState(false)
    const { itemVariants } = useAnimatedSection({
        type: AnimationType.ScaleInCenter,
        delay: Math.min(index, 8) * 0.05,
    })

    const needsWhiteBg = tech.needsBackdrop ?? false

    const handleCardStyle = {
        boxShadow: isActive ? `0 0 15px ${tech.color}` : theme.shadows[3],
        background: isActive
            ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${tech.color}22 100%)`
            : theme.palette.background.paper,
    }

    const handleActivation = (active: boolean) => () => setIsActive(active)

    const techName = t(`techStack.technologies.${tech.translationKey}.name`)
    const techDescription = t(`techStack.technologies.${tech.translationKey}.description`)

    return (
        <Tooltip title={techDescription}>
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={handleActivation(true)}
                onHoverEnd={handleActivation(false)}
                tabIndex={0}
                role="button"
                aria-label={`${techName}: ${techDescription}`}
            >
                <StyledPaper elevation={3} sx={handleCardStyle}>
                    <IconWrapper
                        animate={{
                            rotate: isActive ? 360 : 0,
                            transition: { duration: 0.5 }
                        }}
                        isActive={isActive}
                        bgcolor={tech.backgroundColor || tech.color}
                        needsWhiteBg={needsWhiteBg}
                    >
                        <TechIcon
                            src={tech.icon}
                            alt=""
                            isExpress={tech.invertOnActive ?? false}
                            isActive={isActive}
                        />
                    </IconWrapper>
                    <Typography variant="body1" mt={2} textAlign="center" fontWeight="medium">
                        {techName}
                    </Typography>
                </StyledPaper>
            </motion.div>
        </Tooltip>
    )
}

export default TechCard
