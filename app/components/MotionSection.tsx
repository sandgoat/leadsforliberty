'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
  'aria-label'?: string;
};

export default function MotionSection({ children, className, style, id, ...aria }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className={className} style={style} id={id} {...aria}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={className}
      style={style}
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...aria}
    >
      {children}
    </motion.section>
  );
}
