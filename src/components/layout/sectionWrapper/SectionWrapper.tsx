import { AnimatedBackground } from '@/components/AnimatedBackground'
import { AnimationType, getAnimationVariant } from '@/styles/animations'
import { alpha, Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  animationType: AnimationType
  backgroundColor?: string
  backgroundImage?: string
  fullHeight?: boolean
  containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  customStyles?: React.CSSProperties
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  animationType,
  backgroundColor,
  backgroundImage,
  fullHeight = false,
  containerWidth = 'lg',
  customStyles = {}
}) => {
  const theme = useTheme()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = getAnimationVariant(animationType)

  const responsiveStyles = {
    py: { xs: 4, sm: 6, md: 8, lg: 10 },
    px: { xs: 2, sm: 3, md: 4, lg: 5 },
  }

  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...responsiveStyles,
        minHeight: fullHeight ? '100vh' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...customStyles,
      }}
    >
      <AnimatedBackground
        sectionId={id}
        backgroundColor={backgroundColor || theme.palette.background.default}
        backgroundImage={backgroundImage}
      />
      <Container
        maxWidth={containerWidth}
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            exit="hidden"
            variants={variants}
            style={{
              width: '100%',
              margin: '0 auto',
              padding: theme.spacing(isMobile ? 2 : isTablet ? 3 : 4),
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(10px)',
              boxShadow: theme.shadows[4],
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  )
}

export default SectionWrapper
