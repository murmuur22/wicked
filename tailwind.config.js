/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      backgroundImage: {
        'grid': 'radial-gradient(rgb(68 64 60) 1px, transparent 0)'
      },

      fontFamily: {
        'sans': ['sometype-mono', 'sans-serif'],
        'light': ['helvetica-neue-light', 'sans-serif'],
        'ultralight': ['helvetica-neue-ultralight', 'sans-serif'],
        'body': ['bahnschrift', 'sans-serif'],
        'display': ['vcr-osd-mono', 'sans-serif'],
        'terminal': ['terminal-grotesque', 'sans-serif'],
      },

      animation: {
      },
      keyframes: {
        
        welcomeTitle: {
          '0%': {
            'border-radius': '0px',
          },
          '90%': { 
            'border-width': '2px',
            'border-radius': '0px',
            'background-color': 'rgb(250 250 249)'
          },
          '100%': { 
            'border-width': '2px',
            'border-radius': '0px',
            'background-color': 'rgb(12 10 9)'
          }
        },
        welcomeBackground: {
          '0%': { 
            'opacity': '0'
          },
          '90%': { 
            'opacity': '1'
          },
          '100%': { 
            'opacity': '1'
          },
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

