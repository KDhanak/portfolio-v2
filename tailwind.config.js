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
          dark: '#686D76',
          darker: '#373A40'
        },
        tertiary: '#088F8F'
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
  plugins: [],
}

