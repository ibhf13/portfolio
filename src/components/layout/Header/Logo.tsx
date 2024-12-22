import logo from '@/resources/images/logo.png'
import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      onClick={handleClick}
    />
  )
}

export default Logo
