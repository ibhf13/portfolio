import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { backgroundConfigs, BackgroundConfig } from '../components/common/AnimatedBackground/BackgroundConfig';

const useBackgroundConfig = (sectionId: string): BackgroundConfig => {
  const theme = useTheme();
  const configFunction = backgroundConfigs[sectionId] || backgroundConfigs.aboutMe;

  return useMemo(() => {
    const config = configFunction(theme);
    return {
      ...config,
      gradientColors: config.gradientColors.map(color =>
        theme.palette.mode === 'dark' ? `${color}33` : `${color}4D`
      ),
    };
  }, [configFunction, theme]);
};

export default useBackgroundConfig;
