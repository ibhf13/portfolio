import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { Box, Breakpoint, Container, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '../animatedBackground'
import { useAnimationControl } from './hooks/useAnimationControl'
import { getSectionStyles } from './styles/sectionWrapper.styles'
import { SectionWrapperProps } from './types/sectionWrapper.types'

const useResponsiveContainerWidth = (): Breakpoint => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'))

  if (isXs) return 'xs'
  if (isSm) return 'sm'
  if (isMd) return 'md'
  if (isLg) return 'lg'

  return 'xl'
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  animationType,
  fullHeight = false,
  containerWidth,
  customStyles = {}
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const responsiveWidth = useResponsiveContainerWidth()
  const { ref, controls } = useAnimationControl()

  const styles = getSectionStyles(theme)
  const variants = getAnimationVariant(animationType ?? AnimationType.Fade)

  const maxWidth = containerWidth ?? responsiveWidth

  return (
    <Box
      component="section"
      id={id}
      sx={styles.section({ fullHeight, customStyles })}
    >
      <AnimatedBackground sectionId={id} />

      <Container maxWidth={maxWidth} sx={styles.container}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          style={styles.content(isMobile, isTablet)}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  )
}

export default SectionWrapper
