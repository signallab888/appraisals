/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0f1f3d',
          800: '#15294e',
          700: '#1a365d',
          600: '#2c5282',
          500: '#3568a6',
          400: '#5a8bc4',
          300: '#90b4d6',
          200: '#cbdcea',
          100: '#e8eef5',
          50:  '#f5f8fb',
        },
        cta: {
          700: '#6B1929',
          600: '#8B2035',
          500: '#A8273F',
          400: '#C4526A',
          100: '#f9e8ec',
        },
        ink: {
          900: '#0a0e1a',
          800: '#1a202c',
          700: '#2d3748',
          600: '#4a5568',
          500: '#718096',
          400: '#a0aec0',
        },
        surface: {
          white: '#ffffff',
          soft:  '#f7fafc',
          line:  '#e2e8f0',
          border:'#cbd5e0',
        },
        semantic: {
          success: '#16a34a',
          error:   '#dc2626',
          warn:    '#d97706',
        },
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
