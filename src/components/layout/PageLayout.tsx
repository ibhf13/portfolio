import { trackPageView } from '@/firebase'
import { Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const state = location.state as LocationState | null

    useEffect(() => {
        trackPageView(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        if (!state?.scrollTo) return

        const targetId = state.scrollTo

        const raf = requestAnimationFrame(() => {
            const section = document.getElementById(targetId)

            section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })

        navigate(location.pathname, { replace: true, state: {} })

        return () => cancelAnimationFrame(raf)
    }, [state?.scrollTo, navigate, location.pathname])

    return (
        <Box
            component="main"
            sx={{
                p: 0,
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                height: '100dvh',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none',
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
