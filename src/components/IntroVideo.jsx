import { useRef, useState } from 'react';

/**
 * 30 s introduction: poster until the visitor clicks play. No autoplay,
 * no third-party embed.
 */
export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  function play() {
    setPlaying(true);
    requestAnimationFrame(() => {
      ref.current?.play().catch(() => {});
    });
  }

  return (
    <div
      className="relative overflow-hidden rounded-card bg-white shadow-soft"
      style={{ aspectRatio: '16 / 9' }}
    >
      {!playing && (
        <>
          <img
            src="/rebuild/video/intro-poster.jpg"
            alt="Introduction video poster: a ship at sea."
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
          />
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play introduction"
          >
            <span className="rounded-chip bg-white/90 px-6 py-3 font-medium text-teal-strong shadow-soft">
              Play introduction
            </span>
          </button>
        </>
      )}
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover ${playing ? '' : 'hidden'}`}
        controls={playing}
        playsInline
        preload="none"
        poster="/rebuild/video/intro-poster.jpg"
      >
        <source src="/rebuild/video/seascope-intro-30s.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
