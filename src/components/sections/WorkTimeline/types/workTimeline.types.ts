export interface WorkExperience {
    position: string
    company: string
    description: string
    logo: string
    year?: string
}

export interface TimelineItemProps {
    experience: WorkExperience
    index: number
    totalItems: number
}