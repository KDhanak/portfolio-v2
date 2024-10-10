/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#BEBEBE',
        secondary:  '#DC5F00',
        accent: {
          light:'#EEEEEE',
          light_2: '#7e8396',
          dark: '#686D76',
          darker: '#373A40',
          tertiary_light: '#64dcdc'
        },
        tertiary: '#088F8F',
      },
      margin: {
        '5p':'5%',
        '10p':'10%',
        '15p':'15%',
        '20p':'20%',
        '25p':'25%',
        '30p':'30%',
      },
      fontFamily:
      {
        'sans': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

