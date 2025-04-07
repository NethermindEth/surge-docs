// src/theme/Root.tsx
import React, { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

export default function Root({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    mediumZoom('article img', {
      background: 'rgba(0, 0, 0, 0.9)',
      margin: 24,
      scrollOffset: 40,
    });
  }, []);

  return <>{children}</>;
}
