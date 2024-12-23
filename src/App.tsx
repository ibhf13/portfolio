import { AnimationType } from '@/styles/animations'
import { Box, useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Header } from './components/layout/Header'
import SectionWrapper from './components/layout/sectionWrapper/SectionWrapper'
import AboutMe from './components/sections/aboutMe/AboutMe'
import ContactForm from './components/sections/contactForm/ContactForm'
import ProjectsOverview from './components/sections/projectsOverview/ProjectsOverview'
import TechStack from './components/sections/techStack/TechStack'
import WorkTimeline from './components/sections/workTimeline/WorkTimeline'
import { LanguageProvider } from './contexts/LanguageContext'
import { TranslationKeyProvider } from './contexts/TranslationKeyContext'
import { useTheme } from './hooks/useTheme'

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const getContainerWidth = () => {
    if (isMobile) return 'xs'
    if (isTablet) return 'sm'
    return 'lg'
  }

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
  ]

  return (
    <LanguageProvider>
      <TranslationKeyProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              height: '100vh',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
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
  )
}

export default App
