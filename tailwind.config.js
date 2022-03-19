module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Outfit", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        bg: "hsl(212, 45%, 89%)",
        "blue-gray": "hsl(220, 15%, 55%)",
        "blue-dark": "hsl(218, 44%, 22%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },
    },
  },
  plugins: [],
};
