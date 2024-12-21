import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, fallbackImageSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('Video source in VideoBackground:', videoSrc);
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });
    }
  }, [videoSrc]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoBackground;
