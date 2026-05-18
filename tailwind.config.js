/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0b6b2a',
        leaf: '#23873a',
        limeSoft: '#b8cf29',
        ocean: '#123d63',
        mist: '#f3f6f1',
        graphite: '#263328',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 18px 45px rgba(12, 63, 35, 0.18)',
        card: '0 18px 50px rgba(18, 61, 99, 0.12)',
      },
      backgroundImage: {
        'leaf-gradient': 'linear-gradient(135deg, #0b6b2a 0%, #23873a 50%, #b8cf29 100%)',
      },
    },
  },
  plugins: [],
};
