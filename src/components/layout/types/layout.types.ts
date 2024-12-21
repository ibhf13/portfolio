import { AnimationType } from '@/styles/animations'
import { ReactNode } from 'react'

export interface BaseLayoutProps {
    children: ReactNode
}

export interface SectionWrapperProps extends BaseLayoutProps {
    id: string
    animationType: AnimationType
    backgroundColor?: string
    backgroundImage?: string
    fullHeight?: boolean
    containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    customStyles?: React.CSSProperties
}

export interface HeaderProps {
    toggleTheme: () => void
}


export interface MobileDrawerProps extends HeaderProps {
    isOpen: boolean
    onClose: () => void
}