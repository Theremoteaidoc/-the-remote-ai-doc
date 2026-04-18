/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // SeaScope brand palette — verified against live CSS extract Apr 2026
      colors: {
        // Slate primary — depth, maritime night
        ink: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          50:  '#F8FAFC',
        },
        // Teal accent — clinical-fresh, ocean, "safe" signal
        sea: {
          300: '#5EEAD4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        // Emerald success — PASS guardrails, healthy metrics
        pass: {
          500: '#10B981',
          600: '#059669',
        },
        // Warm off-white — accent surface, legal/footer panels
        sand: '#EFEAE2',
      },
      fontFamily: {
        // Editorial serif for hero displays — the "Sea." accent moment
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        // Body sans
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Mono — code blocks, stat figures
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        // Small-caps tracked footer / eyebrow pattern
        'eyebrow': '0.15em',
      },
      backgroundImage: {
        // Brand gradient — teal to deep teal, used on CTA bands
        'sea-gradient': 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
      },
    },
  },
  plugins: [],
}
