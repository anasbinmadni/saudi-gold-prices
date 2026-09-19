/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF7EE',
          500: '#D4AF37',
          600: '#AA820A',
          700: '#856404',
          900: '#4A3B00'
        }
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif']
      }
    }
  },
  plugins: []
};