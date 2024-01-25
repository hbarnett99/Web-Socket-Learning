import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'effect-orange': '#ec7133',
        'effect-black': '#000000',
        'effect-blue': '#0083c1',
        'effect-pink': '#dc4884',
        'effect-yellow': '#fce24d',
        'effect-red': '#da0304',

        'card-red': '#b8051a',
        'card-green': '#198b63',
        'card-blue': '#0270b7',
        'card-purple': '#8c1b7d',
        'card-black': '#1c1c1c',
        'card-yellow': '#ffd000',

        'card-red-dark-text': '#fa8896',
        'card-green-dark-text': '#42d8a4',
        'card-blue-dark-text': '#c1d7e6',
        'card-purple-dark-text': '#ddc6da',
        'card-black-dark-text': '#c6c6c6',
        'card-yellow-dark-text': '#e9e28d',
        'card-yellow-light-text': '#9f8200',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          extend: 'light',
          colors: {
            text: '#1e252c',
            background: '#fdfeff',
            primary: {
              100: '#FEE4E5',
              200: '#FCCCD4',
              300: '#FDC9D2',
              400: '#F396B8',
              500: '#EC74AC',
              600: '#CA5497',
              700: '#A93A84',
              800: '#882571',
              900: '#711665',
              DEFAULT: '#EC74AC',
            },
            secondary: {
              100: '#F0E5FC',
              200: '#E0CCFA',
              300: '#CAB0F2',
              400: '#B397E6',
              500: '#9474D6',
              600: '#7154B8',
              700: '#533A9A',
              800: '#38257C',
              900: '#251666',
              DEFAULT: '#9474d6',
            },
            content1: '#fcfcfc',
            focus: '#fdeaf3fd',
          },
        },
        dark: {
          extend: 'dark',
          colors: {
            text: '#fdfeff',
            background: '#1e252c',
            primary: {
              100: '#FEE4E5',
              200: '#FCCCD4',
              300: '#FDC9D2',
              400: '#F396B8',
              500: '#EC74AC',
              600: '#CA5497',
              700: '#A93A84',
              800: '#882571',
              900: '#711665',
              DEFAULT: '#EC74AC',
            },
            secondary: {
              100: '#F0E5FC',
              200: '#E0CCFA',
              300: '#CAB0F2',
              400: '#B397E6',
              500: '#9474D6',
              600: '#7154B8',
              700: '#533A9A',
              800: '#38257C',
              900: '#251666',
              DEFAULT: '#9474d6',
            },
            content1: '#29353fe7',
            // content1: '#7fb9da1a',
            focus: '#EC74AC',
          },
        },
      },
    }),
  ],
};

export default {};
