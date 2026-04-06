import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { AnimationType } from '@/styles/animations'
import { Box, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { TechCard, TechStackData, TechStackTabs } from './components'
import { StyledSection } from './styles/techStack.styles'
import { ActiveTechSection } from './types/techStack.types'

const TechStack = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState<ActiveTechSection>('all')
  const { containerVariants, itemVariants } = useAnimatedSection({
    type: AnimationType.FadeInUp,
    staggerChildren: 0.1
  })

  const technologies = activeSection === 'all'
    ? Object.values(TechStackData).flat()
    : TechStackData[activeSection]

  return (
    <StyledSection id="techStack" aria-labelledby="techStackTitle">
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
            role="tabpanel"
            id={`techstack-panel-${activeSection}`}
            aria-labelledby={`techstack-tab-${activeSection}`}
          >
            <Box
              sx={{
                display: 'grid',
                gap: 2,
                justifyContent: 'center',
                gridTemplateColumns: {
                  xs: 'repeat(2, minmax(0, 1fr))',
                  sm: 'repeat(3, minmax(0, 1fr))',
                  md: 'repeat(4, minmax(0, 1fr))',
                },
              }}
            >
              {technologies.map((tech, index) => (
                <Box key={tech.name}>
                  <TechCard tech={tech} index={index} />
                </Box>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </StyledSection>
  )
}

export default TechStack
