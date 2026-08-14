/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        space: {
          900: '#05060f',
          800: '#080a1a',
          700: '#0c1024',
          600: '#111634',
        },
        nebula: {
          purple: '#7c3aed',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          pink: '#ec4899',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 58, 237, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.4)',
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
        'drift': 'drift 30s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'gradient-x': 'gradientX 12s ease infinite',
        'spin-slow': 'spin 40s linear infinite',
        'dash': 'dash 3s linear infinite',
        'star-drift': 'starDrift 120s linear infinite',
        'star-drift-rev': 'starDriftRev 160s linear infinite',
        'nebula-move': 'nebulaMove 45s ease-in-out infinite',
        'orbit': 'orbit 50s linear infinite',
        'orbit-rev': 'orbitRev 65s linear infinite',
        'comet': 'comet 14s ease-in infinite',
        'comet-2': 'comet 18s ease-in infinite',
        'planet-spin': 'spin 60s linear infinite',
        'planet-glow': 'planetGlow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dash: {
          to: { strokeDashoffset: '-20' },
        },
        starDrift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-200px) translateX(40px)' },
        },
        starDriftRev: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(200px) translateX(-40px)' },
        },
        nebulaMove: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.95)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' },
        },
        orbitRev: {
          '0%': { transform: 'rotate(0deg) translateX(240px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(240px) rotate(360deg)' },
        },
        comet: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(-25deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '40%': { opacity: '1' },
          '60%': { opacity: '0' },
          '100%': { transform: 'translateX(120vw) translateY(60vh) rotate(-25deg)', opacity: '0' },
        },
        planetGlow: {
          '0%, 100%': { boxShadow: '0 0 30px -8px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 50px -6px rgba(124, 58, 237, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
