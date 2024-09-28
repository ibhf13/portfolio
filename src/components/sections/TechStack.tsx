import React from 'react';
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from '../../hooks/useCustomTranslation';
import { Technology } from '../types/Technology';

import ReactIcon from '../../resources/icons/react.svg';
import TypeScriptIcon from '../../resources/icons/typescript.svg';
import JavaScriptIcon from '../../resources/icons/javascript.svg';
import HTMLIcon from '../../resources/icons/html.svg';
import CSSIcon from '../../resources/icons/css.svg';
import NodeJSIcon from '../../resources/icons/nodejs.svg';
import ExpressIcon from '../../resources/icons/express.svg';
import MongoDBIcon from '../../resources/icons/mongodb.svg';
import MaterialUIIcon from '../../resources/icons/material-ui.svg';
import GitIcon from '../../resources/icons/git.svg';
import JestIcon from '../../resources/icons/jest.svg';
import BrowserStackIcon from '../../resources/icons/browserstack.svg';
import MySQLIcon from '../../resources/icons/mysql.svg';
import PlaywrightIcon from '../../resources/icons/playwright.svg';

const technologies: Technology[] = [
  { name: 'React', icon: ReactIcon, color: '#61DAFB' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178C6' },
  { name: 'JavaScript', icon: JavaScriptIcon, color: '#F7DF1E' },
  { name: 'HTML', icon: HTMLIcon, color: '#E34F26' },
  { name: 'CSS', icon: CSSIcon, color: '#1572B6' },
  { name: 'Material-UI', icon: MaterialUIIcon, color: '#0081CB' },
  { name: 'Node.js', icon: NodeJSIcon, color: '#339933' },
  { name: 'Express', icon: ExpressIcon, color: '#FFFFFF', backgroundColor: '#333333' },
  { name: 'MongoDB', icon: MongoDBIcon, color: '#47A248', backgroundColor: '#FFFFFF' },
  { name: 'MySQL', icon: MySQLIcon, color: '#4479A1' },
  { name: 'Git', icon: GitIcon, color: '#F05032' },
  { name: 'Jest', icon: JestIcon, color: '#C21325' },
  { name: 'BrowserStack', icon: BrowserStackIcon, color: '#F15B2A' },
  { name: 'Playwright', icon: PlaywrightIcon, color: '#2EAD33' },
];

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Box
      component="section"
      id="techStack"
      py={isMobile ? 4 : isTablet ? 6 : 8}
      sx={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" textAlign="center" mb={4} fontWeight="bold">
          {t('techStack.title')}
        </Typography>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={isMobile ? 2 : isTablet ? 3 : 4} justifyContent="center">
          {technologies.map((tech) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: theme.spacing(2),
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: `0 0 15px ${tech.color}`,
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${tech.color}22 100%)`,
                    },
                  }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    style={{
                      backgroundColor: tech.backgroundColor || 'transparent',
                      borderRadius: tech.backgroundColor ? '50%' : '0',
                      padding: tech.backgroundColor ? '8px' : '0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: tech.name === 'MongoDB' ? '72px' : '64px',
                      height: tech.name === 'MongoDB' ? '72px' : '64px',
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      style={{
                        width: tech.name === 'MongoDB' ? '56px' :
                               tech.backgroundColor ? '48px' : '64px',
                        height: tech.name === 'MongoDB' ? '56px' :
                                tech.backgroundColor ? '48px' : '64px',
                        filter: tech.name === 'Express'
                          ? 'invert(1) brightness(2) contrast(150%)'
                          : 'none',
                      }}
                    />
                  </motion.div>
                  <Typography variant="subtitle1" mt={2}>
                    {tech.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TechStack;
