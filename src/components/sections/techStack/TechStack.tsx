import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Box, Grid, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { TechCard, TechStackData, TechStackTabs } from './components'
import { StyledSection } from './styles/techStack.styles'
import { TechStackSection } from './types/techStack.types'

const TechStack = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState<TechStackSection | 'all'>('all')
  const { containerVariants, itemVariants } = useAnimatedSection({
    type: AnimationType.FadeInUp,
    staggerChildren: 0.1
  })

  const technologies = activeSection === 'all'
    ? Object.values(TechStackData).flat()
    : TechStackData[activeSection]

  return (
    <StyledSection as="section" id="techStack" aria-labelledby="techStackTitle">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography id="techStackTitle" variant="h2" textAlign="center" mb={4} fontWeight="bold">
          {t('techStack.title')}
        </Typography>
        <Box display="flex" justifyContent="center" pb={1}>
          <TechStackTabs activeSection={activeSection} onChangeSection={setActiveSection} />
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Grid container spacing={2} justifyContent="center">
              {technologies.map((tech, index) => (
                <Grid item xs={6} sm={4} md={3} key={tech.name}>
                  <TechCard tech={tech} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </StyledSection>
  )
}

export default TechStack
