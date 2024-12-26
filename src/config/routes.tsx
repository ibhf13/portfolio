import AboutMe from '@/components/sections/aboutMe/AboutMe'
import ContactForm from '@/components/sections/contactForm/ContactForm'
import ProjectsOverview from '@/components/sections/projectsOverview/ProjectsOverview'
import TechStack from '@/components/sections/techStack/TechStack'
import WorkTimeline from '@/components/sections/workTimeline/WorkTimeline'
import { AnimationType } from '@/styles/animations'
import { Theme } from '@mui/material'

export interface Section {
    name: string
    Component: React.FC
    animationType: AnimationType
    fullHeight?: boolean
    backgroundColor: string
}

export const getSections = (theme: Theme): Section[] => [

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
        fullHeight: true,
        backgroundColor: theme.palette.background.paper,
    },
    {
        name: 'techStack',
        Component: TechStack,
        animationType: AnimationType.Zoom,
        backgroundColor: theme.palette.background.default,
        fullHeight: true,
    },
    {
        name: 'projects',
        Component: ProjectsOverview,
        animationType: AnimationType.ExpandContract,
        fullHeight: true,
        backgroundColor: theme.palette.background.paper,
    },
    {
        name: 'contact',
        Component: ContactForm,
        animationType: AnimationType.Slide,
        fullHeight: true,
        backgroundColor: theme.palette.background.default,
    },

] 