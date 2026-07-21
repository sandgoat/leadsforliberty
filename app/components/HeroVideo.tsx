'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Full-bleed hero background video.
 * CPU-friendly: pauses decoding whenever the hero is scrolled out of view
 * or the tab is hidden, and never autoplays under prefers-reduced-motion
 * (the poster frame shows statically instead).
 */
export default function HeroVideo() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (reduced) return; // static poster, no playback at all
    const video = ref.current;
    if (!video) return;
    const section = video.closest('section');

    // Drive play/pause off the hero's real layout box (reliable post-layout),
    // pausing decode once the hero is fully scrolled past or the tab is hidden.
    const update = () => {
      const past = section ? section.getBoundingClientRect().bottom <= 0 : false;
      if (document.hidden || past) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    document.addEventListener('visibilitychange', update);
    return () => {
      window.removeEventListener('scroll', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [reduced]);

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/hero-bg-poster.jpg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 0.5,
      }}
    >
      <source media="(max-width: 768px)" src="/hero-bg-mobile.mp4" type="video/mp4" />
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
