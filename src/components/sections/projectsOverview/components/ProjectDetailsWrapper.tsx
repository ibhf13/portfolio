import { useParams } from 'react-router-dom'
import NotFound from '../../notFound/NotFound'
import projects from '../constants/projectsData'
import ProjectDetails from './ProjectDetails'

const ProjectDetailsWrapper: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const project = projects.find((p) => p.id === id)

    if (!project) {
        return <NotFound />
    }

    return <ProjectDetails project={project} />
}

export default ProjectDetailsWrapper 