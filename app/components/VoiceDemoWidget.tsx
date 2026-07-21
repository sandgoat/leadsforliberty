'use client';

import { useEffect, useRef } from 'react';

// GHL "Liberty Voice Demo Widget" (Embedded/Inline placement), wired to the
// "Liberty Demo Receptionist" Voice AI agent. Inline widgets render at the
// script tag's DOM position, so the loader is injected inside this container
// rather than via next/script (which hoists tags out of place).
const WIDGET_ID = '6a472be0686a90131b0a18a3';

export default function VoiceDemoWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector('script')) return;
    const s = document.createElement('script');
    s.src = 'https://widgets.leadconnectorhq.com/loader.js';
    s.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
    );
    s.setAttribute('data-widget-id', WIDGET_ID);
    container.appendChild(s);
  }, []);

  return (
    <div
      ref={ref}
      aria-label="Live AI receptionist voice demo"
      style={{
        minHeight: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}
