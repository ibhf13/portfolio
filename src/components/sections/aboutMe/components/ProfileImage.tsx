import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import profileImage from '@/resources/images/Profile.jpg'
import { AnimationType } from '@/styles/animations'
import { Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const ProfileImage: React.FC = () => {
  const theme = useTheme()
  const { itemVariants } = useAnimatedSection({ type: AnimationType.ScaleInCenter })

  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          width: 250,
          height: 250,
          margin: 'auto',
          borderRadius: '50%',
          border: `4px solid ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[10],
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Ibrahim Klusmann Image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '100% 10%',
            transform: 'scale(1.4) translateX(-5%)',
          }}
        />
      </Box>
    </motion.div>
  )
}

export default ProfileImage
