'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { CaretLeft, CaretRight, TrendUp, TrendDown } from '@phosphor-icons/react';

type Event = {
  day: number; // 0-3 (Mon-Thu)
  start: number; // row slot 0-6
  span: number; // slots tall
  title: string;
  time: string;
  bg: string; // Google Calendar event color
  fg: string; // text color
};

const dayHeads = [
  { label: 'MON', date: 15 },
  { label: 'TUE', date: 16 },
  { label: 'WED', date: 17 },
  { label: 'THU', date: 18 },
];
const TODAY = 1; // Tue
const times = ['9 AM', '10', '11', '12 PM', '1', '2', '3'];

/* Google Calendar event palette. Order = fill order. */
const events: Event[] = [
  { day: 0, start: 0, span: 1, title: 'New client consult', time: '9 AM', bg: '#039BE5', fg: '#fff' },
  { day: 1, start: 1, span: 2, title: 'On-site estimate', time: '10 AM', bg: '#0B8043', fg: '#fff' },
  { day: 2, start: 0, span: 1, title: 'Service call', time: '9 AM', bg: '#F4511E', fg: '#fff' },
  { day: 0, start: 3, span: 1, title: 'Follow-up', time: '12 PM', bg: '#3F51B5', fg: '#fff' },
  { day: 3, start: 2, span: 2, title: 'Consultation', time: '11 AM', bg: '#8E24AA', fg: '#fff' },
  { day: 1, start: 4, span: 1, title: 'Check-in', time: '1 PM', bg: '#E67C73', fg: '#fff' },
  { day: 2, start: 3, span: 1, title: 'Tune-up', time: '12 PM', bg: '#F6BF26', fg: '#3c4043' },
  { day: 3, start: 0, span: 1, title: 'Quote', time: '9 AM', bg: '#039BE5', fg: '#fff' },
];

const HOLD_MS = 900; // dwell on the "lost" state before the calendar starts filling
const FILL_MS = 3000; // climb from lost to booked
const END_PAUSE_MS = 1900; // admire the fully-booked state before looping

/**
 * Google-Calendar-styled week view. One looping timeline drives the
 * appointments filling in AND the revenue climbing from "$12K lost" (red) to
 * "$18K booked" (navy), then clears and replays. Reduced-motion shows the
 * final booked state with no animation.
 */
