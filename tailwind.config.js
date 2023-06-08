/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     colors: {
      primary: '#120F1C',
      button_bg: '#C8F513',
      input_bg: '#2C273F',
      input_color: '#ABA2C7',
      red: '#f05050'
      // ...#
    }
  },
  plugins: [],
}
