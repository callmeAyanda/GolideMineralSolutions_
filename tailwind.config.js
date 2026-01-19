// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spinReverse 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'gradient-border': 'gradientBorder 3s ease infinite',
        'text-reveal': 'textReveal 1.5s ease-out forwards',
        'modal-enter': 'modalEnter 0.3s ease-out',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(141, 198, 255, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(141, 198, 255, 0)',
          },
        },
        gradientBorder: {
          '0%, 100%': { borderColor: '#8dc6ff' },
          '25%': { borderColor: '#e4f1fe' },
          '50%': { borderColor: '#34495e' },
          '75%': { borderColor: '#22313f' },
        },
        textReveal: {
          'from': { clipPath: 'inset(0 100% 0 0)' },
          'to': { clipPath: 'inset(0 0 0 0)' },
        },
        modalEnter: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95) translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

