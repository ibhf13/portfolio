import { WorkExperience } from './types';
import { useTranslation } from '../../../hooks/useCustomTranslation';

export const useWorkExperienceData = (): WorkExperience[] => {
  const { t } = useTranslation();

  return [
    {
      position: t('workTimeline.positions.frontend'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.frontend'),
      logo: "",
      year: '2023 - Heute',
    },
    {
      position: t('workTimeline.positions.vb'),
      company: t('workTimeline.companies.e3dc'),
      description: t('workTimeline.description.vb'),
      logo: "",
      year: '2023',
    },
    {
      position: t('workTimeline.positions.support'),
      company: t('workTimeline.companies.concentrix'),
      description: t('workTimeline.description.support'),
      logo: "",
      year: '2019-2021',
    },
    {
      position: "Student",
      company: t('workTimeline.companies.uos'),
      description: t('workTimeline.description.student'),
      logo: "",
      year: '2018-2023',
    },
  ];
};
