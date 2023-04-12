/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#518BF8',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#69E7B7',
      yellow: '#FFC62A',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xxs: '0.6rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.1rem',
      xl: '1.2rem',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
