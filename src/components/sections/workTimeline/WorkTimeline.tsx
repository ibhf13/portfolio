import { useTranslation } from '@/hooks/useCustomTranslation'
import { Timeline } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import TimelineItem from './components/TimelineItem'
import { useWorkTimelineLogic } from './hooks/useWorkTimelineLogic'

const WorkTimeline = () => {
  const { t } = useTranslation()
  const {
    isMobile,
    ref,
    itemVariants,
    containerVariants,
    workExperience,
  } = useWorkTimelineLogic()

  return (
    <Box
      component="section"
      id="workTimeline"
      py={isMobile ? 4 : 8}
      sx={{ overflow: 'hidden' }}
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h2" textAlign="center" mb={6} fontWeight="bold">
          {t('workTimeline.title')}
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={ref}
      >
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            ...(isMobile && {
              [`& .MuiTimelineItem-root:before`]: {
                flex: 0,
                padding: 0,
              },
            }),
          }}
        >
          {workExperience.map((experience, index) => (
            <TimelineItem
              key={`${experience.position}-${index}`}
              experience={experience}
              index={index}
              totalItems={workExperience.length}
            />
          ))}
        </Timeline>
      </motion.div>
    </Box>
  )
}

export default WorkTimeline
