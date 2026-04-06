export interface Technology {
    name: string
    icon: string
    color: string
    backgroundColor?: string
    translationKey: string
}

export interface TechStackDataProps {
    frontend: Technology[]
    backend: Technology[]
    testing: Technology[]
    tools: Technology[]
}

export type TechStackSection = keyof TechStackDataProps

export interface TechCardProps {
    tech: Technology
    index: number
}

export interface TechStackTabsProps {
    activeSection: TechStackSection | 'all'
    onChangeSection: (section: TechStackSection | 'all') => void
} 