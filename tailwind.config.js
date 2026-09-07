/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-alt': '#F6F5F1',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#0F172A',
          2: '#334155',
          3: '#64748B',
          50: '#F8FAFC',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        line: '#E2E8F0',
        teal: {
          DEFAULT: '#14B8A6',
          strong: '#0F766E',
          tint: '#E6FAF7',
          300: '#5EEAD4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        navy: '#1E3A5F',
        sea: {
          300: '#5EEAD4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        pass: {
          500: '#10B981',
          600: '#059669',
        },
        sand: '#EFEAE2',
      },
      fontFamily: {
        display: ['"Noto Serif Display"', 'Georgia', 'serif'],
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.12em',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        chip: '999px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.06)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
