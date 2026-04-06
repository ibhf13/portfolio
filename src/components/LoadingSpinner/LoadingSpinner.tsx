import { useTranslation } from '@/hooks/useCustomTranslation'
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

interface LoadingSpinnerProps {
    size?: number
    minHeight?: number | string
    label?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40, minHeight, label }) => {
    const { t } = useTranslation()
    const accessibleLabel = label ?? t('common.loading')

    return (
        <Box
            role="status"
            aria-live="polite"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...(minHeight !== undefined && { minHeight }),
            }}
        >
            <CircularProgress size={size} aria-label={accessibleLabel} />
        </Box>
    )
}

export default LoadingSpinner
