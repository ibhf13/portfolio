import CodeIcon from '@mui/icons-material/Code'
import TranslateIcon from '@mui/icons-material/Translate'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useTranslation } from '../../../hooks/useCustomTranslation'

const TranslationKeyDisplay: React.FC = () => {
  const { t, showKeys, toggleShowKeys } = useTranslation()

  return (
    <Tooltip title={t(showKeys ? 'header.hideTranslationKeys' : 'header.showTranslationKeys')}>
      <IconButton color="inherit" onClick={toggleShowKeys} size="large">
        {showKeys ? <CodeIcon /> : <TranslateIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default TranslationKeyDisplay
