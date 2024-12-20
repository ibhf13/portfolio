import React, { useEffect } from 'react';
import { Box, Container, useTheme, alpha, useMediaQuery } from '@mui/material';
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedBackground } from '../../common/AnimatedBackground';
export enum AnimationType {
  Fade = 'fade',
  Slide = 'slide',
  Zoom = 'zoom',
  Rotate = 'rotate',
  Flip = 'flip',
  Bounce = 'bounce',
  Scale = 'scale',
  SlideRotate = 'slideRotate',
  ExpandContract = 'expandContract',
  Swirl = 'swirl',
  Elastic = 'elastic',
  Jello = 'jello',
  Pulse = 'pulse',
  Wiggle = 'wiggle',
  Tilt = 'tilt',
  Glitch = 'glitch',
  FadeInUp = 'fadeInUp',
  FadeInDown = 'fadeInDown',
  SlideInLeft = 'slideInLeft',
  SlideInRight = 'slideInRight',
  RotateIn = 'rotateIn',
  ScaleInCenter = 'scaleInCenter'
}

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
        },
      },
    };

    switch (type) {
      case AnimationType.Slide:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case AnimationType.Zoom:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0.95 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case AnimationType.Rotate:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotateY: 90 },
          visible: { ...baseVariants.visible, rotateY: 0 },
        };
      case AnimationType.Flip:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotateX: 90 },
          visible: { ...baseVariants.visible, rotateX: 0 },
        };
      case AnimationType.Bounce:
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
      case AnimationType.Scale:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case AnimationType.SlideRotate:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -100, rotate: -180 },
          visible: { ...baseVariants.visible, x: 0, rotate: 0 },
        };
      case AnimationType.ExpandContract:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 1.2 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case AnimationType.Swirl:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotate: 180, scale: 0 },
          visible: { ...baseVariants.visible, rotate: 0, scale: 1 },
        };
      case AnimationType.Elastic:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scaleX: 0 },
          visible: {
            ...baseVariants.visible,
            scaleX: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10
            }
          },
        };
      case AnimationType.Jello:
        return {
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            skew: [0, -12.5, 6.25, -3.125, 1.5625, -0.78125, 0.390625, -0.1953125, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        };
      case AnimationType.Pulse:
        return {
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            scale: [1, 1.05, 1],
            transition: {
              scale: {
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              },
            },
          },
        };
      case AnimationType.Wiggle:
        return {
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            x: [0, -10, 10, -10, 10, 0],
            transition: {
              x: {
                repeat: Infinity,
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          },
        };
      case AnimationType.Tilt:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, rotateX: 20, rotateY: 20 },
          visible: {
            ...baseVariants.visible,
            rotateX: 0,
            rotateY: 0,
            transition: {
              type: "spring",
              stiffness: 100,
            },
          },
        };
      case AnimationType.Glitch:
        return {
          ...baseVariants,
          visible: {
            ...baseVariants.visible,
            x: [0, -5, 5, -5, 5, 0],
            y: [0, 5, -5, 5, -5, 0],
            transition: {
              x: { repeat: Infinity, repeatType: "mirror", duration: 0.5 },
              y: { repeat: Infinity, repeatType: "mirror", duration: 0.5, delay: 0.25 },
            },
          },
        };
      case AnimationType.FadeInUp:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
        };
      case AnimationType.FadeInDown:
        return {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
        };
      case AnimationType.SlideInLeft:
        return {
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
        };
      case AnimationType.SlideInRight:
        return {
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
        };
      case AnimationType.RotateIn:
        return {
          hidden: { opacity: 0, rotate: -180 },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
        };
      case AnimationType.ScaleInCenter:
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            }
          },
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
