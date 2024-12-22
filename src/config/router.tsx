import PageLayout from '@/components/common/Layouts/PageLayout'
import SectionWrapper from '@/components/layout/sectionWrapper/SectionWrapper'
import NotFound from '@/components/sections/notFound/NotFound'
import ProjectDetailsWrapper from '@/components/sections/projectsOverview/components/ProjectDetailsWrapper'
import { AnimationType } from '@/styles/animations'
import { Theme, useMediaQuery } from '@mui/material'
import { RouteObject } from 'react-router-dom'
import { getSections } from './routes'

export const getRouterConfig = ({ theme, toggleTheme }: { theme: Theme, toggleTheme: () => void }): RouteObject[] => {
    const sections = getSections(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const getContainerWidth = () => {
        if (isMobile) return 'xs'
        if (isTablet) return 'sm'
        return 'xl'
    }

    return [
        {
            path: '/',
            element: (
                <PageLayout toggleTheme={toggleTheme}>
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
                </PageLayout>
            ),
        },
        {
            path: '/project/:id',
            element: (
                <PageLayout toggleTheme={toggleTheme}>
                    <SectionWrapper
                        id="project-details"
                        animationType={AnimationType.Fade}
                        backgroundColor={theme.palette.background.paper}
                        containerWidth={getContainerWidth()}
                        fullHeight={true}
                    >
                        <ProjectDetailsWrapper />
                    </SectionWrapper>
                </PageLayout>
            ),
        },
        {
            path: '*',
            element: (
                <PageLayout toggleTheme={toggleTheme}>
                    <SectionWrapper
                        id="not-found"
                        animationType={AnimationType.Fade}
                        backgroundColor={theme.palette.background.paper}
                        containerWidth={getContainerWidth()}
                        fullHeight={true}
                    >
                        <NotFound />
                    </SectionWrapper>
                </PageLayout>
            ),
        },
    ]
} 