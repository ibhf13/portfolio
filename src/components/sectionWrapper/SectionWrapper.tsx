import React, { useEffect } from 'react';
import { Box, Container, useTheme, alpha } from '@mui/material';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  animationType: 'fade' | 'slide' | 'zoom' | 'rotate' | 'flip' | 'bounce';
  backgroundColor?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
  containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animationType === 'slide' ? 50 : 0,
      scale: animationType === 'zoom' ? 0.95 : 1,
      rotateX: animationType === 'flip' ? 90 : 0,
      rotateY: animationType === 'rotate' ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  if (animationType === 'bounce') {
    variants.visible = {
      ...variants.visible,
      y: [0, -20, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      },
    };
  }

  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          style={{
            width: '100%',
            margin: '0 auto',
            padding: theme.spacing(3),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            boxShadow: theme.shadows[4],
          }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper;
