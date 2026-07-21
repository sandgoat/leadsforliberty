'use client';

import { useEffect } from 'react';

/**
 * Embeds a GoHighLevel booking calendar (white-label aware).
 * Loads the GHL embed script once and auto-resizes the iframe to its content
 * so it stays responsive on every device. Pass the exact embed values from
 * GHL's Share > Embed snippet.
 */
export default function GhlCalendar({
  src,
  embedId,
  scriptSrc,
  title = 'Booking calendar',
}: {
  src: string;
  embedId: string;
  scriptSrc: string;
  title?: string;
}) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement('script');
      s.src = scriptSrc;
      s.async = true;
      document.body.appendChild(s);
    }
    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.action === 'booking-widget-resize' && e.data.height) {
        const el = document.getElementById(embedId);
        if (el) el.style.height = `${e.data.height}px`;
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [scriptSrc, embedId]);

  return (
    <iframe
      src={src}
      id={embedId}
      title={title}
      scrolling="no"
      style={{
        width: '100%',
        border: 'none',
        overflow: 'hidden',
        minHeight: '650px',
        borderRadius: '12px',
      }}
    />
  );
}
