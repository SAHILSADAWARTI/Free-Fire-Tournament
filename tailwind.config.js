/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          bg: '#0a0a0a',
          surface: '#121212',
          card: '#1a1a1a',
          neonOrange: '#ff5500',
          neonRed: '#ff003c',
          gold: '#ffd700',
          silver: '#c0c0c0',
          bronze: '#cd7f32',
        }
      },
      backgroundImage: {
        'glow-gradient': 'linear-gradient(to right, #ff5500, #ff003c)',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 85, 0, 0.4), 0 0 20px rgba(255, 0, 60, 0.2)',
        'neon-hover': '0 0 15px rgba(255, 85, 0, 0.6), 0 0 30px rgba(255, 0, 60, 0.4)',
      }
    },
  },
  plugins: [],
};
