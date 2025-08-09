import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KaffeeRad Berlin - Rich Coffee Inspired Colors
        coffee: {
          50: '#fdf9f4',
          100: '#f8f0e6',
          200: '#f1dcc7',
          300: '#e7c29f',
          400: '#d4976a',
          500: '#c5794a',
          600: '#a85d33',
          700: '#8b4513',
          800: '#723a17',
          900: '#5d2f14',
        },
        cream: {
          50: '#fffcf8',
          100: '#fef9f1',
          200: '#fcf0e0',
          300: '#f9e4c7',
          400: '#f5d5a3',
          500: '#f0c478',
          600: '#e6a85c',
          700: '#d28c42',
          800: '#b06f33',
          900: '#8f5829',
        },
        espresso: {
          50: '#f7f3f0',
          100: '#ede2d9',
          200: '#d9c0b0',
          300: '#c19782',
          400: '#a67159',
          500: '#8b5742',
          600: '#724539',
          700: '#5e3830',
          800: '#4f302a',
          900: '#442a26',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9d1',
          200: '#fff2a3',
          300: '#ffe66b',
          400: '#ffd23a',
          500: '#ffb813',
          600: '#e89308',
          700: '#c0690a',
          800: '#9d5010',
          900: '#814011',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config