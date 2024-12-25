export interface ProjectDetailsProps {
    project: Project
}


export interface Project {
    id: string
    title: string
    image: string
    description: string
    logo?: string
    techStack: string[]
    problem: string
    solution: string
    demoUrl?: string
    githubUrl?: string
    screenshots: string[]
    isAvailable: boolean
} 