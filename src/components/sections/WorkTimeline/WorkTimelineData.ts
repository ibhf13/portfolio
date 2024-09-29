
import { useTranslation } from '../../../hooks/useCustomTranslation';
import e3dcLogo from '../../../resources/images/e3dc.jpg';
import uosLogo from '../../../resources/images/uos.jpg';
import concentrixLogo from '../../../resources/images/concentrix.jpg';

interface WorkExperience {
  position: string;
  company: string;
  description: string;
  logo: string;
  year?: string;
}

export const useWorkExperienceData = (): WorkExperience[] => {
  const { t } = useTranslation();

  const workExperience: WorkExperience[] = [
    {
      position: t('workTimeline.positions.frontend'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.frontend'),
      logo: e3dcLogo,
      year: '2023 - Heute',
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
      year: '2018-2023',
    },
  ];

  return workExperience;
};
