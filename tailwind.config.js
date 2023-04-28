module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitch: {
          primary: '#9146ff',
          secondary: '#262626',
          tertiary: '#f4f4f4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1028px',
    // => @media (min-width: 1028px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1600px',
    // => @media (min-width: 1600px) { ... }

    '3xl': '1800px',
    // => @media (min-width: 1800px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