export default function CalendarDemo() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(reduced ? 1 : 0);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let started = false;
    const cycle = HOLD_MS + FILL_MS + END_PAUSE_MS;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        // Loop: hold at "lost", climb to "booked", pause, then repeat.
        const elapsed = (now - start) % cycle;
        const t = Math.max(0, Math.min(1, (elapsed - HOLD_MS) / FILL_MS));
        setProgress(t);
        raf = requestAnimationFrame(tick);
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
      { threshold: 0.35 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const revK = Math.round(-12 + progress * 30); // -$12K lost  ->  +$18K booked
  const isLost = revK < 0;

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: '456px' }}>
      {/* Calendar card */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #dadce0',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(60,64,67,0.16), 0 24px 50px rgba(13,31,60,0.14)',
          overflow: 'hidden',
        }}
      >
        {/* Toolbar */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '12px 14px', borderBottom: '1px solid #e8eaed' }}
        >
          <div className="flex items-center" style={{ gap: '9px' }}>
            <CaretLeft size={17} color="#5f6368" weight="bold" aria-hidden="true" />
            <CaretRight size={17} color="#5f6368" weight="bold" aria-hidden="true" />
            <span className="font-body" style={{ fontSize: '1.125rem', fontWeight: 500, color: '#3c4043' }}>
              June 2026
            </span>
          </div>
          <div className="flex items-center" style={{ gap: '9px' }}>
            <span
              className="font-body"
              style={{
                fontSize: '0.8125rem',
                color: '#3c4043',
                border: '1px solid #dadce0',
                borderRadius: '4px',
                padding: '4px 10px',
              }}
            >
              Week
            </span>
            <span
              className="font-body flex items-center justify-center"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: '#1a73e8',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              G
            </span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '36px repeat(4, 1fr)',
            gridTemplateRows: 'auto repeat(7, 31px)',
            padding: '7px 7px 10px',
          }}
        >
          {/* Corner */}
          <div style={{ gridColumn: 1, gridRow: 1 }} />

          {/* Day headers */}
          {dayHeads.map((d, c) => {
            const isToday = c === TODAY;
            return (
              <div
                key={d.label}
                className="flex flex-col items-center"
                style={{ gridColumn: c + 2, gridRow: 1, gap: '2px', paddingBottom: '7px' }}
              >
                <span
                  className="font-body font-semibold"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.04em', color: isToday ? '#1a73e8' : '#70757a' }}
                >
                  {d.label}
                </span>
                <span
                  className="font-body flex items-center justify-center"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isToday ? 600 : 400,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: isToday ? '#1a73e8' : 'transparent',
                    color: isToday ? '#fff' : '#3c4043',
                  }}
                >
                  {d.date}
                </span>
              </div>
            );
          })}

          {/* Time labels */}
          {times.map((t, r) => (
            <div
              key={t}
              className="font-body"
              style={{
                gridColumn: 1,
                gridRow: r + 2,
                fontSize: '0.6875rem',
                color: '#70757a',
                paddingRight: '5px',
                textAlign: 'right',
                alignSelf: 'start',
                transform: 'translateY(-6px)',
              }}
            >
              {t}
            </div>
          ))}

          {/* Background cells */}
          {times.map((_, r) =>
            dayHeads.map((_, c) => (
              <div
                key={`${r}-${c}`}
                aria-hidden="true"
                style={{
                  gridColumn: c + 2,
                  gridRow: r + 2,
                  borderTop: '1px solid #e8eaed',
                  borderLeft: c === 0 ? '1px solid #e8eaed' : undefined,
                  borderRight: '1px solid #e8eaed',
                  ...(r === 6 ? { borderBottom: '1px solid #e8eaed' } : {}),
                }}
              />
            )),
          )}

          {/* Event chips — revealed in order as the timeline progresses */}
          {events.map((e, i) => {
            const revealAt = (i / events.length) * 0.8;
            const shown = progress >= revealAt;
            return (
              <div
                key={i}
                style={{
                  gridColumn: e.day + 2,
                  gridRow: `${e.start + 2} / span ${e.span}`,
                  background: e.bg,
                  borderRadius: '4px',
                  margin: '1px',
                  padding: '3px 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  zIndex: 2,
                  opacity: shown ? 1 : 0,
                  transform: shown ? 'scale(1)' : 'scale(0.85)',
                  transformOrigin: 'center top',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                }}
              >
                <span
                  className="font-body font-semibold"
                  style={{ fontSize: '0.75rem', color: e.fg, lineHeight: 1.15, overflow: 'hidden' }}
                >
                  {e.title}
                </span>
                {e.span > 1 && (
                  <span
                    className="font-body"
                    style={{ fontSize: '0.625rem', color: e.fg, opacity: 0.85, lineHeight: 1 }}
                  >
                    {e.time}
                  </span>
                )}
              </div>
            );
          })}

          {/* Current-time indicator */}
          <div
            aria-hidden="true"
            style={{ gridColumn: '2 / 6', gridRow: 4, alignSelf: 'start', position: 'relative', height: 0, zIndex: 4, transform: 'translateY(16px)' }}
          >
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '2px', background: '#ea4335' }} />
            <div style={{ position: 'absolute', left: '-5px', top: '-4px', width: '9px', height: '9px', borderRadius: '50%', background: '#ea4335' }} />
          </div>
        </div>
      </div>

      {/* Caption: integration + revenue, lost -> booked */}
      <div className="flex items-center justify-between" style={{ marginTop: '0.875rem', padding: '0 2px' }}>
        <span className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-warm-gray)' }}>
          Synced to Google Calendar
        </span>
        <span
          className="font-display font-bold inline-flex items-center gap-1.5"
          style={{ fontSize: '1.25rem', color: isLost ? 'var(--color-crimson)' : 'var(--color-navy)' }}
          aria-live="polite"
        >
          {isLost ? (
            <TrendDown size={18} weight="bold" color="#B91C1C" aria-hidden="true" />
          ) : (
            <TrendUp size={18} weight="bold" color="#B91C1C" aria-hidden="true" />
          )}
          {isLost ? `$${Math.abs(revK)}K lost` : `$${revK}K booked`}
        </span>
      </div>
    </div>
  );
}
