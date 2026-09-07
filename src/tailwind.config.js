/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Africoff brand palette (from your PDF)
        'africoff-green': '#1B5E20',
        'africoff-light': '#4CAF50',
        'africoff-cream': '#F5F5DC',
        'africoff-brown': '#6D4C41',
        'africoff-gold': '#C19A6B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}