import { AnimationType } from '@/styles/animations'
import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

const AboutMe = lazy(() => import('@/components/sections/aboutMe/AboutMe'))
const WorkTimeline = lazy(() => import('@/components/sections/workTimeline/WorkTimeline'))
const TechStack = lazy(() => import('@/components/sections/techStack/TechStack'))
const ProjectsOverview = lazy(() => import('@/components/sections/projectsOverview/ProjectsOverview'))
const ContactForm = lazy(() => import('@/components/sections/contactForm/ContactForm'))

export type SectionName = 'aboutMe' | 'workTimeline' | 'techStack' | 'projects' | 'contact'

export interface Section {
    name: SectionName
    Component: LazyExoticComponent<ComponentType>
    animationType: AnimationType
    fullHeight?: boolean
}

export const sections: readonly Section[] = [
    {
        name: 'aboutMe',
        Component: AboutMe,
        animationType: AnimationType.Fade,
        fullHeight: true,
    },
    {
        name: 'workTimeline',
        Component: WorkTimeline,
        animationType: AnimationType.Slide,
        fullHeight: true,
    },
    {
        name: 'techStack',
        Component: TechStack,
        animationType: AnimationType.Zoom,
        fullHeight: true,
    },
    {
        name: 'projects',
        Component: ProjectsOverview,
        animationType: AnimationType.ExpandContract,
        fullHeight: true,
    },
    {
        name: 'contact',
        Component: ContactForm,
        animationType: AnimationType.Slide,
        fullHeight: true,
    },
] as const
