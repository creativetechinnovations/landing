const tailwindColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './styles/**/*.scss'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '600px',
      'max-md': { max: '767px' },
      md: '768px',
      'max-lg': { max: '989px' },
      lg: '990px',
      'max-xl': { max: '1199px' },
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#393939',
          dark: '#393939',
          ...tailwindColors.blue,
        },
        red: {
          DEFAULT: '#D41317',
        },
        pink: {
          DEFAULT: '#ffd7ef',
          ...tailwindColors.pink,
        },
        yellow: {
          DEFAULT: '#FFBF23',
          light: '#f47e34',
          ...tailwindColors.yellow,
        },
        green: {
          white: '#c4fb7c',
          DEFAULT: '#226742',
          light: '#37a968',
          dark: '#00522d',
          ...tailwindColors.green,
        },
        gray: {
          DEFAULT: '#f6f5f5',
          dark: '#b3b3b3',
          light: '#f2f2f2',
          ...tailwindColors.gray,
        },
        black: {
          DEFAULT: '#000000',
          dark: '#393939',
        },
      },
      fontFamily: {
        default: ['Greycliff CF'],
        demi: ['Greycliff CF Demi'],
      },
      zIndex: {
        '-1': -1,
      },
      boxShadow: {
        'yellow-md': '0 0 0 0.25rem #8d101740',
        'green-md': '0 0 0 0.25rem #00522c40',
      },
    },
  },
  plugins: [],
};
