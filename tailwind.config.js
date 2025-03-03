
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'sidebar-dark-gray': '#333333', // Description 0
        'vscode-dark': '#1E1E1E',      // Description 1
        'gradient-start': '#060B26',    // Description 2
        'gradient-end': '#1A1F37',      // Description 2
        'navy-blue': '#1B263B',
        blue: {
          300: '#8bb0e8',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
        },
        white: '#ffffff',
      },
      spacing: {
        '32': '8rem',   // for logo dimensions
        '904': '904px',
        '1440': '1440px',
      },
      borderRadius: {
        '20': '20px',
        'md': '0.375rem',
        '[100px]': '100px',
      },
      maxWidth: {
        'md': '28rem',  // for form width
      },
      backdropBlur: {
        '56.5': '56.5px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
};