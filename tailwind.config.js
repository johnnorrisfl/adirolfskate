module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
