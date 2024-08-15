/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Update this path according to your project structure
  ],
  darkMode: 'class', // Enable dark mode based on a class
  theme: {
    extend: {
      colors: {
        primary: '#689dd2',        // Updated primary color
        secondary: '#8ec4e5',      // Updated secondary color
        dark: '#181623',           // Updated dark mode background
        light: '#ffffff',          // Updated light mode background
        'dark-blue': '#405b8b',    // New dark blue
        'light-blue': '#8ec4e5',   // New light blue
        'medium-blue': '#689dd2',  // New medium blue
        'dark-gray': '#181623',    // New dark gray
        'light-gray': '#ffffff',   // New light gray
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // Custom font for headings
        sans: ['Roboto', 'sans-serif'],      // Custom font for body text
      },
      fontSize: {
        '6xl': '4rem', // Custom large font size
        '5xl': '3rem', // Custom large font size
        '2xl': '1.5rem',
        'lg': '1.125rem',
        'base': '1rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        300: '300ms',
        500: '500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional plugin for styling forms
    require('@tailwindcss/typography'), // Optional plugin for better typography
  ],
};
