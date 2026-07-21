'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

type Props = {
  /** Final value to count to, e.g. 50 */
  value: number;
  /** Rendered before the number, e.g. "$" */
  prefix?: string;
  /** Rendered after the number, e.g. "K+" or "hr" */
  suffix?: string;
  /** Animation length in ms */
  duration?: number;
  className?: string;
};

/**
 * Counts a number up from 0 → value the first time it scrolls into view.
 * Honors prefers-reduced-motion by rendering the final value immediately.
 */
export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1600,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutExpo — fast then settles, feels confident
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
