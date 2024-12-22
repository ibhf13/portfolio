import projects from '@/components/sections/projectsOverview/constants/projectsData'
import { Project } from '@/components/sections/projectsOverview/types/project.types'
import { useCallback, useState } from 'react'

export const useProject = (id: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [project, setProject] = useState<Project | null>(null)

    const fetchProject = useCallback(async () => {
        try {
            setIsLoading(true)
            const foundProject = projects.find(p => p.id === id)

            if (!foundProject) {
                throw new Error('Project not found')
            }

            setProject(foundProject)
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch project')
            setProject(null)
        } finally {
            setIsLoading(false)
        }
    }, [id])

    return {
        project,
        isLoading,
        error,
        fetchProject
    }
} 