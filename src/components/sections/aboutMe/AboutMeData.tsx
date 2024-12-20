import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from '../../../hooks/useCustomTranslation';

export const useExperienceData = () => {
  const { t } = useTranslation();

  return [
    { icon: <CodeIcon fontSize="large" />, years: 5, text: t('aboutMe.experiences.coding') },
    { icon: <SchoolIcon fontSize="large" />, years: 2, text: t('aboutMe.experiences.industry') },
    { icon: <EmojiEventsIcon fontSize="large" />, years: 3, text: t('aboutMe.experiences.projects') },
  ];
};
