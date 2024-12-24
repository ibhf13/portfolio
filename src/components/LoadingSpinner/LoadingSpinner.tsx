import { Box, CircularProgress } from '@mui/material'
import React from 'react'

interface LoadingSpinnerProps {
    size?: number
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40 }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
            }}
        >
            <CircularProgress size={size} />
        </Box>
    )
}

export default LoadingSpinner 