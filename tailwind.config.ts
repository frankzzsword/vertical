import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px) scale(0.9)', opacity: '0' },
          '60%': { transform: 'translateY(-20px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.8) rotate(-4deg)', opacity: '0' },
          '60%': { transform: 'scale(1.1) rotate(2deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(0)', opacity: '1' },
        },
        'rotate-scale': {
          '0%': { transform: 'rotate(-10deg) scale(0.9) translateY(40px)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1) translateY(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%) scale(1)' },
          '50%': { transform: 'translateY(0) scale(0.98)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px) rotate(5deg)', opacity: '0' },
          '60%': { transform: 'translateX(-20px) rotate(-2deg)', opacity: '0.8' },
          '100%': { transform: 'translateX(0) rotate(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px) rotate(-5deg)', opacity: '0' },
          '60%': { transform: 'translateX(20px) rotate(2deg)', opacity: '0.8' },
          '100%': { transform: 'translateX(0) rotate(0)', opacity: '1' },
        },
        'zoom-pan': {
          '0%': { transform: 'scale(1.2) translate(20px, 20px)', filter: 'blur(4px)' },
          '100%': { transform: 'scale(1) translate(0, 0)', filter: 'blur(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2) blur(4px)' },
        },
        'scale-bounce': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '0.8' },
          '80%': { transform: 'scale(0.95)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-delay': 'slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'slide-up-delay-2': 'slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-delay': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'scale-up': 'scale-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'rotate-scale': 'rotate-scale 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'zoom-pan': 'zoom-pan 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scale-bounce': 'scale-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'rotate-in': 'rotate-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
      },
    },
  },
  plugins: [],
}; 