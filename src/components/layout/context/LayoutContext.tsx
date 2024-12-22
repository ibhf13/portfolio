import React, { createContext, useContext, useState } from 'react'
import { BaseLayoutProps } from '../types/layout.types'
interface LayoutContextType {
    isDrawerOpen: boolean
    toggleDrawer: () => void
    closeDrawer: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const LayoutProvider: React.FC<BaseLayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(prev => !prev)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <LayoutContext.Provider value={{ isDrawerOpen, toggleDrawer, closeDrawer }}>
            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = () => {
    const context = useContext(LayoutContext)
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider')
    }
    return context
} 