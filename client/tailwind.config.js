/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
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