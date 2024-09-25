import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Import SVG icons
import ReactIcon from '../resources/icons/react.svg';
import TypeScriptIcon from '../resources/icons/typescript.svg';
import JavaScriptIcon from '../resources/icons/javascript.svg';
import HTMLIcon from '../resources/icons/html.svg';
import CSSIcon from '../resources/icons/css.svg';
import NodeJSIcon from '../resources/icons/nodejs.svg';
import ExpressIcon from '../resources/icons/express.svg';
import MongoDBIcon from '../resources/icons/mongodb.svg';
import MaterialUIIcon from '../resources/icons/material-ui.svg';
import GitIcon from '../resources/icons/git.svg';
import JestIcon from '../resources/icons/jest.svg';
import BrowserStackIcon from '../resources/icons/browserstack.svg';
import MySQLIcon from '../resources/icons/mysql.svg';
import PlaywrightIcon from '../resources/icons/playwright.svg';
import { useTranslation } from '../hooks/useCustomTranslation';

const technologies = [
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

  return (
    <Box component="section" id="techStack" py={8}>
      <Typography variant="h2" textAlign="center" mb={4} fontWeight="bold">
        {t('techStack.title')}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {technologies.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} key={tech.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
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
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
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
                <Typography variant="h6" mt={2}>
                  {tech.name}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStack;
