import React, { Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { TranslationKeyProvider } from './contexts/TranslationKeyContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Header from './components/layout/Header';
import AboutMe from './components/about-me/AboutMe';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import WorkTimeline from './components/WorkTimeline';
import ProjectsOverview from './components/ProjectsOverview';
import VideoBackground from './components/VideoBackground';
import { useTheme } from './hooks/useTheme';
import './config/i18n';

const App: React.FC = () => {
  const { theme, videoSrc, key, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <VideoBackground key={key} videoSrc={videoSrc} fallbackImageSrc="" />

          <Suspense fallback={<CircularProgress />}>
            <Header toggleTheme={toggleTheme} />
            <Container maxWidth= "lg">
              <AboutMe />
              <WorkTimeline />
              <TechStack />
              <ProjectsOverview />
              <ContactForm />
            </Container>
          </Suspense>
        </ThemeProvider>
      </TranslationKeyProvider>
    </LanguageProvider>
  );
};

export default App;
