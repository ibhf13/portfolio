import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, useMediaQuery } from '@mui/material';
import Header from './components/layout/Header';
import AboutMe from './components/about-me/AboutMe';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import WorkTimeline from './components/WorkTimeline';
import ProjectsOverview from './components/ProjectsOverview';
import VideoBackground from './components/VideoBackground';
import SectionWrapper from './components/sectionWrapper/SectionWrapper';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './contexts/LanguageContext';
import { TranslationKeyProvider } from './contexts/TranslationKeyContext';
import './config/i18n';

const App: React.FC = () => {
  const { theme, videoSrc, key, toggleTheme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getContainerWidth = () => {
    if (isMobile) return 'xs';
    if (isTablet) return 'sm';
    return 'lg';
  };

  const sections = [
    {
      name: 'aboutMe',
      Component: AboutMe,
      animationType: 'fade' as const,
      fullHeight: true,
      backgroundColor: theme.palette.background.default,
    },
    {
      name: 'workTimeline',
      Component: WorkTimeline,
      animationType: 'slide' as const,
      backgroundColor: theme.palette.background.paper,
    },
    {
      name: 'techStack',
      Component: TechStack,
      animationType: 'zoom' as const,
      backgroundColor: theme.palette.background.default,
    },
    {
      name: 'projects',
      Component: ProjectsOverview,
      animationType: 'slideRotate' as const,
      backgroundColor: theme.palette.background.paper,
    },
    {
      name: 'contact',
      Component: ContactForm,
      animationType: 'scale' as const,
      backgroundColor: theme.palette.background.default,
    },
  ];

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <VideoBackground key={key} videoSrc={videoSrc} fallbackImageSrc="" />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Header toggleTheme={toggleTheme} />
            {sections.map(({ name, Component, animationType, fullHeight, backgroundColor }) => (
              <SectionWrapper
                key={name}
                id={name}
                animationType={animationType}
                fullHeight={fullHeight}
                backgroundColor={backgroundColor}
                containerWidth={getContainerWidth()}
              >
                <Component />
              </SectionWrapper>
            ))}
          </Box>
        </ThemeProvider>
      </TranslationKeyProvider>
    </LanguageProvider>
  );
};

export default App;
