/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#0c0f17',
        'bg-deep': '#070a11',
        card: '#161a26',
        'card-hi': '#1c2133',
        border: 'rgba(255,255,255,0.07)',
        'border-hi': 'rgba(255,255,255,0.14)',
        text: '#ffffff',
        'text-dim': '#8b94a8',
        'text-mute': '#5b6478',
        yes: '#22c55e',
        no: '#ef4444',
        accent: '#3b82f6',
        gold: '#f5b500',
        pink: '#ff5277',
      },
      fontFamily: {
        sans: ['Geist_400Regular'],
        medium: ['Geist_500Medium'],
        semibold: ['Geist_600SemiBold'],
        bold: ['Geist_700Bold'],
        mono: ['GeistMono_400Regular'],
        'mono-semibold': ['GeistMono_600SemiBold'],
      },
    },
  },
  plugins: [],
};
