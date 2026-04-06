import { useTranslation } from '@/hooks/useCustomTranslation'
import { calculateAge } from '@/utils/dateUtils'
import { Box, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { AboutMeDescription, AboutMeHeader, ExperienceGrid, ProfileImage } from './components'
import { BIRTH_DATE } from './constants/aboutMe.constants'
import { useAboutMeExperiences } from './hooks/useAboutMeExperiences'

const AGE = calculateAge(BIRTH_DATE)

const AboutMe = () => {
  const { t } = useTranslation()
  const experienceData = useAboutMeExperiences()

  return (
    <Box
      component="section"
      id="about"
      aria-labelledby="about-heading"
      position="relative"
      overflow="hidden"
    >
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            gap={4}
          >
            <Box width={{ xs: '100%', md: '33.333%' }}>
              <ProfileImage />
            </Box>
            <Box width={{ xs: '100%', md: '66.667%' }}>
              <AboutMeHeader name={t('aboutMe.name')} age={AGE} />
              <AboutMeDescription age={AGE} />
            </Box>
          </Box>
          <ExperienceGrid experiences={experienceData} />
        </motion.div>
      </Container>
    </Box>
  )
}

export default AboutMe
