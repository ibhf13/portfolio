import { useState, useCallback, useMemo } from 'react';
import createAppTheme from '../styles/theme';
import background from '../resources/videos/back.mp4';
import background2 from '../resources/videos/back2.mp4';

export const useTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(() =>
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  const [videoSrc, setVideoSrc] = useState(mode === 'dark' ? background : background2);
  const [key, setKey] = useState(0);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      setVideoSrc(newMode === 'dark' ? background : background2);
      setKey(prevKey => prevKey + 1);
      return newMode;
    });
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return { mode, theme, videoSrc, key, toggleTheme };
};
