/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // The Jaipur Event Co - Brand Colors
        terracotta: {
          50: '#fef7f2',
          100: '#fdece3',
          200: '#fad9c2',
          300: '#f6bc8e',
          400: '#f09456',
          500: '#e8732d',
          600: '#dc5d1f',
          700: '#b84519',
          800: '#93371a',
          900: '#763019',
          950: '#3f140b'
        },
        gold: {
          50: '#fefdf5',
          100: '#fef9e0',
          200: '#fef0b8',
          300: '#fee37a',
          400: '#fdd334',
          500: '#fcc20c',
          600: '#e09f06',
          700: '#b77707',
          800: '#925a0d',
          900: '#77490d',
          950: '#432403'
        },
        cream: {
          50: '#faf9f6',
          100: '#f5f2ec',
          200: '#ebe3d7',
          300: '#ddd1ba',
          400: '#c9b892',
          500: '#b89f71',
          600: '#a1845b',
          700: '#816748',
          800: '#6a553e',
          900: '#584836',
          950: '#2f241b'
        },
        maroon: {
          50: '#fdf0f0',
          100: '#fadede',
          200: '#f3bcbc',
          300: '#e98c8c',
          400: '#dc5c5c',
          500: '#cc3a3a',
          600: '#b02727',
          700: '#8f1f1f',
          800: '#741d1d',
          900: '#611d1d',
          950: '#350c0c'
        },
        sage: {
          50: '#f6f7f3',
          100: '#ebede3',
          200: '#d7dbc7',
          300: '#c0c4a4',
          400: '#a3a77d',
          500: '#8b8f62',
          600: '#6f734e',
          700: '#585b40',
          800: '#494a37',
          900: '#3e3e30',
          950: '#202016'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delay-1': 'slideUp 0.6s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slideUp 0.6s ease-out 0.2s forwards',
        'slide-up-delay-3': 'slideUp 0.6s ease-out 0.3s forwards',
        'slide-up-delay-4': 'slideUp 0.6s ease-out 0.4s forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};