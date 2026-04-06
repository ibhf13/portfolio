import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { AnimationType } from '@/styles/animations'
import { TimelineItem as MuiTimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab'
import { useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { TimelineItemProps } from '../types/workTimeline.types'
import WorkDetailsCard from './WorkDetailsCard'

const TimelineItem = ({ experience, index, totalItems }: TimelineItemProps) => {
    const theme = useTheme()
    const { itemVariants: dotVariants } = useAnimatedSection({
        type: AnimationType.FadeInUp,
    })

    return (
        <MuiTimelineItem>
            <TimelineSeparator>
                {index !== 0 && <TimelineConnector />}
                <motion.div variants={dotVariants}>
                    <TimelineDot
                        sx={{
                            boxShadow: 3,
                            p: 0,
                            border: `2px solid ${theme.palette.primary.main}`,
                            overflow: 'hidden',
                            width: 80,
                            height: 80,
                        }}
                    >
                        <motion.img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.4 }}
                        />
                    </TimelineDot>
                </motion.div>
                {index !== totalItems - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
                <WorkDetailsCard experience={experience} />
            </TimelineContent>
        </MuiTimelineItem>
    )
}

export default TimelineItem 