import { useCallback } from 'react'

export const useScrollToSection = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            return true
        }
        return false
    }, [])

    return scrollToSection
} 