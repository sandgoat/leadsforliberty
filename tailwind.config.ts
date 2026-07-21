import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1F3C',
        crimson: '#B91C1C',
        linen: '#FAF8F5',
        stone: '#F3F0EB',
        'warm-gray': '#6B6560',
        'warm-border': '#E4DDD5',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '3px',
        pill: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
