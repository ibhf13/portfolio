import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedBackground } from '../animatedBackground'
import { useAnimationControl } from './hooks/useAnimationControl'
import { getSectionStyles } from './styles/sectionWrapper.styles'
import { SectionWrapperProps } from './types/sectionWrapper.types'

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  animationType,
  fullHeight = false,
  containerWidth = 'lg',
  customStyles = {}
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const { ref, controls } = useAnimationControl()

  const styles = getSectionStyles(theme)
  const variants = getAnimationVariant(animationType ?? AnimationType.Fade)

  return (
    <Box
      component="section"
      id={id}
      sx={{
        ...styles.section({ fullHeight, customStyles }),
        scrollSnapAlign: 'start',
      }}
    >
      <AnimatedBackground sectionId={id} />

      <Container maxWidth={containerWidth} sx={styles.container}>
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            exit="hidden"
            variants={variants}
            style={styles.content(isMobile, isTablet)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  )
}

export default SectionWrapper

