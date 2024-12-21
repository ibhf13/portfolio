import { AnimationType } from '@/styles/animations'
import { ContainerProps } from '@mui/material'

export interface SectionWrapperProps {
    children: React.ReactNode
    id: string
    animationType: AnimationType
    backgroundColor?: string
    backgroundImage?: string
    fullHeight?: boolean
    containerWidth?: ContainerProps['maxWidth']
    customStyles?: React.CSSProperties
}

export interface SectionStyleProps {
    fullHeight: boolean
    customStyles: React.CSSProperties
} 