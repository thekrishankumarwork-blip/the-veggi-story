import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#d0e8e2',
          200: '#a8d4c6',
          300: '#5f9f8a',
          400: '#2d7a5f',
          500: '#1a5f3f',
          600: '#164d33',
          700: '#0f3a25',
          800: '#0a2818',
          900: '#051510',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf4e1',
          200: '#fbe9c3',
          300: '#f7d896',
          400: '#f0c857',
          500: '#d4af37',
          600: '#b8942f',
          700: '#8f7127',
          800: '#6b531f',
          900: '#3e3019',
        },
        cream: '#f5f1e8',
        'dark-bg': '#0f0f0f',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
