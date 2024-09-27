import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { TranslationKeyProvider } from './contexts/TranslationKeyContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/layout/Header';
import AboutMe from './components/about-me/AboutMe';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import WorkTimeline from './components/WorkTimeline';
import ProjectsOverview from './components/ProjectsOverview';
import VideoBackground from './components/VideoBackground';
import { useTheme } from './hooks/useTheme';
import './config/i18n';
import { AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';
import SectionWrapper from './components/sectionWrapper/SectionWrapper';

const App: React.FC = () => {
  const { theme, videoSrc, key, toggleTheme } = useTheme();

  const sections = [
    { name: 'aboutMe', Component: AboutMe, backgroundColor: theme.palette.background.default, animationType: 'fade' },
    { name: 'workTimeline', Component: WorkTimeline, backgroundColor: theme.palette.background.paper, animationType: 'slide' },
    { name: 'techStack', Component: TechStack, backgroundColor: theme.palette.background.default, animationType: 'zoom' },
    { name: 'projects', Component: ProjectsOverview, backgroundColor: theme.palette.background.paper, animationType: 'rotate' },
    { name: 'contact', Component: ContactForm, backgroundColor: theme.palette.background.default, animationType: 'flip' },
  ] as const;

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <VideoBackground key={key} videoSrc={videoSrc} fallbackImageSrc="" />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Header toggleTheme={toggleTheme} />
            <AnimatePresence>
              {sections.map(({ name, Component, backgroundColor, animationType }) => (
                <Element name={name} key={name}>
                  <SectionWrapper id={name} backgroundColor={backgroundColor} animationType={animationType}>
                    <Component />
                  </SectionWrapper>
                </Element>
              ))}
            </AnimatePresence>
          </Box>
        </ThemeProvider>
      </TranslationKeyProvider>
    </LanguageProvider>
  );
};

export default App;
