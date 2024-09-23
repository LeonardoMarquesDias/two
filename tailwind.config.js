/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        '-white-': '#fff',
        'gray': {
          '100': '#e1e1e6',
          '300': '#c4c4cc',
          '400': '#8d8d99',
          '600': '#323238',
          '700': '#29292e',
          '800': '#202024',
          '900': '#121214',
          '950': '#09090A',
        },
        gold: {
          '200': '#fbcfe8',
          '300': '#f0abfc',
          '400': '#e879f9',
          '500': '#f472b6',
          '800': '#ec4899',
        },
        button: {
          '100': '#f472b6',
          '200': '#ec4899',
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
