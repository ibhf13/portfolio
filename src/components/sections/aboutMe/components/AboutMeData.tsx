import { useTranslation } from '@/hooks/useCustomTranslation'
import CodeIcon from '@mui/icons-material/Code'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SchoolIcon from '@mui/icons-material/School'
import { ExperienceItem } from '../types/aboutMe.types'

export const AboutMeData = (): ExperienceItem[] => {
  const { t } = useTranslation()

  return [
    {
      icon: <CodeIcon fontSize="large" />,
      years: 6,
      text: t('aboutMe.experiences.coding')
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      years: 3,
      text: t('aboutMe.experiences.industry')
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      years: 4,
      text: t('aboutMe.experiences.projects')
    }
  ]
}
