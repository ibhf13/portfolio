import { useTranslation } from '@/hooks/useCustomTranslation'
import concentrixLogo from '@/resources/images/concentrix.jpg'
import e3dcLogo from '@/resources/images/e3dc.jpg'
import techLabs from '@/resources/images/techlabs.jpg'
import uosLogo from '@/resources/images/uos.jpg'
import { WorkExperience } from '../types/workTimeline.types'

export const useWorkExperienceData = (): WorkExperience[] => {
    const { t } = useTranslation()

    return [
        {
            position: t('workTimeline.positions.frontend'),
            company: t('workTimeline.companies.e3dc'),
            description: t('workTimeline.description.frontend'),
            logo: e3dcLogo,
            year: '2023 - Heute',
        },
        {
            position: t('workTimeline.positions.mentor'),
            company: t('workTimeline.companies.techLabs'),
            description: t('workTimeline.description.mentor'),
            logo: techLabs,
            year: '2024 - Heute',
        },
        {
            position: t('workTimeline.positions.vb'),
            company: t('workTimeline.companies.e3dc'),
            description: t('workTimeline.description.vb'),
            logo: e3dcLogo,
            year: '2023',
        },
        {
            position: t('workTimeline.positions.support'),
            company: t('workTimeline.companies.concentrix'),
            description: t('workTimeline.description.support'),
            logo: concentrixLogo,
            year: '2019-2021',
        },
        {
            position: "Student",
            company: t('workTimeline.companies.uos'),
            description: t('workTimeline.description.student'),
            logo: uosLogo,
            year: '2017-2023',
        },
    ]
} 