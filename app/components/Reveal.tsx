'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Travel distance in px (vertical) */
  y?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Fade + rise reveal as the element enters the viewport.
 * Uses a native IntersectionObserver (which reliably fires its initial
 * callback even for content already on-screen at load, unlike framer's
 * whileInView), with a CSS transition for the animation.
 * Honors prefers-reduced-motion (renders fully visible, no motion).
 */
export default function Reveal({ children, delay = 0, y = 18, className, style }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const node = ref.current;
    let io: IntersectionObserver | undefined;
    if (node && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShown(true);
            io?.disconnect();
          }
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      );
      io.observe(node);
    } else {
      setShown(true);
    }
    // Safety net: content must never stay permanently hidden, even if the
    // observer's initial callback races with layout/font settling.
    const t = setTimeout(() => setShown(true), 1400);
    return () => {
      io?.disconnect();
      clearTimeout(t);
    };
  }, [reduced]);

  const motionStyle: CSSProperties = reduced
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: 'opacity, transform',
      };

  return (
    <div ref={ref} className={className} style={{ ...motionStyle, ...style }}>
      {children}
    </div>
  );
}
