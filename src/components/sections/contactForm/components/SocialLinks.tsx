import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Tooltip, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../constants/contactForm.constants'
import { StyledIcon, StyledIconButton } from '../styles/socialLinks.styles'

const SocialLinks = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const { containerVariants, itemVariants } = useAnimatedSection({
        type: AnimationType.FadeInUp,
        staggerChildren: 0.2
    })
    const handleOpenLink = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            mt={6}
        >
            <Box
                display="flex"
                justifyContent="center"
                gap={4}
            >
                {SOCIAL_LINKS.map((link) => (
                    <motion.div
                        key={link.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Tooltip title={t(`contact.socialLinks.${link.name.toLowerCase()}`)} arrow placement="top">
                            <StyledIconButton
                                onClick={() => handleOpenLink(link.url)}
                                aria-label={link.name}
                            >
                                {typeof link.icon === 'string' ? (
                                    <StyledIcon
                                        src={link.icon}
                                        alt={`${link.name} icon`}
                                        $isGitHub={link.name === 'GitHub'}
                                    />
                                ) : (
                                    <LinkedInIcon sx={{
                                        fontSize: 32,
                                        color: theme.palette.primary.main
                                    }} />
                                )}
                            </StyledIconButton>
                        </Tooltip>
                    </motion.div>
                ))}
            </Box>
        </Box>
    )
}

export default SocialLinks 