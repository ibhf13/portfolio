import { ReactNode } from 'react'

export const enum ProfessionKeys {
    SOFTWARE = 'aboutMe.professions.software',
    FRONTEND = 'aboutMe.professions.frontend'
}

export interface ExperienceItem {
    icon: ReactNode
    years: number
    text: string
}

export interface ExperienceCardProps extends ExperienceItem {
    isMobile: boolean
}


export interface AnimationConfig {
    opacity: number
    scale?: number
    x?: number
}
