/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "box-shadow": "rgba(136, 165, 191, 0.48) 3px 1px 8px 0px, rgba(136, 165, 191, 0.8) -3px -1px 8px 0px",
        "box-shadow-inside": "inset rgb(204, 219, 232, 0.3) 1px 1px 5px 1px",
        "box-hover-inside": "rgb(0, 0, 0, 0.2) 1px 1px 5px 2px"
      }
    },
  },
  plugins: [],
};
