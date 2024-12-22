import { useLocation, useNavigate } from 'react-router-dom'

export const useNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const navigateToSection = (sectionId: string) => {
        if (!isHomePage) {
            navigate('/', { state: { scrollTo: sectionId } })
            return
        }

        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navigateToProject = (projectId: string) => {
        navigate(`/project/${projectId}`)
    }

    return {
        navigateToSection,
        navigateToProject,
        isHomePage
    }
} 