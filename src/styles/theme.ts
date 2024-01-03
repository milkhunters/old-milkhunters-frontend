import { extendTheme } from '@mui/joy/styles';

export default extendTheme({
  cssVarPrefix: 'main',
  colorSchemes: {
    light: {
      palette: {
        background: {},
        primary: {
          50: '#eaeafd',
          100: '#cbc9f8',
          200: '#a7a7f4',
          300: '#8283f0',
          400: '#6765ec',
          500: '#4e46e5',
          600: '#493dd9',
          700: '#4031cd',
          800: '#3923c1',
          900: '#2b00b0',
        },
        text: {
          primary: '#4e46e5',
          secondary: '#000e5c',
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#1c1c1d',
        },
        primary: {
          50: '#eaeafd',
          100: '#cbc9f8',
          200: '#a7a7f4',
          300: '#8283f0',
          400: '#6765ec',
          500: '#4e46e5',
          600: '#493dd9',
          700: '#4031cd',
          800: '#3923c1',
          900: '#2b00b0',
        },
      },
    },
  },
});
