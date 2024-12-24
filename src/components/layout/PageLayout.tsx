import { Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './components/header'

interface LocationState {
    scrollTo?: string
}

interface PageLayoutProps {
    children: ReactNode
    toggleTheme: () => void
}

const PageLayout = ({ children, toggleTheme }: PageLayoutProps) => {
    const location = useLocation()
    const state = location.state as LocationState

    useEffect(() => {
        if (state?.scrollTo) {
            const section = document.getElementById(state.scrollTo)
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
            // Clear the state to prevent scrolling on subsequent renders
            window.history.replaceState({}, document.title)
        }
    }, [state?.scrollTo])

    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                height: '100vh',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}
        >
            <Header toggleTheme={toggleTheme} />
            {children}
        </Box>
    )
}

export default PageLayout 