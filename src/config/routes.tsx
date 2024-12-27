import AboutMe from '@/components/sections/aboutMe/AboutMe'
import ContactForm from '@/components/sections/contactForm/ContactForm'
import ProjectsOverview from '@/components/sections/projectsOverview/ProjectsOverview'
import TechStack from '@/components/sections/techStack/TechStack'
import WorkTimeline from '@/components/sections/workTimeline/WorkTimeline'
import { AnimationType } from '@/styles/animations'

export interface Section {
    name: string
    Component: React.FC
    animationType: AnimationType
    fullHeight?: boolean
    backgroundColor?: string
}

export const getSections = (): Section[] => [
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

] 