import { AnimationType } from '@/styles/animations'



export interface SectionStyleProps {
    fullHeight: boolean
    customStyles: React.CSSProperties
}


export interface SectionWrapperProps {
    children: React.ReactNode
    id: string
    animationType?: AnimationType | undefined
    fullHeight?: boolean
    containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    customStyles?: React.CSSProperties
}