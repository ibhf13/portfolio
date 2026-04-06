import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import profileImage from '@/resources/images/Profile.jpg'
import { AnimationType } from '@/styles/animations'
import { Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { PROFILE_IMAGE } from '../constants/aboutMe.constants'

const ProfileImage: React.FC = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const { itemVariants } = useAnimatedSection({ type: AnimationType.ScaleInCenter })

  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          width: PROFILE_IMAGE.SIZE,
          height: PROFILE_IMAGE.SIZE,
          margin: 'auto',
          borderRadius: '50%',
          border: `${PROFILE_IMAGE.BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[10],
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* TODO: source asset should be re-cropped to remove the scale(1.4) framing hack — burns GPU memory on retina */}
        <Box
          component="img"
          src={profileImage}
          alt={t('aboutMe.name')}
          width={PROFILE_IMAGE.SIZE}
          height={PROFILE_IMAGE.SIZE}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '100% 10%',
            transform: `scale(${PROFILE_IMAGE.SCALE}) translateX(${PROFILE_IMAGE.TRANSLATE_X})`,
          }}
        />
      </Box>
    </motion.div>
  )
}

export default ProfileImage
