import React from 'react';
import styles from './Video.module.css';

interface VideoProps {
  src: string;
  title: string;
  width?: string | number;
  startTime?: number;
}

export default function Video({ 
  src, 
  title, 
  width = '100%', 
  startTime = 0 
}: VideoProps) {
  // Extract video ID from YouTube URL
  const videoId = src.split('/').pop()?.split('?')[0];
  
  // Construct the embed URL with parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}`;

  return (
    <div className={styles.videoContainer} style={{ width }}>
      <iframe
        className={styles.video}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
} 