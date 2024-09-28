import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, useMediaQuery } from '@mui/material';
import Header from './components/layout/Header';
import AboutMe from './components/sections/aboutMe/AboutMe';
import TechStack from './components/sections/techStack/TechStack';
import ContactForm from './components/sections/ContactForm';
import WorkTimeline from './components/sections/WorkTimeline';
import ProjectsOverview from './components/sections/ProjectsOverview';
import SectionWrapper, { AnimationType } from './components/common/sectionWrapper/SectionWrapper';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './contexts/LanguageContext';
import { TranslationKeyProvider } from './contexts/TranslationKeyContext';
import './config/i18n';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
      animationType: AnimationType.Fade,
      fullHeight: true,
      backgroundColor: theme.palette.background.default,
    },
    {
      name: 'workTimeline',
      Component: WorkTimeline,
      animationType: AnimationType.Slide,
      backgroundColor: theme.palette.background.paper,
    },
    {
      name: 'techStack',
      Component: TechStack,
      animationType: AnimationType.Zoom,
      backgroundColor: theme.palette.background.default,
    },
    {
      name: 'projects',
      Component: ProjectsOverview,
      animationType: AnimationType.ExpandContract,
      backgroundColor: theme.palette.background.paper,
    },
    {
      name: 'contact',
      Component: ContactForm,
      animationType: AnimationType.Elastic,
      backgroundColor: theme.palette.background.default,
    },
  ];

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
