import { useEffect, useState } from 'react';

/**
 * Hero background: muted looping ship clip, poster-only when the user
 * prefers reduced motion or the connection is flagged save-data.
 * Poster paints first; the clip attaches on the next frame when allowed.
 */
export default function HeaderVideo() {
  const [mode, setMode] = useState('poster');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData = Boolean(navigator.connection?.saveData);
    if (mq.matches || saveData) return undefined;
    const id = requestAnimationFrame(() => setMode('video'));
    return () => cancelAnimationFrame(id);
  }, []);

  const frame = 'absolute inset-0 h-full w-full object-cover';
  const position = { objectPosition: 'center right' };

  if (mode !== 'video') {
    return (
      <img
        src="/rebuild/images/ship-aerial.webp"
        alt=""
        className={frame}
        style={position}
        width="1600"
        height="900"
        fetchPriority="high"
        decoding="async"
      />
    );
  }

  return (
    <video
      className={frame}
      style={position}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/rebuild/images/ship-aerial.webp"
      aria-hidden="true"
    >
      <source src="/rebuild/video/header-loop-ship.mp4" type="video/mp4" />
    </video>
  );
}
