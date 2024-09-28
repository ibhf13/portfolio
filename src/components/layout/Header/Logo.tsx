import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from '../../../hooks/useCustomTranslation';

const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: 'bold',
        color: 'text.primary',
        flexGrow: 1,
        cursor: 'pointer',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {t('header.title')}
    </Typography>
  );
};

export default Logo;
