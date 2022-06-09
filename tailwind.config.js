const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "adirolf-orange": {
          DEFAULT: "#FEB139",
        },
        "adirolf-blue": {
          DEFAULT: "#143F6B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
