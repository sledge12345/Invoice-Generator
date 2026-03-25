/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          50: '#F5F5F4',
          100: '#E8E8E6',
          200: '#D1D0CD',
          300: '#A8A7A2',
          400: '#7A7975',
          500: '#4D4C49',
          600: '#2E2D2B',
          700: '#1A1918',
          800: '#111110',
          900: '#0D0D0D',
        },
        sage: {
          DEFAULT: '#3D6B4F',
          50: '#F0F5F2',
          100: '#D8EAE0',
          200: '#A8CEBC',
          300: '#72AD91',
          400: '#4E8A6A',
          500: '#3D6B4F',
          600: '#2E5139',
          700: '#1F3827',
          800: '#132218',
          900: '#0A110C',
        },
        cream: '#FAFAF7',
        gold: '#C4933F',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.10), 0 8px 32px rgba(0,0,0,0.06)',
        'modal': '0 24px 80px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
