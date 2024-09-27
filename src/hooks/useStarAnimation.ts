import { useMemo } from 'react';

const useStarAnimation = () => {
  return useMemo(() => ({
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }), []);
};

export default useStarAnimation;
