/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        washi: '#f8f6f0',
        sumi: '#333333',
        shu: '#d84030',
      },
      fontFamily: {
        heading: ['"Noto Serif JP"', 'serif'],
        body: ['"Noto Sans JP"', '"Kosugi Maru"', 'sans-serif'],
      },
      backgroundImage: {
        wood: "url('/wood-texture.jpg')", // place your wood texture in public folder
      },
    },
  },
  plugins: [],
};
