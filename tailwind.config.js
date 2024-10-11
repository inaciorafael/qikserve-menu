/** @type {import('tailwindcss').Config} */
import theme from './src/theme'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'nav-background': 'var(--nav-background)',
        ...theme.colors
      },
    },
  },
  plugins: [],
};
