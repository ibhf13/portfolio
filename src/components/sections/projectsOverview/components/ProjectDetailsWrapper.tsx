import Seo from '@/components/Seo'
import { SITE_URL } from '@/config/site'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { useParams } from 'react-router-dom'
import NotFound from '../../notFound/NotFound'
import projects from '../constants/projectsData'
import ProjectDetails from './ProjectDetails'

const ProjectDetailsWrapper: React.FC = () => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const project = projects.find((p) => p.id === id)

    if (!project) {
        return <NotFound />
    }

    return (
        <>
            <Seo
                title={`${t(project.title)} — ${t('seo.author')}`}
                description={t(project.description)}
                canonical={`${SITE_URL}/project/${project.id}`}
                type="article"
            />
            <ProjectDetails project={project} />
        </>
    )
}

export default ProjectDetailsWrapper
