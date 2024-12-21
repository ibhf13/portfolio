import logo from '@/resources/images/logo.png'
import { Box } from '@mui/material'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Box
      component="img"
      src={logo}
      alt="Logo"
      sx={{
        height: '64px',
        cursor: 'pointer',
        objectFit: 'contain',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  )
}

export default Logo
