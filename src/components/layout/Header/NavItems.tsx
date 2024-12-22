import { useAnimatedSection } from '@/hooks/useAnimatedSection'
import { useTranslation } from '@/hooks/useCustomTranslation'
import { useNavigation } from '@/hooks/useNavigation'
import { AnimationType } from '@/styles/animations'
import { Box, Button } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { NAV_ITEMS } from './types/header.types'

const NavItems: React.FC = () => {
  const { t } = useTranslation()
  const { itemVariants } = useAnimatedSection({ type: AnimationType.Slide })
  const { navigateToSection } = useNavigation()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {NAV_ITEMS.map((item) => (
        <motion.div
          key={item.key}
          variants={itemVariants}
        >
          <Button
            color="inherit"
            onClick={() => navigateToSection(item.key)}
            sx={{
              mx: 1,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: 'primary.main',
                transition: 'all 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
                left: '0%',
              },
            }}
          >
            {t(item.label)}
          </Button>
        </motion.div>
      ))}
    </Box>
  )
}

export default NavItems
