/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['helvetica-neue', 'sans-serif'],
        'light': ['helvetica-neue-light', 'sans-serif'],
        'ultralight': ['helvetica-neue-ultralight', 'sans-serif'],
        'body': ['bahnschrift', 'sans-serif'],
        'display': ['vcr-osd-mono', 'sans-serif'],
        'terminal': ['terminal-grotesque', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 0.75s step-start infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
