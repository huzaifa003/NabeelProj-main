module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      colors: {
        blue: {
          'darkmd': '#040E2E',
          'lightmd': '#152B7A',
          'darkmdbg': '#12276C',
          'lightmdbg': '#203C91'
        },
        green: {
          '200': '#63CD7E'
        },
        gray: {
          '50': "#9FA8C4"
        }

      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },
        'fade-in-out': {
          '0%': {

            opacity: '0',
          },
          '100%': {

            transform: '1',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'fade': 'fade-in-out 1s ease-in-out infinite alternate',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    plugins: [
       require('tailwind-scrollbar-hide')
    ],
  }
}