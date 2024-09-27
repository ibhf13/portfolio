import React, { useEffect } from 'react';
import { Box, Container, useTheme, alpha, useMediaQuery } from '@mui/material';
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

type AnimationType = 'fade' | 'slide' | 'zoom' | 'rotate' | 'flip' | 'bounce' | 'scale' | 'slideRotate';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  animationType: AnimationType;
  backgroundColor?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
  containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  customStyles?: React.CSSProperties;
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
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getVariants = (type: AnimationType): Variants => {
    const baseVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

    switch (type) {
      case 'slide':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'zoom':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0.95 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case 'rotate':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotateY: 90 },
          visible: { ...baseVariants.visible, rotateY: 0 },
        };
      case 'flip':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotateX: 90 },
          visible: { ...baseVariants.visible, rotateX: 0 },
        };
      case 'bounce':
        return {
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            y: [0, -20, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              },
            },
          },
        };
      case 'scale':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case 'slideRotate':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -100, rotate: -180 },
          visible: { ...baseVariants.visible, x: 0, rotate: 0 },
        };
      default:
        return baseVariants;
    }
  };

  const variants = getVariants(animationType);

  const responsiveStyles = {
    py: { xs: 4, sm: 6, md: 8, lg: 10 },
    px: { xs: 2, sm: 3, md: 4, lg: 5 },
  };

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
  );
};

export default SectionWrapper;
