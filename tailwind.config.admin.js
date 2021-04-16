module.exports = {
  purge: ['./resources/admin/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Nunito', 'Arial', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        primary: '#138537',
        light: '#dceae0',
        light2: '#a8baad',
        muted: '#717b74',
        dark: '#4c534d',
        black: '#29352c',
      },
      borderRadius: {
        xxl: '8rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
