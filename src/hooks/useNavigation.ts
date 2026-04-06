import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const navigateToSection = useCallback((sectionId: string) => {
        if (!isHomePage) {
            navigate('/', { state: { scrollTo: sectionId } })

            return
        }

        const section = document.getElementById(sectionId)

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }, [isHomePage, navigate])

    const navigateToProject = useCallback((projectId: string) => {
        navigate(`/project/${encodeURIComponent(projectId)}`)
    }, [navigate])

    return { navigateToSection, navigateToProject, isHomePage }
}
