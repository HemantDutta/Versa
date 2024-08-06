/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        versa: {
          lightBg: "#ffffff",
          lightBorder: "#ecedee",
          one: "#F875AA",
          two: "#FFDFDF",
          three: "#FFF6F6",
          four: "#AEDEFC"
        }
      },
      screens: {
        xxs: "280px",
        editorDownload: "801px"
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      }
    },
  },
  plugins: [],
}