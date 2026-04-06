import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import PageLayout from '@/components/layout/PageLayout'
import SectionWrapper from '@/components/layout/components/sectionWrapper/SectionWrapper'
import { AnimationType } from '@/styles/animations'
import { lazy, Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { sections } from './routes'

const NotFound = lazy(() => import('@/components/sections/notFound/NotFound'))
const ProjectDetailsWrapper = lazy(
    () => import('@/components/sections/projectsOverview/components/ProjectDetailsWrapper')
)

interface BuildRoutesArgs {
    toggleTheme: () => void
}

const SectionFallback = () => (
    <LoadingSpinner minHeight="100dvh" />
)

export const buildRoutes = ({ toggleTheme }: BuildRoutesArgs): RouteObject[] => [
    {
        element: (
            <PageLayout toggleTheme={toggleTheme}>
                <Outlet />
            </PageLayout>
        ),
        children: [
            {
                path: '/',
                element: (
                    <>
                        {sections.map(({ name, Component, animationType, fullHeight }) => (
                            <SectionWrapper
                                key={name}
                                id={name}
                                animationType={animationType}
                                fullHeight={fullHeight}
                            >
                                <Suspense fallback={<SectionFallback />}>
                                    <Component />
                                </Suspense>
                            </SectionWrapper>
                        ))}
                    </>
                ),
            },
            {
                path: '/project/:id',
                element: (
                    <SectionWrapper
                        id="project-details"
                        animationType={AnimationType.Fade}
                        fullHeight
                    >
                        <Suspense fallback={<SectionFallback />}>
                            <ProjectDetailsWrapper />
                        </Suspense>
                    </SectionWrapper>
                ),
            },
            {
                path: '*',
                element: (
                    <SectionWrapper
                        id="not-found"
                        animationType={AnimationType.Fade}
                        fullHeight
                    >
                        <Suspense fallback={<SectionFallback />}>
                            <NotFound />
                        </Suspense>
                    </SectionWrapper>
                ),
            },
        ],
    },
]
