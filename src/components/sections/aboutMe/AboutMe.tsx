import { useTranslation } from '@/hooks/useCustomTranslation'
import { calculateAge } from '@/utils/dateUtils'
import { Box, Container, Grid } from '@mui/material'
import { AboutMeData, AboutMeDescription, AboutMeHeader, ExperienceGrid, ProfileImage } from './components'

const BIRTH_DATE = new Date('1994-01-01')

const AboutMe = () => {
  const age = calculateAge(BIRTH_DATE)
  const experienceData = AboutMeData()
  const { t } = useTranslation()


  return (
    <Box position="relative" overflow="hidden" borderRadius={2}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <ProfileImage />
          </Grid>
          <Grid item xs={12} md={8}>
            <AboutMeHeader name={t('aboutMe.name')} age={age} />
            <AboutMeDescription age={age} />
          </Grid>
        </Grid>
        <ExperienceGrid experiences={experienceData} />
      </Container>
    </Box>
  )
}

export default AboutMe
